import React, { useState, useEffect, createContext } from 'react';
import { NativeModules, Platform, BackHandler, ToastAndroid, Linking } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import messaging from '@react-native-firebase/messaging';
import TabScreen from './Screens/tabScreen'; // Ensure this path is correct
import { Provider } from 'react-redux';
import store from './redux/store'; // Path to your store.js

export const NotificationContext = createContext();

// Accessing PiP native module
const { PipMode } = NativeModules;

// Function to trigger PiP mode
const enablePipMode = () => {
  if (Platform.OS === 'android' && PipMode) {
    PipMode.enterPipMode();
  } else {
    console.log('PipMode is not available!');
  }
};

export default function App() {
  const [notifications, setNotifications] = useState([]);

  // Handle Android Back Button to trigger PiP mode
  useEffect(() => {
    const handleBackPress = () => {
      if (Platform.OS === 'android' && PipMode) {
        enablePipMode(); // Trigger PiP mode when back button is pressed
        ToastAndroid.show('Entering PiP Mode', ToastAndroid.SHORT);
        return true; // Prevent default back button behavior
      }
      return false; // Allow default behavior for other platforms
    };

    BackHandler.addEventListener('hardwareBackPress', handleBackPress);

    return () => BackHandler.removeEventListener('hardwareBackPress', handleBackPress);
  }, []);

  // Handle incoming deep links (including shortcuts)
  useEffect(() => {
    console.log("Deep link URL:");
    const handleDeepLink = (event) => {
      const { url } = event;
      console.log("Deep link URL:", url);

      // Example of handling shortcut types from deep link
      if (url.includes("shortcut_type=home")) {
        console.log("Navigate to Home");
        
        // Navigate to the Home screen or perform any action
      } else if (url.includes("shortcut_type=cart")) {
        console.log("Navigate to Cart");
        // Navigate to the Cart screen or perform any action
      }
    };

    // Add event listener for deep links
    Linking.addEventListener('url', handleDeepLink);

    // Handle initial deep link if app was opened via one
    Linking.getInitialURL().then((url) => {
      if (url) {
        handleDeepLink({ url });
      }
    });

    // Clean up listener when the component unmounts
    return () => {
      Linking.removeEventListener('url', handleDeepLink);
    };
  }, []);

  // Request permission and handle messaging logic
  useEffect(() => {
    const requestPermissions = async () => {
      const authStatus = await messaging().requestPermission();
      const enabled =
        authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
        authStatus === messaging.AuthorizationStatus.PROVISIONAL;

      if (enabled) {
        console.log('Authorization status:', authStatus);
        getFCMToken();
      }
    };

    const getFCMToken = async () => {
      const token = await messaging().getToken();
      console.log('FCM Token:', token);
    };

    const notificationListener = messaging().onMessage(async remoteMessage => {
      console.log('FCM Notification received in foreground:', remoteMessage);

      // Process incoming notification data
      const messageData =
        remoteMessage.notification?.body ||
        remoteMessage.data?.message ||
        'No message content';

      setNotifications(prev => [
        ...prev,
        {
          id: remoteMessage.messageId,
          title: remoteMessage.notification?.title,
          date: new Date().toLocaleString(),
          text: messageData, // Use notification body or data message
          image: remoteMessage.notification?.android?.imageUrl || null,
        },
      ]);
    });

    requestPermissions();

    return () => {
      notificationListener();
    };
  }, []);

  return (
    <Provider store={store}>
      <NotificationContext.Provider value={{ notifications, setNotifications }}>
        <NavigationContainer>
          <TabScreen />
        </NavigationContainer>
      </NotificationContext.Provider>
    </Provider>
  );
}

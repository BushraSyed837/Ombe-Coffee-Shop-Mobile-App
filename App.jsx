import React, {useState, useRef, useEffect, createContext} from 'react';
import {
  NativeModules,
  Platform,
  BackHandler,
  ToastAndroid,
  Linking,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import messaging from '@react-native-firebase/messaging';
import TabScreen from './Screens/tabScreen'; // Ensure this path is correct
import {Provider} from 'react-redux';
import store from './redux/store'; // Path to your store.js
import Shortcuts from '@rn-bridge/react-native-shortcuts';

export const NotificationContext = createContext();

// Accessing PiP native module
const {PipMode} = NativeModules;

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
  const navigationRef = useRef();

  const createAppShortcuts = async () => {
    try {
      const shortcuts = [
        {
          id: 'shortcut1',
          title: 'Open Home',
          iconName: 'ic_home',
        },
        {
          id: 'shortcut2',
          title: 'Open Cart',
          iconName: 'ic_cart',
        },
      ];

      for (const shortcut of shortcuts) {
        const response = await Shortcuts.addShortcut(shortcut);
        console.log('Shortcut created:', response);
      }

      console.log('Shortcuts created successfully!');
    } catch (error) {
      console.log('Failed to create shortcuts', error.message);
      console.error('Shortcut creation error:', error);
    }
  };

  const handleShortcutCallback = id => {
    console.log('Shortcut Id:', id);
    if (id === 'shortcut1') {
      navigationRef.current?.navigate('Home');
    } else if (id === 'shortcut2') {
      navigationRef.current?.navigate('Cart');
    } else {
      Alert.alert('Unhandled Shortcut Id', id);
    }
  };

  const checkInitialShortcut = async () => {
    try {
      const id = await Shortcuts.getInitialShortcutId();
      if (id) {
        handleShortcutCallback(id);
      }
    } catch (error) {
      console.error('Error checking initial shortcut:', error);
    }
  };

  useEffect(() => {
    createAppShortcuts();
    checkInitialShortcut();

    // Listen for shortcut usage events
    const shortcutListener = Shortcuts.addOnShortcutUsedListener(
      handleShortcutCallback,
    );

    // Cleanup listener on unmount
    return () => {
      Shortcuts.removeOnShortcutUsedListener(shortcutListener);
    };
  }, []);

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

    return () =>
      BackHandler.removeEventListener('hardwareBackPress', handleBackPress);
  }, []);

  // Handle incoming deep links (including shortcuts)
  useEffect(() => {
    const handleDeepLink = event => {
      const {url} = event;
      console.log('Deep link URL:', url);

      if (url) {
        // Check for the shortcut type in the URL
        if (url.includes('shortcut_type=home')) {
          console.log('Navigate to Home');
          // Add logic to navigate to the Home screen
        } else if (url.includes('shortcut_type=cart')) {
          console.log('Navigate to Cart');
          // Add logic to navigate to the Cart screen
        } else {
          console.log('Unknown deep link type.');
        }
      }
    };

    // Add event listener for deep link URL events
    const deepLinkListener = Linking.addEventListener('url', handleDeepLink);

    // Check if the app was opened via a deep link
    Linking.getInitialURL().then(url => {
      if (url) {
        handleDeepLink({url}); // Handle the deep link if the app was opened via one
      }
    });

    // Clean up the event listener on component unmount
    return () => {
      deepLinkListener.remove();
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
      <NotificationContext.Provider value={{notifications, setNotifications}}>
        <NavigationContainer ref={navigationRef}>
          <TabScreen />
        </NavigationContainer>
      </NotificationContext.Provider>
    </Provider>
  );
}

import React, { useState, useEffect, createContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import messaging from '@react-native-firebase/messaging';
import TabScreen from './Screens/tabScreen';

export const NotificationContext = createContext();

export default function App() {

  const [notifications, setNotifications] = useState([]);

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
    });

    requestPermissions();

    return () => {
      notificationListener();
    };
  }, []);

  useEffect(() => {
    const requestPermission = async () => {
      const authStatus = await messaging().requestPermission();
      const enabled =
        authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
        authStatus === messaging.AuthorizationStatus.PROVISIONAL;

      if (enabled) {
        console.log('Authorization status:', authStatus);
      }
    };

    const listenForMessages = messaging().onMessage(async remoteMessage => {
      const messageData = remoteMessage.notification?.body || remoteMessage.data?.message || 'No message content';

      setNotifications(prev => [
        ...prev,
        {
          id: remoteMessage.messageId,
          title: remoteMessage.notification?.title,
          date: new Date().toLocaleString(),
          text: messageData,  // Use notification body or data message
          image: remoteMessage.notification?.android?.imageUrl || null,
        },
      ]);
    });

    requestPermission();

    return listenForMessages;
  }, []);

  return (
    <NotificationContext.Provider value={{ notifications, setNotifications }}>
      <NavigationContainer>
        <TabScreen />
      </NavigationContainer>
    </NotificationContext.Provider>
  );
}

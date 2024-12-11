import { DeviceEventEmitter } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';

const ShortcutListener = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const subscription = DeviceEventEmitter.addListener('NavigateToScreen', (screen) => {
      if (screen === 'Home') {
        navigation.navigate('HomeScreen');
      } else if (screen === 'Cart') {
        navigation.navigate('CartScreen');
      }
    });

    return () => subscription.remove();
  }, [navigation]);

  return null;
};

export default ShortcutListener;

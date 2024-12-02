import React, {useRef} from 'react';
import {NavigationContainer} from '@react-navigation/native';

import TabScreen from './Screens/tabScreen';

export default function App() {
  return (
    <NavigationContainer>
      <TabScreen />
    </NavigationContainer>
  );
}

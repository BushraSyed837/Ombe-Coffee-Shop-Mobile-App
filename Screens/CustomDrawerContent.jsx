import React, { useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Animated,
  Dimensions,
  Easing,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'; // For drawer icons

const { width, height } = Dimensions.get('window');

export default function CustomDrawerContent() {
   const animationValue = useRef(new Animated.Value(0)).current;
  
    const handleDrawerOpen = () => {
      Animated.timing(animationValue, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }).start();
    };
  
    const handleDrawerClose = () => {
      Animated.timing(animationValue, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    };
  
    const screenStyle = {
      transform: [
        {
          scale: animationValue.interpolate({
            inputRange: [0, 1],
            outputRange: [1, 0.85],
          }),
        },
        {
          translateX: animationValue.interpolate({
            inputRange: [0, 1],
            outputRange: [0, width * 0.6],
          }),
        },
        {
          rotateZ: animationValue.interpolate({
            inputRange: [0, 1],
            outputRange: ['0deg', '-8deg'],
          }),
        },
      ],
    };
  
    return (
      <View style={styles.container}>
        {/* Drawer Content */}
        <View style={styles.drawerContainer}>
          <DrawerContent closeDrawer={handleDrawerClose} />
        </View>
  
        {/* Main Screen */}
        <Animated.View style={[styles.mainScreen, screenStyle]}>
          <HomeScreen openDrawer={handleDrawerOpen} />
        </Animated.View>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'row',
      backgroundColor: '#f0f0f0',
    },
    drawerContainer: {
      flex: 1,
      backgroundColor: '#fff',
      paddingHorizontal: 10,
      paddingVertical: 20,
    },
    mainScreen: {
      flex: 1,
      backgroundColor: '#fff',
      position: 'absolute',
      width: '100%',
      height: '100%',
      borderRadius: 20,
      overflow: 'hidden',
    },
  });

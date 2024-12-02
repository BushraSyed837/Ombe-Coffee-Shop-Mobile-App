// Drawer.js
import React, { useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Animated, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';

const { width } = Dimensions.get('window');

const Drawer = ({ handleDrawerClose }) => {
  const animationValue = useRef(new Animated.Value(0)).current;
  const navigation = useNavigation();

  const handleDrawerOpen = () => {
    Animated.timing(animationValue, {
      toValue: 1,
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
    <View style={styles.drawerContainer}>
      <View style={styles.header}>
        <Text style={styles.menuText}>Main Menu</Text>
        <Image source={require('./assets/logo.png')} style={styles.logo} />
        <TouchableOpacity onPress={handleDrawerClose} style={styles.closeButton}>
          <Icon name="close" size={24} color="#34A853" />
        </TouchableOpacity>
      </View>

      {/* Menu Items */}
      {menuItems.map((item, index) => (
        <TouchableOpacity
          key={index}
          style={styles.menuItem}
          onPress={() => {
            navigation.navigate('Home', { screen: item.name });
            handleDrawerClose();
          }}
        >
          <Icon name={item.icon} size={24} color="#34A853" />
          <Text style={styles.menuLabel}>{item.name}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const menuItems = [
  { name: 'Home', icon: 'home' },
  { name: 'My Order', icon: 'shopping-bag' },
  { name: 'Transactions', icon: 'receipt' },
  { name: 'Pages', icon: 'pages' },
  { name: 'Components', icon: 'pages' },
  { name: 'Products', icon: 'widgets' },
  { name: 'Chat List', icon: 'chat' },
  { name: 'Profile', icon: 'person' },
  { name: 'Logout', icon: 'logout' },
];

const styles = StyleSheet.create({
  drawerContainer: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  menuText: {
    fontSize: 18,
    fontWeight: 'bold',
    flex: 1,
    marginTop: 10,
    textAlign: 'left',
  },
  logo: {
    width: 80,
    height: 40,
    resizeMode: 'contain',
  },
  closeButton: {
    alignItems: 'flex-end',
    padding: 5,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 12,
  },
  menuLabel: {
    marginLeft: 16,
    fontSize: 16,
  },
});

export default Drawer;

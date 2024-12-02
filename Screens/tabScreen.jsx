import React, {useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Animated,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import WishlistScreen from './favorite';
import Cart from './cart';
import Profile from './Profile/profile';
import StackNavigationScreen from './StackNavigation';
import {useNavigation} from '@react-navigation/native';
const {width} = Dimensions.get('window');

const Tab = createBottomTabNavigator();

function ScreenWithDrawer() {
  const animationValue = useRef(new Animated.Value(0)).current;
  const navigation = useNavigation();
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
      <View style={styles.drawerContainer}>
        <View style={styles.header}>
          <Text style={styles.menuText}>Main Menu</Text>
          <Image source={require('../assets/logo.png')} style={styles.logo} />
          <TouchableOpacity
            onPress={handleDrawerClose}
            style={styles.closeButton}>
            <Icon name="close" size={24} color="#34A853" />
          </TouchableOpacity>
        </View>

        {/* Menu Items */}
        {menuItems.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={styles.menuItem}
            onPress={() => {
              navigation.navigate('Home', {screen: item.name}); // Navigate to nested screens
              handleDrawerClose();
              // Optionally close the drawer after navigation
            }}>
            <Icon name={item.icon} size={24} color="#34A853" />
            <Text style={styles.menuLabel}>{item.name}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <Animated.View style={[styles.mainScreen, screenStyle]}>
        <StackNavigationScreen handleDrawerOpen={handleDrawerOpen} />
      </Animated.View>
    </View>
  );
}

const menuItems = [
  {name: 'Home', icon: 'home'},
  {name: 'My Order', icon: 'shopping-bag'},
  {name: 'Transactions', icon: 'receipt'},
  {name: 'Pages', icon: 'pages'},
  {name: 'Components', icon: 'pages'},
  {name: 'Products', icon: 'widgets'},
  {name: 'Chat List', icon: 'chat'},
  {name: 'Profile', icon: 'person'},
  {name: 'Logout', icon: 'logout'},
];

// Nested Bottom Tab Navigation inside the HomeScreen
export default function TabScreen() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = 'home-outline'; // Use outlined icon
          } else if (route.name === 'Favourite') {
            iconName = 'heart-outline'; // Use outlined icon
          } else if (route.name === 'Cart') {
            iconName = 'cart-outline'; // Use outlined icon
          } else if (route.name === 'Profile') {
            iconName = 'person-outline'; // Use outlined icon
          }

          return (
            <View
              style={[
                styles.iconContainer,
                {
                  backgroundColor: focused ? '#04764e' : 'transparent',
                  transform: focused ? [{scale: 1.1}] : [{scale: 1}],
                },
              ]}>
              <Ionicons
                name={iconName}
                size={24}
                color={focused ? '#fff' : color}
              />
            </View>
          );
        },
        tabBarActiveTintColor: '#04764e', // Green when active
        tabBarInactiveTintColor: 'gray', // Gray when inactive
        tabBarStyle: {
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
          backgroundColor: '#fff',
          paddingBottom: 7,
          height: 60,
        },
        tabBarLabel: () => null, // Hide tab labels
      })}>
      <Tab.Screen
        name="Home"
        component={ScreenWithDrawer}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Favourite"
        component={WishlistScreen}
        options={({navigation}) => ({
          headerTitle: () => (
            <View style={styles.headerFav}>
              <Text style={styles.headerTitleFav}>Wishlist</Text>
              <View
                style={{
                  flexDirection: 'row',
                  width: '100%',
                  justifyContent: 'space-between',
                }}>
                <View style={{flexDirection: 'row'}}>
                  <Text style={styles.totalFavBold}>6</Text>
                  <Text style={styles.totalFav}> Items • Total: $213</Text>
                </View>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('Home', {screen: 'search'});
                  }}>
                  <Icon
                    name="search"
                    size={24}
                    color="#000"
                    style={styles.searchIcon}
                  />
                </TouchableOpacity>
              </View>
            </View>
          ),
        })}
      />
      <Tab.Screen
        name="Cart"
        component={Cart}
        options={({navigation}) => ({
          headerTitle: () => (
            <View
              style={{
                marginTop: 15,
                flexDirection: 'row',
                alignItems: 'center',
                width: '100%',
                justifyContent: 'space-between',
              }}>
              <View>
                <Text style={styles.titleCart}>My Cart</Text>
                <Text style={styles.subtitleCart}>
                  8 Items • Deliver To: London
                </Text>
              </View>

              <TouchableOpacity
                style={styles.changeAddressButton}
                onPress={() => {
                  navigation.navigate('Home', {screen: 'address'});
                }}>
                <Ionicons
                  name="location-outline"
                  size={16}
                  color="#1c8716"
                  style={styles.locationIcon}
                />
                <Text style={styles.changeAddressText}>Change</Text>
              </TouchableOpacity>
            </View>
          ),
        })}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={({navigation}) => ({
          headerTitle: () => (
            <View style={styles.profileHeader}>
              <TouchableOpacity
                onPress={() => {
                  navigation.goBack();
                }}>
                <Icon name="arrow-back" size={24} color="#000" />
              </TouchableOpacity>
              <Text style={styles.profileHeaderText}>Profile</Text>
              <TouchableOpacity>
                <Icon
                  name="edit"
                  size={24}
                  color="#000"
                  onPress={() => {
                    navigation.navigate('Home', {screen: 'editProfile'});
                  }}
                />
              </TouchableOpacity>
            </View>
          ),
        })}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#f0f0f0',
  },
  header: {
    marginBottom: 5,
    alignItems: 'center',
  },
  profileHeader: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
  },
  profileHeaderText: {fontSize: 20, fontWeight: 'bold', color: '#333'},
  profileSection: {
    alignItems: 'center',
    marginBottom: 20,
  },
  greeting: {
    fontSize: 14,
    fontWeight: '400',
    fontFamily: 'Poppins-Regular', // Apply Poppins font here
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    color: '#000',
    fontFamily: 'Poppins-Regular', // Apply Poppins font here
  },
  headerFav: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  changeAddressButton: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#1c8716', // Green border color
    borderRadius: 20,
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginLeft: 10,
  },
  locationIcon: {
    marginRight: 5,
  },
  changeAddressText: {
    fontSize: 14,
    color: '#1c8716', // Green text color
    fontWeight: '600',
  },
  titleCart: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#000',
    fontFamily: 'Poppins-Bold', // Apply Bold version of Poppins here
  },
  subtitleCart: {
    fontSize: 16,
    color: '#000',
    marginBottom: 20,
    fontFamily: 'Poppins-Regular', // Apply Poppins font here
  },
  headerTitleFav: {
    fontSize: 18,
    color: '#000',
    fontWeight: 'bold',
    fontFamily: 'Poppins-Regular', // Apply Poppins font here
  },
  totalFavBold: {
    fontSize: 14,
    color: '#000',
    fontWeight: 'bold',
    fontFamily: 'Poppins-Bold', // Apply Bold version of Poppins here
  },
  totalFav: {
    fontSize: 14,
    color: '#000',
    fontFamily: 'Poppins-Regular', // Apply Poppins font here
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 5,
    zIndex: 1,
    position: 'relative',
  },
  searchIcon: {
    marginLeft: 10, // Space between price and search icon
  },
  burgerlogo: {
    width: 30,
    height: 30,
    backgroundColor: 'transparent',
    marginTop: 10,
    marginRight: 10,
  },
  cartlogo: {
    width: 40,
    height: 40,
    backgroundColor: 'transparent',
  },
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
    flex: 1,
    alignItems: 'center',
  },
  closeButton: {
    flex: 1,
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
  mainScreen: {
    flex: 1,
    backgroundColor: '#fff',
    position: 'absolute',
    width: '100%',
    height: '100%',
    borderRadius: 20,
    overflow: 'hidden',
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 5,
    zIndex: 1,
    position: 'relative',
  },
});
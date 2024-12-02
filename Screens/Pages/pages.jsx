import React from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import {useNavigation} from '@react-navigation/native';

const componentsData = [
  {
    components: [
      {name: 'Onboarding', icon: 'bold', screen: 'onboarding'},
      {name: 'Sign In', icon: 'bold', screen: 'signIn'},
      {name: 'Sign Up', icon: 'bold', screen: 'signUp'},
      {name: 'Forgot Password', icon: 'bold', screen: 'forgotPassword'},
      {name: 'Enter Code OPT', icon: 'bold', screen: 'OPT'},
      {name: 'Enter New Password', icon: 'bold', screen: 'newPassword'},
      {name: 'Home', icon: 'bold', screen: 'Home'},
      {name: 'Products', icon: 'bold', screen: 'Products'},
      {name: 'Product Detail', icon: 'bold', screen: 'details'},
      {name: 'Search', icon: 'bold', screen: 'search'},
      {name: 'Cart', icon: 'bold', screen: 'Cart'},
      {name: 'Add Card', icon: 'bold', screen: 'creditcardform'},
      {name: 'Add Delivery Address', icon: 'bold', screen: 'address'},
      {name: 'Chat List', icon: 'bold', screen: 'Chat List'},
      {name: 'Checkout', icon: 'bold', screen: 'checkout'},
      {name: 'Delivery Address', icon: 'bold', screen: 'deliveryAddressScreen'},
      {name: 'Profile', icon: 'bold', screen: 'Profile'},
      {name: 'Edit Profile', icon: 'bold', screen: 'editProfile'},
      {name: 'FAQ', icon: 'bold', screen: 'faq'},
      {name: 'My Order', icon: 'bold', screen: 'My Order'},
      {name: 'Notification', icon: 'bold', screen: 'notification'},
      {name: 'Wishlist', icon: 'bold', screen: 'favourite'},
      {name: 'Review', icon: 'bold', screen: 'review'},
      {name: 'Reward', icon: 'bold', screen: 'reward'},
      {name: 'Track Order', icon: 'bold', screen: 'trackOrder'},
      {name: 'Payment', icon: 'bold', screen: 'Transactions'},
      {name: 'Error-404', icon: 'bold', screen: 'error'},
    ],
  },
];

const PagesScreen = () => {
  const navigation = useNavigation();

  const renderComponent = ({item}) => (
    <TouchableOpacity
      style={styles.componentItem}
      onPress={() => navigation.navigate(item.screen)}>
      <View style={styles.iconContainer}>
        <Feather
          name={item.icon}
          size={24}
          color="#FFFFFF"
          style={{fontWeight: 'bold'}}
        />
      </View>
      <Text style={styles.componentName}>{item.name}</Text>
      <Icon name="chevron-right" size={20} color="#000" />
    </TouchableOpacity>
  );

  const renderCategory = ({item, index}) => (
    <View key={`category-${index}`}>
      {/* If you add a category name later, you can show it here */}
      <FlatList
        data={item.components}
        renderItem={renderComponent}
        keyExtractor={component => component.name} // Unique key for inner components
      />
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Feather name="arrow-left" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Pages</Text>
        <TouchableOpacity></TouchableOpacity>
      </View>

      <FlatList
        data={componentsData}
        renderItem={renderCategory}
        keyExtractor={(item, index) => `components-${index}`} // Unique key for outer FlatList
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'Poppins-Bold',
    color: '#000',
  },
  componentItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  iconContainer: {
    width: 32,
    height: 32,
    borderRadius: 10,
    backgroundColor: '#04764e',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  componentName: {
    flex: 1,
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    color: '#000',
  },
});

export default PagesScreen;

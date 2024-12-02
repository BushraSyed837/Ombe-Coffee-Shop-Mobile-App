import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const DeliveryAddressScreen = () => {
  const navigation = useNavigation();
  const [selectedAddress, setSelectedAddress] = useState('home');

  const addresses = [
    {
      id: 'home',
      title: 'Home Address',
      content: '123 Main Street, Anytown, USA 12345',
      icon: 'home-outline',
    },
    {
      id: 'office',
      title: 'Office Address',
      content: '123 Main Street, Anytown, USA 12345',
      icon: 'location',
    },
    {
      id: 'shop',
      title: 'Shop Address',
      content: '123 Main Street, Anytown, USA 12345',
      icon: 'storefront',
    },
  ];

  const renderAddressSection = ({id, title, content, icon}) => (
    <TouchableOpacity
      key={id}
      style={styles.section}
      onPress={() => setSelectedAddress(id)}>
      <View style={styles.iconContainer}>
        <Ionicons name={icon} size={24} color="#fff" />
      </View>
      <View style={styles.sectionTextContainer}>
        <Text style={styles.sectionTitle}>{title}</Text>
        <Text style={styles.sectionContent}>{content}</Text>
      </View>
      <View style={styles.radioButtonContainer}>
        <Icon
          name={
            selectedAddress === id
              ? 'radio-button-checked'
              : 'radio-button-unchecked'
          }
          size={24}
          color="#388e3c"
        />
      </View>
      <View style={styles.separator} />
    </TouchableOpacity>
    
  );

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.headerContainer}>
        <TouchableOpacity style={styles.backButton}>
          <Icon
            name="arrow-back"
            size={24}
            color="#000"
            style={styles.backIcon}
            onPress={() => navigation.navigate('Cart')}
          />
        </TouchableOpacity>
        <Text style={styles.header}>Delivery Address</Text>
      </View>

      {/* Address Sections */}
      
      {addresses.map(renderAddressSection)}
      <View style={styles.separator} />

      {/* Add Address Section */}
      <View style={styles.accordia}>
        <TouchableOpacity
          style={styles.paymentOption}
          onPress={() => navigation.navigate('address')}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Icon name="add" size={17} color="#000" />
            <Text style={styles.paymentText}>Add Address</Text>
          </View>
          <Icon name="chevron-right" size={24} color="#000" />
        </TouchableOpacity>
      </View>

      {/* Submit Order Button */}
      <TouchableOpacity style={styles.submitButton}>
        <Text style={styles.submitButtonText}>SUBMIT ORDER</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    backgroundColor: '#fff',
  },
  backButton: {
    position: 'absolute',
    left: 16,
  },
  backIcon: {
    backgroundColor: 'rgba(4, 118, 78, 0.4)',
    borderRadius: 20,
    padding: 4,
  },
  header: {
    fontSize: 18,
    fontFamily: 'Poppins-Bold',
    color: '#333',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    backgroundColor: '#f1f1f1',
    borderRadius: 8,
    marginBottom: 10,
  },
  iconContainer: {
    marginRight: 16,
    backgroundColor: '#04764e',
    borderRadius: 50,
    padding: 8,
  },
  sectionTextContainer: {
    flex: 1,
  },
  sectionTitle: {
    fontSize: 16,
    fontFamily: 'Poppins-Bold',
    color: '#333',
  },
  sectionContent: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: '#777',
  },
  separator: {
    height: 1,
    backgroundColor: '#ddd',
    marginVertical: 10,
  },
  paymentOption: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    paddingVertical: 8,
    paddingHorizontal: 10,
    margin: 15,
    borderRadius: 10,
    borderColor: '#04764e',
    borderWidth: 1,
    marginBottom: 10,
  },
  paymentText: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    marginLeft: 10,
  },
  radioButtonContainer: {
    marginLeft: 16,
  },
  submitButton: {
    backgroundColor: '#04764e',
    padding: 16,
    borderRadius: 30,
    alignItems: 'center',
    marginTop: '10%',
  },
  submitButtonText: {
    fontSize: 16,
    fontFamily: 'Poppins-Bold',
    color: '#fff',
  },
});

export default DeliveryAddressScreen;

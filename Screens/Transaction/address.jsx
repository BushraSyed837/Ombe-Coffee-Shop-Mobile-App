import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; // For the back arrow
import { useNavigation } from '@react-navigation/native';

const Address = () => {
  const navigation = useNavigation();
  const [selectedAddressType, setSelectedAddressType] = useState(null);

  const handleAddressTypeSelect = (type) => {
    setSelectedAddressType(type);
  };

  return (
    <ScrollView style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.title}>Add Address</Text>
      </View>

      {/* Contact Details Section */}
      <Text style={styles.sectionTitle}>Contact Details</Text>
      {['Full Name', 'Mobile No.'].map((placeholder, index) => (
        <TextInput
          key={index}
          style={styles.input}
          placeholder={placeholder}
          keyboardType={placeholder === 'Mobile No.' ? 'numeric' : 'default'}
        />
      ))}

      {/* Address Section */}
      <Text style={styles.sectionTitle}>Address</Text>
      {['Pin Code', 'Address', 'Locality/Town', 'City/District', 'State'].map((placeholder, index) => (
        <TextInput
          key={index}
          style={styles.input}
          placeholder={placeholder}
          keyboardType={placeholder === 'Pin Code' ? 'numeric' : 'default'}
        />
      ))}

      {/* Save Address As Section */}
      <Text style={styles.sectionTitle}>Save Address As</Text>
      <View style={styles.saveAsContainer}>
        {["Home", "Shop", "Office"].map((type) => (
          <TouchableOpacity
            key={type}
            style={[
              styles.saveAsButton,
              selectedAddressType === type && styles.saveAsButtonSelected,
            ]}
            onPress={() => handleAddressTypeSelect(type)}
          >
            <Text
              style={[
                styles.saveAsText,
                selectedAddressType === type && styles.saveAsTextSelected,
              ]}
            >
              {type}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Save Address Button */}
      <TouchableOpacity style={styles.saveButton}>
        <Text style={styles.saveButtonText}>SAVE ADDRESS</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 18,
    marginLeft: 10,
    color:'#000',
    fontFamily: 'Poppins-Bold', // Added Poppins font family
  },
  sectionTitle: {
    fontSize: 16,
    color:'#000',
    marginVertical: 10,
    fontFamily: 'Poppins-Bold', // Added Poppins font family
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 5,
    borderColor: '#ddd',
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
    fontSize: 14,
    fontFamily: 'Poppins-Regular', // Added Poppins font family
  },
  saveAsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
    width: '60%',
  },
  saveAsButton: {
    borderWidth: 1,
    borderColor: '#1c8716',
    borderRadius: 20,
    paddingVertical: 5,
    paddingHorizontal: 15,
    backgroundColor: '#fff',
  },
  saveAsButtonSelected: {
    backgroundColor: '#1c8716',
  },
  saveAsText: {
    color: '#1c8716',
    fontSize: 14,
    fontFamily: 'Poppins-Regular', // Added Poppins font family
  },
  saveAsTextSelected: {
    color: '#fff',
  },
  saveButton: {
    backgroundColor: '#1c8716',
    borderRadius: 30,
    paddingVertical: 15,
    alignItems: 'center',
    marginTop: 90,
  },
  saveButtonText: {
    color: '#fff',
    fontSize: 16,
    fontFamily: 'Poppins-Bold', // Added Poppins font family
  },
});

export default Address;

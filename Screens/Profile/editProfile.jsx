import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, TextInput, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';

export default function EditProfileScreen() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [location, setLocation] = useState('');
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.headerContainer}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.header}>Edit Profile</Text>
      </View>

      {/* Profile Section */}
      <View style={styles.profileSection}>
        <View style={styles.profileImageContainer}>
          <Image
            source={{ uri: 'https://randomuser.me/api/portraits/men/1.jpg' }}
            style={styles.profileImage}
          />
          <TouchableOpacity style={styles.editIcon}>
            <Icon name="edit" size={20} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Text Fields */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Full Name"
          value={fullName}
          onChangeText={setFullName}
          placeholderTextColor="#888"
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          keyboardType="email-address"
          onChangeText={setEmail}
          placeholderTextColor="#888"
        />
        <TextInput
          style={styles.input}
          placeholder="Mobile Number"
          value={mobileNumber}
          keyboardType="phone-pad"
          onChangeText={setMobileNumber}
          placeholderTextColor="#888"
        />
        <TextInput
          style={styles.input}
          placeholder="Location"
          value={location}
          onChangeText={setLocation}
          placeholderTextColor="#888"
        />
      </View>

      {/* Update Profile Button */}
      <TouchableOpacity style={styles.updateButton}>
        <Text style={styles.updateButtonText}>Update Profile</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
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
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    fontFamily: 'Poppins-Regular',
  },
  profileSection: {
    alignItems: 'center',
    marginTop: 20,
  },
  profileImageContainer: {
    position: 'relative',
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  editIcon: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: '#2D6A4F',
    borderRadius: 50,
    padding: 5,
  },
  inputContainer: {
    marginTop: 20,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    fontSize: 16,
    marginBottom: 15,
    color: '#333',
    paddingVertical: 8,
    fontFamily: 'Poppins-Regular',
  },
  updateButton: {
    backgroundColor: '#2D6A4F',
    borderRadius: 25,
    paddingVertical: 15,
    alignItems: 'center',
    marginTop: 280,
  },
  updateButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    fontFamily: 'Poppins-Regular',
  },
});

import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  Switch,
  TouchableOpacity,
  ImageBackground,
  Animated,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {List, Button, Badge} from 'react-native-paper';

const Onboarding = ({navigation}) => {
  return (
    <View style={styles.container}>
      {/* Background Image */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Onboarding</Text>
        <TouchableOpacity>
         
        </TouchableOpacity>
      </View>

      <ImageBackground
        source={require('../../assets/bg3.png')} // Replace with your coffee image URL
        style={styles.backgroundImage}
        resizeMode="cover">
        <View style={styles.imageContainer}>
          <Image
            source={require('../../assets/1.png')} // Replace with your coffee image URL
            style={styles.coffeeImage}
            resizeMode="contain"
          />
        </View>
        <View style={styles.overlay}>
          <Text style={styles.title}>Morning begins with Ombe coffee</Text>

          <TouchableOpacity
            style={[styles.button, {backgroundColor: '#007E33'}]}>
            <Text style={styles.buttonText}>Login With Email</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.button, {backgroundColor: '#3b5998'}]}>
            <Text style={styles.buttonText}>Login With Facebook</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.button, {backgroundColor: '#db4437'}]}>
            <Text style={styles.buttonText}>Login With Google</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    backgroundColor: '#fff',
  },
  headerText: {
    fontSize: 18,
    fontFamily: 'Poppins-Bold',
    color: '#000',
  },
  backButton: {
    padding: 8,
  },
  menuButton: {
    padding: 8,
  },
  backgroundImage: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  overlay: {
    alignItems: 'center',
    paddingBottom: 50,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#000',
    marginBottom: 20,
    textAlign: 'center',
  },
  button: {
    width: '90%',
    paddingVertical: 15,
    borderRadius: 30,
    marginBottom: 15,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    color: '#ffffff',
    fontWeight: 'bold',
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 50,
  },
});

export default Onboarding;

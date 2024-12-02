import React from 'react';
import {View, StyleSheet, TouchableOpacity, Text, Image} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native'; 
const HeaderScreen = () => {
  
  const navigation = useNavigation(); 
  return (
    <View style={styles.container}>
     
      <View style={styles.headerContainer}>
        <TouchableOpacity style={styles.backButton}>
          <Icon
            name="arrow-back"
            size={24}
            color="#000"
            onPress={() => navigation.goBack()}
          />
        </TouchableOpacity>
        <Text style={styles.headerText}>Header Styles</Text>
        <TouchableOpacity style={styles.menuButton}>
        </TouchableOpacity>
      </View>

      {/* Greetings Section */}
      <View style={styles.content}>
        <View style={styles.greetingsContainer}>
          <Text style={styles.greeting}>Good Morning</Text>
          <Text style={styles.title}>Williams</Text>
        </View>

        {/* Icons Section */}
        <View style={styles.headerRight}>
          <TouchableOpacity>
            <Image
              source={require('../../assets/shop.png')}
              style={styles.cartlogo}
              resizeMode="contain"
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={require('../../assets/burger.png')}
              style={styles.burgerlogo}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    backgroundColor: '#fff',
    elevation: 4,
    position: 'relative', // Allows absolute positioning of the header text
  },
  backButton: {
    padding: 8,
  },
  menuButton: {
    padding: 8,
  },
  headerText: {
    fontSize: 20,
    fontWeight: '600',
    color: '#000',
    fontFamily: 'Poppins-Bold',
    position: 'absolute', // Center the header text
    left: '50%',
    transform: [{translateX: -50}], // Center the text horizontally
  },
  content: {
    flexDirection: 'row', // Align greetings and icons in a row
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
  },
  greetingsContainer: {
    flexDirection: 'column', // Stack "Good Morning" and "Williams"
  },
  greeting: {
    fontSize: 14,
    fontWeight: '400',
    fontFamily: 'Poppins-Regular',
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    color: '#000',
    fontFamily: 'Poppins-Regular',
  },
  headerRight: {
    flexDirection: 'row', // Align shop and burger icons in a row
    alignItems: 'center',
  },
  burgerlogo: {
    width: 30,
    height: 30,
    marginLeft: 10,
  },
  cartlogo: {
    width: 40,
    height: 40,
  },
});

export default HeaderScreen;

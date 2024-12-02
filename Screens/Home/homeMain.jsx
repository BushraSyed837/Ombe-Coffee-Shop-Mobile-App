import React from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'; // Import search icon from MaterialIcons
import FeaturedBeverages from '../Home/featuredBeverages';
import Categories from '../Home/categories';
import Carousel from '../Home/carousel';

const HomeMain = ({ navigation }) => {
  const more = () => {
    console.log("clicked")
    navigation.navigate('Products')
  };
  return (
    <View style={styles.container}>
      {/* Search Bar */}
      <View style={styles.searchBarContainer}>
        <TextInput
          style={styles.searchBar}
          placeholder="Search beverages or foods"
        />
        <Icon name="search" size={24} color="#dee2e6" style={styles.searchIcon}  onPress={console.log("hello")}/>
      </View>

      {/* Carousel */}
      <Carousel />
      {/* Categories Section */}
      <Categories />
      {/* Featured Beverages */}
      <FeaturedBeverages handleMore={more} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width:'100%',
    paddingTop: 20,
  },
  searchBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '90%',
    height: 50,
    borderRadius: 25,
    backgroundColor: '#F9F9F9',  // Ensures the background color is applied to the container
    paddingHorizontal: 15,
    marginBottom: 20,
  },
  searchBar: {
    flex: 1,
    fontSize: 16,
    fontFamily: 'Poppins-Regular', // Using Poppins-Bold
    backgroundColor: '#F9F9F9', // Ensures consistent background color for the input field
    borderRadius: 25,  // Rounded corners for the input field
  },
  searchIcon: {
    marginLeft: 10, // Added margin to the left for spacing between the input and the icon
  },
});

export default HomeMain;

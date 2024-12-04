import React from 'react';
import { View, StyleSheet, TextInput, Dimensions, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'; // Import search icon from MaterialIcons
import FeaturedBeverages from '../Home/featuredBeverages';
import Categories from '../Home/categories';
import Carousel from '../Home/carousel';

const { width, height } = Dimensions.get('window');  // Get screen width and height for responsiveness

const HomeMain = ({ navigation }) => {
  const more = () => {
    console.log("clicked");
    navigation.navigate('Products');
  };

  return (
    <KeyboardAvoidingView 
      style={styles.container} 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'} // iOS and Android keyboard behavior adjustment
    >
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        {/* Search Bar */}
        <View style={styles.searchBarContainer}>
          <TextInput
            style={styles.searchBar}
            placeholder="Search beverages or foods"
          />
          <Icon 
            name="search" 
            size={24} 
            color="#dee2e6" 
            style={styles.searchIcon} 
            onPress={() => console.log("hello")} 
          />
        </View>

        {/* Carousel */}
        <View style={styles.carouselContainer}>
          <Carousel />
        </View>

        {/* Categories Section */}
        <View style={styles.categoriesContainer}>
          <Categories />
        </View>
        
        {/* Featured Beverages */}
        <View style={styles.featuredBeveragesContainer}>
          <FeaturedBeverages handleMore={more} />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 20,
  },
  scrollViewContent: {
    paddingBottom: 20, // Add bottom padding to prevent content from being hidden behind the keyboard
  },
  searchBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '90%',
    height: height * 0.07,  // Dynamic height based on screen size
    borderRadius: 25,
    backgroundColor: '#F9F9F9',
    paddingHorizontal: 15,
    marginBottom: height * 0.03, // Dynamic margin
    alignSelf: 'center', // Center horizontally
  },
  searchBar: {
    flex: 1,
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    backgroundColor: '#F9F9F9',
    borderRadius: 25,
  },
  searchIcon: {
    marginLeft: 10,
  },
  carouselContainer: {
    width: '100%',
    marginBottom: height * 0.009,  
  },
  categoriesContainer: {
    width: '100%',
    marginBottom: height * 0.10,  // Margin for spacing between components
  },
  featuredBeveragesContainer: {
    width: '100%',
    marginBottom: height * 0.05,  // Margin for spacing between components
  },
});

export default HomeMain;

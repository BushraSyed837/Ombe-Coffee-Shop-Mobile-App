import React from 'react';
import { View, StyleSheet, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import {useNavigation} from '@react-navigation/native';

const categories = [
  { id: 1, name: 'Beverages', count: 41, icon: require('../../assets/icon1.png') },
  { id: 2, name: 'Foods', count: 37, icon: require('../../assets/icon2.png') },
  { id: 3, name: 'Pizza', count: 28, icon: require('../../assets/icon3.png') },
  { id: 4, name: 'Drink', count: 12, icon: require('../../assets/icon4.png') },
  { id: 5, name: 'Lunch', count: 67, icon: require('../../assets/icon1.png') },
];

const Categories = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.categoriesContainer}>
        <Text style={styles.categoriesTitle}>Categories</Text>
        <FlatList
          data={categories}
          keyExtractor={(item) => `${item.id}`}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <View style={styles.categoryCard}>
              <View style={styles.iconTextContainer}>
                {/* Use Image to display icons */}
                <Image source={item.icon} style={styles.icon} />
                <View style={{flexDirection:'column'}}>
                <TouchableOpacity onPress={()=>{navigation.navigate('Products')}}>
                <Text style={styles.categoryName}>{item.name}</Text>
                </TouchableOpacity>
                <Text style={styles.menuCount}>{item.count} Menus</Text>
                </View>
              </View>
            </View>
          )}
          contentContainerStyle={styles.categoriesList}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginBottom:-50,
  },
  categoriesContainer: {
    width: '100%',
    marginTop: 30,
  },
  categoriesTitle: {
    fontSize: 18,
    fontFamily: 'Poppins-Bold', // Using Poppins-Bold
    paddingHorizontal: 15,
    marginBottom: 10,
    color:'#000000'
  },
  categoriesList: {
    paddingHorizontal: 15, // Padding for the container of the list
  },
  categoryCard: {
    backgroundColor: '#ffffff', // White background
    marginRight: 15,
    padding: 10, // Sufficient padding
    borderRadius: 20, // Rounded corners
    alignItems: 'flex-start',
    borderWidth: 1, // Add border
    borderColor: '#ddd', // Subtle border color
    shadowColor: '#000', // Shadow color for iOS
    shadowOffset: { width: 0, height: 2 }, // Shadow offset for iOS
    shadowOpacity: 0.2, // Reduced shadow opacity for subtle effect
    shadowRadius: 0.5, // Shadow blur radius for iOS
    elevation: 0.5, // Elevation for Android
  },
  iconTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding:5
  },
  icon: {
    width: 24, // Adjusted width
    height: 24, // Adjusted height
    marginRight: 10,
    marginBottom:20,
    resizeMode: 'contain', // Ensures the image scales properly
  },
  categoryName: {
    fontSize: 16, // Slightly larger font size for better readability
    fontFamily: 'Poppins-Bold', // Using Poppins-Bold
    color: '#333', // Darker text color for better contrast
  },
  menuCount: {
    fontSize: 13,
    fontFamily: 'Poppins-Regular', // Using Poppins-Bold
    color: '#04764e', // Subtle text color for count
    
  },

});

export default Categories;

import React from 'react';
import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const WishlistScreen = () => {
  const navigation = useNavigation();
 
  const wishlistItems = [
    { id: '1', title: 'Sweet Lemon Indonesian Tea', variant: 'White Stripes', price: '$69.4', image: require('../assets/product1.jpg') },
    { id: '2', title: 'Hot Cappuccino Latte with Mocha', variant: 'White Stripes', price: '$69.4', image: require('../assets/product2.jpg') },
    { id: '3', title: 'Original Hot Coffee', variant: 'White Stripes', price: '$69.4', image: require('../assets/product3.jpg') },
    { id: '4', title: 'Sweet Lemon Indonesian Tea', variant: 'White Stripes', price: '$69.4', image: require('../assets/product4.jpg') },
  ];

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Home', { screen: 'details' })}>
      <Image source={item.image} style={styles.image} />
      <View style={styles.details}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.variant}>Variant: {item.variant}</Text>
        <View style={styles.priceAndHeartContainer}>
          <Text style={styles.price}>{item.price}</Text>
          <TouchableOpacity style={styles.heartButton}>
            <Text style={styles.heart}>❤️</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={wishlistItems}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        numColumns={2}
        contentContainerStyle={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    paddingTop: 20,
  },
  list: {
    justifyContent: 'space-between',
  },
  card: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 10,
    margin: 10,
    padding: 10,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  image: {
    width: 50,
    height: 80,
    borderRadius: 10,
    marginRight: 10,
  },
  details: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 14,  // Increased font size for better readability
    
    textAlign: 'left',
    marginBottom: 5,
    fontFamily: 'Poppins-Bold',  // Using Poppins font
    flexWrap: 'wrap',
  },
  variant: {
    fontSize: 12,
    color: '#888',
    marginBottom: 5,
    fontFamily: 'Poppins-Regular',  // Using Poppins font
  },
  priceAndHeartContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 5,
  },
  price: {
    fontSize: 14,
    color: '#000',
    fontFamily: 'Poppins-Bold',  // Bold Poppins font for price
  },
  heartButton: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  heart: {
    fontSize: 20,
    color: 'red',
  },
});

export default WishlistScreen;

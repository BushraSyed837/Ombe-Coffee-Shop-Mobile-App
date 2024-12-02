import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const products = [
  {
    id: 1,
    name: 'Hot Creamy Cappuccino Ombe',
    price: '12.6',
    oldPrice: '16.0',
    points: '20',
    rating: '3.8',
    image: require('../../assets/product1.jpg'),
  },
  {
    id: 2,
    name: 'Creamy Mocha Ome Coffee',
    price: '12.6',
    oldPrice: '16.0',
    points: '50',
    rating: '3.8',
    image: require('../../assets/product2.jpg'),
  },
  {
    id: 3,
    name: 'Arabica Latte Ombe Coffee',
    price: '12.6',
    oldPrice: '16.0',
    points: '10',
    rating: '3.8',
    image: require('../../assets/product3.jpg'),
  },
  {
    id: 4,
    name: 'Espresso',
    price: '5.8',
    oldPrice: '9.9',
    points: '30',
    rating: '4.0',
    image: require('../../assets/product4.jpg'),
  },
  {
    id: 5,
    name: 'Cappuccino',
    price: '5.8',
    oldPrice: '9.9',
    points: '90',
    rating: '4.5',
    image: require('../../assets/product2.jpg'),
  },
];

const FeaturedBeverages = ({more}) => {
  const navigation = useNavigation();

  const renderProduct = ({item}) => (
    <View style={styles.beverageItem}>
      {/* Image with Rating */}
      <View style={{position: 'relative'}}>
        <Image source={item.image} style={styles.featureImage} />
        {/* Centered Rating Badge */}
        <View style={styles.ratingBadge}>
          <Text style={styles.ratingText}>⭐ {item.rating}</Text>
        </View>
      </View>

      {/* Name, Price, and Points */}
      <View style={styles.featureDetails}>
        <TouchableOpacity onPress={()=>{navigation.navigate('details')}}>
        <Text style={styles.featureName} numberOfLines={1}>
          {item.name}
        </Text>         
        </TouchableOpacity>
        <View style={styles.priceAndPoints}>
          <Text style={styles.featurePrice}>${item.price}</Text>
          <Text style={styles.featurePoints}>{item.points} Pts</Text>
        </View>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.featureContainer}>
        <View style={styles.featureHeader}>
          <Text style={styles.header}>Featured Beverages</Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Products')
            }}>
            <Text style={styles.moreText}>More</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          data={products}
          keyExtractor={item => item.id.toString()}
          renderItem={renderProduct}
          showsVerticalScrollIndicator={false} // Disable scrollbar if preferred
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
    marginTop: -60,
  },
  featureContainer: {
    padding: 15,
    width: '100%',
  },
  featureHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 5,
    marginTop:5
  },
  header: {
    fontSize: 18,
    fontFamily: 'Poppins-Bold', // Using Poppins-Bold
    color: '#333',
  },
  moreText: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular', // Using Poppins-Bold
    color: '#04764e',
  },
  beverageItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
  },
  featureImage: {
    width: 90,
    height: 100,
    borderRadius: 10,
  },
  ratingBadge: {
    position: 'absolute',
    bottom: -10,
    left: '50%',
    transform: [{translateX: -20}], // Offset half of the badge's width
    backgroundColor: '#ffa500',
    borderRadius: 10,
    paddingHorizontal: 9,
    paddingVertical: 4, // Optional: To add vertical padding for better aesthetics
  },
  ratingText: {
    fontSize: 10, // Smaller font size for the rating text
    color: '#fff',
    fontFamily: 'Poppins-Bold', // Using Poppins-Bold
  },
  featureDetails: {
    flex: 1,
    marginLeft: 10,
  },
  featureName: {
    fontSize: 16,
    fontFamily: 'Poppins-Bold', // Using Poppins-Bold
    color: '#333',
  },
  priceAndPoints: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
  },
  featurePrice: {
    fontSize: 14,
    color: '#04764e',
    fontFamily: 'Poppins-Bold', // Using Poppins-Bold
  },
  featurePoints: {
    fontSize: 14,
    color: '#04764e',
    fontFamily: 'Poppins-Bold', // Using Poppins-Bold
  },
});

export default FeaturedBeverages;

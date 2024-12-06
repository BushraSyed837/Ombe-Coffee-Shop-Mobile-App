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
import {useSelector} from 'react-redux';
import {selectProducts} from '../../redux/slices/productSlice'; // Import the selector

const FeaturedBeverages = ({more}) => {
  const navigation = useNavigation();

  // Use the useSelector hook to retrieve products from the Redux store
  const products = useSelector(state => state.products.products);

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
        <TouchableOpacity
          onPress={() => {
            console.log(item)
            navigation.navigate('details', {selectedProduct: item}); 
          }}>
          <Text style={styles.featureName} numberOfLines={1}>
            {item.name}
          </Text>
        </TouchableOpacity>
        <View style={styles.priceAndPoints}>
          <Text style={styles.featurePrice}>${item.price}</Text>
          <Text style={styles.featurePoints}>{item.points}</Text>
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
              navigation.navigate('Products');
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
    marginTop: -40,
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
    marginTop: 5,
  },
  header: {
    fontSize: 18,
    fontFamily: 'Poppins-Bold',
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

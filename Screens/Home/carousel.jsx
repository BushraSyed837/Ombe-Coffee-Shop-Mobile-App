import React, { useRef, useEffect } from 'react';
import {
  View,
  StyleSheet,
  Text,
  Dimensions,
  Image,
  Animated,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
// Wrap FlatList with Animated.createAnimatedComponent
const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);

const products = [
  {
    id: 1,
    name: 'Creamy coffee',
    price: '12.6',
    oldPrice: '16.0',
    points: '50 Pts',
    rating: '3.8',
    image: require('../../assets/1.png'),
  },
  {
    id: 2,
    name: 'Creamy Mocha',
    price: '12.6',
    oldPrice: '16.0',
    points: '50 Pts',
    rating: '3.8',
    image: require('../../assets/2.png'),
  },
  {
    id: 3,
    name: 'Cappuccino',
    price: '12.6',
    oldPrice: '16.0',
    points: '50 Pts',
    rating: '3.8',
    image: require('../../assets/1.png'),
  },
  {
    id: 4,
    name: 'Cold Coffee',
    price: '12.6',
    oldPrice: '16.0',
    points: '50 Pts',
    rating: '3.8',
    image: require('../../assets/2.png'),
  },
];

const Carousel = () => {
  const ITEM_WIDTH = 180; // Slightly smaller item width for better fit
  const SPACER_ITEM_WIDTH = 225;
  const scrollX = useRef(new Animated.Value(0)).current;
  const flatListRef = useRef(null);
  const navigation = useNavigation();
 

  useEffect(() => {
    const interval = setInterval(() => {
      if (flatListRef.current) {
        flatListRef.current.scrollToOffset({
          offset: (scrollX._value + ITEM_WIDTH) % (ITEM_WIDTH * products.length),
          animated: true,
        });
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [scrollX]);

  const renderProduct = ({ item, index }) => {
    if (!item.name) return <View style={{ width: SPACER_ITEM_WIDTH }} />;

    const inputRange = [
      (index - 1) * ITEM_WIDTH,
      index * ITEM_WIDTH,
      (index + 1) * ITEM_WIDTH,
    ];

    const scale = scrollX.interpolate({
      inputRange,
      outputRange: [0.9, 1.0, 0.9],
      extrapolate: 'clamp',
    });

    const translateY = scrollX.interpolate({
      inputRange,
      outputRange: [0, -10, 0],
      extrapolate: 'clamp',
    });

    return (
      <TouchableOpacity
        accessible={true}
        accessibilityLabel={`Product ${item.name}`}
        onPress={()=>{
          navigation.navigate('details')
        }}
        accessibilityHint="Double-tap to view product details">
        <Animated.View
          style={[
            styles.card,
            { transform: [{ scale }, { translateY }], width: ITEM_WIDTH },
          ]}>
          <Image source={item.image} style={styles.productImage} />
          <Text style={styles.productName}>{item.name}</Text>
          <View style={styles.priceContainer}>
            <Text style={{color:'#FFFFFF', marginRight: 5}}>$</Text>
            <Text style={styles.currentPrice}>{item.price}</Text>
            <Text style={styles.oldPrice}>${item.oldPrice}</Text>
          </View>
        </Animated.View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      {/* Carousel Section */}
      <View style={styles.carouselContainer}>
        <AnimatedFlatList
          ref={flatListRef}
          data={[{ key: 'left-spacer' }, ...products, { key: 'right-spacer' }]}
          keyExtractor={(item, index) => `${item.id || index}`}
          horizontal
          showsHorizontalScrollIndicator={false}
          snapToInterval={ITEM_WIDTH}
          decelerationRate="fast"
          contentContainerStyle={{ alignItems: 'center', paddingTop: 10 }}
          renderItem={renderProduct}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
            { useNativeDriver: true }
          )}
          scrollEventThrottle={16}
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
    paddingTop:20,
    paddingBottom: 0, 
    marginBottom: -60, 
  },
  carouselContainer: {
    width: '100%',
    height:'90%',
  },
  card: {
    backgroundColor: '#04764e',
    borderRadius: 15,
    padding: 3, // Reduced padding for smaller card size
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    height:'90%',
    elevation: 5,
  },
  productImage: {
    width: 150,  // Increased image size
    height: 150, // Increased image size
    resizeMode: 'contain',
    marginBottom:3
  },
  productName: {
    fontSize: 14,
    color: '#fff',
    fontFamily: 'Poppins-Bold', // Using Poppins-Bold
    textAlign: 'center',
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '80%',
    marginBottom:50
  },
  currentPrice: {
    fontSize: 23,
    color: '#fff',
    fontFamily: 'Poppins-Bold', // Using Poppins-Bold
  },
  oldPrice: {
    fontSize: 12,
    color: '#ccc',
    marginLeft:15,
    textDecorationLine: 'line-through',
  },
  pointsContainer: {
    marginTop: 5,
  },
  points: {
    fontSize: 14,
    color: '#FFD700',
    fontFamily: 'Poppins-Bold', // Using Poppins-Bold
  },
  ratingContainer: {
    marginTop: 5,
  },
  rating: {
    fontSize: 14,
    color: '#FFD700',
    fontFamily: 'Poppins-Regular', // Using Poppins-Bold
  },
});

export default Carousel;

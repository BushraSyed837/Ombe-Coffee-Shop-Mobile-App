import React, {useState, useRef, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Animated,
  Modal,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Slider from '@react-native-community/slider';
import {useNavigation, useRoute} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {addToCart} from '../../redux/slices/cartSlice';

const {width: screenWidth} = Dimensions.get('window');

const DetailsScreen = () => {
  const [visibleModal, setVisibleModal] = useState(null);
  const images = [
    require('../../assets/1.png'),
    require('../../assets/2.png'),
    require('../../assets/3.png'),
  ];

  const dispatch = useDispatch();
  const navigation = useNavigation();
  const route = useRoute();

  const openModal = (item) => {
    setVisibleModal(true);
  };

  const closeModal = () => {
    setVisibleModal(false);
  };

  // Retrieve the selected product from route parameters
  const {selectedProduct} = route.params;

  // Define local states
  const [sizeValue, setSizeValue] = useState(3);
  const [quantity, setQuantity] = useState(1);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const fadeAnim = useRef(new Animated.Value(1)).current;
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      fadeOutAndSwitchImage();
    }, 3000);
    return () => clearInterval(interval);
  }, [currentImageIndex]);

  const fadeOutAndSwitchImage = () => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 500,
      useNativeDriver: true,
    }).start(() => {
      setCurrentImageIndex(prevIndex => (prevIndex + 1) % images.length);
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }).start();
    });
  };

  const handleOrder = () => {
    const item = {
      id: selectedProduct.id,
      name: selectedProduct.name,
      price: priceMap[sizeValue],
      quantity: quantity,
      image: images[currentImageIndex],
      size: sizeValue,
      reviews: selectedProduct.reviews,
      description: selectedProduct.description,
      originalPrice: selectedProduct.originalPrice,
    };
    console.log('helloooooo', item);
    dispatch(addToCart(item));
    openModal(item)
  };

  const priceMap = selectedProduct?.sizePricing || {
    1: 4.5,
    2: 5.5,
    3: 5.8,
    4: 6.2,
  };
  const totalCost = (priceMap[sizeValue] * quantity).toFixed(2);

  const increaseQuantity = () => setQuantity(quantity + 1);
  const decreaseQuantity = () => quantity > 1 && setQuantity(quantity - 1);

  const getLabelStyle = value =>
    value === sizeValue ? styles.activeLabel : styles.inactiveLabel;

  const handleBookmark = () => setIsBookmarked(!isBookmarked);
  const handleBack = () => navigation.goBack();

  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <TouchableOpacity onPress={handleBack}>
          <Icon name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleBookmark}>
          <Icon
            name={isBookmarked ? 'bookmark' : 'bookmark-outline'}
            size={24}
            color="#fff"
          />
        </TouchableOpacity>
      </View>

      {/* Image Section */}
      <View style={styles.imageContainer}>
        <Animated.Image
          source={images[currentImageIndex]}
          style={[styles.image, {opacity: fadeAnim}]}
        />
      </View>

      {/* Details Section */}
      <View style={styles.detailsContainer}>
        <View style={styles.ratingBadge}>
          <Text style={styles.ratingText}>
            {selectedProduct?.rating || '4.5'}
          </Text>
        </View>

        <Text style={styles.title}>
          {selectedProduct?.name || 'Product Name'}
        </Text>
        <Text style={styles.description}>
          {selectedProduct?.description || 'No description available.'}
        </Text>

        {/* Size Slider */}
        <View style={styles.sliderContainer}>
          <Slider
            style={styles.slider}
            minimumValue={1}
            maximumValue={4}
            step={1}
            value={sizeValue}
            onValueChange={setSizeValue}
            minimumTrackTintColor="#1B5E20"
            maximumTrackTintColor="#ccc"
            thumbTintColor="#1B5E20"
          />

          <View style={styles.sliderLabels}>
            <Text style={getLabelStyle(1)}>Small</Text>
            <Text style={getLabelStyle(2)}>Medium</Text>
            <Text style={getLabelStyle(3)}>Large</Text>
            <Text style={getLabelStyle(4)}>Extra Large</Text>
          </View>
        </View>

        {/* Price and Quantity Section */}
        <View style={styles.priceContainer}>
          <View style={styles.priceWrapper}>
            <Text style={styles.currencySign}>$</Text>
            <Text style={styles.priceValue}>
              {priceMap[sizeValue]}{' '}
              <Text style={styles.originalPrice}>
                ${selectedProduct?.originalPrice || '8.0'}
              </Text>
            </Text>
          </View>

          <View style={styles.quantityControl}>
            <TouchableOpacity onPress={decreaseQuantity}>
              <Icon name="remove-circle-outline" size={28} color="#000" />
            </TouchableOpacity>
            <Text style={styles.quantity}>{quantity}</Text>
            <TouchableOpacity onPress={increaseQuantity}>
              <Icon name="add-circle-outline" size={28} color="#000" />
            </TouchableOpacity>
          </View>
        </View>

        <Modal
          visible={!!visibleModal}
          transparent={true}
          animationType="slide"
          onRequestClose={closeModal}>
          <View style={[styles.modalOverlay, styles.modalCenter]}>
            <View style={styles.modalContainer}>

              <View style={styles.modalHeader}>
                <Text style={styles.modalTitle}>{"Item has been added to the cart"}</Text>
                <TouchableOpacity onPress={closeModal}>
                  <Icon name="close" size={24} color="#000" />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
        {/* Place Order Button */}
        <TouchableOpacity style={styles.placeOrderButton} onPress={handleOrder}>
          <Text style={styles.placeOrderText}>
            PLACE ORDER <Text style={{color: 'gray'}}> - ${totalCost}</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#04764e'},
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
  },
  imageContainer: {
    alignItems: 'center',
    marginTop: 20,
    height: 250,
    width: screenWidth,
  },
  image: {width: 300, height: 300, top: -25},
  ratingBadge: {
    position: 'absolute',
    right: 15,
    top: -15,
    backgroundColor: 'orange',
    borderRadius: 20,
    padding: 8,
    elevation: 5,
  },
  ratingText: {color: '#fff', fontSize: 16, fontFamily: 'Poppins-Bold'},
  detailsContainer: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 15,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 20,
  },
  title: {fontSize: 24, fontFamily: 'Poppins-Bold'},
  description: {
    color: '#757575',
    marginVertical: 10,
    fontFamily: 'Poppins-Regular',
  },
  sliderContainer: {marginVertical: 20, alignItems: 'center'},
  slider: {width: '100%'},
  sliderLabels: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 10,
  },
  activeLabel: {
    fontSize: 14,
    color: '#000',
    textAlign: 'center',
    fontFamily: 'Poppins-Bold',
  },
  toast: {
    alignSelf: 'center',
    backgroundColor: '#fff',
    borderRadius: 8,
    width: '80%',
    elevation: 7,
    shadowColor: '#ddd',
    shadowOpacity: 14,
    shadowRadius: 5,
    borderWidth: 1,
    marginTop: '15%',
    borderColor: '#ddd',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    width: '85%',
    backgroundColor: '#fff',
    borderRadius: 8,
    overflow: 'hidden',
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  modalTitle: {
    fontSize: 14,
    color: '#000',
    fontFamily: 'Poppins-Bold',
  },
  modalBody: {
    padding: 15,
  },
  modalFooter: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    padding: 16,
    backgroundColor: '#FFFFFF',
    borderTopColor: '#ddd',
  },
  closeButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    backgroundColor: '#fddbe3',
    marginLeft: 10,
  },
  modalCenter: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  inactiveLabel: {
    fontSize: 14,
    color: '#757575',
    textAlign: 'center',
    fontFamily: 'Poppins-Regular',
  },
  priceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginVertical: 20,
  },
  priceWrapper: {position: 'relative', alignItems: 'flex-start'},
  currencySign: {
    fontSize: 15,
    position: 'absolute',
    top: -10,
    left: 0,
    color: '#000',
    fontFamily: 'Poppins-Regular',
  },
  priceValue: {
    fontSize: 28,
    color: '#000',
    marginLeft: 10,
    fontFamily: 'Poppins-Bold',
  },
  originalPrice: {
    textDecorationLine: 'line-through',
    marginLeft: 10,
    fontSize: 16,
    color: '#757575',
    fontFamily: 'Poppins-Regular',
  },
  quantityControl: {flexDirection: 'row', alignItems: 'center'},
  quantity: {marginHorizontal: 10, fontSize: 18, fontFamily: 'Poppins-Bold'},
  placeOrderButton: {
    backgroundColor: '#04764e',
    padding: 10,
    borderRadius: 30,
    alignItems: 'center',
    marginTop:'20%',
    justifyContent: 'center',
  },
  placeOrderText: {
    color: '#fff',
    fontSize: 12,
    fontFamily: 'Poppins-Bold',
  },
});

export default DetailsScreen;

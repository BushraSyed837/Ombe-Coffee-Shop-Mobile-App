import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useSelector, useDispatch} from 'react-redux';
import {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
} from '../redux/slices/cartSlice';

const CartItem = ({item}) => (
  <View style={styles.itemContainer}>
    <Image source={item.image} style={styles.itemImage} />
    <View style={styles.itemDetails}>
      <Text style={styles.itemName}>{item.name}</Text>
      <View style={styles.priceContainer}>
        <Text style={styles.itemPrice}>
          ${item.price}{' '}
          <Text style={styles.originalPrice}>${item.originalPrice}</Text>
        </Text>
        <Text style={styles.itemReviews}>⭐ {item.reviews}</Text>
        <TouchableOpacity
          style={{marginLeft: 35}}
          onPress={() => item.removeItem(item.id)}>
          <Text style={styles.removeButton}>Remove</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.quantityContainer}>
        <TouchableOpacity
          onPress={() => item.decreaseQuantity(item.id)}
          style={styles.button}>
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
        <Text style={styles.quantity}>{item.quantity}</Text>
        <TouchableOpacity
          onPress={() => item.increaseQuantity(item.id)}
          style={styles.button}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  </View>
);

const Cart = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const cartItems = useSelector(state => state.cart.cart);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.subtotal}>
        Subtotal:{' '}
        <Text style={styles.bold}>
          $
          {cartItems
            .reduce((total, item) => total + item.price * item.quantity, 0)
            .toFixed(2)}
        </Text>
      </Text>
      <Text style={styles.freeDelivery}>
        Your order is eligible for free Delivery
      </Text>

      <View>
        {cartItems.map(item => (
          <CartItem
            key={item.id}
            item={{
              ...item,
              increaseQuantity: id => dispatch(increaseQuantity({id})),
              decreaseQuantity: id => dispatch(decreaseQuantity({id})),
              removeItem: id => dispatch(removeFromCart({id})),
            }}
          />
        ))}
      </View>

      <TouchableOpacity
        style={styles.proceedButton}
        onPress={() => navigation.navigate('Home', {screen: 'checkout'})}>
        <Text style={styles.proceedText}>
          PROCEED TO BUY (
          {cartItems.reduce((sum, item) => sum + item.quantity, 0)} ITEMS)
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    padding: 20,
  },
  subtotal: {
    fontSize: 18,
    fontFamily: 'Poppins-Regular',
    marginBottom: 5,
  },
  bold: {
    fontFamily: 'Poppins-Bold',
    color: '#1c8716',
  },
  freeDelivery: {
    color: '#1c8716',
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    marginBottom: 20,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 10,
    marginBottom: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  itemImage: {
    width: 80,
    height: 100,
    borderRadius: 10,
  },
  itemDetails: {
    flex: 1,
    marginLeft: 10,
  },
  itemName: {
    fontSize: 16,
    fontFamily: 'Poppins-Bold',
    marginBottom: 5,
    marginTop: 15,
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  itemPrice: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: '#000',
  },
  originalPrice: {
    textDecorationLine: 'line-through',
    color: '#999',
  },
  itemReviews: {
    fontSize: 12,
    fontFamily: 'Poppins-Regular',
    color: 'rgba(4, 118, 78, 0.5)',
    marginLeft: 5,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#04764e',
    borderRadius: 25,
    marginHorizontal: 5,
    width: 25,
    height: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontFamily: 'Poppins-Regular',
  },
  quantity: {
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    marginTop: 7,
  },
  removeButton: {
    color: '#d11a2a',
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
  },
  proceedButton: {
    backgroundColor: '#04764e',
    borderRadius: 25,
    paddingVertical: 15,
    alignItems: 'center',
    marginTop: 100,
  },
  proceedText: {
    color: '#fff',
    fontSize: 18,
    fontFamily: 'Poppins-Bold',
  },
});

export default Cart;

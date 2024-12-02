import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const CartItem = ({ item, increaseQuantity, decreaseQuantity, removeItem }) => (
  <View style={styles.itemContainer}>
    <Image source={item.image} style={styles.itemImage} />
    <View style={styles.itemDetails}>
      <Text style={styles.itemName}>{item.name}</Text>
      <Text style={styles.itemPrice}>
        ${item.price}{' '}
        <Text style={styles.originalPrice}>${item.originalPrice}</Text>
        <Text style={styles.itemReviews}>{'   '}⭐ {item.reviews}</Text>
      </Text>
      <View style={styles.quantityContainer}>
        <TouchableOpacity
          onPress={() => decreaseQuantity(item.id)}
          style={styles.button}>
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
        <Text style={styles.quantity}>{item.quantity}</Text>
        <TouchableOpacity
          onPress={() => increaseQuantity(item.id)}
          style={styles.button}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
    <TouchableOpacity onPress={() => removeItem(item.id)}>
      <Text style={styles.removeButton}>Remove</Text>
    </TouchableOpacity>
  </View>
);

const Cart = () => {
  const navigation = useNavigation();
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Hot Creamy Cappuccino Latte Ombe',
      price: 8.9,
      originalPrice: 9.5,
      reviews: '2k Review',
      image: require('../assets/product1.jpg'),
      quantity: 1,
    },
    {
      id: 2,
      name: 'Creamy Mocha Ome Coffee',
      price: 6.3,
      originalPrice: 8.5,
      reviews: '2k Review',
      image: require('../assets/product2.jpg'),
      quantity: 1,
    },
    {
      id: 3,
      name: 'Ice Chocolate Coffee',
      price: 6.2,
      originalPrice: 9.5,
      reviews: '2k Review',
      image: require('../assets/product3.jpg'),
      quantity: 1,
    },
  ]);

  const increaseQuantity = (id) => {
    setCartItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (id) => {
    setCartItems((items) =>
      items.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems((items) => items.filter((item) => item.id !== id));
  };

  const calculateSubtotal = () =>
    cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.subtotal}>
        Subtotal:{' '}
        <Text style={styles.bold}>${calculateSubtotal().toFixed(2)}</Text>
      </Text>
      <Text style={styles.freeDelivery}>
        Your order is eligible for free Delivery
      </Text>

      {cartItems.map((item) => (
        <CartItem
          key={item.id}
          item={item}
          increaseQuantity={increaseQuantity}
          decreaseQuantity={decreaseQuantity}
          removeItem={removeItem}
        />
      ))}

      <TouchableOpacity
        style={styles.proceedButton}
        onPress={() => navigation.navigate('Home', { screen: 'checkout' })}>
        <Text style={styles.proceedText}>
          PROCEED TO BUY ({cartItems.reduce((sum, item) => sum + item.quantity, 0)} ITEMS)
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
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  itemImage: {
    width: 80,
    height: 80,
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
    marginBottom: 10,
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
    marginTop: 10,
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
    marginTop: '50%',
  },
  proceedText: {
    color: '#fff',
    fontSize: 18,
    fontFamily: 'Poppins-Bold',
  },
});

export default Cart;

import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';

const CheckoutScreen = () => {
  const navigation = useNavigation();
  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.headerContainer}>
        <TouchableOpacity style={styles.backButton}>
          <Icon
            name="arrow-back"
            size={24}
            color="#000"
            style={{
              backgroundColor: 'rgba(4, 118, 78, 0.4)',
              borderRadius: 20,
              padding: 4,
            }}
            onPress={() => {
              navigation.goBack();
            }}
          />
        </TouchableOpacity>
        <Text style={styles.header}>Checkout</Text>
      </View>

      {/* Delivery Address Section */}
      <TouchableOpacity
        style={styles.section}
        onPress={() => {
          navigation.navigate('deliveryAddressScreen');
        }}>
        <View style={styles.iconContainer}>
          <Icon name="location-on" size={24} color="#388e3c" />
        </View>
        <View style={styles.sectionTextContainer}>
          <Text style={styles.sectionTitle}>Delivery Address</Text>
          <Text style={styles.sectionContent}>
            123 Main Street, Anytown, USA 12345
          </Text>
        </View>
        <Icon name="chevron-right" size={24} color="#000" />
      </TouchableOpacity>
      <View style={styles.separator} />

      {/* Payment Section */}
      <TouchableOpacity
        style={styles.section}
        onPress={() => {
          navigation.navigate('Transactions');
        }}>
        <View style={styles.iconContainer}>
          <Icon name="credit-card" size={24} color="#388e3c" />
        </View>
        <View style={styles.sectionTextContainer}>
          <Text style={styles.sectionTitle}>Payment</Text>
          <Text style={styles.sectionContent}>XXXX XXXX XXXX 3456</Text>
        </View>
        <Icon name="chevron-right" size={24} color="#000" />
      </TouchableOpacity>
      <View style={styles.separator} />

      {/* Additional Notes */}
      <Text style={styles.notesLabel}>Additional Notes:</Text>
      <TextInput
        style={styles.textInput}
        placeholder="Write Here"
        placeholderTextColor="#999"
        multiline
      />

      {/* Order Summary */}
      <View style={styles.orderSummary}>
        <View style={styles.orderRow}>
          <Text style={styles.orderLabel}>bluebell hand block tiered</Text>
          <Text style={styles.orderValue}>2 x $2000.00</Text>
        </View>
        <View style={styles.orderRow}>
          <Text style={styles.orderLabel}>Men Black Grey Allover Printed:</Text>
          <Text style={styles.orderValue}>2 x $1699.00</Text>
        </View>
        <View style={styles.orderRow}>
          <Text style={styles.orderLabel}>Discount</Text>
          <Text style={[styles.orderValue, styles.discountValue]}>
            -$100.00
          </Text>
        </View>
        <View style={styles.orderRow}>
          <Text style={styles.orderLabel}>Shipping</Text>
          <Text style={[styles.orderValue, styles.freeDelivery]}>
            FREE Delivery
          </Text>
        </View>
        <View style={[styles.orderRow, styles.orderTotalRow]}>
          <Text style={styles.orderTotalLabel}>My Order</Text>
          <Text style={styles.orderTotalValue}>$3,599.00</Text>
        </View>
      </View>

      {/* Submit Order Button */}
      <TouchableOpacity
        style={styles.submitButton}
        onPress={() => {
          navigation.navigate('My Order');
        }}>
        <Text style={styles.submitButtonText}>SUBMIT ORDER</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    backgroundColor: '#fff',
  },
  backButton: {
    position: 'absolute',
    left: 16,
  },
  header: {
    fontSize: 18,
    fontFamily: 'Poppins-Bold',
    color: '#333',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    padding: 16,
  },
  iconContainer: {
    marginRight: 16,
  },
  sectionTextContainer: {
    flex: 1,
  },
  sectionTitle: {
    fontSize: 16,
    fontFamily: 'Poppins-Bold',
    color: '#333',
  },
  sectionContent: {
    fontSize: 14,
    color: '#777',
    fontFamily: 'Poppins-Regular',
  },
  separator: {
    height: 1,
    backgroundColor: '#ddd',
    marginHorizontal: 16,
  },
  notesLabel: {
    fontSize: 16,
    marginVertical: 8,
    padding: 16,
  },
  textInput: {
    height: 80,
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 12,
    textAlignVertical: 'top',
    borderWidth: 1,
    borderColor: '#ddd',
    marginLeft: 16,
    marginRight: 16,
  },
  orderSummary: {
    marginTop: '40%',
    paddingHorizontal: 8,
    margin: 10,
  },
  orderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  orderLabel: {
    fontSize: 14,
    color: '#333',
    fontFamily: 'Poppins-Regular',
    flex: 1,
  },
  orderValue: {
    fontSize: 14,
    color: '#333',
    fontFamily: 'Poppins-Regular',
    textAlign: 'right',
  },
  discountValue: {
    color: 'red',
  },
  freeDelivery: {
    color: 'green',
    fontFamily: 'Poppins-Bold',
  },
  orderTotalRow: {
    marginTop: 16,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    paddingTop: 8,
  },
  orderTotalLabel: {
    fontSize: 16,
    fontFamily: 'Poppins-Bold',
    color: '#333',
  },
  orderTotalValue: {
    fontSize: 16,
    fontFamily: 'Poppins-Bold',
    color: '#333',
    textAlign: 'right',
  },
  submitButton: {
    backgroundColor: '#388e3c',
    padding: 10,
    borderRadius: 30,
    alignItems: 'center',
    margin:10
  },
  submitButtonText: {
    fontSize: 16,
    fontFamily: 'Poppins-Bold',
    color: '#fff',
  },
});

export default CheckoutScreen;

import React, { useState } from 'react'; 
import { ScrollView, StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import { CreditCardView } from 'react-native-credit-card-input';

const PaymentScreen = () => {
  const navigation = useNavigation();
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('');
  const [upiId, setUpiId] = useState('');

  const handlePaymentMethodSelect = (method) => {
    setSelectedPaymentMethod(prevMethod => (prevMethod === method ? '' : method));
  };

  const renderPaymentMethodDropdown = (method, label, placeholder, buttonText) => (
    selectedPaymentMethod === method && (
      <View style={styles.dropdownContent}>
        <View style={styles.separator} />
        <Text style={styles.upiLabel}>{label}</Text>
        <TextInput
          style={styles.upiInput}
          placeholder={placeholder}
          placeholderTextColor="#888"
          value={upiId}
          onChangeText={setUpiId}
        />
        <TouchableOpacity style={styles.continueButton}>
          <Text style={styles.continueText}>{buttonText}</Text>
        </TouchableOpacity>
      </View>
    )
  );

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Header */}
      <View style={styles.headerContainer}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate('Cart')}>
          <Icon name="arrow-back" size={24} color="#000" style={styles.backIcon} />
        </TouchableOpacity>
        <Text style={styles.header}>Payment</Text>
      </View>

      {/* Credit/Debit Card Section */}
      <View style={styles.cardSection}>
        <View style={styles.creditContainer}>
          <Text style={styles.creditTitle}>Credit/Debit Card</Text>
          <TouchableOpacity
            style={styles.addCardContainer}
            onPress={() => navigation.navigate('creditcardform')}
          >
            <Icon name="add" size={24} color="#04764e" style={styles.addIcon} />
            <Text style={styles.addText}>Add Card</Text>
          </TouchableOpacity>
        </View>

        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.cardScrollContainer}>
          <CreditCardView type="visa" number="5444 5445 4445 5545" expiry="10/25" cvc="555" name="Roopa Smith" style={styles.cardView} />
          <CreditCardView type="visa" number="5326 1234 5678 9101" expiry="11/26" cvc="123" name="John Doe" style={styles.cardView} />
        </ScrollView>
      </View>

      {/* Payment Options */}
      {['cashOnDelivery', 'googlePay', 'wallet', 'netbanking'].map((method) => (
        <View key={method} style={styles.accordia}>
          <TouchableOpacity style={styles.paymentOption} onPress={() => handlePaymentMethodSelect(method)}>
            <View style={{ flexDirection: 'row' }}>
              <Icon name={method === 'cashOnDelivery' ? 'payment' : method === 'googlePay' ? 'credit-card' : method === 'wallet' ? 'wallet-giftcard' : 'account-balance'} size={24} color="#000" />
              <Text style={styles.paymentText}>{method === 'cashOnDelivery' ? 'Cash on Delivery (Cash/UPI)' : method === 'googlePay' ? 'Google Pay/Phone Pay/BHIM UPI' : method === 'wallet' ? 'Payments/Wallet' : 'Netbanking'}</Text>
            </View>
            <View style={styles.radioButton}>
              {selectedPaymentMethod === method && <View style={styles.radioSelected} />}
            </View>
          </TouchableOpacity>

          {renderPaymentMethodDropdown(
            method,
            method === 'cashOnDelivery' ? 'Carry on your cash payment.. Thanx!' : `Link via UPI:`,
            method === 'cashOnDelivery' ? '' : 'Enter your UPI ID',
            method === 'cashOnDelivery' ? '' : 'Continue'
          )}
        </View>
      ))}

      <TouchableOpacity style={styles.submitButton}>
        <Text style={styles.submitButtonText}>CONTINUE</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flexGrow: 1, padding: 16, backgroundColor: '#fff' },
  headerContainer: {
    flexDirection: 'row', alignItems: 'center', justifyContent: 'center', paddingVertical: 10,
    borderBottomWidth: 1, borderBottomColor: '#ddd', backgroundColor: '#fff',
  },
  backButton: { position: 'absolute', left: 16 },
  backIcon: { backgroundColor: 'rgba(4, 118, 78, 0.4)', borderRadius: 20, padding: 4 },
  header: { fontSize: 18, fontWeight: 'bold', color: '#333', fontFamily: 'Poppins-Bold' },
  cardSection: { marginTop: 10, marginBottom: 20,  },
  cardScrollContainer: { paddingRight: 10,  },
  creditContainer: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  creditTitle: { fontSize: 16, marginBottom: 8, color: '#000', fontFamily: 'Poppins-Bold' },
  addCardContainer: { flexDirection: 'row', alignItems: 'center' },
  addIcon: { marginRight: 10, marginBottom:2 },
  addText: { fontSize: 16, color: '#04764e', fontFamily: 'Poppins-Regular' },
  cardView: { alignSelf: 'center', marginTop: 15, marginRight:10 },
  accordia: { borderRadius: 16, borderColor: '#04764e', borderWidth: 1, marginBottom: 10 },
  paymentOption: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: 5, marginVertical: 10 },
  paymentText: { fontSize: 16, marginLeft: 10, fontFamily: 'Poppins-Regular' },
  radioButton: { width: 20, height: 20, borderRadius: 10, borderWidth: 2, borderColor: '#000', justifyContent: 'center', alignItems: 'center' },
  radioSelected: { width: 12, height: 12, borderRadius: 6, backgroundColor: '#000' },
  dropdownContent: { backgroundColor: '#fff', marginBottom: 10, padding: 13 },
  separator: { height: 1, backgroundColor: '#04764e', width: '100%' },
  upiLabel: { fontSize: 14, marginBottom: 8, padding: 13, fontFamily: 'Poppins-Regular' },
  upiInput: { backgroundColor: '#fff', borderColor: '#ccc', borderWidth: 1, borderRadius: 8, padding: 10, marginBottom: 10 },
  continueButton: { backgroundColor: '#04764e', borderRadius: 22, padding: 12, alignItems: 'center' },
  continueText: { color: '#fff', fontWeight: '600', fontFamily: 'Poppins-Regular' },
  submitButton: { backgroundColor: '#04764e', padding: 16, borderRadius: 40, alignItems: 'center', marginTop: '70%' },
  submitButtonText: { fontSize: 16, fontWeight: 'bold', color: '#fff', fontFamily: 'Poppins-Bold' },
});

export default PaymentScreen;

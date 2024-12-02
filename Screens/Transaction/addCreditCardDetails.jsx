import React, { useState } from 'react';
import {
  ScrollView,
  StyleSheet,
  TextInput,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  CreditCardView,
  CreditCardInput,
  LiteCreditCardInput,
} from 'react-native-credit-card-input';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';
const CreditCardForm = () => {
  const [useLiteInput, setUseLiteInput] = useState(false);
  const [focusedField, setFocusedField] = useState();
  const [formData, setFormData] = useState();
  const [cardName, setCardName] = useState('');
  const navigation = useNavigation();
  const handleAddCard = () => {
    alert('Card Added!');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Header */}
      <View style={styles.headerContainer}>
        <TouchableOpacity style={styles.backButton}>
          <Icon
            name="arrow-back"
            size={24}
            color="#000"
            style={{ backgroundColor: 'rgba(4, 118, 78, 0.3)', borderRadius: 20, padding: 4 }}
            onPress={() => {
              navigation.navigate('checkout');
            }}
          />
        </TouchableOpacity>
        <Text style={styles.header}>Add Card</Text>
      </View>

      {/* Credit Card Preview */}
      <CreditCardView
        focusedField={focusedField}
        type={formData?.values?.type}
        number={formData?.values?.number}
        expiry={formData?.values?.expiry}
        cvc={formData?.values?.cvc}
        name={cardName}
        style={styles.cardView}
      />

      {/* Cardholder Name Field */}
      <View style={styles.cardNamefieldContainer}>
        <Text style={styles.cardNamelabelStyle}>Cardholder Name</Text>
        <TextInput
          style={styles.cardNameinputField}
          placeholder="Enter cardholder name"
          placeholderTextColor="#999"
          value={cardName}
          onChangeText={setCardName}
        />
      </View>

      {/* Credit Card Input Fields */}
      <View style={styles.fieldContainer}>
        {useLiteInput ? (
          <LiteCreditCardInput
            autoFocus
            inputStyle={styles.inputField}
            labelStyle={styles.labelStyle} // Apply label styling for lowercase and black color
            onChange={setFormData}
            onFocusField={setFocusedField}
          />
        ) : (
          <CreditCardInput
            autoFocus
            inputStyle={styles.inputField}
            labelStyle={styles.labelStyle} // Apply label styling for lowercase and black color
            onChange={setFormData}
            onFocusField={setFocusedField}
          />
        )}
      </View>

      {/* Add Card Button */}
      <TouchableOpacity style={styles.submitButton} onPress={handleAddCard}>
        <Text style={styles.submitButtonText}>Add Card</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#f0f0f0',
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 15,
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
    fontWeight: 'bold',
    color: '#333',
  },
  cardView: {
    alignSelf: 'center',
    marginVertical: 15,
  },
  cardNamefieldContainer:{

  },
  fieldContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    margin: 10,
    color: '#333',
  },
  cardNamelabel: {
    fontSize: 16,
    fontWeight: 'bold',
    margin: 10,
    color: '#000',
  },
  inputField: {
    backgroundColor: '#ffffff',
    borderRadius: 8,
    padding: 10,
    fontSize: 16,
    color: '#333',
    borderWidth: 1,
    borderColor: '#ccc',
  },
  cardNameinputField: {
    backgroundColor: '#ffffff',
    borderRadius: 8,
    padding: 5,
    fontSize: 16,
    marginLeft:15,
    color: '#333',
    width:'95%',
    borderWidth: 1,
    borderColor: '#ccc',
  },
  labelStyle: {
    fontSize: 14,
    textTransform: 'lowercase', // Ensure labels are lowercase
    color: '#8A8A8A', // Set label color to black
    fontFamily:'Poppins-Regular'
  },
  cardNamelabelStyle: {
    fontSize: 14,
    marginTop:10,
    marginLeft:15,
    textTransform: 'lowercase', // Ensure labels are lowercase
    color: '#8A8A8A', // Set label color to black
    fontFamily:'Poppins-Regular'
  },
  submitButton: {
    backgroundColor: '#04764E',
    padding: 16,
    borderRadius: 30,
    alignItems: 'center',
    marginTop: '50%',
  },
  submitButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default CreditCardForm;

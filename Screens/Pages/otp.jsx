import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const OPTScreen = ({navigation}) => {
  const [otp, setOtp] = useState(['', '', '', '']); // To store the 4 OTP digits

  const handleChange = (text, index) => {
    if (text.length <= 1) {
      const newOtp = [...otp];
      newOtp[index] = text;
      setOtp(newOtp);

      // Automatically focus the next input
      if (text && index < otp.length - 1) {
        const nextInput = `otpInput${index + 1}`;
        this[nextInput]?.focus();
      }
    }
  };

  return (
    <View style={styles.container}>
      {/* Logo */}

      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon
            name="arrow-back"
            size={24}
            color="#000"
            style={styles.backButton}
          />
        </TouchableOpacity>
        <View style={styles.logoContainer}>
          <Image
            source={require('../../assets/logo.png')} // Replace with your logo
            style={styles.logo}
            resizeMode="contain"
          />
        </View>
        <TouchableOpacity></TouchableOpacity>
      </View>

      {/* Sign In Text */}

      <View
        style={{
          paddingHorizontal: 20,
          paddingTop: 20,
          marginLeft: 10,
        }}>
      <Text style={styles.title}>Enter Code</Text>
      <Text style={styles.subtitle}>
        An Authentication Code Has Sent To info@examplegmail.com
      </Text>

      <View style={{flexDirection: 'row', alignSelf: 'center'}}>
        {otp.map((_, index) => (
          <TextInput
            key={index}
            ref={ref => (this[`otpInput${index}`] = ref)}
            style={styles.input}
            keyboardType="numeric"
            maxLength={1}
            value={otp[index]}
            onChangeText={text => handleChange(text, index)}
          />
        ))}
      </View>
      <TouchableOpacity>
        <Text style={styles.createAccountText}>
          If you don’t receive code!{' '}
          <Text style={styles.underline}>Resend</Text>
        </Text>
      </TouchableOpacity>

      {/* Login Button */}
      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.loginButtonText}>VERIFY AND PROCEED</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text style={styles.createAccountText}>
          Back to <Text style={styles.underline}>Sign In</Text>
        </Text>
      </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  logoContainer: {
    alignItems: 'center',
  },
  logo: {
    width: 100,
    height: 100,
  },
  title: {
    fontSize: 24,
    color: '#333',
    textAlign: 'center',
    marginBottom: 10,
    fontFamily: 'Poppins-Bold', // Using Poppins-Bold
  },
  subtitle: {
    fontSize: 12,
    color: '#666',
    textAlign: 'center',
    fontFamily: 'Poppins-Regular',
    marginBottom: 30,
  },
  iconRight: {
    marginLeft: 10,
    marginTop: 20,
    color: '#666',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  headerText: {
    fontSize: 18,
    fontFamily: 'Poppins-Bold',
    color: '#000',
  },
  backButton: {
    marginLeft: 15,
    backgroundColor: 'rgba(4, 118, 78, 0.3)',
    borderRadius: 20,
    padding: 5,
  },
  menuButton: {
    padding: 8,
  },
  underline: {
    fontFamily: 'Poppins-SemiBold',
    textDecorationLine: 'underline',
    color: '#007E33',
  },
  borderInputWrapper: {},
  sectionTitle: {
    fontSize: 14,
    borderColor: '#ddd',
    marginLeft: 5,
    fontFamily: 'Poppins-Regular',
  },
  borderInput: {
    marginBottom: 15,
    paddingHorizontal: 5,
    borderBottomWidth: 1,
    borderColor: '#ddd',
    fontFamily: 'Poppins-Regular', // Using Poppins-Bold
    paddingBottom: 15,
  },
  input: {
    width: 50,
    height: 50,
    borderBottomWidth: 1,
    borderColor: '#ddd',
    textAlign: 'center',
    fontSize: 20,
    marginRight: 8,
    color: '#007E33',
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    marginBottom: 15,
    paddingHorizontal: 10,
  },
  eyeIconContainer: {
    padding: 5,
  },
  loginButton: {
    backgroundColor: '#007E33',
    paddingVertical: 12,
    borderRadius: 30,
    alignItems: 'center',
    marginTop: '85%',
  },
  loginButtonText: {
    fontSize: 16,
    color: '#fff',
    fontFamily: 'Poppins-Bold', // Using Poppins-Bold
  },
  linksContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginBottom: 20,
  },
  link: {
    fontSize: 14,
    color: '#007E33',
    fontFamily: 'Poppins-Regular', // Using Poppins-Bold
    marginRight: 10,
  },
  createAccountText: {
    textAlign: 'center',
    fontSize: 12,
    color: '#666',
    marginBottom: 10,
    fontFamily: 'Poppins-Regular', // Using Poppins-Bold
    marginTop: 5,
  },
  createAccountButton: {
    backgroundColor: '#fddc99',
    paddingVertical: 12,
    borderRadius: 30,
    alignItems: 'center',
  },
  createAccountButtonText: {
    fontSize: 8,
    color: '#333',
    fontFamily: 'Poppins-Bold', // Using Poppins-Bold
  },
});

export default OPTScreen;

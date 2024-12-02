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

const SignIn = ({navigation}) => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  return (
    <View style={styles.container}>
      {/* Logo */}

      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={24} color="#000" style={styles.backButton} />
        </TouchableOpacity>
        <View style={styles.logoContainer}>
        <Image
          source={require('../../assets/logo.png')} // Replace with your logo
          style={styles.logo}
          resizeMode="contain"
        />
      </View>
        <TouchableOpacity>
         
        </TouchableOpacity>
      </View>
      
      

      {/* Sign In Text */}
<View style={{
    paddingHorizontal: 20,
    paddingTop: 20,
    marginLeft: 10,}}>
      <Text style={styles.title}>Sign In</Text>
      <Text style={styles.subtitle}>
        Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit, Sed Do Eiusmod
        Tempor
      </Text>
      <Text style={styles.sectionTitle}>Username</Text>
      <View style={[styles.borderInputWrapper]}>
        <TextInput
          style={[styles.borderInput]}
          placeholder="John"
          placeholderTextColor="#999"
        />
      </View>

      {/* Password Input */}
      <Text style={styles.sectionTitle}>Email</Text>
      <View
        style={[
          {flexDirection: 'row', marginBottom: 10},
          styles.borderInputWrapper,
        ]}>
        <TextInput
          style={[styles.input, styles.borderInput]}
          placeholder="example@email.com"
          secureTextEntry
          placeholderTextColor="#999"
        />
        <Icon name="visibility-off" size={20} style={[styles.iconRight]} />
      </View>

      {/* Login Button */}
      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.loginButtonText}>LOGIN</Text>
      </TouchableOpacity>

      {/* Forgot Password and Create Account Links */}
      <View style={styles.linksContainer}>
        <TouchableOpacity>
          <Text style={styles.link}>Forgot Password?</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.link}>Reset Password</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity>
        <Text style={styles.createAccountText}>Dont have any account?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.createAccountButton}>
        <Text style={styles.createAccountButtonText}>CREATE AN ACCOUNT</Text>
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
    textAlign: 'left',
    marginBottom: 10,
    fontFamily: 'Poppins-Bold',
  },
  subtitle: {
    fontSize: 12,
    color: '#666',
    textAlign: 'left',
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
    backgroundColor: 'rgba(4, 118, 78, 0.3)', borderRadius: 20, padding: 4
  },
  menuButton: {
    padding: 8,
  },
  borderInputWrapper: {},
  borderInput: {
    paddingHorizontal: 5,
    borderBottomWidth: 1,
    borderColor: '#ddd',
    fontFamily: 'Poppins-Regular', // Using Poppins-Bold
    paddingBottom: 15,
  },
  input: {
    flex: 1,
    padding: 10,
    color: '#000',
    fontFamily: 'Poppins-Regular', // Using Poppins-Bold
  },
  sectionTitle: {
    fontSize: 14,
    borderColor: '#ddd',
    marginLeft: 5,
    fontFamily: 'Poppins-Regular',
    marginTop: 10,
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
    marginBottom: 20,
    marginTop: 20,
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
    fontSize: 14,
    color: '#666',
    marginBottom: 10,
    fontFamily: 'Poppins-Regular', // Using Poppins-Bold
    marginTop: 10,
  },
  createAccountButton: {
    backgroundColor: '#fddc99',
    paddingVertical: 12,
    borderRadius: 30,
    alignItems: 'center',
  },
  createAccountButtonText: {
    fontSize: 16,
    color: '#333',
    fontFamily: 'Poppins-Bold', // Using Poppins-Bold
  },
});

export default SignIn;

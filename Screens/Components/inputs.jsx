import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Slider from '@react-native-community/slider';
import { Button, Menu, Divider, Provider } from 'react-native-paper';

const InputsScreen = ({navigation}) => {
  const [sliderValue, setSliderValue] = useState(2); // Default is Large

  // Labels for slider
  const sliderLabels = ['Small', 'Medium', 'Large', 'Extra Large'];
  return (
    <ScrollView style={styles.container}>
     <View style={styles.headerContainer}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
          accessible={true}
          accessibilityLabel="Go back">
          <Icon name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={{fontSize: 18, color: '#000', fontFamily: 'Poppins-Bold'}}>
          Input
        </Text>
        <TouchableOpacity
          style={styles.menuButton}
          onPress={() => console.log('Menu button pressed')}>
          {/* Placeholder for future menu button functionality */}
        </TouchableOpacity>
      </View>
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <Icon name="layers" size={28} color="#fff" style={{marginTop: 10, marginRight:10}} />
          <Text style={styles.headerText}>Bootstrap Elements</Text>
        </View>
        <Button
          mode="outlined"
          style={styles.headerButton}
          labelStyle={styles.headerButtonText}>
          Input Style
        </Button>
      </View>

      {/* Classic Input */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Classic Input</Text>
        <View style={styles.inputWrapper}>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.inputWithIcon}
              placeholder="Enter Username"
              placeholderTextColor="#999"
            />
          </View>
        </View>
        <View style={styles.inputWrapper}>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.inputWithIcon}
              placeholder="Enter Email"
              placeholderTextColor="#999"
            />
          </View>
        </View>
        <View style={styles.inputWrapper}>
          <View style={styles.passwordContainer}>
            <TextInput
              style={styles.input}
              placeholder="Type Password Here"
              placeholderTextColor="#999"
              secureTextEntry
            />
            <Icon name="visibility-off" size={20} style={styles.icon} />
          </View>
        </View>
      </View>

      {/* Input with Icon */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Input With Icon</Text>
        <View style={styles.inputWrapper}>
          <View style={styles.inputContainer}>
            <Icon name="person" size={20} style={styles.iconLeft} />
            <TextInput
              style={styles.inputWithIcon}
              placeholder="Enter Username"
              placeholderTextColor="#999"
            />
          </View>
        </View>
        <View style={styles.inputWrapper}>
          <View style={styles.inputContainer}>
            <Icon name="email" size={20} style={styles.iconLeft} />
            <TextInput
              style={styles.inputWithIcon}
              placeholder="Enter Email"
              placeholderTextColor="#999"
            />
          </View>
        </View>
        <View style={styles.inputWrapper}>
          <View style={styles.inputContainer}>
            <Icon name="lock" size={20} style={styles.iconLeft} />
            <TextInput
              style={styles.inputWithIcon}
              placeholder="Type Password Here"
              placeholderTextColor="#999"
              secureTextEntry
            />
            <Icon name="visibility-off" size={20} style={styles.iconRight} />
          </View>
        </View>
      </View>

      {/* Input with Different Sizes */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Input With Different Sizes</Text>

        {/* Small Input */}
        <View style={[styles.inputWrapper, styles.smallInputWrapper]}>
          <TextInput
            style={[styles.input, styles.smallInput]}
            placeholder="Small Input"
            placeholderTextColor="#999"
          />
        </View>

        {/* Medium Input */}
        <View style={styles.inputWrapper}>
          <TextInput
            style={[styles.input, styles.mediumInput]}
            placeholder="Medium Input"
            placeholderTextColor="#999"
          />
        </View>

        {/* Large Input */}
        <View style={[styles.inputWrapper, styles.largeInputWrapper]}>
          <TextInput
            style={[styles.input, styles.largeInput]}
            placeholder="Large Input"
            placeholderTextColor="#999"
          />
        </View>
      </View>

      {/* Rounded Input */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Rounded Input</Text>
        <View style={[styles.inputWrapper, styles.roundedWrapper]}>
          <View style={styles.inputContainer}>
            <TextInput
              style={[styles.inputWithIcon, {marginLeft: 10}]}
              placeholder="Enter Username"
              placeholderTextColor="#999"
            />
          </View>
        </View>
        <View style={[styles.inputWrapper, styles.roundedWrapper]}>
          <View style={styles.inputContainer}>
            <TextInput
              style={[styles.inputWithIcon, {marginLeft: 10}]}
              placeholder="Enter Email"
              placeholderTextColor="#999"
            />
          </View>
        </View>
        <View style={[styles.inputWrapper, styles.roundedWrapper]}>
          <View style={styles.passwordContainer}>
            <TextInput
              style={[styles.input, styles.roundedInput]}
              placeholder="Type Password Here"
              placeholderTextColor="#999"
              secureTextEntry
            />
            <Icon name="visibility-off" size={20} style={styles.icon} />
          </View>
        </View>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Border Input</Text>

        {/* Username Input */}
        <View style={styles.borderInputWrapper}>
          <TextInput
            style={[styles.input, styles.borderInput]}
            placeholder="Enter Username"
            placeholderTextColor="#999"
          />
        </View>

        {/* Email Input */}
        <View style={[styles.borderInputWrapper]}>
          <TextInput
            style={[styles.input, styles.borderInput]}
            placeholder="Enter Email"
            placeholderTextColor="#999"
          />
        </View>

        {/* Password Input */}
        <View style={[{flexDirection:'row', }, styles.borderInputWrapper]}>
          <TextInput
            style={[styles.input, styles.borderInput]}
            placeholder="Type Password Here"
            secureTextEntry
            placeholderTextColor="#999"
          />
          <Icon name="visibility-off" size={20} style={styles.iconRight} />
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Range Slider</Text>
        <Slider
          style={styles.slider}
          minimumValue={1}
          maximumValue={4}
          step={1}
          value={sliderValue}
          onValueChange={(value) => setSliderValue(value)}
          minimumTrackTintColor="#4caf50"
          maximumTrackTintColor="#ddd"
          thumbTintColor="#4caf50"
        />
        <View style={[styles.sliderLabels, {marginBottom:10}]}>
          {sliderLabels.map((label, index) => (
            <Text
              key={index}
              style={[
                styles.sliderLabel,
                sliderValue === index + 1 && styles.activeSliderLabel,
              ]}
            >
              {label}
            </Text>
          ))}
        </View>
      </View>

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  backButton: {
    padding: 8,
  },
  headerText: {
    fontSize: 18,
    color: '#000',
    fontFamily: 'Poppins-Bold', // Using Poppins-Bold
  },
  menuButton: {
    padding: 8,
  },
  header: {
    backgroundColor: '#6a11cb',
    borderRadius: 8,
    margin: 15,
    padding: 10,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    marginBottom: 5,
  },
  headerContent: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 0,
  },
  headerButton: {
    borderColor: '#fff',
    borderRadius: 6,
    width: 180,
    marginLeft: 40,
  },
  headerButtonText: {
    color: '#fff',
    fontSize: 12,
    fontFamily: 'Poppins-Regular', // Using Poppins-Regular
  },
  section: {
    margin:15,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius:8,
  },
  sectionTitle: {
    fontSize: 18,
    padding:15,
    fontWeight: '600',
    marginBottom: 10,
    borderBottomWidth: 1,
    borderColor: '#ddd',
    paddingBottom:10,
  },
 separator: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 10,
    borderBottomWidth: 1,
    borderColor: '#ddd',
    paddingBottom:10,
    paddingHorizontal:-10
  },
  inputWrapper: {
    borderWidth: 1,
    
    borderColor: '#ddd',
    borderRadius: 5,
    margin:10,
    padding: 5,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    padding: 10,
    color: '#000',
  },
  borderInputWrapper:{
    marginLeft:15,
    marginRight:15
  },
  inputWithIcon: {
    flex: 1,
    paddingVertical: 10,
    color: '#000',
  },
  iconLeft: {
    marginRight: 10,
    color: '#666',
  },
  iconRight: {
    marginLeft: 10,
    marginTop:20,
    color: '#666',
  },
  smallInputWrapper: {
    paddingVertical: 10,
  },
  smallInput: {
    height: 25,
    fontSize: 12,
    padding: 5,
  },
  borderInput: {
    paddingHorizontal: 5,
    borderBottomWidth: 1,
    borderColor: '#ddd',
    paddingBottom: 15,
  },
  /* Medium Input */
  mediumInput: {
    height: 40,
    fontSize: 14,
    padding: 8,
  },
  /* Large Input */
  largeInputWrapper: {
    paddingVertical: 10,
  },
  largeInput: {
    fontSize: 18,
    padding: 10,
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  roundedWrapper: {
    borderRadius: 50,
  },
  roundedInput: {
    borderRadius: 50,
  },
  icon: {
    position: 'absolute',
    right: 10,
    color: '#666',
  },
  slider: {
    width: "100%",
    height: 40,
  },
  sliderLabels: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 10,
  },
  sliderLabel: {
    fontSize: 14,
    color: "#999",
  },
  activeSliderLabel: {
    fontWeight: "bold",
    color: "#4caf50",
  },
});

export default InputsScreen;

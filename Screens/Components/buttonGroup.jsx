import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Button, Menu, Divider, Provider } from 'react-native-paper';

const ButtonsGroup = ({navigation}) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [dropdownVisibility, setDropdownVisibility] = useState({
    dropdown1: false,
    dropdown2: false,
    dropdown3: false,
  });
  const [selectedOption, setSelectedOption] = useState('Dropdown');

  const openMenu = (dropdown) => {
    setDropdownVisibility((prevState) => ({
      ...prevState,
      [dropdown]: true,
    }));
  };
  const closeMenu = (dropdown) => {
    setDropdownVisibility((prevState) => ({
      ...prevState,
      [dropdown]: false,
    }));
  };

  const handleSelectOption = (option) => {
    setSelectedOption(option);
    closeMenu('dropdown1'); // Close the specific dropdown after selection
  };

  const handleButtonPress = (index) => {
    setSelectedIndex(index);
    console.log('Selected Index:', index);
  };

  return (
    <Provider>
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
          accessible={true}
          accessibilityLabel="Go back">
          <Icon name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={{fontSize: 18, color: '#000', fontFamily: 'Poppins-Bold'}}>
          Buttons Group
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
          Button Group Style
        </Button>
      </View>

      {/* Buttons Section with Border */}
      <View style={styles.sectionBorder}>
        <Text style={styles.sectionTitle}>Button Group</Text>
        <View style={styles.line}></View>
        <View style={[styles.buttonRow]}>
          <View style={{flexDirection: 'row',borderRadius:10, marginBottom:15,  backgroundColor: '#035e3e' }}>
          {['Left', 'Middle', 'Right'].map((label, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.button,
                selectedIndex === index && styles.selectedButton,
              ]}
              onPress={() => handleButtonPress(index)}>
              <Text
                style={[
                  styles.buttonText,
                  selectedIndex === index && styles.selectedButtonText,
                ]}>
                {label}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
      </View>
      <View style={styles.sectionBorder}>
        <Text style={styles.sectionTitle}>Button Group Sizes</Text>
        <View style={styles.line}></View>
        <View style={styles.buttonRow}>
        <View style={{flexDirection: 'row',borderRadius:10, marginBottom:15,  backgroundColor: '#035e3e' }}>
          {['Left', 'Middle', 'Right'].map((label, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.button,
                selectedIndex === index && styles.selectedButton,
              ]}
              onPress={() => handleButtonPress(index)}>
              <Text
                style={[
                  styles.buttonText,
                  selectedIndex === index && styles.selectedButtonText,
                ]}>
                {label}
              </Text>
            </TouchableOpacity>
          ))}
         </View>
          <View style={{flexDirection: 'row',borderRadius:10, paddingHorizontal:-5,paddingVertical:-20,  backgroundColor: '#035e3e' }}>
            {['Left', 'Middle', 'Right'].map((label, index) => (
              <TouchableOpacity
                key={index}
                style={[
                  styles.buttonMiddle,
                  selectedIndex === index && styles.selectedButton,
                ]}
                onPress={() => handleButtonPress(index)}>
                <Text
                  style={[
                    styles.buttonText,
                    selectedIndex === index && styles.selectedButtonText,
                  ]}>
                  {label}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
          <View style={{flexDirection:'row', marginLeft:5, borderRadius:10, paddingHorizontal:-5,paddingVertical:-20, backgroundColor: '#035e3e'}}>
            {['Left', 'Middle', 'Right'].map((label, index) => (
              <TouchableOpacity
                key={index}
                style={[
                  styles.buttonSmall,
                  selectedIndex === index && styles.selectedButton,
                ]}
                onPress={() => handleButtonPress(index)}>
                <Text
                  style={[
                    styles.buttonText,
                    selectedIndex === index && styles.selectedButtonText,
                  ]}>
                  {label}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </View>
      {/* Button Nesting Section */}
      <View style={styles.sectionBorder}>
          <Text style={styles.sectionTitle}>Button Nesting</Text>
          <View style={styles.line}></View>
          <View style={[styles.buttonRow, {borderRadius:10,  backgroundColor: '#035e3e',}]}>
            <Button mode="contained" style={[styles.button,{paddingHorizontal:3}]}>1</Button>
            <Button mode="contained" style={[styles.button,{paddingHorizontal:3}]}>2</Button>
            <Menu
              visible={dropdownVisibility.dropdown1}
              onDismiss={() => closeMenu('dropdown1')}
              anchor={
                <Button mode="contained" onPress={() => openMenu('dropdown1')} style={[styles.button,]}>
                  {selectedOption} <Icon name="arrow-drop-down" size={20} style={{marginTop:10}} />
                </Button>
              }
            >
              <Menu.Item onPress={() => handleSelectOption('Dropdown 1')} title="Dropdown 1" />
              <Menu.Item onPress={() => handleSelectOption('Dropdown 2')} title="Dropdown 2" />
              <Divider />
              <Menu.Item onPress={() => handleSelectOption('Dropdown 3')} title="Dropdown 3" />
            </Menu>
          </View>
        </View>

        {/* Vertical Dropdown Section */}
        <View style={styles.sectionBorder}>
          <Text style={styles.sectionTitle}>Vertical Dropdown Variation</Text>
          <View style={styles.line}></View>
          <View style={[styles.buttonColumn, {borderRadius:10, marginLeft:15, marginBottom:15, paddingVertical:5, width:'50%',  backgroundColor: '#035e3e',}]}>
            <Button mode="contained" style={styles.columnButton}>Button</Button>
            <Button mode="contained" style={styles.columnButton}>Button</Button>
            <Menu
              visible={dropdownVisibility.dropdown2}
              onDismiss={() => closeMenu('dropdown2')}
              anchor={
                <Button mode="contained" onPress={() => openMenu('dropdown2')} style={styles.columnButton}>
                  Dropdown <Icon name="arrow-drop-down" size={20} />
                </Button>
              }
            >
              <Menu.Item onPress={() => handleSelectOption('Dropdown 1')} title="Dropdown 1" />
              <Menu.Item onPress={() => handleSelectOption('Dropdown 2')} title="Dropdown 2" />
              <Divider />
              <Menu.Item onPress={() => handleSelectOption('Dropdown 3')} title="Dropdown 3" />
            </Menu>
            <Button mode="contained" style={styles.columnButton}>Button</Button>
          </View>
        </View>
      </ScrollView>
    </Provider>
    
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f5f5f5',
    borderWidth: 2,
    borderColor: '#ccc',
    borderRadius: 8,
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
  sectionTitle: {
    padding:16,
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'Poppins-Bold',
    color: '#333',
  },
  buttonRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    marginBottom: 20,
    marginHorizontal: 12,
    backgroundColor: '#fff',
    borderRadius: 15,
    alignItems: 'center',
  },
  sectionBorder: {
    margin:15,
    marginBottom: 15,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
  },
  button: {
    backgroundColor: '#035e3e',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 5,
    fontFamily: 'Poppins-Bold',
  },
  buttonMiddle: {
    backgroundColor: '#035e3e',
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
    fontFamily: 'Poppins-Bold',
  },
  buttonSmall: {
    backgroundColor: '#035e3e',
    paddingVertical: 10,
    paddingHorizontal: 2,
    borderRadius: 5,
    fontFamily: 'Poppins-Bold',
  },
  selectedButton: {
    backgroundColor: '#04764E',
    borderColor: '#04764E',
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,
    fontFamily: 'Poppins-Bold',
  },
  columnButton: {
    borderRadius:2,
    backgroundColor: '#035e3e',
  },
  selectedButtonText: {
    color: '#fff',
  },
  buttonSizingGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#035e3e',
    borderRadius: 5,
    padding: 5,
  },
  sizingButton: {
    flex: 1,
    paddingVertical: 10,
    marginHorizontal: 5,
    backgroundColor: '#035e3e',
    borderRadius: 5,
  },
  nestedButtonGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#035e3e',
    padding: 10,
    borderRadius: 5,
  },
  nestedButton: {
    flex: 1,
    marginHorizontal: 5,
    backgroundColor: '#04764E',
  },
  verticalButtonGroup: {
    backgroundColor: '#035e3e',
    borderRadius: 5,
    padding: 10,
  },
  verticalButtonWrapper: {
    marginBottom: 10,
  },
  line: {
    borderTopWidth: 1,
    borderColor: '#ddd',
    marginBottom: 10,
  }, 
});

export default ButtonsGroup;

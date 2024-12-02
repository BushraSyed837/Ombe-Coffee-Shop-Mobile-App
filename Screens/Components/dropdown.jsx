import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {Menu, Button, Divider, Provider} from 'react-native-paper';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';

const DropdownUI = ({navigation}) => {
  const [visible, setVisible] = useState(false);
  const [popupVisible, setPopupVisible] = useState(false);
  const [visibleMenu, setVisibleMenu] = useState(null);

  const openMenu = menuKey => setVisibleMenu(menuKey); // Open specific dropdown
  const closeMenu = () => setVisibleMenu(null); // Close dropdown
  const togglePopup = () => setPopupVisible(!popupVisible); // Toggle popup visibility

  const toggleMenu = menu => {
    setVisibleMenu(visibleMenu === menu ? null : menu);
  };
  const DropdownButtons = ({
    title,
    color,
    width,
    icon,
    menuStyle,
    options,
    alignItems,
  }) => (
    <View style={[styles.dropdownContainer, {alignItems: alignItems}]}>
      <Menu
        visible={visibleMenu === title}
        onDismiss={closeMenu}
        anchor={
          <Button
            mode="contained"
            onPress={() => toggleMenu(title)}
            style={[styles.button, {backgroundColor: color, minWidth: width}]}
            contentStyle={styles.contentStyle}>
            <View style={styles.row}>
              <Text style={styles.buttonText}>{title}</Text>
              <Icon name={icon} size={20} style={styles.icon} />
            </View>
          </Button>
        }
        style={menuStyle}>
        {options.map((option, index) => (
          <Menu.Item key={index} onPress={() => {}} title={option} />
        ))}
      </Menu>
    </View>
  );

  const DropdownButton = ({title, color, width, iconBackground}) => (
    <View style={styles.dropdownContainer}>
      <Menu
        visible={visibleMenu === title}
        onDismiss={closeMenu}
        anchor={
          <TouchableOpacity
            style={[
              styles.dropdownButton,
              {backgroundColor: color, minWidth: width},
            ]}
            onPress={() => openMenu(title)}>
            <Text style={styles.dropdownText}>{title}</Text>
            <Icon
              name="arrow-drop-down"
              size={20}
              style={[
                styles.dropdownIcon,
                {
                  backgroundColor: iconBackground,
                  borderTopRightRadius: 8,
                  borderBottomRightRadius: 8,
                },
              ]}
            />
          </TouchableOpacity>
        }>
        <Menu.Item onPress={() => {}} title="Option 1" />
        <Menu.Item onPress={() => {}} title="Option 2" />
        <Menu.Item onPress={() => {}} title="Option 3" />
      </Menu>
    </View>
  );

  return (
    <Provider>
      <ScrollView contentContainerStyle={styles.container}>
        {/* Header */}
        <View style={styles.headerContainer}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.goBack()}>
            <Icon name="arrow-back" size={24} color="#000" />
          </TouchableOpacity>
          <Text style={styles.headerText}>Dropdown</Text>
          <TouchableOpacity style={styles.menuButton}>
            {/* Placeholder for menu functionality */}
          </TouchableOpacity>
        </View>
        <View style={styles.header}>
          <View style={styles.headerContent}>
            <Icon
              name="layers"
              size={28}
              color="#fff"
              style={{marginRight: 10}}
            />
            <Text style={styles.headerText}>Bootstrap Elements</Text>
          </View>
          <Button
            mode="outlined"
            style={styles.headerButton}
            labelStyle={styles.headerButtonText}>
            Dropdown Style
          </Button>
        </View>

        {/* Basic Dropdown */}
        <View style={styles.section}>
          <Text style={styles.title}>Basic Dropdown</Text>
          <Text style={styles.description}>
            A dropdown menu is a toggleable menu that allows the user to choose
            one value from a predefined list.
          </Text>
          <View style={{padding: 15}}>
            <Menu
              visible={visibleMenu === 'BasicDropdown'}
              onDismiss={closeMenu}
              anchor={
                <Button
                  mode="contained"
                  onPress={() => openMenu('BasicDropdown')}
                  style={styles.button}
                  contentStyle={styles.contentStyle}>
                  <View style={styles.row}>
                    <Text style={styles.buttonText}>Dropdown Button</Text>
                    <Icon
                      name="arrow-drop-down"
                      size={20}
                      style={styles.icon}
                    />
                  </View>
                </Button>
              }>
              <Menu.Item onPress={() => {}} title="Option 1" />
              <Menu.Item onPress={() => {}} title="Option 2" />
              <Menu.Item onPress={() => {}} title="Option 3" />
            </Menu>
          </View>
        </View>

        {/* Dropdown Divider */}
        <View style={styles.section}>
          <Text style={styles.title}>Dropdown Divider</Text>
          <Text style={styles.description}>
            The <Text style={styles.bold}>.dropdown-divider</Text> class is used
            to separate links inside the dropdown menu with a thin horizontal
            border.
          </Text>
          <View style={{padding: 15}}>
            <Menu
              visible={visibleMenu === 'DropdownDivider'}
              onDismiss={closeMenu}
              anchor={
                <Button
                  mode="contained"
                  onPress={() => openMenu('DropdownDivider')}
                  style={styles.button}
                  contentStyle={styles.contentStyle}>
                  <View style={styles.row}>
                    <Text style={styles.buttonText}>Dropdown Button</Text>
                    <Icon
                      name="arrow-drop-down"
                      size={20}
                      style={styles.icon}
                    />
                  </View>
                </Button>
              }>
              <Menu.Item onPress={() => {}} title="Option 1" />
              <Divider />
              <Menu.Item onPress={() => {}} title="Option 2" />
              <Divider />
              <Menu.Item onPress={() => {}} title="Option 3" />
            </Menu>
          </View>
        </View>

        {/* Button Dropdowns */}
        <View style={styles.section}>
          <Text style={styles.title}>Button Dropdowns</Text>
          <View style={{padding: 5}}>
            <View style={[styles.row, {justifyContent: 'space-between'}]}>
              <DropdownButton
                title="Primary"
                color="#035e3e"
                width={100}
                iconBackground={'#04764E'}
              />
              <DropdownButton
                title="Secondary"
                color="#F6DBB3"
                width={110}
                iconBackground={'#f7dfbb'}
              />
              <DropdownButton
                title="Success"
                color="#159E42"
                width={100}
                iconBackground={'#2ca855'}
              />
            </View>
            <View style={[styles.row, {padding: 5}]}>
              <DropdownButton
                title="Info"
                color="#4cb1ff"
                width={100}
                iconBackground={'#5eb9ff'}
              />
              <DropdownButton
                title="Warning"
                color="#FF8730"
                width={100}
                iconBackground={'#ff994f'}
              />
              <DropdownButton
                title="Danger"
                color="#CC0D39"
                width={100}
                iconBackground={'#DC3545'}
              />
            </View>
          </View>
        </View>

        {/* Popup */}
        <View style={styles.section}>
          <Text style={styles.title}>Dropup</Text>
          <Text style={styles.description}>
            The <Text style={styles.bold}>.dropup</Text> class makes the
            dropdown menu expand upwards instead of downwards.
          </Text>
          <View
            style={[
              styles.row,
              { justifyContent: 'flex-start', marginLeft:10, padding:5, marginBottom:10},

            ]}>
            {/* Dropup Button */}
            <Menu
              visible={visibleMenu === 'SplitDropup'}
              onDismiss={closeMenu}
              anchor={
                <TouchableOpacity
                  style={[styles.dropdownButton, {backgroundColor: '#04764E',}]}
                  onPress={() => openMenu('SplitDropup')}>
                  <Text style={[styles.dropdownText, {paddingLeft:5}]}>Dropup</Text>
                  <Icon
                    name="arrow-drop-up"
                    size={20}
                    style={styles.dropdownIcon}
                  />
                </TouchableOpacity>
              }>
              <Menu.Item onPress={() => {}} title="Option 1" />
              <Menu.Item onPress={() => {}} title="Option 2" />
              <Menu.Item onPress={() => {}} title="Option 3" />
            </Menu>

            {/* Split Dropup Button */}
            <Menu
              visible={visibleMenu === 'SplitDropup'}
              onDismiss={closeMenu}
              anchor={
                <TouchableOpacity
                  style={[styles.dropdownButton, {backgroundColor: '#04764E'}]}
                  onPress={() => openMenu('SplitDropup')}>
                  <Text style={styles.dropdownText}>Split Dropup</Text>
                  <Icon
                    name="arrow-drop-up"
                    size={20}
                    style={[styles.dropdownIcon, {backgroundColor:"#035e3e",borderTopRightRadius: 8,
                      borderBottomRightRadius: 8, }]}
                  />
                </TouchableOpacity>
              }>
              <Menu.Item onPress={() => {}} title="Option 1" />
              <Menu.Item onPress={() => {}} title="Option 2" />
              <Menu.Item onPress={() => {}} title="Option 3" />
            </Menu>
          </View>
        </View>

        {/* Dropright */}
        <View style={styles.section}>
          <Text style={styles.title}>Dropright</Text>
          <Text style={styles.description}>
            Expands to the right of the button.
          </Text>
          <View
            style={[
              styles.row,
              { justifyContent: 'flex-start', marginLeft:10, padding:5, marginBottom:10},

            ]}>
            {/* Dropup Button */}
            <Menu
              visible={visibleMenu === 'SplitDropup'}
              onDismiss={closeMenu}
              anchor={
                <TouchableOpacity
                  style={[styles.dropdownButton, {backgroundColor: '#04764E',}]}
                  onPress={() => openMenu('SplitDropup')}>
                  <Text style={[styles.dropdownText, {paddingLeft:5}]}>Dropright</Text>
                  <Icon
                    name="arrow-right"
                    size={20}
                    style={styles.dropdownIcon}
                  />
                </TouchableOpacity>
              }>
              <Menu.Item onPress={() => {}} title="Option 1" />
              <Menu.Item onPress={() => {}} title="Option 2" />
              <Menu.Item onPress={() => {}} title="Option 3" />
            </Menu>

            {/* Split Dropup Button */}
            <Menu
              visible={visibleMenu === 'SplitDropup'}
              onDismiss={closeMenu}
              anchor={
                <TouchableOpacity
                  style={[styles.dropdownButton, {backgroundColor: '#04764E'}]}
                  onPress={() => openMenu('SplitDropup')}>
                  <Text style={styles.dropdownText}>Split Dropright</Text>
                  <Icon
                    name="arrow-right"
                    size={20}
                    style={[styles.dropdownIcon, {backgroundColor:"#035e3e",borderTopRightRadius: 8,
                      borderBottomRightRadius: 8, }]}
                  />
                </TouchableOpacity>
              }>
              <Menu.Item onPress={() => {}} title="Option 1" />
              <Menu.Item onPress={() => {}} title="Option 2" />
              <Menu.Item onPress={() => {}} title="Option 3" />
            </Menu>
          </View>
        </View>

        {/* Dropstart */}
        <View style={styles.section}>
          <Text style={styles.title}>Dropstart</Text>
          <Text style={styles.description}>
            Expands to the left of the button.
          </Text>
          <View
            style={[
              styles.row,
              { justifyContent: 'flex-end', marginLeft:10, padding:5, marginBottom:10},

            ]}>
            {/* Dropup Button */}
            <Menu
              visible={visibleMenu === 'SplitDropup'}
              onDismiss={closeMenu}
              anchor={
                <TouchableOpacity
                  style={[styles.dropdownButton, {backgroundColor: '#04764E',}]}
                  onPress={() => openMenu('SplitDropup')}>
                    <Icon
                    name="arrow-left"
                    size={20}
                    style={styles.dropdownIcon}
                  />
                  <Text style={[styles.dropdownText, {paddingRight:10}]}>Dropright</Text>
                  
                </TouchableOpacity>
              }>
              <Menu.Item onPress={() => {}} title="Option 1" />
              <Menu.Item onPress={() => {}} title="Option 2" />
              <Menu.Item onPress={() => {}} title="Option 3" />
            </Menu>

            {/* Split Dropup Button */}
            <Menu
              visible={visibleMenu === 'SplitDropup'}
              onDismiss={closeMenu}
              anchor={
                <TouchableOpacity
                  style={[styles.dropdownButton, {backgroundColor: '#04764E', }]}
                  onPress={() => openMenu('SplitDropup')}>
                    <Icon
                    name="arrow-left"
                    size={20}
                    style={[styles.dropdownIcon, {backgroundColor:"#035e3e",borderTopLeftRadius: 8,
                      borderBottomLeftRadius: 8, marginRight:5}]}
                  />
                  <Text style={[styles.dropdownText,{ marginRight:10}]}>Split Dropright</Text>
                  
                </TouchableOpacity>
              }>
              <Menu.Item onPress={() => {}} title="Option 1" />
              <Menu.Item onPress={() => {}} title="Option 2" />
              <Menu.Item onPress={() => {}} title="Option 3" />
            </Menu>
          </View>
        </View>
      </ScrollView>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#F5F5F5',
    flexGrow: 1,
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
    fontFamily: 'Poppins-Bold',
  },
  menuButton: {
    padding: 8,
  },
  header: {
    backgroundColor: '#6a11cb',
    padding: 16,
    borderRadius: 8,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    marginBottom: 20,
  },
  headerContent: {
    flexDirection: 'row',
    fontFamily: 'Poppins-Bold',
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
  },
  section: {
    borderWidth: 1,
    borderColor: '#ddd',

    backgroundColor: '#FFF',
    borderRadius: 8,
    marginBottom: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,

    padding: 15,
  },
  description: {
    fontSize: 14,
    color: '#6A6A6A',
    marginBottom: 10,

    padding: 15,
    borderBottomWidth: 1,
    paddingBottom: 10,
    borderColor: '#ddd',
  },
  buttonContent: {
    flexDirection: 'row', // Makes the text and icon sit next to each other
  },
  buttonText: {
    fontSize: 16, // Ensure consistent font size
    color: '#FFF', // Adjust text color to match your button
    marginRight: 5, // Adds space between text and icon
  },
  icon: {
    color: '#FFF', // Adjust icon color to match your button
    backgroundColor: 'red',
  },
  bold: {
    fontWeight: 'bold',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  button: {
    marginHorizontal: 5,
    flex: 1,
  },
  buttondropdown: {
    marginHorizontal: 2, // Adds spacing between buttons
    borderRadius: 6,
  },
  primary: {
    backgroundColor: '#007BFF',
  },
  secondary: {
    backgroundColor: '#6C757D',
  },
  success: {
    backgroundColor: '#28A745',
  },
  info: {
    backgroundColor: '#17A2B8',
  },
  warning: {
    backgroundColor: '#FFC107',
  },
  danger: {
    backgroundColor: '#DC3545',
  },
  button: {
    backgroundColor: '#007B45', // Green background color
    borderRadius: 8, // Rounded corners
    width: '60%',
    paddingVertical: 5,
    lineHeight: 20, // Match icon height
  },
  dropupMenu: {
    position: 'absolute',
    top: -150, // Adjust this value based on your layout
  },
  contentStyle: {
    flexDirection: 'row', // Align text and icon horizontally
    justifyContent: 'center',
    alignItems: 'center', // Align items vertically in the center
  },
  row: {
    flexDirection: 'row', // Aligns text and icon horizontally
    alignItems: 'center', // Ensures vertical alignment
  },
  buttonText: {
    color: 'white', // White text color
    fontSize: 14, // Font size matching the design
    fontWeight: 'bold', // Bold text
    lineHeight: 20, // Match icon height
  },
  icon: {
    color: 'white', // White icon color
  },
  dropdownContainer: {
    flex: 1,
    marginHorizontal: 5,
  },
  dropdownButton: {
    flexDirection: 'row', // Align text and icon in a row
    alignItems: 'center', // Vertically center text and icon
    justifyContent: 'space-between', // Space out text and icon
    borderRadius: 8, // Rounded corners
    shadowColor: '#000', // Shadow for elevation
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
    marginRight: 10, // Minimum width to accommodate text and icon properly
  },
  dropdownText: {
    fontSize: 15, // Font size for text
    fontWeight: '600', // Bold text for better visibility
    color: '#FFF', // White text color for contrast
    marginLeft: 10,
  },
  dropdownIcon: {
    color: '#FFF', // White icon color to match text
    marginLeft: 5, // Space between text and icon
    paddingVertical: 12,
  },
  dropdownContainers: {
    flex: 1,
    marginHorizontal: 5,
  },
  dropupMenu: {
    position: 'absolute',
    top: -150, // Shift upwards
  },
  droprightMenu: {
    position: 'absolute',
    left: 120, // Shift to the right
  },
  dropstartMenu: {
    position: 'absolute',
    right: 120, // Shift to the left
  },
});

export default DropdownUI;

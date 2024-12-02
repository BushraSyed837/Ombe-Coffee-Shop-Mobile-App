import React, {useState, useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {Button, Menu, Divider, Provider} from 'react-native-paper';
import Icons from 'react-native-vector-icons/MaterialIcons';
const Scrollspy = ({navigation}) => {
  const [activeSection, setActiveSection] = useState('First');
  const [visible, setVisible] = useState(false); // State for dropdown visibility
  const scrollViewRef = useRef(null);

  const SECTION_HEIGHT = 300; // Fixed height for sections

  const sections = [
    { id: 'First', label: 'First', content: "This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It's repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting." },
    { id: 'Second', label: 'Second', content: "This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It's repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting." },
    { id: 'Third', label: 'Third', content: "This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It's repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting." },
    { id: 'Fourth', label: 'Fourth', content: "This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It's repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting." },
    { id: 'Fifth', label: 'Fifth', content: "This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It's repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting." },
  ];

  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);

  // Handle the scroll event to track the current section
  const handleScroll = (event) => {
    const scrollY = event.nativeEvent.contentOffset.y;
    const activeIndex = Math.floor(scrollY / SECTION_HEIGHT);

    if (sections[activeIndex]) {
      setActiveSection(sections[activeIndex].id);
    }
  };

  // Scroll to the given section when the navbar button is clicked
  const scrollToSection = (sectionId) => {
    const sectionIndex = sections.findIndex((section) => section.id === sectionId);
    if (sectionIndex !== -1 && scrollViewRef.current) {
      setActiveSection(sectionId);
      scrollViewRef.current.scrollTo({
        y: sectionIndex * SECTION_HEIGHT,
        animated: true,
      });
    }
    closeMenu(); // Close dropdown menu if open
  };


  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.headerContainer}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Scrollspy</Text>
        <TouchableOpacity style={styles.menuButton}>
          {/* Placeholder for menu functionality */}
        </TouchableOpacity>
      </View>
      <View style={styles.headerTop}>
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
          Scrollspy Style
        </Button>
      </View>

      {/* Navbar Scrollspy */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Navbar Scrollspy</Text>
        <View style={styles.line}></View>
        <SafeAreaView style={styles.navContainer}>
          {/* Navbar */}
          <View style={styles.navbar}>
            {sections.slice(0, 2).map(section => (
              <TouchableOpacity
                key={section.id}
                onPress={() => scrollToSection(section.id)}
                style={[
                  styles.navButton,
                  activeSection === section.id && styles.activeNavButton,
                ]}>
                <Text
                  style={[
                    styles.navButtonText,
                    activeSection === section.id && styles.activeNavText,
                  ]}>
                  {section.label}
                </Text>
              </TouchableOpacity>
            ))}
            <Provider>
              {/* Dropdown menu for the 3rd, 4th, and 5th sections */}
              <Menu
                visible={visible}
                onDismiss={closeMenu}
                style={{top: 25, left: 5, right: 40}}
                anchor={
                  <TouchableOpacity
                    style={[
                      styles.dropdownButton,
                      (activeSection === 'Third' ||
                        activeSection === 'Fourth' ||
                        activeSection === 'Fifth') &&
                        styles.activeNavButton,
                    ]}
                    onPress={openMenu}>
                    <Text
                      style={[
                        styles.dropdownText,
                        (activeSection === 'Third' ||
                          activeSection === 'Fourth' ||
                          activeSection === 'Fifth') &&
                          styles.activeNavText,
                      ]}>
                      Dropdown
                    </Text>
                    <Icons
                      name="arrow-drop-down"
                      size={20}
                      style={[
                        styles.dropdownIcon,
                        (activeSection === 'Third' ||
                          activeSection === 'Fourth' ||
                          activeSection === 'Fifth') && {color: '#fff'},
                      ]}
                    />
                  </TouchableOpacity>
                }>
                {sections.slice(2).map(section => (
                  <Menu.Item
                    key={section.id}
                    onPress={() => {
                      scrollToSection(section.id); // Navigate to the section
                      closeMenu(); // Close the dropdown
                    }}
                    title={section.label}
                    titleStyle={styles.menuItemText} // Style for menu item text
                    style={styles.menuItem} // Style for menu item container
                  />
                ))}
                <Divider style={styles.menuDivider} />
              </Menu>
            </Provider>
          </View>

          {/* Scrollable Content */}
          <ScrollView
            ref={scrollViewRef}
            onScroll={handleScroll}
            scrollEventThrottle={13} // Ensure the scroll event fires frequently
            contentContainerStyle={styles.scrollContainer}>
            {sections.map(section => (
              <View key={section.id} style={styles.sectionContent}>
                <Text style={styles.heading}>{section.label}</Text>
                <Text style={styles.content}>{section.content}</Text>
              </View>
            ))}
          </ScrollView>
        </SafeAreaView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FA',
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
  headerTop: {
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
    margin: 20,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#ddd',
  },
  sectionTitle: {
    fontSize: 16,
    fontFamily: 'Poppins-Bold',
    padding: 13,
    color: '#000',
  },
  line: {
    borderTopWidth: 1,
    borderColor: '#ddd',
  },
  navContainer: {
    backgroundColor: '#fff',
  },
  navbar: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    backgroundColor: '#eeeeee',
    padding: 10,
  },
  navButton: {
    padding: 8,
    borderRadius: 5,
  },
  activeNavButton: {
    backgroundColor: '#04764E',
  },
  navButtonText: {
    fontSize: 16,
    color: '#000',
  },
  activeNavText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  scrollContainer: {
    paddingBottom: 10, // Add bottom padding to avoid cutoff
  },
  sectionContent: {
    height: 300, // Set fixed height for sections
    padding: 20, // Adjusted padding inside each section
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    justifyContent: 'center',
  },
  heading: {
    fontSize: 18,
    fontFamily: 'Poppins-Bold',
    color: '#000',
    marginBottom: 5,
  },
  content: {
    color: '#000',
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
  },
  dropdownButton: {
    flexDirection: 'row', // Align text and icon in a row
    alignItems: 'center', // Vertically center text and icon
    justifyContent: 'flex-start',
  },
  dropdownText: {
    fontSize: 15,
    color: '#000', // White text color for contrast
    marginLeft: 10,
  },
  dropdownIcon: {
    color: '#000', // Space between text and icon
    paddingVertical: 10,
  },
  menuItem: {
    paddingVertical: 10, // Add padding for menu items
    paddingHorizontal: 15, // Horizontal padding
  },
  menuItemText: {
    fontSize: 16, // Font size for item text
    color: '#333', // Text color
  },
  menuDivider: {
    height: 1, // Divider height
    backgroundColor: '#ccc', // Divider color
  },
});

export default Scrollspy;

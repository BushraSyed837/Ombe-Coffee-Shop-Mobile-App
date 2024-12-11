import React from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import {useNavigation} from '@react-navigation/native';

const componentsData = [
  {
    category: 'User Components',
    components: [
      {name: 'Header Style', icon: 'layout', screen: 'HeaderScreen'},
    ],
  },
  {
    category: 'Bootstrap Components',
    components: [
      {name: 'Accordion', icon: 'bold', screen: 'Accordion'},
      {name: 'Alerts', icon: 'bold', screen: 'Alerts'},
      {name: 'Avatar', icon: 'bold', screen: 'Avatar'},
      {name: 'Badges', icon: 'bold', screen: 'Badges'},
      {name: 'Breadcrumb', icon: 'bold', screen: 'Breadcrumb'},
      {name: 'Buttons', icon: 'bold', screen: 'Buttons'},
      {name: 'Button Group', icon: 'bold', screen: 'ButtonGroup'},
      {name: 'Cards', icon: 'bold', screen: 'Cards'},
      {name: 'Inputs', icon: 'bold', screen: 'Inputs'},
      {name: 'Dropdowns', icon: 'bold', screen: 'Dropdowns'},
      {name: 'Dynamic Icon', icon: 'bold', screen: 'DynamicIcons'},
      {name: 'Collapse', icon: 'bold', screen: 'Collapse'},
      {name: 'Radio Button', icon: 'bold', screen: 'RadioButton'},
      {name: 'Timeline', icon: 'bold', screen: 'Timeline'},
      {name: 'Social', icon: 'bold', screen: 'Social'},
      {name: 'List Group', icon: 'bold', screen: 'ListGroup'},
      {name: 'Modal', icon: 'bold', screen: 'Modal'},
      {name: 'Tabs', icon: 'bold', screen: 'Tabs'},
      {name: 'Switch', icon: 'bold', screen: 'Switch'},
      {name: 'Divider', icon: 'bold', screen: 'Divider'},
      {name: 'Stepper', icon: 'bold', screen: 'Stepper'},
      {name: 'Offcanvas', icon: 'bold', screen: 'Offcanvas'},
      {name: 'Pagination', icon: 'bold', screen: 'Pagination'},
      {name: 'Placeholders', icon: 'bold', screen: 'Placeholders'},
      {name: 'Progress', icon: 'bold', screen: 'Progress'},
      {name: 'Scrollspy', icon: 'bold', screen: 'Scrollspy'},
      {name: 'Spinners', icon: 'bold', screen: 'Spinners'},
      {name: 'Toasts', icon: 'bold', screen: 'Toasts'},
      {name: 'Typography', icon: 'bold', screen: 'Typography'},
      {name: 'Lightgallery', icon: 'bold', screen: 'Lightgallery'},
      {name: 'DynamicIcon', icon: 'bold', screen: 'DynamicIcons'},
    ],
  },
];

const ComponentsScreen = () => {
  const navigation = useNavigation();

  const renderComponent = ({item}) => (
    <TouchableOpacity
      style={styles.componentItem}
      onPress={() => navigation.navigate(item.name)} // Navigate to the respective screen
    >
      <View style={styles.iconContainer}>
        <Feather
          name={item.icon}
          size={24}
          color="#FFFFFF"
          style={{fontWeight: 'bold'}}
        />
      </View>
      <Text style={styles.componentName}>{item.name}</Text>
      <Icon name="chevron-right" size={20} color="#000" onPress={()=>{navigation.goBack()}}/>
    </TouchableOpacity>
  );

  const renderCategory = ({item}) => (
    <View>
      <Text style={styles.categoryName}>{item.category}</Text>
      <FlatList
        data={item.components}
        renderItem={renderComponent}
        keyExtractor={component => component.name}
      />
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Feather name="arrow-left" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Components</Text>
        <TouchableOpacity></TouchableOpacity>
      </View>

      <FlatList
        data={componentsData}
        renderItem={renderCategory}
        keyExtractor={item => item.category}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'Poppins-Bold', // Apply Poppins-Bold here
    color: '#000',
  },
  categoryName: {
    marginHorizontal: 16,
    marginTop: 20,
    marginBottom: 8,
    fontSize: 16,
    fontFamily: 'Poppins-Bold', // Apply Poppins-Bold here
    color: '#333',
  },
  componentItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  iconContainer: {
    width: 32,
    height: 32,
    borderRadius: 10,
    backgroundColor: '#04764e',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  componentName: {
    flex: 1,
    fontSize: 16,
    fontFamily: 'Poppins-Regular', // Apply Poppins-Regular here
    color: '#000',
  },
});

export default ComponentsScreen;

import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Switch,
  TouchableOpacity,
  Image,
  Animated,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {List, Button, Badge} from 'react-native-paper';

const Logout = ({navigation}) => {
  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.headerContainer}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Switch</Text>
        <TouchableOpacity style={styles.menuButton}>
          {/* Placeholder for menu functionality */}
        </TouchableOpacity>
      </View>
     
      {/* Bootstrap Switches */}
      <View style={styles.section}>
        
      </View>
    </ScrollView>
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
    margin: 16,
    backgroundColor: 'white',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
  },

  sectionTitle: {
    fontSize: 16,
    fontFamily: 'Poppins-Bold', // Using Poppins-Bold
    padding: 13,
    color: '#000',
  },
  line: {
    borderTopWidth: 1,
    borderColor: '#ddd',
    marginBottom: 10,
  },  
  switchRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    marginLeft: 20,
  },
  label: {
    fontSize: 16,
    marginLeft: 10,
    fontFamily: 'Poppins-Regular',
  },
  switchContainer: {
    width: 40,
    height: 20,
    borderRadius: 15,
    padding: 2,
    justifyContent: 'center',
  },
  knob: {
    width: 20,
    height: 20,
    borderRadius: 10,
  },
});

export default Logout;

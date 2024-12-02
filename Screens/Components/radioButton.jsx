import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {Menu, Button, Divider, Provider} from 'react-native-paper';

export default function RadioButton({navigation}) {
  const [squareSelected, setSquareSelected] = useState(null);
  const [circleSelected, setCircleSelected] = useState(null);

  const squareOptions = [
    'Radio button 01',
    'Radio button 02',
    'Radio button 03',
    'Radio button 04',
  ];
  const circleOptions = [
    'Radio button 01',
    'Radio button 02',
    'Radio button 03',
    'Radio button 04',
  ];

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.headerContainer}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Radio</Text>
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
          Radio Style
        </Button>
      </View>

      {/* Content */}
      <View style={styles.content}>
        {/* Square Radio Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Square Radio</Text>
          <View
            style={{
              borderBottomWidth: 1,
              borderColor: '#ddd',
              marginBottom: 10,
            }}></View>
          {squareOptions.map((option, index) => (
            <TouchableOpacity
              key={index}
              style={styles.radioContainer}
              onPress={() => setSquareSelected(index)}>
              <View
                style={[
                  styles.squareRadio,
                  squareSelected === index && styles.squareRadioSelected,
                ]}
              />
              <Text style={styles.radioLabel}>{option}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Circle Radio Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Circle Radio</Text>
          <View
            style={{
              borderBottomWidth: 1,
              borderColor: '#ddd',
              marginBottom: 10,
            }}></View>
          {circleOptions.map((option, index) => (
            <TouchableOpacity
              key={index}
              style={styles.radioContainer}
              onPress={() => setCircleSelected(index)}>
              <View
                style={[
                  styles.circleRadio,
                  circleSelected === index && styles.circleRadioSelected,
                ]}
              />
              <Text style={styles.radioLabel}>{option}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </View>
  );
}

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
  content: {
    flex: 1,
    padding: 15,
  },
  section: {
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 1 },
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 16,
    fontFamily: 'Poppins-Bold', // Using Poppins-Bold
    padding: 15,
    marginBottom: 5,
    color:'#000'
  },
  radioContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    paddingLeft: 15,
  },
  squareRadio: {
    width: 20,
    height: 20,
    borderWidth: 2,
    borderColor: '#6c757d',
    marginRight: 10,
  },
  squareRadioSelected: {
    backgroundColor: '#198754',
  },
  circleRadio: {
    width: 20,
    height: 20,
    borderWidth: 2,
    borderColor: '#6c757d',
    borderRadius: 10,
    marginRight: 10,
  },
  circleRadioSelected: {
    backgroundColor: '#198754',
  },
  radioLabel: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular', // Using Poppins-Regular
    color: '#6c757d',
  },
});


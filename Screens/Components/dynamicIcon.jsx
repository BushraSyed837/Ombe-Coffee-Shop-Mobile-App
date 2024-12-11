import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {List, Button, Badge} from 'react-native-paper';
import { NativeModules } from 'react-native';

const { IconChanger } = NativeModules;

const DynamicIcons = ({navigation}) => {

  const [currentIcon, setCurrentIcon] = useState('First');
  const changeIcon = (newIcon) => {
    const oldIcon = currentIcon !== newIcon ? currentIcon : null;
    IconChanger.changeIcon(newIcon, oldIcon)
      .then((result) => {
        setCurrentIcon(newIcon);
        Alert.alert('Success', `Icon changed to: ${newIcon}`);
      })
      .catch((error) => {
        Alert.alert('Error', `Failed to change icon: ${error.message}`);
      });
  };

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.headerContainer}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Dynamic Icons</Text>
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
          Switch Style
        </Button>
      </View>

      {/* Switches Colors */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Change App Icon</Text>
        <View style={styles.line}></View>
        <View style={styles.appContainer}>
          <View style={styles.grid}>
            <TouchableOpacity
              style={styles.iconButton}
              onPress={() => changeIcon('First')}>
              <Image
                source={require('../../assets/ic_icon1.png')}
                style={styles.icon}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.iconButton}
              onPress={() => changeIcon('Second')}>
              <Image
                source={require('../../assets/ic_icon2.png')}
                style={styles.icon}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.iconButton}
              onPress={() => changeIcon('Third')}>
              <Image
                source={require('../../assets/ic_icon3.png')}
                style={styles.icon}
              />
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.iconButton}
              onPress={() => changeIcon('Fourth')}>
              <Image
                source={require('../../assets/ic_icon4.png')}
                style={styles.icon}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.iconButton}
              onPress={() => changeIcon('Fifth')}>
              <Image
                source={require('../../assets/ic_icon5.png')}
                style={styles.icon}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.iconButton}
              onPress={() => changeIcon('Sixth')}>
              <Image
                source={require('../../assets/ic_icon6.png')}
                style={styles.icon}
              />
            </TouchableOpacity>
          </View>
        </View>
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
  appContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconButton: {
    width: 100,
    height: 100,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  icon: {
    width: 60,
    height: 60,
  },
});

export default DynamicIcons;

import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icons from 'react-native-vector-icons/Ionicons';
import {Menu, Button, Divider, Provider} from 'react-native-paper';

const SocialIconButton = ({name, iconName, color}) => {
  return (
    <TouchableOpacity style={[styles.button, {backgroundColor: color}]}>
      <Icon name={iconName} size={20} color="#fff" />
      <Text style={styles.buttonText}>{name}</Text>
    </TouchableOpacity>
  );
};

const RoundedIcon = ({iconName, color}) => {
  return (
    <View style={[styles.roundedIcon, {backgroundColor: color}]}>
      <Icon name={iconName} size={20} color="#fff" />
    </View>
  );
};

const CircleIcon = ({iconName, color}) => {
  return (
    <View style={[styles.circleIcon, {backgroundColor: color}]}>
      <Icon name={iconName} size={20} color="#fff" />
    </View>
  );
};

export default function Social({navigation}) {
  
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}>
          <Icons name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Social</Text>
        <TouchableOpacity style={styles.menuButton}></TouchableOpacity>
      </View>
      <View style={styles.headerTop}>
        <View style={styles.headerContent}>
          <Icons
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
          Social Style
        </Button>
      </View>

      {/*Social Icon Buttons With Name*/}
      <View
        style={{
          borderWidth: 1,
          borderColor: '#ddd',
          margin: 8,
          borderRadius: 8,
        }}>
        <Text style={[styles.title, {padding: 10}]}>
          Social Icon Buttons With Name
        </Text>
        <View style={{borderTopWidth: 1, borderColor: '#ddd'}}></View>
        <View style={[styles.row, {padding: 10}]}>
          <SocialIconButton
            name="Facebook"
            iconName="facebook"
            color="#3b5998"
          />
          <SocialIconButton name="Twitter" iconName="twitter" color="#1DA1F2" />
          <SocialIconButton name="Youtube" iconName="youtube" color="#FF0000" />
          <SocialIconButton
            name="Pinterest"
            iconName="pinterest"
            color="#E60023"
          />
          <SocialIconButton
            name="LinkedIn"
            iconName="linkedin"
            color="#0077B5"
          />
          <SocialIconButton
            name="Whatsapp"
            iconName="whatsapp"
            color="#25D366"
          />
        </View>
      </View>
      {/*Icons Rounded*/}
      <View
        style={{
          borderWidth: 1,
          borderColor: '#ddd',
          margin: 8,
          borderRadius: 8,
        }}>
        <Text style={[styles.title, {padding: 10}]}>Icons Rounded</Text>
        <View style={{borderTopWidth: 1, borderColor: '#ddd'}}></View>
        <View style={[styles.row, {padding: 10}]}>
          <RoundedIcon iconName="facebook" color="#3b5998" />
          <RoundedIcon iconName="twitter" color="#1DA1F2" />
          <RoundedIcon iconName="google" color="#DB4437" />
          <RoundedIcon iconName="linkedin" color="#0077B5" />
          <RoundedIcon iconName="whatsapp" color="#25D366" />
          <RoundedIcon iconName="envelope" color="#0078D4" />
        </View>
      </View>
      {/*Icons Circle*/}
      <View
        style={{
          borderWidth: 1,
          borderColor: '#ddd',
          margin: 8,
          borderRadius: 8,
        }}>
        <Text style={[styles.title, {padding: 10}]}>Icons Circle</Text>
        <View style={{borderTopWidth: 1, borderColor: '#ddd'}}></View>
        <View style={[styles.row, {padding: 10}]}>
          <CircleIcon iconName="facebook" color="#3b5998" />
          <CircleIcon iconName="twitter" color="#1DA1F2" />
          <CircleIcon iconName="google" color="#DB4437" />
          <CircleIcon iconName="linkedin" color="#0077B5" />
          <CircleIcon iconName="whatsapp" color="#25D366" />
          <CircleIcon iconName="envelope" color="#0078D4" />
        </View>
      </View>
      {/*Icon Sizes*/}
      <View
        style={{
          borderWidth: 1,
          borderColor: '#ddd',
          margin: 8,
          borderRadius: 8,
        }}>
        <Text style={[styles.title, {padding: 10}]}>Icon Sizes</Text>
        <View style={{borderTopWidth: 1, borderColor: '#ddd'}}></View>
        <View style={[styles.row, {padding: 10, justifyContent:'flex-start', }]}>
          <Icon
            name="facebook"
            size={20}
            color="#fff"
            style={[
              styles.roundedIcon,
              {padding: 10, marginRight:10},
              {
                width: 40,
                height: 40,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#3b5998',
              },
            ]}
          />
          <Icon
            name="twitter"
            size={40}
            color="#fff"
            style={[
              styles.roundedIcon,
              {padding: 10, marginRight:15},
              {
                width: 60,
                height: 60,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#1DA1F2',
              },
            ]}
          />
          <Icon
            name="google"
            size={65}
            color="#fff"
            style={[
              styles.roundedIcon,
              {padding: 10},
              {
                width: 80,
                height: 80,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#DB4437',
              },
            ]}
          />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#F3F4F6',
  },
  title: {
    fontSize: 16,
    marginBottom: 4,
    color: '#000000',
    fontFamily: 'Poppins-Bold', // Using Poppins-Regular
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 20,
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
    margin: 5,
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
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
    marginBottom: 10,
    width: '30%',
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,
    marginLeft: 8,
  },
  roundedIcon: {
    width: 40,
    height: 40,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  circleIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
});

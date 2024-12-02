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
import Icons from 'react-native-vector-icons/FontAwesome';
import {List, Button, Badge} from 'react-native-paper';

const Divider = ({navigation}) => {
  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.headerContainer}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Divider</Text>
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
          Icon Divider
        </Button>
      </View>

      {/* Bootstrap Switches */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Icon Divider</Text>
        <View style={styles.lines}></View>
        {/* First Divider */}
        <View style={styles.iconDivider}>
          <Icon name="home" size={24} color="#FFF" style={styles.iconhome} />

          <View style={[styles.line, {borderColor: '#4CAF50'}]} />
        </View>
        {/* Second Divider */}
        <View style={styles.iconDivider}>
          <View style={[styles.line, {borderColor: '#FFC107'}]} />
          <Icon name="heart" size={24} color="#fff" style={styles.iconHeart} />
          <View style={[styles.line, {borderColor: '#FFC107'}]} />
        </View>
        {/* Third Divider */}
        <View style={styles.iconDivider}>
          <View style={[styles.line, {borderColor: '#F44336'}]} />
          <Icons name="user" size={24} color="#FFF" style={styles.iconUser} />
        </View>
      </View>

      {/* Text Divider */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Text Divider</Text>
        <View style={styles.lines}></View>
        {/* First Divider */}
        <View style={styles.textDivider}>
          <Text
            style={[
              styles.text,
              {backgroundColor: '#4CAF50', padding: 2, color: '#FFF'},
            ]}>
            Primary
          </Text>
          <View style={[styles.line, {borderColor: '#4CAF50'}]} />
        </View>
        {/* Second Divider */}
        <View style={styles.textDivider}>
          <View style={[styles.line, {borderColor: '#4CAF50'}]} />
          <Text
            style={[
              styles.text,
              {backgroundColor: '#4CAF50', padding: 2, color: '#FFF'},
            ]}>
            SUCCESS
          </Text>
          <View style={[styles.line, {borderColor: '#4CAF50'}]} />
        </View>
        {/* Third Divider */}
        <View style={styles.textDivider}>
          <View style={[styles.line, {borderColor: '#FFC107'}]} />
          <Text
            style={[
              styles.text,
              {backgroundColor: '#FFC107', padding: 2, color: '#FFF'},
            ]}>
            Warning
          </Text>
        </View>
        {/* Fourth Divider */}
        <View style={styles.textDivider}>
          <View style={[styles.line, {borderColor: '#4CAF50'}]} />
          <Text style={[styles.text, {color: '#4CAF50'}]}>Primary</Text>
        </View>
        <View style={styles.textDivider}>
          <View style={[styles.line, {borderColor: '#4CAF50'}]} />
          <Text style={[styles.text, {color: '#4CAF50'}]}>SUCCESS</Text>
          <View style={[styles.line, {borderColor: '#4CAF50'}]} />
        </View>
        <View style={styles.textDivider}>
          <Text style={[styles.text, {color: '#FFC107'}]}>Warning</Text>
          <View style={[styles.line, {borderColor: '#FFC107'}]} />
        </View>
      </View>

      {/* Solid Divider */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Solid Divider</Text>
        <View style={styles.lines}></View>
        <View style={[styles.line, {borderColor: '#04764E'}]} />
        <View style={[styles.line, {borderColor: '#F6DBB3'}]} />
        <View style={[styles.line, {borderColor: '#159E42'}]} />
        <View style={[styles.line, {borderColor: '#4cb1ff'}]} />
        <View style={[styles.line, {borderColor: '#FF8730'}]} />
        <View style={[styles.line, {borderColor: '#CC0D39'}]} />
        <View style={[styles.line, {borderColor: '#EEEEEE'}]} />
        <View style={[styles.line, {borderColor: '#FFC107'}]} />
        <View style={[styles.line, {borderColor: '#000'}]} />
      </View>

      {/* Dashed Divider */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Dashed Divider</Text>
        <View style={styles.lines}></View>
        <View
          style={[styles.line, {borderColor: '#04764E', borderStyle: 'dashed'}]}
        />
        <View
          style={[styles.line, {borderColor: '#F6DBB3', borderStyle: 'dashed'}]}
        />
        <View
          style={[styles.line, {borderColor: '#159E42', borderStyle: 'dashed'}]}
        />
        <View
          style={[styles.line, {borderColor: '#4cb1ff', borderStyle: 'dashed'}]}
        />
        <View
          style={[styles.line, {borderColor: '#FF8730', borderStyle: 'dashed'}]}
        />
        <View
          style={[styles.line, {borderColor: '#CC0D39', borderStyle: 'dashed'}]}
        />
        <View
          style={[styles.line, {borderColor: '#EEEEEE', borderStyle: 'dashed'}]}
        />
        <View
          style={[styles.line, {borderColor: '#FFC107', borderStyle: 'dashed'}]}
        />
        <View
          style={[styles.line, {borderColor: '#000', borderStyle: 'dashed'}]}
        />
      </View>

      {/* Dotted Divider */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Dotted Divider</Text>
        <View style={styles.lines}></View>
        <View
          style={[styles.line, {borderColor: '#04764E', borderStyle: 'dotted'}]}
        />
        <View
          style={[styles.line, {borderColor: '#F6DBB3', borderStyle: 'dotted'}]}
        />
        <View
          style={[styles.line, {borderColor: '#159E42', borderStyle: 'dotted'}]}
        />
        <View
          style={[styles.line, {borderColor: '#4cb1ff', borderStyle: 'dotted'}]}
        />
        <View
          style={[styles.line, {borderColor: '#FF8730', borderStyle: 'dotted'}]}
        />
        <View
          style={[styles.line, {borderColor: '#CC0D39', borderStyle: 'dotted'}]}
        />
        <View
          style={[styles.line, {borderColor: '#EEEEEE', borderStyle: 'dotted'}]}
        />
        <View
          style={[styles.line, {borderColor: '#FFC107', borderStyle: 'dotted'}]}
        />
        <View
          style={[styles.line, {borderColor: '#000', borderStyle: 'dotted'}]}
        />
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
  lines: {
    borderTopWidth: 1,
    borderColor: '#ddd',
    marginBottom: 10,
  },
  iconDivider: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
    marginBottom: 8,
  },
  line: {
    flex: 1,
    height: 1,
    margin: 10,
    marginBottom: 15,
    backgroundColor: '#ddd',
    borderWidth: 1,
    borderColor: '#ddd',
  },
  textDivider: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
  },
  iconhome: {
    backgroundColor: '#4CAF50',
    padding: 5,
    borderRadius: 22,
  },
  iconHeart: {
    backgroundColor: '#FFC107',
    padding: 5,
    borderRadius: 22,
  },
  iconUser: {
    backgroundColor: '#F44336',
    padding: 5,
    borderRadius: 22,
  },
  text: {
    fontSize: 14,
    fontFamily: 'Poppins-Bold',
    marginHorizontal: 8,
  },
});

export default Divider;

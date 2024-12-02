import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Badge = ({ navigation }) => {
  const linkColors = [
    '#007bff',
    '#28a745',
    '#dc3545',
    '#ffc107',
    '#17a2b8',
    '#6c757d',
    '#f8f9fa',
  ];

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
        <Text style={[styles.headerText, styles.boldText]}>Badges</Text>
        <TouchableOpacity
          style={styles.menuButton}
          onPress={() => console.log('Menu button pressed')}>
          {/* Placeholder for future menu button functionality */}
        </TouchableOpacity>
      </View>

      <View style={styles.titleContainer}>
        <Text style={[styles.title, styles.boldText]}>Bootstrap Elements</Text>
        <Text style={[styles.subtitle, styles.regularText]}>Badge style</Text>
      </View>

      {/* Badge Section */}
      <View style={styles.badgeSection}>
        <Text style={styles.badgeTitle}>Badges</Text>
        <View style={styles.topWidth}>
          <View style={styles.badges}>
            {[
              'Primary',
              'Secondary',
              'Success',
              'Danger',
              'Warning',
              'Info',
              'Light',
              'Dark',
            ].map((badge, index) => (
              <Text
                key={index}
                style={[styles.badge, { backgroundColor: getBadgeColor(badge) }]}>
                {badge}
              </Text>
            ))}
          </View>
        </View>
      </View>

      {/* Badge Light Section */}
      <View style={styles.badgeSection}>
        <Text style={styles.badgeTitle}>Badges Light</Text>
        <View style={styles.topWidth}></View>
        <View style={styles.badges}>
          {[
            'Primary',
            'Secondary',
            'Success',
            'Danger',
            'Warning',
            'Info',
            'Light',
            'Dark',
          ].map((badge, index) => (
            <Text
              key={index}
              style={[
                styles.badgeLight,
                { backgroundColor: getLightBadgeColor(badge) },
              ]}>
              {badge}
            </Text>
          ))}
        </View>
      </View>

      {/* Badge Size Section */}
      <View style={styles.badgeSection}>
        <Text style={styles.badgeTitle}>Badges Size</Text>
        <View style={styles.topWidth}></View>
        <View style={styles.badgesizes}>
          {['xs', 'sm', 'md', 'lg', 'xl'].map((size, index) => (
            <Text
              key={index}
              style={[
                styles.badgeContainer,
                styles[size],
                { backgroundColor: getBadgeSizeColor(size) },
              ]}>
              {size}
            </Text>
          ))}
        </View>
      </View>

      {/* Link Badge Section */}
      <View style={styles.badgeSection}>
        <Text style={styles.badgeTitle}>Link Badge</Text>
        <View style={styles.topWidth}></View>
        <View style={styles.badges}>
          {['Links', 'Links', 'Links', 'Links', 'Links', 'Links', 'Links'].map(
            (badge, index) => (
              <TouchableOpacity
                key={index}
                style={[
                  styles.linkBadge,
                  { backgroundColor: linkColors[index % linkColors.length] },
                ]}>
                <Text style={styles.linkBadgeText}>{badge}</Text>
              </TouchableOpacity>
            ),
          )}
        </View>
      </View>
    </ScrollView>
  );
};

const getBadgeColor = badge => {
  const colors = {
    Primary: '#007bff',
    Secondary: '#6c757d',
    Success: '#28a745',
    Danger: '#dc3545',
    Warning: '#ffc107',
    Info: '#17a2b8',
    Light: '#f8f9fa',
    Dark: '#343a40',
  };
  return colors[badge] || '#007bff';
};

const getLightBadgeColor = badge => {
  const colors = {
    Primary: '#f0f8ff',
    Secondary: '#e9ecef',
    Success: '#d4edda',
    Danger: '#f8d7da',
    Warning: '#fff3cd',
    Info: '#d1ecf1',
    Light: '#fefefe',
    Dark: '#d6d8d9',
  };
  return colors[badge] || '#f0f8ff';
};

const getBadgeSizeColor = size => {
  const sizeColors = {
    xs: '#ffadad',
    sm: '#ffeb3b',
    md: '#28a745',
    lg: '#007bff',
    xl: '#dc3545',
  };
  return sizeColors[size] || '#007bff';
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
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
    fontFamily: 'Poppins-Bold', // Added Poppins Regular font
  },
  menuButton: {
    padding: 8,
  },
  titleContainer: {
    alignItems: 'flex-start',
    padding: 16,
    backgroundColor: '#6f42c1',
    borderRadius: 8,
    margin:10,
    marginBottom: 16,
  },
  title: {
    fontSize: 20,
    color:'#000',
    fontFamily: 'Poppins-Bold',
  },
  subtitle: {
    fontSize: 12,
    fontFamily: 'Poppins-Bold',
    color: '#f8f9fa',
  },
  badgeSection: {
    margin: 15,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    marginBottom: 16,
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  topWidth: {
    borderTopWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    marginHorizontal: -15,
    backgroundColor: '#fff',
    borderRadius: 15,
  },
  badgeTitle: {
    color: '#000',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    fontFamily: 'Poppins-Bold',
  },
  badges: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
  },
  badgesizes: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  badge: {
    paddingVertical: 5,
    paddingHorizontal: 15,
    margin: 5,
    borderRadius: 15,
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
    fontFamily: 'Poppins-Regular',
  },
  badgeContainer: {
    margin: 5,
    borderRadius: 15,
    color: '#fff',
    fontWeight: 'bold',
    fontFamily: 'Poppins-Regular',
  },
  badgeLight: {
    paddingVertical: 5,
    paddingHorizontal: 15,
    margin: 5,
    borderRadius: 15,
    color: '#000',
    fontSize: 14,
    fontWeight: 'bold',
    fontFamily: 'Poppins-Regular',
  },
  xs: {
    fontSize: 10,
    width: 30,
    height:10,
    textAlign: 'center',
    lineHeight: 10,
    backgroundColor: '#ffadad',
  },
  sm: {
    fontSize: 12,
    width: 40,
    height: 20,
    textAlign: 'center',
    lineHeight:20,
    backgroundColor: '#ffeb3b',
  },
  md: {
    fontSize: 14,
    width: 45,
    height:25,
    textAlign: 'center',
    lineHeight: 25,
    backgroundColor: '#28a745',
  },
  lg: {
    fontSize: 16,
    width: 60,
    height: 30,
    textAlign: 'center',
    lineHeight: 30,
    backgroundColor: '#007bff',
  },
  xl: {
    fontSize: 18,
    width: 70,
    height: 40,
    textAlign: 'center',
    lineHeight: 40,
    backgroundColor: '#dc3545',
  },
  linkBadge: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    margin: 5,
    borderRadius: 15,
  },
  linkBadgeText: {
    fontSize: 14,
    color: '#fff',
    fontFamily: 'Poppins-Bold',
  },
});

export default Badge;

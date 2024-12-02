import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Avatar = ({ navigation }) => {
  const avatars = [
    { uri: 'https://randomuser.me/api/portraits/men/1.jpg' },
    { uri: 'https://randomuser.me/api/portraits/women/1.jpg' },
    { uri: 'https://randomuser.me/api/portraits/men/2.jpg' },
    { uri: 'https://randomuser.me/api/portraits/women/2.jpg' },
    { uri: 'https://randomuser.me/api/portraits/men/3.jpg' },
    { uri: 'https://randomuser.me/api/portraits/women/3.jpg' },
  ];

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.headerContainer}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
          accessible={true}
          accessibilityLabel="Go back"
        >
          <Icon name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={[styles.headerText, styles.boldText]}>Avatar</Text>
        <View style={styles.menuButton} />
      </View>

      {/* Scrollable Content */}
      <ScrollView>
        {/* Bootstrap Banner */}
        <View style={styles.banner}>
          <Text style={[styles.bannerText, styles.boldText]}>
            Bootstrap Elements
          </Text>
          <Text style={[styles.bannerSubText, styles.regularText]}>
            Avatar style
          </Text>
        </View>

        {/* Sections */}
        <View style={styles.section}>
          <Text style={[styles.sectionTitle, styles.boldText]}>
            Default Avatar
          </Text>
          <View style={styles.borderedContainer}>
            <View style={styles.row}>
              {avatars.map((avatar, index) => (
                <Image key={index} source={avatar} style={styles.defaultAvatar} />
              ))}
            </View>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={[styles.sectionTitle, styles.boldText]}>
            Avatar Size
          </Text>
          <View style={styles.borderedContainer}>
            <View style={styles.row}>
              <Image source={avatars[0]} style={styles.smallAvatar} />
              <Image source={avatars[1]} style={styles.mediumAvatar} />
              <Image source={avatars[2]} style={styles.largeAvatar} />
              <Image source={avatars[3]} style={styles.extraLargeAvatar} />
            </View>
          </View>
        </View>

        {/* Updated Avatar List Section */}
        <View style={styles.section}>
          <Text style={[styles.sectionTitle, styles.boldText]}>
            Avatar List
          </Text>
          <View style={styles.borderedContainer}>
            <View style={styles.avatarListContainer}>
              {avatars.map((avatar, index) => (
                <Image
                  key={index}
                  source={avatar}
                  style={[styles.listAvatar, { marginLeft: -10 }]}
                />
              ))}
            </View>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={[styles.sectionTitle, styles.boldText]}>
            Avatar Status
          </Text>
          <View style={styles.borderedContainer}>
            <View style={styles.row}>
              {avatars.map((avatar, index) => (
                <View key={index} style={styles.statusWrapper}>
                  <Image source={avatar} style={styles.defaultAvatar} />
                  <View
                    style={[
                      styles.statusIndicator,
                      { backgroundColor: index % 2 === 0 ? 'green' : 'red' },
                    ]}
                  />
                </View>
              ))}
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between', // Aligns items evenly across the header
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
  backButton: {
    width: '20%', // Leave space for proper centering
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  menuButton: {
    width: '20%', // Leave space for proper centering
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  headerText: {
    fontSize: 20,
    color: '#000',
    textAlign: 'center',
    flex: 1, // Center text within the available space
  },
  boldText: {
    fontFamily: 'Poppins-Bold',
  },
  regularText: {
    fontFamily: 'Poppins-Regular',
  },
  banner: {
    backgroundColor: '#6a1b9a',
    padding: 16,
    borderRadius: 8,
    margin: 16,
  },
  bannerText: {
    fontSize: 18,
    color: '#fff',
  },
  bannerSubText: {
    color: '#ddd',
    marginTop: 4,
  },
  section: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 15,
    margin: 15,
    padding: 8,
  },
  sectionTitle: {
    fontSize: 16,
    padding: 5,
    color: '#000',
    marginBottom: 5,
    marginLeft: 16,
  },
  borderedContainer: {
    borderTopWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    marginHorizontal:-15,
    backgroundColor: '#fff',
    // Ensure it touches the container border
    borderRadius: 15,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 20,
    width:80,
  },
  avatarListContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    marginLeft: 15,
  },
  listAvatar: {
    width: 40,
    height: 40,
    borderWidth: 2,
    borderColor: '#fff',
    borderRadius: 12,
    marginRight: -10,
  },
  defaultAvatar: {
    width: 40,
    height: 40,
    borderRadius: 15,
    marginRight: 10,
  },
  smallAvatar: {
    width: 25,
    height: 25,
    borderRadius: 5,
    marginRight: 10,
  },
  mediumAvatar: {
    width: 50,
    height: 50,
    borderRadius: 15,
    marginRight: 10,
  },
  largeAvatar: {
    width: 65,
    height: 65,
    borderRadius: 20,
    marginRight: 10,
  },
  extraLargeAvatar: {
    width: 80,
    height: 80,
    borderRadius: 25,
    marginRight: 10,
  },
  statusWrapper: {
    position: 'relative',
  },
  statusIndicator: {
    width: 12,
    height: 12,
    borderRadius: 6,
    position: 'absolute',
    bottom: 0,
    right: 10,
    borderWidth: 1,
    borderColor: '#fff',
  },
});

export default Avatar;

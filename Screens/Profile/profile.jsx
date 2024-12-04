import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function Profile() {
  return (
    <View style={styles.container}>
      {/* Profile Section */}
      <View style={styles.profileSection}>
        <Image
          source={{ uri: 'https://randomuser.me/api/portraits/men/1.jpg' }}
          style={styles.profileImage}
        />
        <Text style={styles.profileName}>William Smith</Text>
        <Text style={styles.profileLocation}>London, England</Text>
      </View>

      {/* Contact Details */}
      <View style={styles.detailsSection}>
        {[
          { icon: 'phone', text: '+12 345 678 92' },
          { icon: 'email', text: 'example@gmail.com' },
          {
            icon: 'location-on',
            text: 'Franklin Avenue, Corner St. London, 24125151',
          },
        ].map((item, index) => (
          <View key={index} style={styles.detailRow}>
            <Icon name={item.icon} size={24} color="#04764e" />
            <Text style={styles.detailText}>{item.text}</Text>
          </View>
        ))}
      </View>

      {/* Most Ordered Section */}
      <View>
        <Text style={styles.mostOrderedTitle}>Most Ordered</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.mostOrderedContainer}>
            {[
              { name: 'Creamy Latte Coffee', image: require('../../assets/1.png') },
              { name: 'Ombe Ice Coffee Latte', image: require('../../assets/2.png') },
            ].map((item, index) => (
              <View key={index} style={styles.orderCard}>
                <Image source={item.image} style={styles.orderImage} />
                <View style={styles.orderDetails}>
                  <Text style={styles.orderName}>{item.name}</Text>
                  <View style={styles.row}>
                    <Text style={styles.orderCategory}>Beverages</Text>
                    <TouchableOpacity>
                      <Icon
                        name="open-in-new"
                        size={18}
                        color="#fff"
                        style={styles.icon}
                      />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            ))}
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 16 },
  profileSection: { alignItems: 'center', marginBottom: 20 },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  profileName: {
    fontSize: 22,
    fontFamily: 'Poppins-Bold',
    color: '#333',
  },
  profileLocation: {
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    color: '#666',
  },
  detailsSection: {
    backgroundColor: '#f9f9f9',
    padding: 16,
    borderRadius: 8,
    marginBottom: 20,
  },
  detailRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  detailText: {
    marginLeft: 10,
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    color: '#333',
  },
  mostOrderedTitle: {
    fontSize: 18,
    fontFamily: 'Poppins-Bold',
    marginBottom: 10,
  },
  mostOrderedContainer: {
    flexDirection: 'row',
    paddingLeft: 10,  // Add some padding to the left
  },
  orderCard: {
    backgroundColor: '#04764e',
    padding: 10,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 10,
    minWidth: 150, // Ensure each card has a minimum width
  },
  orderImage: {
    width: 60,
    height: 60,
    marginBottom: 10,
  },
  orderDetails: { flex: 1, justifyContent: 'center' },
  orderName: {
    fontSize: 14,
    fontFamily: 'Poppins-Bold',
    color: '#fff',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  orderCategory: {
    fontSize: 12,
    fontFamily: 'Poppins-Regular',
    color: '#d9f9e6',
    marginRight: 8,
  },
  icon: { marginLeft: 5, marginRight: 10 },
});

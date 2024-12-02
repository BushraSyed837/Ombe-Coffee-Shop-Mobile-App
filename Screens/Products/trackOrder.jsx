import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

const TrackingOrdersScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.headerContainer}>
        <TouchableOpacity style={styles.backButton}>
          <Icon
            name="arrow-back"
            size={24}
            color="#000"
            style={{
              backgroundColor: "rgba(4, 118, 78, 0.4)",
              borderRadius: 20,
              padding: 4,
            }}
            onPress={() => {
              navigation.goBack()
            }}
          />
        </TouchableOpacity>
        <Text style={styles.header}>Track Orders</Text>
      </View>

      {/* Driver Info Section */}

      {/* Map Section */}
      <View style={styles.mapContainer}>
        <Image
          source={{
            uri: 'https://i.sstatic.net/HILmr.png',
          }}
          style={styles.mapImage}
        />
        <View style={styles.overlay}>
          <View style={styles.driverSection}>
            <Image
              source={{
                uri: 'https://randomuser.me/api/portraits/men/1.jpg',
              }}
              style={styles.driverImage}
            />
            <View style={styles.driverDetails}>
              <Text style={styles.driverName}>Mr. Shandy</Text>
              <Text style={styles.driverId}>ID 2445556</Text>
            </View>
            <View style={styles.contactButtons}>
              <TouchableOpacity style={styles.contactIcon}>
                <FontAwesome name="phone" size={20} color="white" />
              </TouchableOpacity>
              <TouchableOpacity style={styles.contactIcon}>
                <FontAwesome name="whatsapp" size={20} color="white" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>

      {/* Delivery Info Section */}
      <View style={styles.deliverySection}>
        {/* Pickup Location */}
        <View style={styles.location}>
          <View style={styles.locationIcon}>
            <Icon name="location-pin" size={20} color="white" />
          </View>
          <View>
            <Text style={styles.locationTitle}>Sweet Corner St.</Text>
            <Text style={styles.locationSubtitle}>Franklin Avenue 2263</Text>
          </View>
        </View>
        {/* Drop-off Location */}
        <View style={styles.location}>
          <View style={styles.locationIcon}>
            <Icon name="storefront" size={20} color="white" />
          </View>
          <View>
            <Text style={styles.locationTitle}>Ombe Coffee Shop</Text>
            <Text style={styles.locationSubtitle}>Sent at 08:23 AM</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    backgroundColor: "#fff",
  },
  backButton: {
    position: "absolute",
    left: 16,
  },
  header: {
    fontSize: 24, 
    fontWeight: "bold",
    color: "#333",
    fontFamily: 'Poppins-Regular',
  },
  driverSection: {
    backgroundColor: '#04764e',
    padding: 70,
    flexDirection: 'row',
    alignItems: 'center',
    borderTopLeftRadius: 60,
    borderTopRightRadius: 60,
    marginTop:'80%',
  },
  driverImage: {
    width: 60, 
    height: 60, 
    borderRadius: 30,
    marginRight: 16,
  },
  driverDetails: {
    flex: 1,
  },
  driverName: {
    fontSize: 18,
    color: 'white',
    fontFamily: 'Poppins-Bold', 
  },
  driverId: {
    fontSize: 14,
    color: 'white',
    fontFamily: 'Poppins-Regular', 
  },
  contactButtons: {
    flexDirection: 'row',
  },
  contactIcon: {
    width: 45, 
    height: 45,
    borderRadius: 22.5, 
    backgroundColor: 'rgb(16 153 105)',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10, 
  },
  mapContainer: {
    flex: 1,
  },
  mapImage: {
    flex: 1,
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  deliverySection: {
    backgroundColor: '#FFFFFF',
    padding: 60,
    borderTopLeftRadius: 60,
    borderTopRightRadius: 60,
    marginTop: -30,
    elevation: 5,
  },
  location: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  locationIcon: {
    width: 45, 
    height: 45, 
    borderRadius: 22.5, 
    backgroundColor: '#2F9C95',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15, 
  },
  locationTitle: {
    fontSize: 18, 
    color: '#333',
    fontFamily: 'Poppins-Bold',
  },
  locationSubtitle: {
    fontSize: 16, 
    color: '#666',
    fontFamily: 'Poppins-Regular', 
  },
  separator: {
    height: 1,
    backgroundColor: '#DDD',
    marginVertical: 8,
  },
});

export default TrackingOrdersScreen;

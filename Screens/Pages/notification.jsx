import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; // For back and search icons

const notifications = [
  {
    id: '1',
    title: 'New Arrivals Alert!',
    date: '15 July 2023',
    image: 'https://randomuser.me/api/portraits/men/1.jpg',
  },
  {
    id: '2',
    title: 'Flash Sale Announcement',
    date: '21 July 2023',
    image: 'https://randomuser.me/api/portraits/men/2.jpg',
  },
  {
    id: '3',
    title: 'Exclusive Discounts Inside',
    date: '10 March 2023',
    image: 'https://randomuser.me/api/portraits/women/3.jpg',
  },
  {
    id: '4',
    title: 'Limited Stock - Act Fast!',
    date: '20 September 2023',
    image: 'https://randomuser.me/api/portraits/women/4.jpg',
  },
  {
    id: '5',
    title: 'Get Ready to Shop',
    date: '15 July 2023',
    image: 'https://randomuser.me/api/portraits/men/5.jpg',
  },
  {
    id: '6',
    title: "Don't Miss Out on Savings",
    date: '24 July 2023',
    image: 'https://randomuser.me/api/portraits/men/6.jpg',
  },
  {
    id: '7',
    title: 'Special Offer Just for You',
    date: '28 August 2023',
    image: 'https://randomuser.me/api/portraits/men/7.jpg',
  },
];

const NotificationScreen = ({navigation}) => {
  const renderItem = ({item}) => (
    <View style={styles.notificationItem}>
      <Image source={{uri: item.image}} style={styles.avatar} />
      <View style={styles.notificationDetails}>
        <Text style={styles.notificationTitle}>{item.title}</Text>
        <Text style={styles.notificationDate}>{item.date}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Notifications (12)</Text>
        <TouchableOpacity>
          <Icon name="search" size={24} color="#000" />
        </TouchableOpacity>
      </View>

      {/* Notification List */}
      <FlatList
        data={notifications}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContent}
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
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    backgroundColor: '#fff',
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  listContent: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  notificationItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 10,
    marginRight: 12,
  },
  notificationDetails: {
    flex: 1,
  },
  notificationTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 4,
  },
  notificationDate: {
    fontSize: 14,
    color: '#888',
  },
});

export default NotificationScreen;

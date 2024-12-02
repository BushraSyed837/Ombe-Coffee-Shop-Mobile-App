import React from 'react';
import { View, Text, FlatList, TextInput, Image, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';  // Import Icon component
import { useNavigation } from '@react-navigation/native';

const messagesData = [
  { id: '1', name: 'Emily Johnson', message: 'Hello William, Thankyou for your app', time: '2m ago', online: false },
  { id: '2', name: 'Olivia James', message: 'Hello William!', time: '5m ago', online: true },
  { id: '3', name: 'William Thompson', message: 'Text me!', time: 'Wed', online: false },
  { id: '4', name: 'Michael Anderson', message: 'Hello William!', time: 'Mon', online: true },
  { id: '5', name: 'Ava Hernandez', message: 'Text me!', time: '2hr ago', online: false },
  { id: '6', name: 'James White', message: 'Hello!', time: 'Sat', online: false },
  { id: '7', name: 'Mia Rodriguez', message: 'Text me!', time: 'Mon', online: false },
  { id: '8', name: 'Benjamin Clark', message: 'Text me!', time: 'Tue', online: false }
];

const MessageList = () => {
    const navigation = useNavigation();
  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.messageItem} onPress={() => navigation.navigate('chat')}>
      <View style={styles.avatarContainer}>
        <Image
          source={{ uri: 'https://randomuser.me/api/portraits/men/1.jpg' }} // Placeholder image, replace with actual
          style={styles.avatar}
        />
        {item.online && <View style={styles.onlineIndicator} />}
      </View>
      <View style={styles.textContainer}>
        <View style={styles.nameTimeContainer}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.time}>{item.time}</Text>
        </View>
        <Text style={styles.message}>{item.message}</Text>
      </View>
      <View style={styles.infoContainer}>
        <TouchableOpacity style={styles.checkIcon}>
          {/* Green check icon without background */}
          <Icon name="check" size={16} color="green" />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity style={styles.backButton}>
          <Icon
            name="arrow-back"
            size={24}
            color="#000"
            onPress={() => navigation.goBack()}
          />
        </TouchableOpacity>
        <Text style={styles.header}>Messages</Text>
        <TouchableOpacity style={styles.menuButton}>
          <Icon
            name="more-vert"
            size={24}
            color="#000"
            onPress={() => navigation.navigate('Home')}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.searchBarContainer}>
        <TextInput
          style={styles.searchBar}
          placeholder="Search..."
        />
        <Icon name="search" size={24} color="#dee2e6" style={styles.searchIcon} onPress={console.log("hello")} />
      </View>
      <FlatList
        data={messagesData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    borderBottomColor: '#ddd',
    backgroundColor: '#fff',
  },
  backButton: { position: 'absolute', left: 16 },
  menuButton: { position: 'absolute', right: 16 },
  header: {
    fontSize: 18,
    color: '#333',
    fontFamily: 'Poppins-Bold',
  },
  title: {
    fontSize: 24,
    fontFamily: 'Poppins-Bold',
  },
  searchBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '90%',
    height: 50,
    borderRadius: 25,
    backgroundColor: '#F9F9F9',  // Ensures the background color is applied to the container
    paddingHorizontal: 15,
    marginBottom: 20,
    marginLeft: 20
  },
  searchBar: {
    flex: 1,
    fontSize: 16,
    backgroundColor: '#F9F9F9', 
    borderRadius: 25,  
  },
  messageItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  avatarContainer: {
    position: 'relative',  // Allows positioning of the online indicator inside the avatar container
  },
  avatar: {
    width: 50, 
    height: 50,
    borderRadius: 15,
    marginRight: 15,
    backgroundColor: '#e0e0e0', 
  },
  onlineIndicator: {
    position: 'absolute',
    bottom: 0,
    right: 15,
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: 'green',
    borderWidth: 1,
    borderColor: 'white',
  },
  textContainer: {
    flex: 1,
  },
  nameTimeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  name: {
    fontWeight: 'bold',
  },
  time: {
    fontSize: 12,
    color: '#888',
  },
  message: {
    color: '#555',
    fontSize: 14,
  },
  infoContainer: {
    alignItems: 'flex-end',
  },
  checkIcon: {
    padding: 5,
  },
});

export default MessageList;

import React, { useState } from 'react';
import { View, Text, FlatList, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'; // Import Icon component
import { useNavigation } from '@react-navigation/native';

const messagesData = [
  { id: '1', text: 'Do you know my address sir?', sender: 'self', time: '9:31 AM' },
  { id: '2', text: "Don't worry, I've been there last week. Please wait", sender: 'other', time: '10:30 AM' },
  { id: '3', text: 'Ok', sender: 'self', time: '10:30 AM' },
];

const ChatScreen = () => {
  const [message, setMessage] = useState('');
  const navigation = useNavigation();

  const renderMessage = ({ item }) => (
    <View
      style={[
        styles.messageContainer,
        item.sender === 'self' ? styles.selfMessage : styles.otherMessage,
      ]}
    >
      <Text style={styles.messageText}>{item.text}</Text>
      <Text style={styles.timeText}>{item.time}</Text>
    </View>
  );

  const handleSend = () => {
    if (message.trim()) {
      messagesData.push({
        id: `${messagesData.length + 1}`,
        text: message,
        sender: 'self',
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      });
      setMessage('');
    }
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.headerContainer}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.header}>Mr. Shandy</Text>
        <TouchableOpacity style={styles.menuButton}>
          <Icon name="more-vert" size={24} color="#000" />
        </TouchableOpacity>
      </View>

      {/* Date Separator */}
      <Text style={styles.dateText}>27 Dec 2023</Text>

      {/* Messages List */}
      <FlatList
        data={messagesData}
        renderItem={renderMessage}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.messageList}
      />

      {/* Input Field */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={message}
          onChangeText={setMessage}
          placeholder="Type a message"
          placeholderTextColor="#888"
        />
        <TouchableOpacity onPress={handleSend} style={styles.sendButton}>
          <Icon name="send" size={24} color="#0078ff" />
        </TouchableOpacity>
      </View>
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
    paddingVertical: 15,
    borderBottomColor: '#ddd',
    borderBottomWidth: 1,
    backgroundColor: '#fff',
  },
  backButton: {
    position: 'absolute',
    left: 16,
  },
  menuButton: {
    position: 'absolute',
    right: 16,
  },
  header: {
    fontSize: 18,
    color: '#333',
    fontWeight: 'bold',
  },
  dateText: {
    textAlign: 'center',
    fontSize: 14,
    marginVertical: 10,
    color: '#888',
  },
  messageList: {
    paddingHorizontal: 10,
    paddingBottom: 70, // Prevent overlap with input field
  },
  messageContainer: {
    marginVertical: 5,
    padding: 12,
    borderRadius: 10,
    maxWidth: '75%',
  },
  selfMessage: {
    alignSelf: 'flex-end',
    backgroundColor: '#DCF8C6',
    borderTopLeftRadius: 0,
  },
  otherMessage: {
    alignSelf: 'flex-start',
    backgroundColor: '#F1F0F0',
    borderTopRightRadius: 0,
  },
  messageText: {
    fontSize: 16,
    color: '#000',
  },
  timeText: {
    fontSize: 12,
    color: '#555',
    marginTop: 5,
    textAlign: 'right',
  },
  inputContainer: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    backgroundColor: 'white',
  },
  input: {
    flex: 1,
    height: 60,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    paddingHorizontal: 20,
    paddingVertical: 10,
    fontSize: 16,
  },
  sendButton: {
    marginLeft: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ChatScreen;

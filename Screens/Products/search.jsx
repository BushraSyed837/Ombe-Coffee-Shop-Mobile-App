import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const SearchHistoryScreen = () => {
  const navigation = useNavigation();
  const [searchHistory, setSearchHistory] = useState([
    'Sweet Lemon Indonesian Tea',
    'Hot Cappuccino Latte with Mocha',
    'Arabica Latte Ombe Coffee',
    'Original Hot Coffee',
  ]);

  // Clear a single item from search history
  const handleClearItem = index =>
    setSearchHistory(prevHistory =>
      prevHistory.filter((_, i) => i !== index)
    );

  // Clear all items from search history
  const handleClearAll = () => setSearchHistory([]);

  // Render a single history item
  const renderItem = ({ item, index }) => (
    <View style={styles.historyItem}>
      <Ionicons name="time-outline" size={20} color="green" />
      <Text style={styles.historyText}>{item}</Text>
      <TouchableOpacity onPress={() => handleClearItem(index)}>
        <Icon name="close" size={20} color="green" />
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Search Bar */}
      <View style={styles.searchHeader}>
        <TouchableOpacity
          style={styles.backIcon}
          onPress={() => navigation.navigate('Favourite')}
        >
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <View style={styles.searchBarContainer}>
          <TextInput
            style={styles.searchBar}
            placeholder="Search beverages or foods"
            placeholderTextColor="#aaa"
          />
        </View>
      </View>

      {/* Search History Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Search History</Text>
        <TouchableOpacity onPress={handleClearAll}>
          <Text style={styles.clearAll}>Clear All</Text>
        </TouchableOpacity>
      </View>

      {/* Search History List */}
      <FlatList
        data={searchHistory}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderItem}
        ListEmptyComponent={
          <Text style={styles.emptyMessage}>No search history available.</Text>
        }
      />
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    padding: 20,
  },
  searchHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  searchBarContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
    borderRadius: 25,
    backgroundColor: '#fff',
    paddingHorizontal: 15,
  },
  searchBar: {
    flex: 1,
    fontSize: 16,
    color: '#000',
    fontFamily: 'Poppins-Regular',
  },
  backIcon: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#04764e',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    fontFamily: 'Poppins-Bold',
  },
  clearAll: {
    fontSize: 14,
    color: 'green',
    textDecorationLine: 'underline',
    fontFamily: 'Poppins-Regular',
  },
  historyItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
    elevation: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  historyText: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
    color: '#000',
    fontFamily: 'Poppins-Regular',
  },
  emptyMessage: {
    textAlign: 'center',
    color: '#aaa',
    marginTop: 20,
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
  },
});

export default SearchHistoryScreen;

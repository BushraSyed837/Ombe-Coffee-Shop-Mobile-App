import React, { useState, useMemo } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';

const rewardsData = [
  {
    id: '1',
    name: 'Extra Deluxe Gayo Coffee Packages',
    points: 250,
    date: 'June 18, 2020 | 4:00 AM',
  },
  {
    id: '2',
    name: 'Buy 10 Brewed Coffee Packages',
    points: 100,
    date: 'June 18, 2020 | 4:00 AM',
  },
  {
    id: '3',
    name: 'Ice Coffee Morning',
    points: 250,
    date: 'June 18, 2020 | 4:00 AM',
  },
  {
    id: '4',
    name: 'Hot Blend Coffee with Morning Cakes',
    points: 250,
    date: 'June 18, 2020 | 4:00 AM',
  },
];

const RewardItem = ({ item }) => (
  <View style={styles.rewardItem}>
    <View style={styles.rewardInfo}>
      <Text style={styles.rewardName}>{item.name}</Text>
      <Text style={styles.rewardDate}>{item.date}</Text>
    </View>
    <Text style={styles.rewardPoints}>+{item.points} Pts</Text>
  </View>
);

export default function RewardsScreen() {
  const [sortOrder, setSortOrder] = useState('Newest');
  const navigation = useNavigation();

  const sortedRewards = useMemo(() => {
    return sortOrder === 'Newest'
      ? [...rewardsData].sort((a, b) => new Date(b.date) - new Date(a.date))
      : [...rewardsData].sort((a, b) => new Date(a.date) - new Date(b.date));
  }, [sortOrder]);

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.headerContainer}>
        <TouchableOpacity style={styles.backButton}>
          <Icon
            name="arrow-back"
            size={24}
            color="#000"
            onPress={() => navigation.goBack()}
          />
        </TouchableOpacity>
        <Text style={styles.header}>Rewards</Text>
        <TouchableOpacity style={styles.menuButton}>
          <Icon
            name="more-vert"
            size={24}
            color="#000"
            onPress={() => navigation.navigate('Home')}
          />
        </TouchableOpacity>
      </View>

      {/* Points Section */}
      <View style={styles.pointsSection}>
        <Text style={styles.pointsText}>My Points</Text>
        <Text style={styles.pointsValue}>87,550</Text>
        <TouchableOpacity style={styles.redeemButton}>
          <Text style={styles.redeemText}>Redeem Gift</Text>
        </TouchableOpacity>
      </View>

      {/* History Section */}
      <View style={styles.historySection}>
        <View style={styles.filterContainer}>
          <Text style={styles.historyTitle}>History Reward</Text>
          <Picker
            selectedValue={sortOrder}
            style={styles.picker}
            onValueChange={(itemValue) => setSortOrder(itemValue)}
          >
            <Picker.Item label="Newest" value="Newest" />
            <Picker.Item label="Oldest" value="Oldest" />
          </Picker>
        </View>
        <FlatList
          data={sortedRewards}
          renderItem={({ item }) => <RewardItem item={item} />}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    backgroundColor: '#fff',
  },
  backButton: { position: 'absolute', left: 16 },
  menuButton: { position: 'absolute', right: 16 },
  header: {
    fontSize: 18,
    color: '#333',
    fontFamily: 'Poppins-Regular',
  },
  pointsSection: {
    backgroundColor: '#2D6A4F',
    borderRadius: 10,
    padding: 16,
    marginVertical: 20,
    alignItems: 'flex-start',
  },
  pointsText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '500',
    fontFamily: 'Poppins-Regular',
  },
  pointsValue: {
    fontSize: 32,
    color: '#fff',
    marginVertical: 8,
    fontFamily: 'Poppins-Bold',
  },
  redeemButton: {
    backgroundColor: '#fff',
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  redeemText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2D6A4F',
    fontFamily: 'Poppins-Regular',
  },
  historySection: {
    marginTop: 20,
  },
  historyTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
    fontFamily: 'Poppins-Regular',
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  picker: {
    height: 40,
    width: 120,
  },
  rewardItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  rewardInfo: {
    flex: 1,
  },
  rewardName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    fontFamily: 'Poppins-Regular',
  },
  rewardDate: {
    fontSize: 12,
    color: '#888',
    fontFamily: 'Poppins-Regular',
  },
  rewardPoints: {
    fontSize: 14,
    fontWeight: '600',
    color: '#2D6A4F',
    fontFamily: 'Poppins-Regular',
  },
});

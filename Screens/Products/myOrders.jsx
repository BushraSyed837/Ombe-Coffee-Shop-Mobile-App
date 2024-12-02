import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { useNavigation } from '@react-navigation/native';

const ongoingOrders = [
  {
    id: "1",
    name: "Sweet Lemon Indonesian Tea",
    category: "Tea, Lemon",
    price: "$12.6",
    rating: "3.8",
    image: require("../../assets/product1.jpg"),
  },
  {
    id: "2",
    name: "Creamy Mocha Ome Coffee",
    category: "Coffee",
    price: "$12.6",
    rating: "3.8",
    image: require("../../assets/product2.jpg"),
  },
];

const completedOrders = [
  {
    id: "3",
    name: "Arabica Latte Ombe Coffee",
    category: "Coffee",
    price: "$12.6",
    rating: "3.8",
    image: require("../../assets/product3.jpg"),
  },
  {
    id: "4",
    name: "Original Hot Coffee",
    category: "Coffee",
    price: "$12.6",
    rating: "3.8",
    image: require("../../assets/product4.jpg"),
  },
];

export default function MyOrders() {
  const [activeTab, setActiveTab] = useState("Ongoing");
  const navigation = useNavigation();
  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Image source={item.image} style={styles.image} />
      <View style={styles.details}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.category}>{item.category}</Text>
        <Text style={styles.price}>{item.price}</Text>
      </View>
      <View style={styles.actions}>
        {activeTab === "Ongoing" ? (
          <TouchableOpacity
            style={styles.trackOrderButton}
            onPress={() => {
              navigation.navigate('Home', { screen: 'trackOrder' });
            }}
          >
            <Text style={styles.trackOrderText}>Track Order</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={styles.writeReviewButton}
            onPress={() => {
              navigation.navigate('Home', { screen: 'review' });
            }}
          >
            <Text style={styles.writeReviewText}>Write Review</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );

  const filteredOrders =
    activeTab === "Ongoing" ? ongoingOrders : completedOrders;

  return (
    <View style={styles.container}>
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
              navigation.navigate("Cart");
            }}
          />
        </TouchableOpacity>
        <Text style={styles.header}>My Orders</Text>
      </View>
      <View style={styles.tabs}>
        <TouchableOpacity
          style={[
            styles.tab,
            activeTab === "Ongoing" && styles.activeTab,
          ]}
          onPress={() => setActiveTab("Ongoing")}
        >
          <Text
            style={[
              styles.tabText,
              activeTab === "Ongoing" && styles.activeTabText,
            ]}
          >
            Ongoing
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.tab,
            activeTab === "Completed" && styles.activeTab,
          ]}
          onPress={() => setActiveTab("Completed")}
        >
          <Text
            style={[
              styles.tabText,
              activeTab === "Completed" && styles.activeTabText,
            ]}
          >
            Completed
          </Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={filteredOrders}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.list}
        ListEmptyComponent={() => (
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>
              No {activeTab.toLowerCase()} orders available.
            </Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
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
  homeButton: {
    position: "absolute",
    right: 16,
  },
  header: {
    fontSize: 18,
    color: "#333",
    fontFamily: "Poppins-Bold", 
  },
  tabs: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#f5f5f5",
    padding: 10,
  },
  tab: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: "#04764e",
    borderRadius: 22,
    marginHorizontal: 5,
    backgroundColor: "#fff",
  },
  activeTab: { backgroundColor: "#04764e" },
  tabText: {
    fontSize: 16,
    color: "#04764e",
    fontFamily: "Poppins-Regular", 
  },
  activeTabText: { color: "#fff" },
  list: { padding: 10 },
  itemContainer: {
    flexDirection: "row",
    backgroundColor: "#fff",
    padding: 10,
    marginBottom: 10,
    borderRadius: 10,
    elevation: 2,
  },
  image: { width: 60, height: 60, borderRadius: 10 },
  details: { flex: 1, marginLeft: 10 },
  name: { fontSize: 14, fontFamily: "Poppins-Bold" }, 
  category: { fontSize: 14, color: "#555", fontFamily: "Poppins-Regular" }, 
  price: { fontSize: 14,  color: "#000", fontFamily: "Poppins-Bold" }, 
  actions: { alignItems: "flex-end" },
  trackOrderButton: {
    marginTop: 25,
    backgroundColor: "#04764e",
    borderRadius: 15,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  trackOrderText: { fontSize: 14, color: "#fff", fontFamily: "Poppins-Regular" }, 
  writeReviewButton: {
    marginTop: 25,
    backgroundColor: "#04764e",
    borderRadius: 15,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  writeReviewText: { fontSize: 14, color: "#fff", fontFamily: "Poppins-Regular" }, 
  emptyContainer: {
    alignItems: "center",
    marginTop: 20,
  },
  emptyText: {
    fontSize: 16,
    color: "#555",
    fontFamily: "Poppins-Regular", 
  },
});

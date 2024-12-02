import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import {useWindowDimensions} from 'react-native';
import {TabView, SceneMap} from 'react-native-tab-view';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';

const products = [
  {
    id: 1,
    name: 'Sweet Lemon Indonesian Tea',
    category: 'Tea, Lemon',
    price: '12.6',
    rating: '3.8',
    image: require('../assets/product1.jpg'),
  },
  {
    id: 2,
    name: 'Creamy Mocha Ome Coffee',
    category: 'Coffee',
    price: '12.6',
    rating: '3.8',
    image: require('../assets/product2.jpg'),
  },
  {
    id: 3,
    name: 'Arabica Latte Ombe Coffee',
    category: 'Coffee',
    price: '12.6',
    rating: '3.8',
    image: require('../assets/product3.jpg'),
  },
];

const TabContent = ({category}) => {
  const filteredProducts = products;
  return (
    <FlatList
      data={filteredProducts}
      keyExtractor={item => item.id.toString()}
      renderItem={({item}) => (
        <View style={styles.productCard}>
          <View style={styles.imageWrapper}>
            <Image source={item.image} style={styles.productImage} />
            <View style={styles.ratingBadge}>
              <Text style={styles.ratingText}>⭐ {item.rating}</Text>
            </View>
          </View>
          <View style={styles.productDetails}>
            <Text style={styles.productName}>{item.name}</Text>
            <Text style={styles.productCategory}>{item.category}</Text>
            <Text style={styles.productPrice}>${item.price}</Text>
          </View>
          <TouchableOpacity style={styles.buyButton}>
            <Icon name="shopping-bag" size={18} color="#04764e" />
            <Text style={styles.buyButtonText}>Buy</Text>
          </TouchableOpacity>
        </View>
      )}
    />
  );
};

const renderScene = SceneMap({
  beverages: () => <TabContent category="Beverages" />,
  brewed: () => <TabContent category="Brewed Coffee" />,
  blended: () => <TabContent category="Blended Coffee" />,
});

export default function ProductsScreen() {

  const navigation = useNavigation();
 
  const layout = useWindowDimensions();
  const [index, setIndex] = useState(0);
  const routes = [
    {key: 'beverages', title: 'Beverages'},
    {key: 'brewed', title: 'Brewed Coffee'},
    {key: 'blended', title: 'Blended Coffee'},
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Icon name="arrow-back" size={24} color="#333" onPress={()=>{navigation.goBack()}}/>
        </TouchableOpacity>
        <Text style={styles.title}>Products</Text>
        <TouchableOpacity>
          <Icon name="more-vert" size={24} color="#333" />
        </TouchableOpacity>
      </View>

      <View style={styles.searchBarContainer}>
        <TextInput
          style={styles.searchBar}
          placeholder="Search beverages or foods"
        />
        <Icon
          name="search"
          size={24}
          color="#dee2e6"
          style={styles.searchIcon}
        />
      </View>

      <TabView
        navigationState={{index, routes}}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{width: layout.width}}
        style={styles.tabs}
        renderTabBar={props => (
          <View style={styles.tabBar}>
            {props.navigationState.routes.map((route, idx) => (
              <TouchableOpacity
                key={route.key}
                onPress={() => props.jumpTo(route.key)}
                style={[
                  styles.tabButton,
                  index === idx && styles.activeTabButton,
                ]}>
                <Text
                  style={[
                    styles.tabText,
                    index === idx && styles.activeTabText,
                  ]}>
                  {route.title}
                </Text>
                {index === idx && <View style={styles.activeTabUnderline} />}
              </TouchableOpacity>
            ))}
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#fff'},
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 15,
  },
  title: {fontSize: 18, fontWeight: 'bold', color: '#333'},
  searchBarContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
    width: '90%',
    height: 50,
    borderRadius: 25,
    backgroundColor: '#F9F9F9',
    paddingHorizontal: 15,
    marginBottom: 20,
  },
  searchBar: {
    flex: 1,
    fontSize: 16,
    backgroundColor: '#F9F9F9',
    borderRadius: 25,
  },
  searchIcon: {
    marginLeft: 10,
    marginTop: 15,
  },
  productCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    marginHorizontal: 10,
    marginVertical: 5,
    borderRadius: 10,
    padding: 10,
    elevation: 2,
  },
  imageWrapper: {position: 'relative'},
  productImage: {width: 60, height: 60, borderRadius: 8},
  ratingBadge: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    backgroundColor: '#ffa500',
    borderRadius: 4,
    paddingHorizontal: 5,
  },
  ratingText: {fontSize: 10, color: '#fff', fontWeight: 'bold'},
  productDetails: {flex: 1, marginLeft: 10},
  productName: {fontSize: 14, fontWeight: 'bold', color: '#333'},
  productCategory: {fontSize: 12, color: '#666'},
  productPrice: {fontSize: 14, color: '#04764e', fontWeight: 'bold'},
  buyButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#e9f7f1',
    padding: 8,
    borderRadius: 8,
  },
  buyButtonText: {
    fontSize: 14,
    color: '#04764e',
    fontWeight: 'bold',
    marginLeft: 5,
  },
  tabBar: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF', // White background for the tab bar
    justifyContent: 'space-around',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  tabButton: {
    paddingHorizontal: 20, // Add horizontal padding to the tab button for spacing
    justifyContent: 'center',
    alignItems: 'center',
  },
  activeTabButton: {
    // Optional: You can add active tab background color change here
  },
  tabText: {
    fontSize: 14,
    color: '#04764e', // Green color for inactive tab text
  },
  activeTabText: {
    color: '#04764e', // White text color for active tab
    fontWeight: 'bold',
  },
});

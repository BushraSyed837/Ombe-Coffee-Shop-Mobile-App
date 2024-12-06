import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Modal,
  Image,
} from 'react-native';
import {useWindowDimensions} from 'react-native';
import {TabView} from 'react-native-tab-view';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';
import {useSelector, useDispatch} from 'react-redux';
import {addToCart} from '../redux/slices/cartSlice';

const TabContent = ({category}) => {
  const [visibleModal, setVisibleModal] = useState(null);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const products = useSelector(state => state.products.products);
  const filteredProducts = products.filter(
    product => product.category === category,
  );

  const handleShop = item => {
    dispatch(addToCart(item));
    openModal(item);
  };

  const openModal = () => {
    setVisibleModal(true);
  };

  const closeModal = () => {
    setVisibleModal(false);
  };

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
          <Modal
            visible={!!visibleModal}
            transparent={true}
            animationType="slide"
            onRequestClose={closeModal}>
            <View style={[styles.modalOverlay, styles.modalCenter]}>
              <View style={styles.modalContainer}>
                <View style={styles.modalHeader}>
                  <Text style={styles.modalTitle}>
                    {'Item has been added to the cart'}
                  </Text>
                  <TouchableOpacity onPress={closeModal}>
                    <Icon name="close" size={24} color="#000" />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </Modal>
          <TouchableOpacity
            style={styles.buyButton}
            onPress={() => handleShop(item)} // Pass item to the handler
          >
            <Icon name="shopping-bag" size={18} color="#04764e" />
            <Text style={styles.buyButtonText}>Buy</Text>
          </TouchableOpacity>
        </View>
      )}
    />
  );
};

const ProductsScreen = () => {
  const navigation = useNavigation();
  const layout = useWindowDimensions();
  const [index, setIndex] = useState(0);
  const routes = [
    {key: 'beverages', title: 'Beverages'},
    {key: 'brewed', title: 'Brewed Coffee'},
    {key: 'blended', title: 'Blended Coffee'},
  ];

  const renderScene = ({route}) => {
    switch (route.key) {
      case 'beverages':
        return <TabContent category="Beverages" />;
      case 'brewed':
        return <TabContent category="Brewed Coffee" />;
      case 'blended':
        return <TabContent category="Blended Coffee" />;
      default:
        return null;
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Icon
            name="arrow-back"
            size={24}
            color="#333"
            onPress={() => navigation.goBack()}
          />
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
};

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#fff'},
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
  },
  title: {fontSize: 18, fontFamily: 'Poppins-Bold', color: '#333'},
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
  ratingText: {fontSize: 10, color: '#fff', fontFamily: 'Poppins-Bold'},
  productDetails: {flex: 1, marginLeft: 10},
  productName: {fontSize: 14, fontFamily: 'Poppins-Bold', color: '#333'},
  productCategory: {fontSize: 12, color: '#666', fontFamily: 'Poppins-Regular'},
  productPrice: {fontSize: 14, color: '#04764e', fontFamily: 'Poppins-Bold'},
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
    fontFamily: 'Poppins-Bold',
    marginLeft: 5,
  },
  tabBar: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF', // White background for the tab bar
    justifyContent: 'space-around',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  tabButton: {
    paddingHorizontal: 15, // Add horizontal padding to the tab button for spacing
    justifyContent: 'center',
    alignItems: 'center',
  },
  activeTabButton: {
    // Optional: You can add active tab background color change here
  },
  tabText: {
    fontSize: 15,
    fontFamily: 'Poppins-Regular',
    color: '#04764e', // Green color for inactive tab text
  },
  activeTabText: {
    color: '#04764e', // White text color for active tab
    fontFamily: 'Poppins-Bold',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    width: '85%',
    backgroundColor: '#fff',
    borderRadius: 8,
    overflow: 'hidden',
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  modalTitle: {
    fontSize: 14,
    color: '#000',
    fontFamily: 'Poppins-Bold',
  },
  modalBody: {
    padding: 15,
  },
  modalFooter: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    padding: 16,
    backgroundColor: '#FFFFFF',
    borderTopColor: '#ddd',
  },
  closeButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    backgroundColor: '#fddbe3',
    marginLeft: 10,
  },
  modalCenter: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

// Add your styles here
export default ProductsScreen;

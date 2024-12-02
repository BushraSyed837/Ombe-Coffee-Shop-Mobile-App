import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Button} from 'react-native-paper';

const CardUI = ({navigation}) => {
  const cards = [
    {
      id: 1,
      image: require('../../assets/pic1.png'), // Replace with actual image URL
      title: 'Card Title',
      description:
        'Some quick example text to build on the card title and make up the bulk of the card’s content.',
    },
    {
      id: 2,
      image: require('../../assets/pic2.png'), // Replace with actual image URL
      title: 'Card Title',
      description:
        'Some quick example text to build on the card title and make up the bulk of the card’s content.',
    },
    {
      id: 3,
      image: require('../../assets/pic3.png'), // Replace with actual image URL
      title: 'Card Title',
      description:
        'Some quick example text to build on the card title and make up the bulk of the card’s content.',
    },
  ];

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.headerContainer}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
          accessible={true}
          accessibilityLabel="Go back">
          <Icon name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={{fontSize: 18, color: '#000', fontFamily: 'Poppins-Bold'}}>
          Cards
        </Text>
        <TouchableOpacity
          style={styles.menuButton}
          onPress={() => console.log('Menu button pressed')}>
          {/* Placeholder for future menu button functionality */}
        </TouchableOpacity>
      </View>
      <View style={[styles.header, {margin: 10}]}>
        <View style={styles.headerContent}>
          <Icon
            name="layers"
            size={28}
            color="#fff"
            style={{marginTop: 10, marginRight: 10}}
          />
          <Text style={styles.headerText}>Bootstrap Elements</Text>
        </View>
        <Button
          mode="outlined"
          style={styles.headerButton}
          labelStyle={styles.headerButtonText}>
          Cards Style
        </Button>
      </View>

      {/* Dynamic Cards */}
      {cards.map(card => (
        <View key={card.id} style={styles.card}>
          <Image
            source={card.image}
            style={[styles.cardImage, {marginBottom: 10}]}
          />
          <View style={styles.cardContent}>
            <Text style={styles.cardTitle}>{card.title}</Text>
            <Text style={styles.cardDescription}>{card.description}</Text>
            {card.id === 1 && ( // Check if the card ID is 1
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Go Somewhere</Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
      ))}

      {/* Static Cards */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Card Title</Text>
        <Text style={styles.cardContent}>
          Some quick example text to build on the card title and make up the
          bulk of the card’s content.
        </Text>
        <View style={styles.itemList}>
          <Text style={styles.listItem}>An item</Text>
          <Text style={styles.listItem}>A second item</Text>
          <Text style={styles.listItem}>A third item</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-start',
            borderTopWidth: 1,
            borderColor: '#efefef',
            paddingVertical: 5,
          }}>
          <Text>Card footer</Text>
          <Text style={{marginLeft: 20}}>Another link</Text>
        </View>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Card Title</Text>
        <Text style={styles.cardContent}>
          He lay on his armour-like back, and if he lifted his head a little he
          could see his brown belly, slightly domed and divided by arches into
          stiff sections. The bedding was hardly able to cover it and seemed
          ready to slide off any moment.
        </Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            borderTopWidth: 1,
            borderColor: '#efefef',
            paddingVertical: 5,
          }}>
          <Text>Card footer</Text>
          <Text>Card link</Text>
        </View>
      </View>

      <View style={[styles.card, styles.featuredCard]}>
        <Text
          style={[
            styles.cardTitle,
            styles.featuredTitle,
            {borderBottomWidth: 1, borderColor: '#ddd'},
          ]}>
          Featured
        </Text>
        <Text
          style={[styles.cardContent, {textAlign: 'center', marginBottom: 10}]}>
          Special Title Treatment
        </Text>
        <Text
          style={[styles.cardContent, {textAlign: 'center', marginBottom: 10}]}>
          With supporting text below as a natural lead-in to additional content.
        </Text>
        <TouchableOpacity style={[styles.button, {alignSelf: 'center'}]}>
          <Text style={styles.buttonText}>Go Somewhere</Text>
        </TouchableOpacity>
        <Text style={[styles.timestamp, {textAlign: 'center', width: '100%'}]}>
          2 days ago
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  backButton: {
    padding: 8,
  },
  headerText: {
    fontSize: 18,
    color: '#000',
    fontFamily: 'Poppins-Bold',
  },
  menuButton: {
    padding: 8,
  },
  header: {
    backgroundColor: '#6a11cb',
    padding: 16,
    borderRadius: 8,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    marginBottom: 20,
  },
  headerContent: {
    flexDirection: 'row',
    fontFamily: 'Poppins-Bold',
    alignItems: 'center',
    marginLeft: 0,
  },
  headerButton: {
    borderColor: '#fff',
    borderRadius: 6,
    width: 180,
    marginLeft: 40,
  },
  headerButtonText: {
    color: '#fff',
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    
    shadowRadius: 5,
    shadowOffset: {width: 0, height: 2},
    elevation: 3,
  },
  cardImage: {
    width: '100%',
    height: 200,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  cardContent: {
    padding: 10,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: 'Poppins-Regular',
    color: '#333',
    borderBottomWidth: 1, borderColor: '#ddd',
    marginBottom: 5,
  },
  cardDescription: {
    fontSize: 14,
    color: '#666',
    fontFamily: 'Poppins-Regular',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#04764E',
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    fontWeight: 'bold',
  },
  container: {flex: 1, backgroundColor: '#f8f9fa', padding: 10},
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: {width: 0, height: 2},
    elevation: 3,
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  featuredCard: {backgroundColor: '#fff', borderWidth: 0},
  cardTitle: {
    fontSize: 16,
    fontFamily: 'Poppins-Bold',
    color: '#212529',
    marginBottom: 10,
    borderBottomWidth: 1, borderColor: '#ddd',
  },
  featuredTitle: {fontSize: 18, color: '#495057', fontFamily: 'Poppins-Bold'},
  cardContent: {
    fontSize: 14,
    color: '#495057',
    lineHeight: 20,
    fontFamily: 'Poppins-Regular',
    marginBottom: 10,
  },
  itemList: {marginTop: 10, marginBottom: 10},
  listItem: {
    fontSize: 14,
    color: '#212529',
    marginVertical: 2,
    borderTopWidth: 1,
    borderColor: '#efefef',
    paddingVertical: 5,
  },
  button: {
    backgroundColor: '#04764E',
    paddingVertical: 10,
    borderRadius: 10,
    width: '50%',
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {color: '#fff', fontSize: 16, fontFamily: 'Poppins-Regular',},
  cardFooter: {
    fontSize: 12,
    color: '#6c757d',
    marginTop: 10,
    borderTopWidth: 1,
    borderColor: '#efefef',
    paddingVertical: 5,
  },
  timestamp: {
    fontSize: 12,
    color: '#6c757d',
    marginTop: 10,
    textAlign: 'right',
    borderTopWidth: 1,
    borderColor: '#efefef',
    paddingVertical: 5,
  },
});

export default CardUI;

import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  FlatList,
  Switch,
  TouchableOpacity,
  Image,
  Animated,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {List, Button, Badge} from 'react-native-paper';

const images = [
  require('../../assets/product1.jpg'),
  require('../../assets/product2.jpg'),
  require('../../assets/product4.jpg'),
  require('../../assets/product1.jpg'),
  require('../../assets/product3.jpg'),
  require('../../assets/product2.jpg'),
];

const CustomLightGallery = ({ numColumns }) => {
  const imageWidth = Dimensions.get('window').width / numColumns - 20;


  return (
    <FlatList
      data={images}
      keyExtractor={(item, index) => index.toString()}
      numColumns={numColumns}
      renderItem={({ item }) => (
        <View style={[styles.imageContainer, { width: imageWidth, height: imageWidth }]}>
          <Image
            style={[styles.image, { width: imageWidth, height: imageWidth }]}
            source={item}
            resizeMode="cover"
          />
        </View>
      )}
      contentContainerStyle={styles.listContainer}
    />
  );
};




const LightGallery = ({navigation}) => {
  const screenWidth = Dimensions.get('window').width;
  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.headerContainer}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerText}>LightGallery</Text>
        <TouchableOpacity style={styles.menuButton}>
          {/* Placeholder for menu functionality */}
        </TouchableOpacity>
      </View>
      <View style={styles.headerTop}>
        <View style={styles.headerContent}>
          <Icon
            name="layers"
            size={28}
            color="#fff"
            style={{marginRight: 10}}
          />
          <Text style={styles.headerText}>Bootstrap Elements</Text>
        </View>
        <Button
          mode="outlined"
          style={styles.headerButton}
          labelStyle={styles.headerButtonText}>
          LightGallery Style
        </Button>
      </View>

      {/* Bootstrap Switches */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>LightGallery</Text>
        <View style={styles.line}></View>
        <View style={{padding:5}}>
        <View style={styles.fullWidthContainer}>
        <Image
          style={[styles.fullWidthImage, { width: 380 - 20 }]}
          source={images[0]}
          resizeMode="cover"
        />
      </View>

      {/* Row with 2 Images */}
      <View style={styles.rowContainer}>
        <Image style={styles.twoColumnImage} source={images[1]} />
        <Image style={styles.twoColumnImage} source={images[2]} />
      </View>

      {/* Row with 3 Images */}
      <View style={styles.rowContainer}>
        <Image style={styles.threeColumnImage} source={images[3]} />
        <Image style={styles.threeColumnImage} source={images[4]} />
        <Image style={styles.threeColumnImage} source={images[5]} />
      </View>
        </View>
     
        
      </View>

      {/* Switches Colors */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>LightGallery With 2 Grid</Text>
        <View style={styles.line}></View>
        <View style={{padding:5}}>
        <CustomLightGallery numColumns={2} />
        </View>
      </View>

      {/* Switches Colors */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>LightGallery With 3 Grid</Text>
        <View style={styles.line}></View>
        <View style={{padding:5}}>
        <CustomLightGallery numColumns={3} />
        </View>
        
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FA',
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
    fontFamily: 'Poppins-Bold', // Using Poppins-Bold
  },
  menuButton: {
    padding: 8,
  },
  headerTop: {
    backgroundColor: '#6a11cb',
    borderRadius: 8,
    margin: 15,
    padding: 10,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    marginBottom: 5,
  },
  headerContent: {
    flexDirection: 'row',
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
    fontSize: 12,
    fontFamily: 'Poppins-Regular', // Using Poppins-Regular
  },
  section: {
    margin: 16,
    backgroundColor: 'white',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
  },
  featuredImage: {
    marginBottom: 15,
    alignSelf: 'center',
  },
  sectionTitle: {
    fontSize: 16,
    fontFamily: 'Poppins-Bold', // Using Poppins-Bold
    padding: 13,
    color: '#000',
  },
  line: {
    borderTopWidth: 1,
    borderColor: '#ddd',
    marginBottom: 10,
  },  
  fullWidthContainer: {
    marginBottom: 10,
  },
  fullWidthImage: {
    height: 200,
    alignSelf: 'center',
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  twoColumnImage: {
    width: (390 - 30) / 2,
    height: 150,
  },
  threeColumnImage: {
    width: (390 - 40) / 3,
    height: 120,
  },
  imageContainer:{
    justifyContent:'space-between',
    alignSelf:'center',
    margin:2
  }
});

export default LightGallery;
;

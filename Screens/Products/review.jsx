import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';

export default function Reviews() {
  const [comment, setComment] = useState('');
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
          <Icon name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.header}>Write Review</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Icon name="more-vert" size={24} color="#000" />
        </TouchableOpacity>
      </View>

      {/* Item Section */}
      <TouchableOpacity style={styles.section} onPress={() => navigation.goBack()}>
        <View style={styles.itemContainer}>
          <Image
            source={require('../../assets/product4.jpg')}
            style={styles.image}
          />
          <View style={styles.details}>
            <Text style={styles.name}>Original Hot Coffee</Text>
            <Text style={styles.category}>Beverages</Text>
          </View>
        </View>
      </TouchableOpacity>

      {/* Review Form */}
      <View style={styles.reviewContainer}>
        <Text style={styles.boldText}>What do you think?</Text>
        <Text style={styles.description}>
          Share your thoughts and help others make informed decisions.
        </Text>
        <Text style={styles.ratingText}>4.0</Text>
        <View style={styles.ratingContainer}>
          <Text style={styles.rating}>⭐⭐⭐⭐⭐</Text>
        </View>

        <Text style={styles.additionalNoteText}>Additional Note:</Text>
        <TextInput
          style={styles.additionalNoteInput}
          placeholder="Additional comments"
          value={comment}
          onChangeText={setComment}
          multiline
        />
        <TouchableOpacity
          style={styles.submitButton}
          onPress={() => navigation.navigate('Home', { screen: 'reward' })}
        >
          <Text style={styles.submitButtonText}>Send</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const sharedStyles = {
  fontRegular: { fontFamily: 'Poppins-Regular' },
  fontBold: { fontFamily: 'Poppins-Bold' },
  textCenter: { textAlign: 'center' },
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 16,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  header: {
    fontSize: 18,
    color: '#333',
    ...sharedStyles.fontBold,
  },
  section: { flexDirection: 'row', alignItems: 'center', marginVertical: 10 },
  itemContainer: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 10,
    elevation: 2,
    flex: 1,
  },
  image: { width: 60, height: 60, borderRadius: 10 },
  details: { flex: 1, marginLeft: 12 },
  name: {
    fontSize: 16,
    color: '#333',
    ...sharedStyles.fontBold,
  },
  category: { fontSize: 14, color: '#777', ...sharedStyles.fontRegular },
  reviewContainer: { padding: 16 },
  boldText: {
    fontSize: 18,
    color: '#333',
    ...sharedStyles.fontBold,
    ...sharedStyles.textCenter,
  },
  description: {
    fontSize: 14,
    color: '#555',
    marginBottom: 16,
    ...sharedStyles.fontRegular,
    ...sharedStyles.textCenter,
  },
  ratingText: {
    fontSize: 50,
    color: '#000',
    ...sharedStyles.fontBold,
    ...sharedStyles.textCenter,
  },
  ratingContainer: {
    marginBottom: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rating: { fontSize: 24, ...sharedStyles.fontRegular },
  additionalNoteText: {
    fontSize: 16,
    color: '#333',
    marginBottom: 8,
    ...sharedStyles.fontBold,
  },
  additionalNoteInput: {
    height: 80,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
    fontSize: 14,
    textAlignVertical: 'top',
    marginBottom: 16,
    ...sharedStyles.fontRegular,
  },
  submitButton: {
    backgroundColor: '#04764e',
    paddingVertical: 12,
    borderRadius: 22,
    alignItems: 'center',
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 16,
    ...sharedStyles.fontBold,
  },
});

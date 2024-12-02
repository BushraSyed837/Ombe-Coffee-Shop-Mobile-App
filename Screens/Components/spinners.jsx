import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Switch,
  TouchableOpacity,
  Image,
  ActivityIndicator,
  Animated,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {List, Button, Badge} from 'react-native-paper';

const Spinners = ({navigation}) => {
  const [scaleAnim] = useState(new Animated.Value(1)); // Scale animation for pulsating
  const [glowAnim] = useState(new Animated.Value(0));

  useEffect(() => {
    // Pulsating glow animation
    const pulse = Animated.loop(
      Animated.sequence([
        Animated.timing(scaleAnim, {
          toValue: 1.5, // Increase size
          duration: 800,
          useNativeDriver: true,
        }),
        Animated.timing(scaleAnim, {
          toValue: 1, // Return to normal size
          duration: 800,
          useNativeDriver: true,
        }),
      ]),
    );
    pulse.start();

    // Glow effect animation
    const glow = Animated.loop(
      Animated.sequence([
        Animated.timing(glowAnim, {
          toValue: 1, // Full opacity (glowing)
          duration: 400,
          useNativeDriver: true,
        }),
        Animated.timing(glowAnim, {
          toValue: 0, // Fade out
          duration: 400,
          useNativeDriver: true,
        }),
      ]),
    );
    glow.start();
  }, [scaleAnim, glowAnim]);
  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.headerContainer}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Spinners</Text>
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
          Spinners Style
        </Button>
      </View>

      {/* Bootstrap Switches */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Default Spinner</Text>
        <View style={styles.line}></View>
        <ActivityIndicator size="large" color="#000" style={styles.spinner} />
      </View>

      {/* Switches Colors */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Colors spinner</Text>
        <View style={styles.line}></View>
        <View style={styles.row}>
          {['green', 'peachpuff', 'red', 'orange', 'skyblue', 'black'].map(
            (color, index) => (
              <ActivityIndicator
                key={index}
                size="large"
                color={color}
                style={styles.spinner}
              />
            ),
          )}
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Growing Color spinner</Text>
        <View style={styles.line}></View>
        <View style={styles.row}>
          {['green', 'beige', 'pink', 'orange', 'skyblue', 'gray'].map(
            (color, index) => (
              <Animated.View
                style={[
                  {
                    opacity: glowAnim, // Apply the opacity animation
                  },
                ]}>
                <View
                  style={{
                    backgroundColor: color,
                    padding: 15,
                    borderRadius: 22,
                    marginRight: 10,
                  }}></View>
              </Animated.View>
            ),
          )}
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Buttons spinner</Text>
        <View style={styles.line}></View>
        <View style={styles.row}>
          <TouchableOpacity style={styles.button}>
            <ActivityIndicator size="small" color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.loadingButton}>
            <ActivityIndicator size="small" color="#fff" />
            <Text style={styles.buttonText}> Loading... </Text>
          </TouchableOpacity>
          <View style={styles.row}>
            <ActivityIndicator size="small" color="black" />
            <Text> Loading... </Text>
          </View>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Spinner Small Size</Text>
        <View style={styles.line}></View>
        <View style={styles.row}>
          {['green', 'peachpuff', 'red', 'orange', 'skyblue', 'black'].map(
            (color, index) => (
              <ActivityIndicator
                key={index}
                size="small"
                color={color}
                style={styles.spinner}
              />
            ),
          )}
        </View>
        <View style={styles.row}>
          {['green', 'beige', 'pink', 'orange', 'skyblue', 'gray'].map(
            (color, index) => (
              <Animated.View
                style={[
                  {
                    opacity: glowAnim, // Apply the opacity animation
                  },
                ]}>
                <View
                  style={{
                    backgroundColor: color,
                    padding: 10,
                    borderRadius: 22,
                    marginRight: 10,
                  }}></View>
              </Animated.View>
            ),
          )}
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
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginVertical: 10,
    marginLeft: 30,
  },
  spinner: {
    marginHorizontal: 5,
  },
  button: {
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 5,
    marginRight: 5,
  },
  loadingButton: {
    flexDirection: 'row',
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginRight: 5,
  },
  buttonText: {
    color: '#fff',
    fontFamily: 'Poppins-Regular',
    marginLeft: 5,
  },
});

export default Spinners;

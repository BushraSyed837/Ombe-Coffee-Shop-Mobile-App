import React, { useEffect, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  Animated,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Button } from 'react-native-paper';

const Placeholders = ({ navigation }) => {
  const screenWidth = Dimensions.get('window').width;
  const shimmerAnimation = useRef(new Animated.Value(-1)).current;

  // Function to start the shimmer animation
  const startShimmerAnimation = () => {
    // Create a continuous shimmer loop
    const shimmerLoop = Animated.loop(
      Animated.timing(shimmerAnimation, {
        toValue: 1,
        duration: 1500,
        useNativeDriver: true,
      })
    );
    shimmerLoop.start();
  };

  // Start the animation when the component is mounted
  useEffect(() => {
    startShimmerAnimation();
    return () => shimmerAnimation.stopAnimation(); // Stop animation on unmount
  }, []);

  const translateX = shimmerAnimation.interpolate({
    inputRange: [-1, 1],
    outputRange: [-screenWidth, screenWidth],
  });

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.headerContainer}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Placeholders</Text>
        <TouchableOpacity style={styles.menuButton}>
          {/* Placeholder for menu functionality */}
        </TouchableOpacity>
      </View>
      <View style={styles.headerTop}>
        <View style={styles.headerContent}>
          <Icon name="layers" size={28} color="#fff" style={{ marginRight: 10 }} />
          <Text style={styles.headerText}>Bootstrap Elements</Text>
        </View>
        <Button mode="outlined" style={styles.headerButton} labelStyle={styles.headerButtonText}>
          Placeholders Style
        </Button>
      </View>

      {/* Bootstrap Switches */}
      <View style={styles.section}>
        <Image
          source={require('../../assets/pic1.png')}
          style={[styles.cardImage, { marginBottom: 10 }]}
        />
        {/* Skeleton Block */}
        <View style={styles.card}>
          <View style={styles.skeletonLine}>
            <Animated.View
              style={[styles.shimmerEffect, { transform: [{ translateX }] }]}
            />
          </View>
          <View style={[styles.skeletonLine, styles.shortLine]}>
            <Animated.View
              style={[styles.shimmerEffect, { transform: [{ translateX }] }]}
            />
          </View>
          <View style={styles.skeletonLine}>
            <Animated.View
              style={[styles.shimmerEffect, { transform: [{ translateX }] }]}
            />
          </View>
          <TouchableOpacity style={styles.proceedButton}></TouchableOpacity>
        </View>
      </View>

      {/* Bootstrap Switches */}
      <View style={styles.section}>
        <Image
          source={require('../../assets/pic3.png')}
          style={[styles.cardImage, { marginBottom: 10 }]}
        />
        {/* Skeleton Block */}
        <View style={styles.card}>
          <View style={styles.skeletonLine}>
            <Animated.View
              style={[styles.shimmerEffect, { transform: [{ translateX }] }]}
            />
          </View>
          <View style={[styles.skeletonLine, styles.shortLine]}>
            <Animated.View
              style={[styles.shimmerEffect, { transform: [{ translateX }] }]}
            />
          </View>
          <View style={styles.skeletonLine}>
            <Animated.View
              style={[styles.shimmerEffect, { transform: [{ translateX }] }]}
            />
          </View>
          <TouchableOpacity style={styles.proceedButton}></TouchableOpacity>
        </View>
      </View>

      {/* Animation Placeholder */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Animation placeholder</Text>
        <View style={styles.line}></View>
        <View style={{ padding: 15 }}>
          <View style={styles.skeletonLine}>
            <Animated.View
              style={[styles.shimmerEffect, { transform: [{ translateX }] }]}
            />
          </View>
          <View style={styles.skeletonLine}></View>
        </View>
      </View>

      {/* Color Placeholder */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Color placeholder</Text>
        <View style={styles.line}></View>
        <View style={{ padding: 15 }}>
          <View style={[styles.skeletonLine, { backgroundColor: '#6c757d' }]}></View>
          <View style={[styles.skeletonLine, { backgroundColor: '#04764E' }]}></View>
          <View style={[styles.skeletonLine, { backgroundColor: '#F6DBB3' }]}></View>
          <View style={[styles.skeletonLine, { backgroundColor: '#159E42' }]}></View>
          <View style={[styles.skeletonLine, { backgroundColor: '#4cb1ff' }]}></View>
          <View style={[styles.skeletonLine, { backgroundColor: '#FF8730' }]}></View>
          <View style={[styles.skeletonLine, { backgroundColor: '#CC0D39' }]}></View>
          <View style={[styles.skeletonLine, { backgroundColor: '#EEEEEE' }]}></View>
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
  cardImage: {
    width: '100%',
    height: 300,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  card: {
    backgroundColor: '#fff',
    padding: 20,
    marginBottom: 20,
  },
  skeletonLine: {
    height: 20,
    backgroundColor: '#e0e0e0',
    borderRadius: 4,
    marginBottom: 10,
    overflow: 'hidden',
    position: 'relative',
  },
  shortLine: {
    width: '60%',
  },
  progressBarContainer: {
    marginTop: 10,
  },
  progressBarBackground: {
    height: 10,
    backgroundColor: '#e0e0e0',
    borderRadius: 5,
    overflow: 'hidden',
  },
  skeletonTitle: {
    height: 15,
    width: '50%',
    backgroundColor: '#e0e0e0',
    marginBottom: 20,
    borderRadius: 4,
    overflow: 'hidden',
  },
  shimmerEffect: {
    height: '100%',
    width: '100%',
    backgroundColor: 'rgba(255,255,255,0.5)',
    position: 'absolute',
  },
  proceedButton: {
    backgroundColor: '#04764e',
    borderRadius: 25,
    paddingVertical: 15,
    alignItems: 'center',
    width:'70%'
  },
});

export default Placeholders;

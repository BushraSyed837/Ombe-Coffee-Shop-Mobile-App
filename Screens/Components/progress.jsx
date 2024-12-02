import React from 'react';
import {
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {List, Button, Badge} from 'react-native-paper';
const ProgressBar = ({value, color, height, striped}) => {
  return (
    <View style={[styles.progressContainer, {height}]}>
      <View
        style={[
          styles.progressBar,
          {
            width: `${value}%`,
            backgroundColor: color,
          },
          striped ? styles.striped : null,
        ]}></View>
    </View>
  );
};

const StripedProgressBar = ({value, color, height = 20}) => {
  return (
    <View style={[styles.progressContainer, {height}]}>
      {/* Progress Bar */}
      <View
        style={[
          styles.progressBar,
          {
            width: `${value}%`,
            backgroundColor: color,
          },
        ]}>
        {/* Striped Overlay */}
        <View style={[styles.stripesContainer, {height}]}>
          {Array.from({length: 20}).map((_, index) => (
            <View
              key={index}
              style={[
                styles.stripe,
                {
                  height,
                  right: index * 15, // Space between stripes
                },
              ]}
            />
          ))}
        </View>
      </View>
    </View>
  );
};

const Progress = ({navigation}) => {
  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.headerContainer}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Progress</Text>
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
          Progress Style
        </Button>
      </View>

      {/* Bootstrap Switches */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Default Progress bars</Text>
        <View style={styles.line}></View>
        <View style={{padding: 10}}>
          <ProgressBar value={70} color="#04764E" height={16} />
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Striped Progress bar</Text>
        <View style={styles.line}></View>
        <View style={{padding: 10}}>
          <StripedProgressBar value={80} color="#4cb1ff" height={16} />
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Colored Progress bar</Text>
        <View style={styles.line}></View>
        <View style={{padding: 10}}>
          <ProgressBar value={90} color="#dc3545" height={15} />
          <ProgressBar value={60} color="#0d6efd" height={15} />
          <ProgressBar value={40} color="#28a745" height={15} />
          <ProgressBar value={80} color="#fd7e14" height={15} />
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Different bar sizes</Text>
        <View style={styles.line}></View>
        <View style={{padding: 10}}>
          <ProgressBar value={50} color="#dc3545" height={8} />
          <ProgressBar value={70} color="#0d6efd" height={10} />
          <ProgressBar value={40} color="#28a745" height={20} />
          <ProgressBar value={90} color="#fd7e14" height={25} />
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Different bar sizes</Text>
        <View style={styles.line}></View>
        <View style={{padding: 10}}>
        <View style={styles.skillContainer}>
          <Text style={styles.skillLabel}>Photoshop 85%</Text>
          <ProgressBar value={85} color="#dc3545" height={15} />
        </View>
        <View style={styles.skillContainer}>
          <Text style={styles.skillLabel}>Code Editor 90%</Text>
          <ProgressBar value={90} color="#0d6efd" height={15} />
        </View>
        <View style={styles.skillContainer}>
          <Text style={styles.skillLabel}>Illustrator 65%</Text>
          <ProgressBar value={65} color="#28a745" height={15} />
        </View>
        </View>
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
  progressContainer: {
    backgroundColor: '#e9ecef',
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 20,
  },
  progressBar: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  progressText: {
    color: '#fff',
    fontSize: 12,
  },
  striped: {
    backgroundColor: '#0d6efd',
    backgroundImage:
      'linear-gradient(45deg, rgba(255,255,255,0.2) 25%, transparent 25%, transparent 50%, rgba(255,255,255,0.2) 50%, rgba(255,255,255,0.2) 75%, transparent 75%, transparent)',
    backgroundSize: 20,
  },
  skillContainer: {
    marginBottom: 20,
  },
  skillLabel: {
    marginBottom: 5,
    fontSize: 14,
    fontFamily: 'Poppins-SemiBold',
    color:'#000'
  },
  progressContainer: {
    backgroundColor: '#e9ecef',
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 20,
  },
  progressBar: {
    height: '100%',
    position: 'relative',
    borderRadius: 10,
    overflow: 'hidden',
  },
  stripedOverlay: {
    ...StyleSheet.absoluteFillObject, // Fills the entire progress bar
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    backgroundRepeat: 'repeat',
    backgroundSize: 20,
    borderRadius: 10,
    transform: [{rotate: '45deg'}], // Creates diagonal stripes
    borderWidth: 5, // Helps mimic the stripe border
  },
  progressContainer: {
    backgroundColor: '#e9ecef',
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 20,
  },
  progressBar: {
    height: '100%',
    position: 'relative',
    borderRadius: 10,
    overflow: 'hidden',
  },
  stripesContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    flexDirection: 'row',
  },
  stripe: {
    position: 'absolute',
    width: 4, // Stripe width
    height: 5,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    transform: [{rotate: '45deg'}], // Diagonal stripes
  },
});

export default Progress;

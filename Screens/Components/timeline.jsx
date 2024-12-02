import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {Menu, Button, Divider, Provider} from 'react-native-paper';

const Timeline = ({navigation}) => {
  const timelineItems = [
    {
      date: '11 March 2020',
      title: 'Some text goes here',
      color: '#4CAF50',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit necessitatibus adipisci.',
    }, // Green
    {
      date: '11 March 2020',
      title: 'Some text goes here',
      color: '#FFC107',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit necessitatibus adipisci.',
    }, // Yellow
    {
      date: '11 March 2020',
      title: 'Some text goes here',
      color: '#2196F3',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit necessitatibus adipisci.',
    }, // Blue
    {
      date: '11 March 2020',
      title: 'Some text goes here',
      color: '#FF5722',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit necessitatibus adipisci.',
    }, // Orange
    {
      date: '11 March 2020',
      title: 'Some text goes here',
      color: '#F44336',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit necessitatibus adipisci.',
    }, // Red
  ];
  const timelineData = [
    {
      id: 1,
      title: 'Project Analysis',
      description:
        'We at Dream Spa provide various services to the nature of the clients. We can talk.',
    },
    {
      id: 2,
      title: 'Project Analysis',
      description:
        'We at Dream Spa provide various services to the nature of the clients. We can talk.',
    },
    {
      id: 3,
      title: 'Project Analysis',
      description:
        'We at Dream Spa provide various services to the nature of the clients. We can talk.',
    },
    {
      id: 4,
      title: 'Project Analysis',
      description:
        'We at Dream Spa provide various services to the nature of the clients. We can talk.',
      images: [
        require('../../assets/7.jpg'), // Replace with actual image URL
         require('../../assets/8.jpg'), // Replace with actual image URL
      ],
    },
    {
      id: 5,
      title: 'Project Analysis',
      description:
        'We at Dream Spa provide various services to the nature of the clients. We can talk.',
    },
  ];

  return (
    <ScrollView style={styles.container}>
      {/* Timeline Header */}
      <View style={styles.headerContainer}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Timeline</Text>
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
          Timeline Style
        </Button>
      </View>

      {/* Timeline Panel */}
      <View style={styles.timelinePanel}>
        <Text style={styles.header}>Default Timeline</Text>
        {timelineItems.map((item, index) => (
          <View key={index} style={styles.timelineItem}>
            {/* Timeline Connector and Dot */}
            <View style={styles.timelineColumn}>
              <View style={styles.timelineDot} />
              {/* Add vertical line except for the last item */}
              {index < timelineItems.length - 1 && (
                <View style={styles.timelineLine} />
              )}
            </View>
            {/* Content Section */}
            <View style={styles.content}>
              <Text style={styles.date}>{item.date}</Text>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.description}>{item.description}</Text>
            </View>
          </View>
        ))}
      </View>

      <View>
        {timelineItems.map((item, index) => (
          <View key={index} style={styles.timelinePanelItem}>
            {/* Connector and Dot */}
            <View style={styles.timelinePanelColumn}>
              <View
                style={[styles.timelinePanelDot, {backgroundColor: item.color}]}
              />
              {index < timelineItems.length - 1 && (
                <View style={styles.timelinePanelLine} />
              )}
            </View>
            {/* Content */}
            <View
              style={[
                styles.timelinePanelContent,
                {backgroundColor: item.color},
              ]}>
              <Text style={styles.timelinePanelDate}>{item.date}</Text>
              <Text style={styles.timelinePanelText}>{item.title}</Text>
              <Text style={styles.timelinePanelDescription}>
                {item.description}
              </Text>
            </View>
          </View>
        ))}
      </View>

      {/* Timeline Number Section */}
      
      <View style={styles.numberedSection}>
      <Text style={styles.header}>Timeline Number</Text>
        {timelineData.map((item, index) => (
          <View key={item.id} style={styles.timelineItem}>
            {/* Left Circle and Line */}
            <View style={styles.timelineIndex}>
              <View style={styles.circle}>
                <Text style={styles.indexText}>{item.id}</Text>
              </View>
              {index < timelineData.length - 1 && (
                <View style={styles.verticalLine} />
              )}
            </View>

            {/* Right Content */}
            <View style={styles.timelineContent}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.description}>{item.description}</Text>
              {item.images && (
                <View style={styles.timelineimageContainer}>
                  {item.images.map((image, index) => (
                    <Image key={index} source={image} style={styles.timelineimage} />
                  ))}
                </View>
              )}
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
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
  timelinePanel: {
    padding: 16,
  },
  timelineItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    backgroundColor:''
  },
  timelineContent: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    padding: 16,
    fontFamily: 'Poppins-Regular',
    borderRadius: 8,
    elevation: 2,
  },
  date: {
    marginBottom: 4,
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: '#04764E',
  },
  description: {
    fontFamily: 'Poppins-Regular', // Using Poppins-Regular
    fontSize: 12,
    color: '#000',
  },
  timelineDot: {
    width: 20,
    height: 20,
    borderRadius: 10,
    marginLeft: 8,
  },
  numberedSection: {
    paddingHorizontal: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  numberedItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  number: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#04764E',
    marginRight: 8,
  },
  projectText: {
    fontSize: 14,
    color: '#424242',
  },
  imageRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 8,
  },
  header: {
    fontSize: 20,
    marginBottom: 16,
    color: '#333333',
    fontFamily: 'Poppins-Bold',
  },
  timelineItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 24,
  },
  timelineColumn: {
    alignItems: 'center',
    marginRight: 16,
    width: 20, // Fixed width for alignment
  },
  timelineDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#04764E',
    zIndex: 1,
  },
  timelineLine: {
    width: 2,
    flex: 1,
    backgroundColor: '#04764E',
    marginTop: 4, // Space between dot and line
  },
  content: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    marginBottom: 4,
    color: '#000000',
    fontFamily: 'Poppins-Bold', // Using Poppins-Regular
  },
  description: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular', // Using Poppins-Regular
    color: '#666666',
  },
  timelinePanelTitle: {
    fontSize: 18,
    fontFamily: 'Poppins-Bold',
    marginVertical: 16,
    textAlign: 'left',
    color: '#000',
  },
  timelinePanelItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 24,
    padding: 15,
  },
  timelinePanelColumn: {
    alignItems: 'center',
    marginRight: 16,
    marginRight: 16,
    width: 20, // Fixed width for alignment
  },
  timelinePanelDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#4CAF50',
    zIndex: 1,
  },
  timelinePanelLine: {
    width: 2,
    flex: 1,
    backgroundColor: '#ddd',
    marginTop: 4,
  },
  timelinePanelContent: {
    flex: 1,
    borderRadius: 8,
    marginRight: 16,
    padding: 10,
    elevation: 3, // Shadow on Android
    shadowColor: '#000', // Shadow for iOS
    shadowOpacity: 0.1,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 4,
  },
  timelinePanelDate: {
    fontSize: 14,
    fontFamily: 'Poppins-Bold',
    color: '#fff',
    marginBottom: 4,
  },
  timelinePanelText: {
    fontSize: 16,
    fontFamily: 'Poppins-Bold',
    color: '#fff',
    marginBottom: 4,
  },
  timelinePanelDescription: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: '#fff',
  },
  timelineItem: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  timelineIndex: {
    width: 50,
    alignItems: 'center',
    position: 'relative',
  },
  circle: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#01AA6F',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
  },
  indexText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  verticalLine: {
    position: 'absolute',
    top: 30,
    width: 2,
    height: '100%',
    backgroundColor: '#01AA6F',
  },
  timelineContent: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    padding: 16,
    elevation: 2,
  },
  timelineimageContainer: {
    flexDirection: 'row',
    marginTop: 10,
    justifyContent: 'flex-start',
  },
  timelineimage: {
    width: 140,
    height: 140,
    borderRadius: 8,
    marginRight:15,

  },
});

export default Timeline;

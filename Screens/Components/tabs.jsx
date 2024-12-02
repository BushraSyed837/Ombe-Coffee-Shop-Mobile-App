import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'; // Optional: For Icons in Tabs
import {List, Button, Badge} from 'react-native-paper';

const Tabs = ({navigation}) => {
  const [activeTab, setActiveTab] = useState('Home');
  const [hoveredTab, setHoveredTab] = useState(null);

  const renderTabContent = tab => {
    switch (tab) {
      case 'Home':
        return (
          <View>
            <Text style={styles.contentheading}>This is home title</Text>
            <Text style={styles.contentText}>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts. Separated
              they live in Bookmarksgrove. Far far away, behind the word
              mountains, far from the countries Vokalia and Consonantia, there
              live the blind texts. Separated they live in Bookmarksgrove.
            </Text>
          </View>
        );
      case 'Profile':
        return (
          <View>
            <Text style={styles.contentheading}>This is Profile title</Text>
            <Text style={styles.contentText}>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts. Separated
              they live in Bookmarksgrove. Far far away, behind the word
              mountains, far from the countries Vokalia and Consonantia, there
              live the blind texts. Separated they live in Bookmarksgrove.
            </Text>
          </View>
        );
      case 'Contact':
        return (
          <View>
            <Text style={styles.contentheading}>This is Contact title</Text>
            <Text style={styles.contentText}>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts. Separated
              they live in Bookmarksgrove. Far far away, behind the word
              mountains, far from the countries Vokalia and Consonantia, there
              live the blind texts. Separated they live in Bookmarksgrove.
            </Text>
          </View>
        );
      case 'Message':
        return (
          <View>
            <Text style={styles.contentheading}>This is Message title</Text>
            <Text style={styles.contentText}>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts. Separated
              they live in Bookmarksgrove. Far far away, behind the word
              mountains, far from the countries Vokalia and Consonantia, there
              live the blind texts. Separated they live in Bookmarksgrove.
            </Text>
          </View>
        );
      default:
        return null;
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Tabs</Text>
        <TouchableOpacity style={styles.menuButton}>
          {/* Placeholder for menu functionality */}
        </TouchableOpacity>
      </View>
      <View style={styles.headerTop}>
        <View style={styles.headerContent}>
          <Ionicons
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
          Tabs Style
        </Button>
      </View>

      {/*Default Tab*/}
      <View style={styles.tabContainer}>
        <Text style={styles.title}>Default Tab</Text>
        <View style={styles.line}></View>
        <View style={styles.tabs}>
          <View style={[styles.separator, {flexDirection: 'row'}]}>
            {['Home', 'Profile', 'Contact', 'Message'].map(tab => (
              <TouchableOpacity
                key={tab}
                style={[
                  styles.tab,
                  activeTab === tab && styles.activeTab,
                  hoveredTab === tab && styles.hoveredTab, // Apply hover effect
                ]}
                onPress={() => setActiveTab(tab)}
                onPressIn={() => setHoveredTab(tab)} // Hover on press
                onPressOut={() => setHoveredTab(null)} // Reset hover on press out
              >
                {/* Optional: Adding Icons to Tabs */}
                <View style={{flexDirection: 'row'}}>
                  <Ionicons
                    name={
                      tab === 'Home'
                        ? 'home-outline'
                        : tab === 'Profile'
                        ? 'person-outline'
                        : tab === 'Contact'
                        ? 'call-outline'
                        : 'chatbubbles-outline'
                    }
                    size={15}
                    color={activeTab === tab ? '#000' : '#000'}
                  />
                  <Text
                    style={
                      activeTab === tab
                        ? [styles.activeTabText, {marginLeft: 5}]
                        : [styles.tabText, {marginLeft: 5}]
                    }>
                    {tab}
                  </Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </View>
        {renderTabContent(activeTab)}
      </View>

      {/* Custom Tab */}
      <View style={styles.tabContainer}>
        <Text style={styles.title}>Custom Tab 1</Text>
        <View style={styles.line}></View>
        <View style={styles.tabs}>
          <View style={[styles.separator, {flexDirection: 'row'}]}>
            {['Home', 'Profile', 'Contact', 'Message'].map(tab => (
              <TouchableOpacity
                key={tab}
                style={[
                  styles.tab,
                  activeTab === tab && styles.activeTab,
                  hoveredTab === tab && styles.hoveredTab, // Apply hover effect
                ]}
                onPress={() => setActiveTab(tab)}
                onPressIn={() => setHoveredTab(tab)} // Hover on press
                onPressOut={() => setHoveredTab(null)} // Reset hover on press out
              >
                <View style={{flexDirection: 'row'}}>
                  <Ionicons
                    name={
                      tab === 'Home'
                        ? 'home-outline'
                        : tab === 'Profile'
                        ? 'person-outline'
                        : tab === 'Contact'
                        ? 'call-outline'
                        : 'chatbubbles-outline'
                    }
                    size={15}
                    color={activeTab === tab ? '#000' : '#000'}
                  />
                  <Text
                    style={
                      activeTab === tab
                        ? [styles.activeTabText, {marginLeft: 5}]
                        : [styles.tabText, {marginLeft: 5}]
                    }>
                    {tab}
                  </Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {renderTabContent(activeTab)}
      </View>

      {/* Nav Pills Tabs */}
      <View style={styles.tabContainer}>
        <Text style={styles.title}>Nav Pills Tabs</Text>
        <View style={styles.line}></View>
        <View style={styles.pills}>
          {['Home', 'Profile', 'Contact', 'Disabled'].map(pill => (
            <TouchableOpacity
              key={pill}
              style={[
                styles.pill,
                activeTab === pill && styles.activePill,
                hoveredTab === pill && styles.hoveredPill, // Apply hover effect
                pill === 'Disabled' && styles.disabledPill,
              ]}
              onPress={() => pill !== 'Disabled' && setActiveTab(pill)}
              onPressIn={() => setHoveredTab(pill)} // Hover on press
              onPressOut={() => setHoveredTab(null)} // Reset hover on press out
            >
              <Text
                style={[
                  styles.pillText,
                  activeTab === pill && styles.activePillText,
                  hoveredTab === pill && styles.hoveredPillText, // Hover effect text
                  pill === 'Disabled' && styles.disabledPillText,
                ]}>
                {pill}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
        {activeTab !== 'Disabled' && renderTabContent(activeTab)}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f4f4f4',
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
  tabContainer: {
    backgroundColor: '#fff',
    margin: 8,
    borderRadius: 10,
    
    borderWidth: 1,
    borderColor: '#ddd',
  },
  title: {
    fontSize: 18,
    padding: 10,
    color: '#000',
    fontFamily: 'Poppins-Bold',
  },
  tabs: {
    flexDirection: 'row',
    padding: 10,
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  tab: {
    paddingVertical: 4,
    paddingHorizontal: 8,
  },
  activeTab: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ddd',
    borderTopRightRadius: 8,
    borderTopLeftRadius: 8,
  },
  hoveredTab: {
    backgroundColor: '#ddd', // Simulate hover effect with background color change
  },
  tabText: {
    color: '#000',
    fontFamily: 'Poppins-Regular',
  },
  activeTabText: {
    color: '#000',
  },
  pills: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  pill: {
    paddingVertical: 8,
    paddingHorizontal: 20,
  },
  activePill: {
    backgroundColor: 'rgba(4, 118, 78, 0.1)',
    borderColor: '#6200ee',
    borderRadius: 8,
  },
  hoveredPill: {
    backgroundColor: '#e3e3e3', // Simulate hover effect with background color change
  },
  pillText: {
    color: '#000',
    fontFamily: 'Poppins-Regular',
  },
  activePillText: {
    color: '#000',
    fontFamily: 'Poppins-Regular',
  },
  hoveredPillText: {
    color: '#6200ee', // Change text color on hover
  },
  disabledPill: {},
  disabledPillText: {
    color: '#aaa',
  },
  contentText: {
    fontSize: 14,
    lineHeight: 20,
    color: '#555',
    padding: 15,
    paddingTop:2,
    textAlign:'justify',
    fontFamily: 'Poppins-Regular',
  },
  contentheading: {
    fontSize: 14,
    lineHeight: 20,
    color: '#000',
    padding: 10,
    paddingTop:2,
    marginLeft:5,
    fontFamily: 'Poppins-Bold',
  },
  separator: {
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
  line: {
    borderTopWidth: 1,
    borderColor: '#ddd',
    marginBottom:10,
  },
});

export default Tabs;

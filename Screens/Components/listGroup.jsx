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
import {List, Button, Badge} from 'react-native-paper';

const ListGroup = ({navigation}) => {
  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.headerContainer}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerText}>List Group</Text>
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
          List Group Style
        </Button>
      </View>

      {/* Basic List Group */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Basic List Group</Text>
        <List.Section style={styles.listSection}>
          <List.Item title="An item" />
          <List.Item title="A second item" style={styles.listItem} />
          <List.Item title="A third item" style={styles.listItem} />
          <List.Item title="A fourth item" style={styles.listItem} />
          <List.Item title="And a fifth one" style={styles.listItem} />
        </List.Section>
      </View>

      {/* List Active Items */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>List Active Items</Text>
        <List.Section style={styles.listSection}>
          <List.Item
            title="An active item"
            style={styles.activeItem}
            titleStyle={styles.activeItemText}
          />
          <List.Item title="A second item" style={styles.listItem} />
          <List.Item title="A third item" style={styles.listItem} />
          <List.Item title="A fourth item" style={styles.listItem} />
          <List.Item title="And a fifth one" style={styles.listItem} />
        </List.Section>
      </View>

      {/* List Disabled Items */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>List Disabled Items</Text>
        <List.Section style={styles.listSection}>
          <List.Item title="A disabled item" />
          <List.Item title="A second item" style={styles.listItem} />
          <List.Item title="A third item" style={styles.listItem} />
          <List.Item title="A fourth item" style={styles.listItem} />
          <List.Item title="And a fifth one" style={styles.listItem} />
        </List.Section>
      </View>

      {/* Links and Buttons */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Links And Buttons</Text>
        <List.Section style={styles.listSection}>
          <List.Item
            title="The current link item"
            style={styles.activeItem}
            titleStyle={styles.activeItemText}
          />
          <List.Item title="A second link item" style={styles.listItem} />
          <List.Item title="A third link item" style={styles.listItem} />
          <List.Item title="A fourth link item" style={styles.listItem} />
          <List.Item
            title="A disabled link item"
            disabled
            style={styles.listItem}
          />
        </List.Section>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Flush</Text>
        <List.Section style={styles.flushListSection}>
          <List.Item
            title="The current link item"
            style={styles.flushListItem}
          />
          <List.Item title="A second link item" style={styles.flushListItem} />
          <List.Item title="A third link item" style={styles.flushListItem} />
          <List.Item title="A fourth link item" style={styles.flushListItem} />
          <List.Item
            title="A disabled link item"
            disabled
            style={styles.flushListItem}
          />
        </List.Section>
      </View>

      {/* Custom Content Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Custom Content</Text>
        <View style={styles.listGroup}>
          <View style={[styles.listGroupItem, styles.activeItem]}>
            <View style={styles.listContent}>
              <Text style={[styles.itemHeading, styles.activeHeading]}>
                List group item heading
              </Text>
              <Text style={styles.itemSubText}>
                Some placeholder content in a paragraph. {'\n'}
                <Text style={styles.mutedText}>And some small print.</Text>
              </Text>
            </View>
            <Text style={styles.itemTime}>3 days ago</Text>
          </View>

          {/* Normal List Items */}
          {[1, 2].map((item, index) => (
            <View key={index} style={styles.listGroupItem}>
              <View style={styles.listContent}>
                <Text style={styles.itemHeading}>List group item heading</Text>
                <Text style={styles.itemSubText}>
                  Some placeholder content in a paragraph. {'\n'}
                  <Text style={styles.mutedText}>And some small print.</Text>
                </Text>
              </View>
              <Text style={styles.itemTime}>3 days ago</Text>
            </View>
          ))}
        </View>
      </View>

      {/* With Badges Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>With Badges</Text>
        <View style={styles.listGroup}>
          {[
            {text: 'A list item', badge: 14},
            {text: 'A second list item', badge: 2},
            {text: 'A third list item', badge: 1},
          ].map((item, index) => (
            <View key={index} style={styles.listItemWithBadge}>
              <Text style={styles.badgeText}>{item.text}</Text>
              <Badge style={styles.badge}>{item.badge}</Badge>
            </View>
          ))}
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
    padding: 8,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
  },
  listSection: {
    margin: 4,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
  },
  flushListSection: {
    borderTopWidth: 1.5,
    borderColor: '#ddd',
    paddingVertical: -10,
  },
  listItem: {
    borderTopWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
  },
  flushListItem: {
    borderBottomWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
  },
  sectionTitle: {
    fontSize: 16,
    fontFamily: 'Poppins-Bold', // Using Poppins-Bold
    padding: 10,
    color: '#000',
  },
  activeItem: {
    backgroundColor: '#198754',
    borderRadius: 8,
  },
  activeItemText: {
    color: 'white',
  },
  listGroup: {
    borderRadius: 8,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
  },
  listGroupItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
    backgroundColor: 'white',
  },
  activeItem: {
    backgroundColor: '#198754',
  },
  listContent: {
    flex: 1,
  },
  itemHeading: {
    fontSize: 16,
    fontFamily: 'Poppins-Bold', // Using Poppins-Bold
    color: '#000',
  },
  activeHeading: {
    color: 'white',
  },
  itemSubText: {
    fontSize: 14,
    marginTop: 4,
    fontFamily: 'Poppins-Regular', // Using Poppins-Bold
    color: '#000',
  },
  mutedText: {
    color: '#6C757D',
  },
  itemTime: {
    fontSize: 12,
    color: '#6C757D',
    marginLeft: 16,
    fontFamily: 'Poppins-Regular', // Using Poppins-Bold
  },
  listItemWithBadge: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  badgeText: {
    fontSize: 16,
    fontFamily: 'Poppins-Regular', // Using Poppins-Bold
    color: '#000',
  },
  badge: {
    backgroundColor: '#198754',
    color: 'white',
  },
});

export default ListGroup;

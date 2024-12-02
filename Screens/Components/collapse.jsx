import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {Menu, Button, Divider, Provider} from 'react-native-paper';

export default function Collapse({navigation}) {
  const [isCollapsed, setIsCollapsed] = React.useState(false);
  const [isHorizontalCollapsed, setIsHorizontalCollapsed] =
    React.useState(false);

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.headerContainer}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Collapse</Text>
        <TouchableOpacity style={styles.menuButton}>
          {/* Placeholder for menu functionality */}
        </TouchableOpacity>
      </View>
      <View style={styles.header}>
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
          Collapse Style
        </Button>
      </View>

      {/* Content */}
      <View style={styles.content}>
        {/* Card 1 */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Collapse</Text>
          <View
            style={{
              borderBottomWidth: 1,
              borderColor: '#ddd',
              marginBottom: 10,
            }}></View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => setIsCollapsed(!isCollapsed)}>
            <Text style={styles.buttonText}>Button With Data-Bs-Target</Text>
          </TouchableOpacity>
          {isCollapsed && (
            <Text style={styles.collapseText}>
              Some placeholder content for the collapse component. This panel is
              hidden by default but revealed when the user activates the
              relevant trigger.
            </Text>
          )}
        </View>

        {/* Card 2 */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Collapse Horizontal</Text>
          <View style={{borderBottomWidth: 1,
    borderColor: '#ddd', marginBottom:10}}></View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => setIsHorizontalCollapsed(!isHorizontalCollapsed)}>
            <Text style={styles.buttonText}>Toggle Width Collapse</Text>
          </TouchableOpacity>
          {isHorizontalCollapsed && (
            <Text
              style={[
                styles.collapseText,
                {width: 170, textAlign: 'flex-start'},
              ]}>
              Some placeholder content for the collapse component. This panel is
              hidden by default but revealed when the user activates the
              relevant trigger.
            </Text>
          )}
        </View>
      </View>
    </View>
  );
}

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
  header: {
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
  content: {
    padding: 15,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ddd',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 1 },
    elevation: 3,
  },
  cardTitle: {
    fontSize: 16,
    fontFamily: 'Poppins-Bold', // Using Poppins-Bold
    padding: 15,
    color:'#000'
  },
  button: {
    backgroundColor: '#198754',
    borderRadius: 5,
    padding: 10,
    alignItems: 'center',
    margin: 10,
  },
  buttonText: {
    color: '#fff',
    fontFamily: 'Poppins-Bold', // Using Poppins-Bold
  },
  collapseText: {
    marginTop: 10,
    fontSize: 14,
    color: '#6c757d',
    margin: 15,
    fontFamily: 'Poppins-Regular', // Using Poppins-Regular
  },
  collapseBox: {
    marginTop: 10,
    backgroundColor: '#6c757d',
    height: 50,
    width: '100%',
  },
});


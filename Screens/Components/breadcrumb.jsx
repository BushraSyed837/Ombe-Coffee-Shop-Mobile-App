import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Button, } from 'react-native-paper';
const Breadcrumb = ({ navigation }) => {
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
        Breadcrumbs
        </Text>
        <TouchableOpacity
          style={styles.menuButton}
          onPress={() => console.log('Menu button pressed')}>
          {/* Placeholder for future menu button functionality */}
        </TouchableOpacity>
      </View>
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <Icon name="layers" size={28} color="#fff" style={{marginTop: 10, marginRight:10}} />
          <Text style={styles.headerText}>Bootstrap Elements</Text>
        </View>
        <Button
          mode="outlined"
          style={styles.headerButton}
          labelStyle={styles.headerButtonText}>
          Breadcrumbs Style
        </Button>
      </View>
      
      <View style={{margin:15}}>
      <Text style={styles.sectionTitle}>Breadcrumb</Text>
      <Text style={styles.breadcrumb}>Home › Elements › Breadcrumb</Text>

      <Text style={styles.sectionTitle}>Breadcrumb style 2</Text>
      <Text style={[styles.breadcrumb, styles.styleTwo]}>
        Home ~ Elements ~ Breadcrumb
      </Text>

      <Text style={styles.sectionTitle}>Breadcrumb style 3</Text>
      <View style={[styles.breadcrumbContainer, styles.styleThree]}>
        <Text style={styles.styleThreeText}>Home</Text>
        <Text style={styles.styleThreeText}>›</Text>
        <Text style={styles.styleThreeText}>Elements</Text>
        <Text style={styles.styleThreeText}>›</Text>
        <Text style={styles.styleThreeText}>Breadcrumb</Text>
      </View>

      </View>

<View style={{margin:15}}>
      {/* Breadcrumb Colors */}
      <Text style={styles.sectionTitle}>Breadcrumb Color</Text>
      {["#2ECC71", "#F5CBA7", "#C0392B", "#3498DB", "#E67E22", "#000000"].map(
        (color, index) => (
          <View
            key={index}
            style={[styles.breadcrumbContainer, { backgroundColor: color }]}
          >
            <Text style={styles.colorBreadcrumbText}>Home</Text>
            <Text style={styles.colorBreadcrumbText}>›</Text>
            <Text style={styles.colorBreadcrumbText}>Elements</Text>
            <Text style={styles.colorBreadcrumbText}>›</Text>
            <Text style={styles.colorBreadcrumbText}>Breadcrumb</Text>
          </View>
        )
      )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
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
  titleContainer: {
    alignItems: 'flex-start',
    padding: 16,
    backgroundColor: '#6f42c1',
    borderRadius: 8,
    marginTop:10,
    marginBottom: 16,
  },
  title: {
    fontSize: 20,
    color:'#000',
    fontFamily: 'Poppins-Bold',
  },
  subtitle: {
    fontSize: 12,
    fontFamily: 'Poppins-Bold',
    color: '#f8f9fa',
  },
  card: {
    backgroundColor: "#8E44AD",
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
  },
  cardContent: {
    alignItems: "center",
  },
  cardTitle: {
    color: "#FFF",
    fontSize: 18,
    fontFamily: 'Poppins-Bold',
  },
  cardSubtitle: {
    color: "#DDD",
    fontSize: 14,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 16,
    marginBottom: 8,
  },
  breadcrumb: {
    fontSize: 14,
    color: "#333",
    marginBottom: 8,
  },
  styleTwo: {
    fontStyle: "italic",
  },
  breadcrumbContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 8,
    borderRadius: 4,
    marginBottom: 8,
  },
  styleThree: {
    backgroundColor: "#2C3E50",
  },
  styleThreeText: {
    color: "#FFF",
    marginHorizontal: 4,
  },
  colorBreadcrumbText: {
    color: "#FFF",
    marginHorizontal: 4,
  },
});

export default Breadcrumb;

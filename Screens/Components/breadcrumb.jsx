import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

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
        <Text style={[styles.headerText, styles.boldText]}>Breadcrumb</Text>
        <TouchableOpacity
          style={styles.menuButton}
          onPress={() => console.log('Menu button pressed')}>
          {/* Placeholder for future menu button functionality */}
        </TouchableOpacity>
      </View>

      <View style={styles.titleContainer}>
        <Text style={[styles.title, styles.boldText]}>Bootstrap Elements</Text>
        <Text style={[styles.subtitle, styles.regularText]}>Breadcrumb style</Text>
      </View>

      {/* Breadcrumb Sections */}
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
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    paddingHorizontal: 16,
    paddingTop: 24,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    
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
    fontFamily: 'Poppins-Bold', // Added Poppins Regular font
  },
  menuButton: {
    padding: 8,
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

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icons from 'react-native-vector-icons/Ionicons';

const AlertComponent = ({ icon, message, color }) => (
  <View style={[styles.alert, { backgroundColor: color }]}>
    <Icon name={icon} size={20} color="white" style={styles.icon} />
    <Text style={styles.alertText}>{message}</Text>
  </View>
);

const Alerts = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.headerContainer}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
          accessible={true}
          accessibilityLabel="Go back"
        >
          <Icons name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={[styles.headerText, styles.boldText]}>Alerts</Text>
        <View style={styles.menuButton} />
      </View>
      {/* Scrollable Content */}
      <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollContent}>
        {/* Page Header */}
        <View style={styles.pageHeader}>
          <Text style={styles.pageHeaderTitle}>Bootstrap Elements</Text>
          <Text style={styles.pageHeaderSubtitle}>Alerts style</Text>
        </View>

        {/* Default Alerts */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Default Alert</Text>
          <AlertComponent icon="thumbs-up" message="Welcome! Message has been sent." color="#DFF6DD" />
          <AlertComponent icon="user" message="Cover Your profile photo updated." color="#FFF3CD" />
          <AlertComponent icon="check-circle" message="Successful Message has been sent." color="#D1E7DD" />
          <AlertComponent icon="info-circle" message="Info! You have got a new email." color="#CFE2FF" />
          <AlertComponent icon="exclamation-triangle" message="Warning! Something went wrong. Please check." color="#FEE2E2" />
          <AlertComponent icon="times-circle" message="Error! Message sending failed." color="#F8D7DA" />
          <AlertComponent icon="check-circle" message="Error! You successfully read this message." color="#E2E3E5" />
        </View>

        {/* Solid Color Alerts */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Solid Color Alerts</Text>
          <AlertComponent icon="check-circle" message="Welcome! Message has been sent." color="#198754" />
          <AlertComponent icon="user" message="Cover Your profile photo updated." color="#FFC107" />
          <AlertComponent icon="check-circle" message="Successful Message has been sent." color="#0D6EFD" />
          <AlertComponent icon="info-circle" message="Info! You have got a new email." color="#0DCAF0" />
          <AlertComponent icon="exclamation-triangle" message="Warning! Something went wrong. Please check." color="#DC3545" />
          <AlertComponent icon="times-circle" message="Error! Message sending failed." color="#000000" />
        </View>

        {/* Alerts Alt */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Alerts Alt</Text>
          <AlertComponent icon="check-circle" message="Successful Message has been sent." color="#D1E7DD" />
          <AlertComponent icon="times-circle" message="Error Message Sending Failed." color="#F8D7DA" />
        </View>
      </ScrollView>
    </View>
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
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  backButton: {
    padding: 8,
  },
  headerText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
  },
  menuButton: {
    padding: 8,
  },
  scrollView: {
    flex: 1,
  },
  headerText: {
    fontSize: 20,
    color: '#000',
    textAlign: 'center',
    flex: 1, // Center text within the available space
  },
  boldText: {
    fontFamily: 'Poppins-Bold',
  },
  scrollContent: {
    padding: 16,
  },
  pageHeader: {
    backgroundColor: '#6F42C1',
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
  },
  pageHeaderTitle: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  pageHeaderSubtitle: {
    color: 'white',
    fontSize: 14,
    marginTop: 4,
  },
  section: {
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#495057',
  },
  alert: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    borderRadius: 8,
    marginBottom: 8,
  },
  alertText: {
    marginLeft: 10,
    fontSize: 14,
    color: 'white',
    fontWeight: '500',
  },
  icon: {
    marginRight: 8,
  },
});

export default Alerts;

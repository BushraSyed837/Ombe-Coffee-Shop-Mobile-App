import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Collapsible from 'react-native-collapsible';

const Accordion = ({ navigation }) => {
  const [activeSections, setActiveSections] = useState({});

  const toggleSection = (section) => {
    setActiveSections((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Header */}
      <View style={styles.headerContainer}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
          accessible={true}
          accessibilityLabel="Go back"
        >
          <Icon name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={[styles.headerText, styles.boldText]}>Accordion</Text>
        <TouchableOpacity
          style={styles.menuButton}
          onPress={() => console.log('Menu button pressed')}
        >
          {/* Placeholder for future menu button functionality */}
        </TouchableOpacity>
      </View>

      {/* Title Section */}
      <View style={styles.titleContainer}>
        <Text style={[styles.title, styles.boldText]}>Bootstrap Elements</Text>
        <Text style={[styles.subtitle, styles.regularText]}>Accordion style</Text>
      </View>

      {/* Default Accordion */}
      <View style={styles.sectionWrapper}>
        <Text style={[styles.sectionHeader, styles.boldText]}>Default Accordion</Text>
        <AccordionSection
          title="Accordion Header One"
          content="Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod."
          isOpen={activeSections.default1}
          onToggle={() => toggleSection('default1')}
          headerStyle={styles.defaultHeader}
          iconColor="green"
        />
        <AccordionSection
          title="Accordion Header Two"
          content="Content for Accordion Header Two."
          isOpen={activeSections.default2}
          onToggle={() => toggleSection('default2')}
          headerStyle={styles.defaultHeader}
          iconColor="green"
        />
        <AccordionSection
          title="Accordion Header Three"
          content="Content for Accordion Header Three."
          isOpen={activeSections.default3}
          onToggle={() => toggleSection('default3')}
          headerStyle={styles.defaultHeader}
          iconColor="green"
        />
      </View>

      {/* Bordered Accordion */}
      <View style={styles.sectionWrapper}>
        <Text style={[styles.sectionHeader, styles.boldText]}>Accordion Bordered</Text>
        <AccordionSection
          title="Accordion Header One"
          content="Content for Bordered Accordion Header One."
          isOpen={activeSections.bordered1}
          onToggle={() => toggleSection('bordered1')}
          headerStyle={styles.borderedHeader}
          contentStyle={styles.borderedContent}
          iconColor="red"
        />
        <AccordionSection
          title="Accordion Header Two"
          content="Content for Bordered Accordion Header Two."
          isOpen={activeSections.bordered2}
          onToggle={() => toggleSection('bordered2')}
          headerStyle={styles.borderedHeader}
          contentStyle={styles.borderedContent}
          iconColor="red"
        />
      </View>

      {/* Background Header Accordion */}
      <View style={styles.sectionWrapper}>
        <Text style={[styles.sectionHeader, styles.boldText]}>Accordion Header Background</Text>
        <AccordionSection
          title="Accordion Header One"
          content="Content for Header Background Accordion Header One."
          isOpen={activeSections.bg1}
          onToggle={() => toggleSection('bg1')}
          headerStyle={styles.bgHeader}
          contentStyle={styles.bgContent}
          iconColor="#6c757d"
        />
        <AccordionSection
          title="Accordion Header Two"
          content="Content for Header Background Accordion Header Two."
          isOpen={activeSections.bg2}
          onToggle={() => toggleSection('bg2')}
          headerStyle={styles.bgHeader}
          contentStyle={styles.bgContent}
          iconColor="#6c757d"
        />
      </View>
    </ScrollView>
  );
};

const AccordionSection = ({ title, content, isOpen, onToggle, headerStyle, contentStyle, iconColor }) => (
  <View style={styles.accordion}>
    <TouchableOpacity onPress={onToggle} style={[styles.header, headerStyle]}>
      <Text style={[styles.headerTextAccordion, styles.boldText]}>{title}</Text>
      <Text style={[styles.icon, { color: iconColor }, styles.boldText]}>{isOpen ? '-' : '+'}</Text>
    </TouchableOpacity>
    <Collapsible collapsed={!isOpen}>
      <View style={[styles.content, contentStyle]}>
        <Text style={styles.regularText}>{content}</Text>
      </View>
    </Collapsible>
  </View>
);

const styles = StyleSheet.create({
  container: {
    paddingBottom: 10, // Ensures some space at the bottom
    padding:10,
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
  },
  menuButton: {
    padding: 8,
  },
  titleContainer: {
    alignItems: 'flex-start',
    padding: 16,
    backgroundColor: '#6f42c1',
    borderRadius: 8,
    marginBottom: 16,
  },
  title: {
    fontSize: 20,
    color:'#000'
  },
  subtitle: {
    fontSize: 12,
    color: '#f8f9fa',
  },
  sectionWrapper: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    marginBottom: 16,
    padding: 8,
  },
  sectionHeader: {
    fontSize: 16,
    marginBottom: 8,
    color: '#333',
  },
  accordion: {
    marginBottom: 8,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderRadius: 8,
  },
  headerTextAccordion: {
    fontSize: 14,
  },
  icon: {
    fontSize: 18,
  },
  content: {
    padding: 16,
    backgroundColor: '#e9ecef',
    borderRadius: 8,
  },
  defaultHeader: {
    backgroundColor: '#d1e7dd',
  },
  borderedHeader: {
    backgroundColor: '#f8d7da',
    borderWidth: 1,
    borderColor: '#dc3545',
  },
  borderedContent: {
    backgroundColor: '#f8d7da',
  },
  bgHeader: {
    backgroundColor: '#6c757d',
    color: 'white',
  },
  bgContent: {
    backgroundColor: '#e9ecef',
  },
  boldText: {
    fontFamily: 'Poppins-Bold',
  },
  regularText: {
    fontFamily: 'Poppins-Regular',
  },
});

export default Accordion;

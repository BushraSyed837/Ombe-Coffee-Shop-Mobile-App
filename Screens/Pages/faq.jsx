import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; // For chevron icons

const FAQScreen = ({navigation}) => {
  const [expanded, setExpanded] = useState(null);

  const faqData = [
    {
      question: 'What is included with my purchase?',
      answer:
        'Package includes HTML files, SCSS files, CSS files, JS files, Well Defined Documentation, Fonts and Icons, Responsive Designs, Image Assets, Customization Options, and many more.',
    },
    {
      question: 'What features does Ombe offer?',
      answer: 'Feature details go here.',
    },
    {
      question: "Can I customize the template's design?",
      answer: 'Customization details go here.',
    },
    { question: 'Is the template SEO-friendly?', answer: 'SEO details go here.' },
    {
      question: 'Are there pre-designed page templates included?',
      answer: 'Template details go here.',
    },
    {
      question: 'Does Ombe provide customer support?',
      answer: 'Support details go here.',
    },
    {
      question: 'Is coding knowledge required to use Ombe?',
      answer: 'Coding requirements go here.',
    },
    {
      question: 'How can I get started with Ombe?',
      answer: 'Getting started details go here.',
    },
  ];

  const toggleExpand = index => {
    setExpanded(expanded === index ? null : index);
  };

  return (
    <View style={styles.container}>
      
      <View style={styles.headercontainer}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headersText}>Questions & Answers</Text>
        <TouchableOpacity style={styles.menuButton}>
          <Icon name="chatbubble-outline" size={20} color="#000" />
        </TouchableOpacity>
      </View>
      
      <ScrollView style={styles.content}>
        {faqData.map((item, index) => (
          <View key={index} style={styles.faqItem}>
            {/* Question Section */}
            <TouchableOpacity
              style={[
                styles.questionContainer,
                expanded === index ? styles.activeQuestion : {},
              ]}
              onPress={() => toggleExpand(index)}>
              <Text
                style={[
                  styles.questionText,
                  expanded === index ? styles.activeQuestionText : {},
                ]}>
                {item.question}
              </Text>
              <Icon
                name={
                  expanded === index
                    ? 'chevron-up-outline'
                    : 'chevron-down-outline'
                }
                size={20}
                color={expanded === index ? '#fff' : '#000'}
              />
            </TouchableOpacity>

            {/* Answer Section */}
            {expanded === index && (
              <View style={styles.answerContainer}>
                <Text style={styles.answerText}>{item.answer}</Text>
              </View>
            )}
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headercontainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    backgroundColor: '#fff',
  },
  headersText: {
    fontSize: 18,
    fontFamily: 'Poppins-Bold',
    color: '#000',
  },
  backButton: {
    padding: 8,
  },
  menuButton: {
    padding: 8,
  },
  header: {
    backgroundColor: '#000',
    paddingVertical: 16,
    paddingHorizontal: 20,
  },
  headerText: {
    color: '#000',
    fontSize: 18,
    fontWeight: 'bold',
  },
  content: {
    padding: 16,
  },
  faqItem: {
    marginBottom: 10,
    borderRadius: 22,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#000',
  },
  questionContainer: {
    backgroundColor: '#fff',
    paddingVertical: 14,
    paddingHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  activeQuestion: {
    backgroundColor: '#000',
  },
  activeQuestionText: {
    color: '#fff', // White text for active question
  },
  questionText: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 16,
    flex: 1,
  },
  answerContainer: {
    backgroundColor: '#F8F9FB',
    padding: 16,
  },
  answerText: {
    color: '#333',
    fontSize: 14,
    lineHeight: 20,
  },
});

export default FAQScreen;

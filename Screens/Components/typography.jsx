import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Switch,
  TouchableOpacity,
  Image,
  Animated,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {List, Button, Badge} from 'react-native-paper';

const Typography = ({navigation}) => {
  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.headerContainer}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Typography</Text>
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
          Typography Style
        </Button>
      </View>

      {/* Bootstrap Switches */}

      {/* Switches Colors */}
      <View style={styles.section}>
        <Text style={styles.typoSectionTitle}>Typography</Text>
        <Text style={styles.typoSectionSubTitle}>
          Use tags h1 to h6 for desired heading.
        </Text>

        <Text style={styles.h1}>h1. Bootstrap heading</Text>
        <Text style={styles.h2}>h2. Bootstrap heading</Text>
        <Text style={styles.h3}>h3. Bootstrap heading</Text>
        <Text style={styles.h4}>h4. Bootstrap heading</Text>
        <Text style={styles.h5}>h5. Bootstrap heading</Text>
        <Text style={styles.h6}>h6. Bootstrap heading</Text>

        <Text style={styles.typoSectionTitle}>Paragraph With Justify</Text>
        <Text style={styles.typoSectionSubTitle}>
          Use text-justify for desired paragraph.
        </Text>
        <Text style={styles.justifiedParagraph}>
          Ambitioni dedisse scripsisse iudicaretur. Cras mattis iudicium purus
          sit amet fermentum. Donec sed odio operae, eu vulputate felis rhoncus.
          Praeterea iter est quasdam res quas ex communi. At nos hinc posthac,
          sitientis piros Afros. Petierunt uti sibi concilium totius Galliae in
          diem certam indicere. Cras mattis iudicium purus sit amet fermentum.
        </Text>

        <Text style={styles.typoSectionTitle}>Alignment Text</Text>
        <Text style={styles.typoSectionSubTitle}>
          Use text-start, text-center, text-end for desired text.
        </Text>
        <Text style={styles.alignStart}>
          Left aligned text on all viewport sizes.
        </Text>
        <Text style={styles.alignCenter}>
          Center aligned text on all viewport sizes.
        </Text>
        <Text style={styles.alignEnd}>
          Right aligned text on all viewport sizes.
        </Text>
      </View>

      <View style={styles.section}>
        {/* View Port Text */}
        <Text style={[styles.typoSectionTitle, {color: '#000'}]}>
          View Port Text
        </Text>
        <Text style={styles.typoSectionSubTitle}>
          Use{' '}
          <Text style={{color: 'red'}}>
            {' '}
            text-sm-start, text-md-start, text-lg-start, text-xl-start
          </Text>{' '}
          for desired text.
        </Text>
        <Text style={styles.viewPortText}>
          Left aligned text on viewports sized SM (small) or wider.
        </Text>
        <Text style={styles.viewPortText}>
          Left aligned text on viewports sized MD (medium) or wider.
        </Text>
        <Text style={styles.viewPortText}>
          Left aligned text on viewports sized LG (large) or wider.
        </Text>
        <Text style={styles.viewPortText}>
          Left aligned text on viewports sized XL (extra-large) or wider.
        </Text>

        {/* Font Weight and Italics */}
        <Text style={[styles.typoSectionTitle, {color: '#000'}]}>
          Font Weight And Italics
        </Text>
        <Text style={styles.typoSectionSubTitle}>
          Use <Text style={{color: 'red'}}>fw-normal, fw-italic </Text>for
          desired text.
        </Text>
        <Text style={styles.boldText}>Bold text.</Text>
        <Text style={styles.normalText}>Normal weight text.</Text>
        <Text style={styles.italicText}>Italic text</Text>
      </View>
      <View style={styles.section}>
        <Text style={[styles.typoSectionTitle, {color: '#000'}]}>
          Text Colors
        </Text>
        <Text style={styles.sectionSubTitle}>
          Use tags below class for desired text.
        </Text>
        <Text style={styles.mutedText}>
          This is an example of muted text. Add class text-muted.
        </Text>
        <Text style={styles.primaryText}>
          This is an example of primary text. Add class text-primary.
        </Text>
        <Text style={styles.successText}>
          This is an example of success text. Add class text-success.
        </Text>
        <Text style={styles.infoText}>
          This is an example of info text. Add class text-info.
        </Text>
        <Text style={styles.warningText}>
          This is an example of warning text. Add class text-warning.
        </Text>
        <Text style={styles.dangerText}>
          This is an example of danger text. Add class text-danger.
        </Text>

        {/* Address */}
        <Text style={[styles.typoSectionTitle, {color: '#000'}]}>Address</Text>
        <Text style={styles.typoSectionSubTitle}>
          Use address for desired address.
        </Text>
        <Text style={styles.address}>
          Twitter, Inc.{'\n'}
          795 Folsom Ave, Suite 600{'\n'}
          San Francisco, CA 94107{'\n'}
          <Text style={styles.phone}>(+1) 456-7890</Text>
        </Text>
        <Text style={styles.email}>George Belly{'\n'}[email protected]</Text>

        {/* Blockquotes */}
        <Text style={[styles.typoSectionTitle, {color: '#000'}]}>
          Blockquotes
        </Text>
        <Text style={styles.typoSectionSubTitle}>
          Use blockquote for desired address.
        </Text>
        <Text style={{}}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
          posuere erat a ante.
        </Text>
        <Text style={{}}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
          posuere erat a ante.
        </Text>
        <Text style={{}}>- Someone famous in Source Title</Text>
      </View>

      <View style={styles.section}>
        <Text style={[styles.typoSectionTitle, {color: '#000'}]}>
          OL Listing
        </Text>
        <Text style={styles.typoSectionSubTitle}>
          Use tags ol › li for desired ol list.
        </Text>
        <View style={styles.orderedList}>
          <Text style={styles.orderedItem}>1. Lorem ipsum dolor sit amet</Text>
          <Text style={styles.orderedItem}>2. Consectetur adipiscing elit</Text>
          <Text style={styles.orderedItem}>
            3. Integer molestie lorem at massa
          </Text>
        </View>

        {/* Unordered List */}
        <Text style={[styles.typoSectionTitle, {color: '#000'}]}>
          UL Listing
        </Text>
        <Text style={styles.sectionSubTitle}>
          Use tags ul › li for desired ul list.
        </Text>
        <View style={styles.unorderedList}>
          <Text style={styles.unorderedItem}>• Lorem ipsum dolor sit amet</Text>
          <Text style={styles.unorderedItem}>
            • Consectetur adipiscing elit
          </Text>
          <Text style={styles.unorderedItem}>
            • Integer molestie lorem at massa
          </Text>
        </View>
        {/* Description List */}
        <Text style={[styles.typoSectionTitle, {color: '#000'}]}>
          Description Text
        </Text>
        <Text style={styles.typoSectionSubTitle}>
          Use tags dl › dt › dd for desired description list.
        </Text>
        <View style={styles.descriptionList}>
          <Text style={styles.descriptionTitle}>Standard Description List</Text>
          <Text style={styles.descriptionItem}>Description Text</Text>
          <Text style={styles.descriptionTitle}>Description List Title</Text>
          <Text style={styles.descriptionItem}>Description List Text</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={[styles.typoSectionTitle, {color: '#000'}]}>
          Fancy Listing 1
        </Text>
        <Text style={styles.sectionSubTitle}>
          Use class list-icons to ul for desired ol list.
        </Text>

        {/* Fancy List with Href */}

        <View style={styles.fancyList}>
          <Text style={styles.fancyItem}>
            {' '}
            {'>   Lorem ipsum dolor sit amet'}
          </Text>
          <Text style={styles.fancyItem}>
            {' >   Consectetur adipiscing elit'}
          </Text>
          <Text style={styles.fancyItem}>
            {' >   Integer molestie lorem at massa'}
          </Text>
        </View>

        <Text style={[styles.typoSectionTitle, {color: '#000'}]}>
          Fancy Listing With Href
        </Text>
        <Text style={styles.sectionSubTitle}>
          Use class list-icons to ul for desired ul list.
        </Text>

        <View style={styles.fancyList}>
          <Text style={styles.fancyItem}>➤ Lorem ipsum dolor sit amet</Text>
          <Text style={styles.fancyItem}>➤ Consectetur adipiscing elit</Text>
          <Text style={styles.fancyItem}>
            ➤ Integer molestie lorem at massa
          </Text>
        </View>

        <Text style={[styles.typoSectionTitle, {color: '#000'}]}>
          Fancy Listing With Href
        </Text>
        <Text style={styles.sectionSubTitle}>
          Use class list-icons to ul for desired ul list.
        </Text>
        <View style={styles.fancyList}>
          <Text style={styles.fancyItem}>
            {' '}
            {'>   Lorem ipsum dolor sit amet'}
          </Text>
          <Text style={styles.fancyItem}>
            {' >   Consectetur adipiscing elit'}
          </Text>
          <Text style={styles.fancyItem}>
            {' >   Integer molestie lorem at massa'}
          </Text>
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
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 15,
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
  typoSectionTitle: {
    fontSize: 20,
    fontFamily: 'Poppins-Bold',
    marginVertical: 8,
  },
  typoSectionSubTitle: {
    fontSize: 14,
    color: '#6c757d',
    fontFamily: 'Poppins-Regular',
    marginBottom: 8,
  },
  h1: {
    fontSize: 30,
    fontFamily: 'Poppins-Bold',
    marginVertical: 4,
  },
  h2: {
    fontSize: 27,
    fontFamily: 'Poppins-Bold',
    marginVertical: 4,
  },
  h3: {
    fontSize: 24,
    fontFamily: 'Poppins-Bold',
    marginVertical: 4,
  },
  h4: {
    fontSize: 20,
    fontFamily: 'Poppins-Bold',
    marginVertical: 4,
  },
  h5: {
    fontSize: 16,
    fontFamily: 'Poppins-Bold',
    marginVertical: 4,
  },
  h6: {
    fontSize: 14,
    fontFamily: 'Poppins-Bold',
    marginVertical: 4,
  },
  justifiedParagraph: {
    fontSize: 14,
    textAlign: 'justify',
    color: '#212529',
    fontFamily: 'Poppins-Regular',
    marginBottom: 16,
  },
  alignStart: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    textAlign: 'left',
    color: '#212529',
    marginVertical: 4,
  },
  alignCenter: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    textAlign: 'center',
    color: '#212529',
    marginVertical: 4,
  },
  alignEnd: {
    fontSize: 14,
    textAlign: 'right',
    color: '#212529',
    fontFamily: 'Poppins-Regular',
    marginVertical: 4,
  },
  viewPortText: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: '#212529',
    marginVertical: 4,
  },
  boldText: {
    fontSize: 16,
    fontFamily: 'Poppins-Bold',
    marginVertical: 4,
  },
  normalText: {
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    fontWeight: 'normal',
    marginVertical: 4,
  },
  italicText: {
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    fontStyle: 'italic',
    marginVertical: 4,
  },
  mutedText: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: '#6c757d',
    marginVertical: 4,
  },
  primaryText: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: '#007bff',
    marginVertical: 4,
  },
  successText: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: '#28a745',
    marginVertical: 4,
  },
  infoText: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: '#17a2b8',
    marginVertical: 4,
  },
  warningText: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: '#ffc107',
    marginVertical: 4,
  },
  dangerText: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: '#dc3545',
    marginVertical: 4,
  },
  address: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: '#212529',
    marginVertical: 4,
  },
  phone: {
    fontFamily: 'Poppins-Regular',
    color: '#007bff',
  },
  email: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: '#007bff',
    marginVertical: 4,
  },
  blockquote: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    fontStyle: 'italic',
    color: '#6c757d',
    marginVertical: 4,
    paddingLeft: 16,
    borderLeftWidth: 2,
    borderLeftColor: '#6c757d',
  },
  sourceTitle: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: '#6c757d',
    textAlign: 'right',
    marginVertical: 4,
  },
  orderedList: {
    fontFamily: 'Poppins-Regular',
    marginVertical: 8,
    paddingLeft: 16,
  },
  orderedItem: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: '#333',
    marginBottom: 4,
  },
  unorderedList: {
    marginVertical: 8,
    fontFamily: 'Poppins-Regular',
    paddingLeft: 16,
  },
  unorderedItem: {
    fontSize: 14,
    color: '#333',
    marginBottom: 4,
  },
  descriptionList: {
    marginVertical: 8,
    paddingLeft: 16,
    fontFamily: 'Poppins-Regular',
  },
  descriptionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },
  descriptionItem: {
    fontSize: 14,
    color: '#555',
    fontFamily: 'Poppins-Regular',
    marginBottom: 8,
  },
  fancyList: {
    marginVertical: 8,
    paddingLeft: 16,
    fontFamily: 'Poppins-Regular',
  },
  fancyItem: {
    fontSize: 14,
    color: '#0056b3',
    marginBottom: 4,
    fontFamily: 'Poppins-Regular',
  },
});

export default Typography;

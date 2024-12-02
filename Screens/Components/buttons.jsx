import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {Button} from 'react-native-elements';

const Buttons = ({navigation}) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
          accessible={true}
          accessibilityLabel="Go back">
          <Icon name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={{fontSize: 18, color: '#000', fontFamily: 'Poppins-Bold'}}>
          Buttons
        </Text>
        <TouchableOpacity
          style={styles.menuButton}
          onPress={() => console.log('Menu button pressed')}>
          {/* Placeholder for future menu button functionality */}
        </TouchableOpacity>
      </View>
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <Icon name="layers" size={28} color="#fff" />
          <Text style={styles.headerText}>Enhanced Buttons UI</Text>
        </View>
        <Button
          title="Switch Style"
          type="outline"
          buttonStyle={styles.headerButton}
          titleStyle={styles.headerButtonText}
        />
      </View>

      {/* Buttons Section with Border */}
      <View style={styles.sectionBorder}>
        <Text style={styles.sectionTitle}>Buttons</Text>
        <View style={styles.buttonRow}>
          <Button
            title="Primary"
            buttonStyle={styles.primaryButton}
            titleStyle={styles.buttonText}
          />
          <Button
            title="Secondary"
            buttonStyle={styles.secondaryButton}
            titleStyle={[styles.buttonText, {color: '#000'}]}
          />
          <Button
            title="Success"
            buttonStyle={styles.successButton}
            titleStyle={styles.buttonText}
          />
          <Button
            title="Danger"
            buttonStyle={styles.dangerButton}
            titleStyle={styles.buttonText}
          />
          <Button
            title="Warning"
            buttonStyle={styles.warningButton}
            titleStyle={styles.buttonText}
          />
          <Button
            title="Info"
            buttonStyle={styles.infoButton}
            titleStyle={styles.buttonText}
          />
          <Button
            title="Light"
            buttonStyle={styles.lightButton}
            titleStyle={[styles.buttonText, {color: '#000'}]}
          />
          <Button
            title="Dark"
            buttonStyle={styles.darkButton}
            titleStyle={styles.buttonText}
          />
        </View>
      </View>

      {/* Buttons with Icons Section with Border */}
      <View style={styles.sectionBorder}>
        <Text style={styles.sectionTitle}>Buttons Sizes</Text>
        <View style={styles.buttonRow}>
          <Button
            title="PRIMARY"
            buttonStyle={styles.primaryButtonSizes}
            titleStyle={styles.buttonText}
          />
          <Button
            title="Secondary"
            buttonStyle={styles.secondaryButtonSizes}
            titleStyle={[styles.buttonText, {color: '#000'}]}
          />
          <Button
            title="Success"
            buttonStyle={styles.successButtonSizes}
            titleStyle={styles.buttonText}
          />
        </View>
      </View>

      {/* Rounded Buttons Section with Border */}
      <View style={styles.sectionBorder}>
        <Text style={styles.sectionTitle}>Buttons Rounded</Text>
        <View style={styles.buttonRow}>
          <Button
            title="Primary"
            buttonStyle={[styles.primaryButton, styles.roundedButton]}
            titleStyle={styles.buttonText}
          />
          <Button
            title="Secondary"
            buttonStyle={[styles.secondaryButton, styles.roundedButton]}
            titleStyle={[styles.buttonText, {color: '#000'}]}
          />
          <Button
            title="Success"
            buttonStyle={[styles.successButton, styles.roundedButton]}
            titleStyle={styles.buttonText}
          />
        </View>
      </View>

      {/* Large Buttons Section with Border */}
      <View style={styles.sectionBorder}>
        <Text style={styles.sectionTitle}>Buttons Rounded</Text>
        <View style={styles.buttonRow}>
          <Button
            title="Primary"
            buttonStyle={styles.primarylargeButton}
            titleStyle={styles.largeButtonText}
          />
          <Button
            title="Secondary"
            buttonStyle={[styles.secondarylargeButton]}
            titleStyle={[styles.largeButtonText, {fontFamily: 'Poppins-Bold'}]}
          />
        </View>
      </View>

      {/* Icon Large Buttons Section with Border */}
      {/* Large Buttons Section with Border */}
      <View style={styles.sectionBorder}>
        <Text style={styles.sectionTitle}>Buttons Rounded</Text>
        <View style={[styles.buttonRow, {marginBottom: 10}]}>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-start',
              alignItems: 'center',
              backgroundColor: '#4CAF50',
              width: '100%',
              borderRadius: 22,
              marginBottom: 10,
            }}
            onPress={() => alert('Button Pressed!')}>
            {/* Icon at the start */}
            <View style={{borderRadius: 50}}>
              <Icon name="facebook" size={50} color="#fff" />
            </View>
            {/* Text */}
            <Text
              style={{
                color: '#fff',
                fontSize: 16,
                flex: 1,
                textAlign: 'center',
                fontFamily: 'Poppins-Bold',
              }}>
              Primary
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-start',
              alignItems: 'center',
              backgroundColor: '#F6DBB3',
              width: '100%',
              borderRadius: 22,
              marginBottom: 10,
            }}
            onPress={() => alert('Button Pressed!')}>
            {/* Icon at the start */}

            {/* Text */}
            <Text
              style={{
                color: '#000',
                fontSize: 16,
                flex: 1,
                textAlign: 'center',
                fontFamily: 'Poppins-Bold',
              }}>
              Secondary
            </Text>
            <Icon name="facebook" size={50} color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-start',
              alignItems: 'center',
              backgroundColor: '#4CAF50',
              width: '100%',
              borderRadius: 22,
            }}
            onPress={() => alert('Button Pressed!')}>
            {/* Icon at the start */}
            <Icon name="facebook" size={50} color="#fff" />

            {/* Text */}
            <Text
              style={{
                color: '#fff',
                fontSize: 16,
                flex: 1,
                textAlign: 'center',
                fontFamily: 'Poppins-Bold',
              }}>
              Primary
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Buttons with light color with Border */}
      <View style={styles.sectionBorder}>
        <Text style={styles.sectionTitle}>Buttons With Icon</Text>
        <View style={styles.buttonRow}>
          {/* Primary Button */}
          <Button
            title="Primary"
            icon={
              <FontAwesome
                name="home"
                size={20}
                color="#fff"
                style={{marginRight: 10}}
              />
            }
            buttonStyle={styles.primaryButton}
            titleStyle={styles.buttonText}
          />

          {/* Secondary Button */}
          <Button
            title="Secondary"
            icon={
              <FontAwesome
                name="heart"
                size={20}
                color="#000"
                style={{marginRight: 10}}
              />
            }
            buttonStyle={styles.secondaryButton}
            titleStyle={[styles.buttonText, {color: '#000'}]}
          />

          {/* Success Button */}
          <Button
            title="Success"
            icon={
              <FontAwesome
                name="check-circle"
                size={20}
                color="#fff"
                style={{marginRight: 10}}
              />
            }
            buttonStyle={styles.successButton}
            titleStyle={styles.buttonText}
          />

          {/* Danger Button */}
          <Button
            title="Danger"
            icon={
              <FontAwesome
                name="exclamation-circle"
                size={20}
                color="#fff"
                style={{marginRight: 10}}
              />
            }
            buttonStyle={styles.dangerButton}
            titleStyle={styles.buttonText}
          />

          {/* Warning Button */}
          <Button
            title="Warning"
            icon={
              <FontAwesome
                name="warning"
                size={15}
                color="#fff"
                style={{marginRight: 10}}
              />
            }
            buttonStyle={styles.warningButton}
            titleStyle={styles.buttonText}
          />

          {/* Info Button */}
          <Button
            title="Info"
            icon={
              <FontAwesome
                name="info-circle"
                size={20}
                color="#fff"
                style={{marginRight: 10}}
              />
            }
            buttonStyle={styles.infoButton}
            titleStyle={styles.buttonText}
          />

          {/* Light Button */}
          <Button
            title="Light"
            icon={
              <FontAwesome
                name="lock"
                size={20}
                color="#000"
                style={{marginRight: 10}}
              />
            } // Increased size for visibility
            buttonStyle={styles.lightButton}
            titleStyle={[styles.buttonText, {color: '#000'}]}
          />

          {/* Dark Button */}
          <Button
            title="Dark"
            icon={
              <FontAwesome
                name="play"
                size={15}
                color="#fff"
                style={{marginRight: 10}}
              />
            } // Increased size for visibility
            buttonStyle={styles.darkButton}
            titleStyle={styles.buttonText}
          />
        </View>
      </View>

      <View style={styles.sectionBorder}>
        <Text style={styles.sectionTitle}>Buttons Light</Text>
        <View style={styles.buttonRow}>
          <Button
            title="Primary"
            buttonStyle={[styles.primaryButton, {backgroundColor:'#7efbcf'}]}
            titleStyle={[styles.buttonText, {color: '#04764E'}]}
          />
          <Button
            title="Secondary"
            buttonStyle={[styles.secondaryButton,{backgroundColor:'#fcf5ea'}]}
            titleStyle={[styles.buttonText, {color: '#F6DBB3'}]}
          />
          <Button
            title="Success"
            buttonStyle={[styles.successButton, {backgroundColor:'#78ed9f'}]}
            titleStyle={[styles.buttonText, {color: '#159E42'}]}
          />
          <Button
            title="Danger"
            buttonStyle={[styles.dangerButton, {backgroundColor:'#fddbe3'}]}
            titleStyle={[styles.buttonText, {color: '#CC0D39'}]}
          />
          <Button
            title="Warning"
            buttonStyle={[styles.warningButton,{backgroundColor:'#ffeee3'}]}
            titleStyle={[styles.buttonText, {color: '#FF8730'}]}
          />
          <Button
            title="Info"
            buttonStyle={[styles.infoButton, {backgroundColor:'#e5f4ff'}]}
            titleStyle={[styles.buttonText, {color: '#4cb1ff'}]}
          />
          <Button
            title="Light"
            buttonStyle={[styles.lightButton, {backgroundColor:'#eeeeee'}]}
            titleStyle={[styles.buttonText, {color: '#000'}]}
          />
          <Button
            title="Dark"
            buttonStyle={[styles.darkButton, {backgroundColor:'gray'}]}
            titleStyle={[styles.buttonText, {color: '#000'}]}
          />
        </View>
      </View>

      <View style={styles.sectionBorder}>
        <Text style={styles.sectionTitle}>Outline Buttons</Text>
        <View style={styles.buttonRow}>
          <Button
            title="Primary"
            buttonStyle={[styles.primaryButton, {backgroundColor:'#fff',borderWidth:1,borderColor:'#04764E'}]}
            titleStyle={[styles.buttonText, {color: '#04764E'}]}
          />
          <Button
            title="Secondary"
            buttonStyle={[styles.secondaryButton,{backgroundColor:'#fff',borderWidth:1,borderColor:'#F6DBB3'}]}
            titleStyle={[styles.buttonText, {color: '#F6DBB3'}]}
          />
          <Button
            title="Success"
            buttonStyle={[styles.successButton, {backgroundColor:'#fff', borderWidth:1,borderColor:'#159E42'}]}
            titleStyle={[styles.buttonText, {color: '#159E42'}]}
          />
          <Button
            title="Danger"
            buttonStyle={[styles.dangerButton, {backgroundColor:'#fff', borderWidth:1,borderColor:'#CC0D39'}]}
            titleStyle={[styles.buttonText, {color: '#CC0D39'}]}
          />
          <Button
            title="Warning"
            buttonStyle={[styles.warningButton,{backgroundColor:'#fff', borderWidth:1,borderColor:'#FF8730'}]}
            titleStyle={[styles.buttonText, {color: '#FF8730'}]}
          />
          <Button
            title="Info"
            buttonStyle={[styles.infoButton, {backgroundColor:'#fff', borderWidth:1,borderColor:'#4cb1ff'}]}
            titleStyle={[styles.buttonText, {color: '#4cb1ff'}]}
          />
          <Button
            title="Light"
            buttonStyle={[styles.lightButton, {backgroundColor:'#fff', borderWidth:1,borderColor:'#000'}]}
            titleStyle={[styles.buttonText, {color: '#000'}]}
          />
          <Button
            title="Dark"
            buttonStyle={[styles.darkButton, {backgroundColor:'#fff', borderWidth:1,borderColor:'#000'}]}
            titleStyle={[styles.buttonText, {color: '#000'}]}
          />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#f5f5f5',
    borderWidth: 2,
    borderColor: '#ccc',
    borderRadius: 8,
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
    fontFamily: 'Poppins-Bold', // Added Poppins Regular font
  },
  menuButton: {
    padding: 8,
  },
  header: {
    backgroundColor: '#6a11cb',
    padding: 16,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  headerContent: {
    flexDirection: 'row',
    fontFamily: 'Poppins-Bold',
    alignItems: 'center',
  },
  primaryButtonSizes: {
    backgroundColor: '#198754',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 6,
    marginBottom: 10,
    minWidth: 80,
  },
  secondaryButtonSizes: {
    backgroundColor: '#F6DBB3',
    borderRadius: 6,
    marginBottom: 5,
    width: 95,
    height: 40,
  },
  successButtonSizes: {
    backgroundColor: '#28a745',
    borderRadius: 6,
    marginBottom: 10,
    minWidth: 50,
  },

  headerText: {
    color: '#fff',
    fontSize: 20,
    marginLeft: 10,
    fontFamily: 'Poppins-Regular',
    fontWeight: 'bold',
  },

  iconlargeButton: {
    backgroundColor: '#198754',
    paddingVertical: 12,
    paddingHorizontal: 140,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    alignSelf: 'stretch', // Ensure the button stretches to the parent width
  },
  largeButtonText: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center', // Ensure text is centered
  },
  headerButton: {
    borderColor: '#fff',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 6,
  },
  headerButtonText: {
    color: '#fff',
    
    fontSize: 14,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
    fontFamily: 'Poppins-Bold',
    color: '#333',
  },
  buttonRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    alignContent: 'center',
    columnGap: 5,
    marginBottom: 16,
    borderTopWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    marginHorizontal: -12,
    backgroundColor: '#fff',
    borderRadius: 15,
  },
  buttonText: {
    fontSize: 14,
    fontWeight: '600',
    fontFamily: 'Poppins-Regular',
    color: '#fff',
  },
  primaryButton: {
    backgroundColor: '#198754',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 6,
    marginBottom: 10,
    flex: 1,
    minWidth: 80,
  },
  secondaryButton: {
    backgroundColor: '#F6DBB3',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 6,
    marginBottom: 10,
    flex: 1,
    minWidth: 80,
  },
  successButton: {
    backgroundColor: '#28a745',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 6,
    marginBottom: 10,
    flex: 1,
    minWidth: 80,
  },
  dangerButton: {
    backgroundColor: '#dc3545',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 6,
    marginBottom: 10,
    flex: 1,
    minWidth: 80,
  },
  warningButton: {
    backgroundColor: '#fd7e14',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 6,
    marginBottom: 10,
    flex: 1,
    minWidth: 80,
  },
  infoButton: {
    backgroundColor: '#0dcaf0',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 6,
    marginBottom: 10,
    flex: 1,
    minWidth: 80,
  },
  lightButton: {
    backgroundColor: '#eeeeee',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 6,
    marginBottom: 10,
    flex: 1,
    minWidth: 80,
  },
  darkButton: {
    backgroundColor: '#212529',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 6,
    marginBottom: 10,
    flex: 1,
    minWidth: 80,
  },
  roundedButton: {
    borderRadius: 50,
  },
  primarylargeButton: {
    backgroundColor: '#198754',
    paddingVertical: 12,
    paddingHorizontal: 140,
    borderRadius: 8,
    marginBottom: 10,
    alignSelf: 'stretch', // Ensure the button stretches to the parent width
  },
  secondarylargeButton: {
    backgroundColor: '#F6DBB3',
    paddingVertical: 12,
    paddingHorizontal: 130,
    borderRadius: 8,
    marginBottom: 10,
    alignSelf: 'stretch', // Ensure the button stretches to the parent width
  },
  sectionBorder: {
    marginBottom: 15,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
});

export default Buttons;

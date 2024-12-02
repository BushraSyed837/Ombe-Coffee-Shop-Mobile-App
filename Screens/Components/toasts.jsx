import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {Button} from 'react-native-paper';
import Feather from 'react-native-vector-icons/Feather';

const CustomToast = ({title, message, onClose}) => {
  const [timeAgo] = useState('1 min ago'); // Simulated time value

  return (
    <View style={styles.toast}>
      {/* Title and Close Button */}
      <View style={styles.toastHeader}>
        <View
          style={{
            backgroundColor: '#04764e',
            marginRight: 2,
            padding: 5,
            borderRadius: 5,
          }}>
          <Feather
            name="bold" // Example icon name, you can replace it with any Feather icon
            size={16} // Increase icon size if needed
            color="#fff" // Set a contrasting color for visibility
            style={styles.icon} // Add style to control positioning
          />
        </View>
        <Text style={styles.toastTitle}>{title}</Text>
        <Text style={styles.toastTime}>{timeAgo}</Text>
        <TouchableOpacity onPress={onClose}>
          <Text style={styles.closeButton}>×</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.line}></View>

      {/* Message */}
      <Text style={styles.toastMessage}>{message}</Text>
    </View>
  );
};

const LiveToast = ({title, message, onClose, backgroundColor, color}) => {
  const [timeAgo] = useState('1 min ago'); // Simulated time value

  return (
    <View style={[styles.toast, {backgroundColor: backgroundColor}]}>
      {/* Title and Close Button */}
      <View style={[{alignSelf: 'flex-end', padding: 2, marginRight: 5}]}>
        <TouchableOpacity onPress={onClose}>
          <Text style={styles.closeButton}>×</Text>
        </TouchableOpacity>
      </View>

      {/* Toast Content */}
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <View
          style={{
            backgroundColor: '#04764e',
            padding: 5,
            borderRadius: 5,
            marginBottom: 6,
            marginLeft: 15,
          }}>
          <Feather
            name="bold" // Example icon name, you can replace it with any Feather icon
            size={16} // Increase icon size if needed
            color="#fff" // Set a contrasting color for visibility
            style={styles.icon} // Add style to control positioning
          />
        </View>

        {/* Message and Time */}
        <View style={{flexDirection: 'column', flex: 1}}>
          <Text style={[styles.toastMessage, {color: color}]}>{message}</Text>
          <Text
            style={[
              styles.toastTime,
              {
                alignSelf: 'flex-start',
                marginLeft: 15,
                marginTop: -5,
                marginBottom: 10,
                color: color,
              },
            ]}>
            {timeAgo}
          </Text>
        </View>
      </View>
    </View>
  );
};

const Toasts = ({navigation}) => {
  const [toast, setToast] = useState(true);
  const [toastMessage, setToastMessage] = useState(
    'Hello, This is a toast message.',
  );
  const [toastStyle, setToastStyle] = useState({
    backgroundColor: '#28a745',
    color: '#fff',
  });
  const [visibleToasts, setVisibleToasts] = useState({
    toast1: false,
    toast2: false,
    toast3: false,
    toast4: false,
    toast5: false,
    toast6: false,
  });

  // Function to handle showing the respective toast
  const showToast = (toastId, message, bgColor, textColor) => {
    // Hide all toasts first
    setVisibleToasts({
      toast1: false,
      toast2: false,
      toast3: false,
      toast4: false,
      toast5: false,
      toast6: false,
    });

    // Show the clicked toast
    setVisibleToasts(prevState => ({
      ...prevState,
      [toastId]: true,
    }));

    // Optionally, hide the toast after 3 seconds
    setTimeout(() => {
      setVisibleToasts(prevState => ({
        ...prevState,
        [toastId]: false,
      }));
    }, 3000);
  };

  // Function to close a toast manually

  const showCustomToast = (message, bgColor, textColor) => {
    setToastMessage(message);
    setToastStyle({backgroundColor: bgColor, color: textColor});
    setToast(true);
    setTimeout(() => setShowToast(false), 3000); // Hide toast after 3 seconds
  };
  const closeToast = () => {
    setShowToast(false);
  };

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.headerContainer}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Toast</Text>
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
          Toast Style
        </Button>
      </View>

      {/* Bootstrap Switches */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Toast</Text>
        <View style={styles.line}></View>
        <View style={styles.toastContainer}>
          {showToast && (
            <CustomToast
              title="Bootstrap 5"
              message="Hello, world! This is a toast message."
              onClose={closeToast}
            />
          )}
        </View>
      </View>

      {/* Switches Colors */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Translucent Toast</Text>
        <View style={styles.line}></View>
        <View style={[styles.toastContainer, {backgroundColor: '#04764e'}]}>
          {showToast && (
            <CustomToast
              title="Bootstrap 5"
              message="Hello, world! This is a toast message."
              onClose={closeToast}
            />
          )}
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Different Color Toast</Text>
        <View style={styles.line}></View>
        <View style={[styles.toastContainer]}>
          {showToast && (
            <LiveToast
              message="Toast Default"
              onClose={closeToast}
              backgroundColor={'rgba(255, 255, 255, 0.85)'}
              color={'#04764e'}
            />
          )}
          {showToast && (
            <LiveToast
              message="Toast Default"
              onClose={closeToast}
              backgroundColor={'#04764ecf'}
              color={'#fff'}
            />
          )}
          {showToast && (
            <LiveToast
              message="Toast Default"
              onClose={closeToast}
              backgroundColor={'#F6DBB3'}
              color={'#fff'}
            />
          )}
          {showToast && (
            <LiveToast
              message="Toast Default"
              onClose={closeToast}
              backgroundColor={'#159E42'}
              color={'#fff'}
            />
          )}
          {showToast && (
            <LiveToast
              message="Toast Default"
              onClose={closeToast}
              backgroundColor={'#FF8730'}
              color={'#fff'}
            />
          )}
          {showToast && (
            <LiveToast
              message="Toast Default"
              onClose={closeToast}
              backgroundColor={'#CC0D39'}
              color={'#fff'}
            />
          )}
          {showToast && (
            <LiveToast
              message="Toast Default"
              onClose={closeToast}
              backgroundColor={'#4cb1ff'}
              color={'#fff'}
            />
          )}
        </View>
      </View>

      {/* Live Toast Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Live Toast</Text>
        <View style={styles.line}></View>

        {/* Buttons to trigger live toasts */}
        <View style={[styles.toastContainer]}>
          <Button
            mode="contained"
            style={[styles.liveToastButton, {backgroundColor: '#04764ecf'}]}
            onPress={() =>
              showToast('toast1', 'Live Toast Success', '#04764ecf', '#fff')
            }>
            Show Live Toast 1
          </Button>
          {visibleToasts.toast1 && (
            <View style={styles.toastContainer}>
              <LiveToast
                message="Live Toast Success"
                onClose={() => closeToast('toast1')}
                backgroundColor="#04764ecf"
                color="#fff"
              />
            </View>
          )}
          <Button
            mode="contained"
            style={[styles.liveToastButton, {backgroundColor: '#F6DBB3'}]}
            onPress={() =>
              showToast('toast2', 'Live Toast Warning', '#F6DBB3', '#000')
            }>
            Show Live Toast 2
          </Button>
          {visibleToasts.toast2 && (
            <View style={styles.toastContainer}>
              <LiveToast
                message="Live Toast Warning"
                onClose={() => closeToast('toast2')}
                backgroundColor="#F6DBB3"
                color="#000"
              />
            </View>
          )}
          <Button
            mode="contained"
            style={[styles.liveToastButton, {backgroundColor: '#159E42'}]}
            onPress={() =>
              showToast('toast3', 'Live Toast Info', '#159E42', '#fff')
            }>
            Show Live Toast 3
          </Button>
          {visibleToasts.toast3 && (
            <View style={styles.toastContainer}>
              <LiveToast
                message="Live Toast Info"
                onClose={() => closeToast('toast3')}
                backgroundColor="#159E42"
                color="#fff"
              />
            </View>
          )}
          <Button
            mode="contained"
            style={[styles.liveToastButton, {backgroundColor: '#FF8730'}]}
            onPress={() =>
              showToast('toast4', 'Live Toast Error', '#FF8730', '#fff')
            }>
            Show Live Toast 4
          </Button>
          {visibleToasts.toast4 && (
            <View style={styles.toastContainer}>
              <LiveToast
                message="Live Toast Error"
                onClose={() => closeToast('toast4')}
                backgroundColor="#FF8730"
                color="#fff"
              />
            </View>
          )}
          <Button
            mode="contained"
            style={[styles.liveToastButton, {backgroundColor: '#CC0D39'}]}
            onPress={() =>
              showToast('toast5', 'Live Toast Alert', '#CC0D39', '#fff')
            }>
            Show Live Toast 5
          </Button>
          {visibleToasts.toast5 && (
            <View style={styles.toastContainer}>
              <LiveToast
                message="Live Toast Alert"
                onClose={() => closeToast('toast5')}
                backgroundColor="#CC0D39"
                color="#fff"
              />
            </View>
          )}
          <Button
            mode="contained"
            style={[styles.liveToastButton, {backgroundColor: '#4cb1ff'}]}
            onPress={() =>
              showToast('toast6', 'Live Toast Information', '#4cb1ff', '#fff')
            }>
            Show Live Toast 6
          </Button>
          {visibleToasts.toast6 && (
            <View style={styles.toastContainer}>
              <LiveToast
                message="Live Toast Information"
                onClose={() => closeToast('toast6')}
                backgroundColor="#4cb1ff"
                color="#fff"
              />
            </View>
          )}
        </View>

        {/* Conditionally rendering the respective live toast below each button */}
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
    // Added padding to avoid overflow
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
  },
  toast: {
    backgroundColor: '#fff',
    borderRadius: 8,
    width: '80%',
    elevation: 7,
    shadowColor: '#ddd',
    shadowOpacity: 14,
    shadowRadius: 5,
    borderWidth: 1,

    borderColor: '#ddd',
    marginTop: 10, // Added margin to keep space between the section title and toast
  },
  toastContainer: {
    padding: 16,
  },
  toastHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  toastTitle: {
    fontSize: 16,
    fontFamily: 'Poppins-Bold',
    color: '#000',
  },
  icon: {
    // Ensure there's space between the icon and the text
  },
  closeButton: {
    fontSize: 18,
    color: '#000',
    fontFamily: 'Poppins-Bold',
  },
  toastMessage: {
    fontSize: 14,
    color: '#000',
    padding: 5,
    fontFamily: 'Poppins-Regular',
    marginLeft: 10,
  },
  toastTime: {
    fontSize: 12,
    color: '#000',
    fontFamily: 'Poppins-Regular',
    marginLeft: 50,
  },
  liveToastButton: {
    marginBottom: 10,
    borderRadius: 10, // Space between the buttons
    fontFamily: 'Poppins-Regular',
  },
});

export default Toasts;

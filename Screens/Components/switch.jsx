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
const CustomSwitch = ({isOn, onToggle, color}) => {
  const translateX = new Animated.Value(isOn ? 20 : 0);

  Animated.timing(translateX, {
    toValue: isOn ? 20 : 0,
    duration: 200,
    useNativeDriver: true,
  }).start();

  return (
    <TouchableOpacity
      style={[styles.switchContainer, {backgroundColor: isOn ? color : '#ccc'}]}
      onPress={onToggle}>
      <Animated.View
        style={[
          styles.knob,
          {transform: [{translateX}]},
          {backgroundColor: isOn ? '#fff' : '#eee'},
        ]}
      />
    </TouchableOpacity>
  );
};

const Switches = ({navigation}) => {
  const [defaultSwitch, setDefaultSwitch] = useState(false);
  const [checkedSwitch, setCheckedSwitch] = useState(true);
  const [lightSwitch, setLightSwitch] = useState(false);
  const [successSwitch, setSuccessSwitch] = useState(false);
  const [warningSwitch, setWarningSwitch] = useState(false);
  const [dangerSwitch, setDangerSwitch] = useState(false);
  const [infoSwitch, setInfoSwitch] = useState(false);
  const [darkSwitch, setDarkSwitch] = useState(false);
  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.headerContainer}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Switch</Text>
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
          Switch Style
        </Button>
      </View>

      {/* Bootstrap Switches */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Bootstrap Switches</Text>
        <View style={styles.line}></View>

        <View style={styles.switchRow}>
          <CustomSwitch
            isOn={defaultSwitch}
            onToggle={() => setDefaultSwitch(!defaultSwitch)}
            color="#007bff"
          />
          <Text style={styles.label}>Default Switch</Text>
        </View>
        <View style={styles.switchRow}>
          <CustomSwitch
            isOn={checkedSwitch}
            onToggle={() => setCheckedSwitch(!checkedSwitch)}
            color="#28a745"
          />
          <Text style={styles.label}>Checked Switch</Text>
        </View>
        <View style={styles.switchRow}>
          <View style={[styles.switchContainer, {backgroundColor: '#ccc'}]}>
            <View style={[styles.knob, {backgroundColor: '#eee'}]} />
          </View>
          <Text style={styles.label}>Disabled Switch</Text>
        </View>
        <View style={styles.switchRow}>
          <View style={[styles.switchContainer, {backgroundColor: '#ccc'}]}>
            <View
              style={[
                styles.knob,
                {backgroundColor: '#eee', transform: [{translateX: 20}]},
              ]}
            />
          </View>
          <Text style={styles.label}>Disabled Checked Switch</Text>
        </View>
      </View>

      {/* Switches Colors */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Switches Colors</Text>
        <View style={styles.line}></View>

        <View style={styles.switchRow}>
          <CustomSwitch
            isOn={lightSwitch}
            onToggle={() => setLightSwitch(!lightSwitch)}
            color="#f8f9fa"
          />
          <Text style={styles.label}>Light Switch</Text>
        </View>
        <View style={styles.switchRow}>
          <CustomSwitch
            isOn={successSwitch}
            onToggle={() => setSuccessSwitch(!successSwitch)}
            color="#28a745"
          />
          <Text style={styles.label}>Success Switch</Text>
        </View>
        <View style={styles.switchRow}>
          <CustomSwitch
            isOn={warningSwitch}
            onToggle={() => setWarningSwitch(!warningSwitch)}
            color="#ffc107"
          />
          <Text style={styles.label}>Warning Switch</Text>
        </View>
        <View style={styles.switchRow}>
          <CustomSwitch
            isOn={dangerSwitch}
            onToggle={() => setDangerSwitch(!dangerSwitch)}
            color="#dc3545"
          />
          <Text style={styles.label}>Danger Switch</Text>
        </View>
        <View style={styles.switchRow}>
          <CustomSwitch
            isOn={infoSwitch}
            onToggle={() => setInfoSwitch(!infoSwitch)}
            color="#17a2b8"
          />
          <Text style={styles.label}>Info Switch</Text>
        </View>
        <View style={styles.switchRow}>
          <CustomSwitch
            isOn={darkSwitch}
            onToggle={() => setDarkSwitch(!darkSwitch)}
            color="#343a40"
          />
          <Text style={styles.label}>Dark Switch</Text>
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
  switchRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    marginLeft: 20,
  },
  label: {
    fontSize: 16,
    marginLeft: 10,
    fontFamily: 'Poppins-Regular',
  },
  switchContainer: {
    width: 40,
    height: 20,
    borderRadius: 15,
    padding: 2,
    justifyContent: 'center',
  },
  knob: {
    width: 20,
    height: 20,
    borderRadius: 10,
  },
});

export default Switches;

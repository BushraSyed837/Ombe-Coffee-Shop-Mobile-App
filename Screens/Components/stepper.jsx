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
import Icons from 'react-native-vector-icons/MaterialIcons';

const CustomStepper = ({
  size = 'default',
  color = '#04764E',
  fill = false,
  radius = 22,
}) => {
  const [value, setValue] = useState(0);
  const [hoveredButton, setHoveredButton] = useState(null); // State to track hovered button

  const handleIncrement = () => setValue(prev => prev + 1);
  const handleDecrement = () => setValue(prev => (prev > 0 ? prev - 1 : 0));

  const buttonSize = size === 'small' ? 30 : size === 'large' ? 60 : 40;
  const fontSize = size === 'small' ? 12 : size === 'large' ? 20 : 16;
  const buttonStyle = fill
    ? {backgroundColor: color, borderWidth: 1}
    : {borderColor: color, borderWidth: 1};

  return (
    <View style={styles.steppercontainer}>
      <TouchableOpacity
        style={[
          styles.button,
          buttonStyle,
          {
            width: buttonSize,
            height: buttonSize,
            borderRadius: radius,
            backgroundColor: fill ? color : '#fff',
            borderColor: color,
          },
          // Apply hover style
        ]}
        onPress={handleDecrement}
        onPressIn={() => setHoveredButton('decrement')} // Set hover state
        onPressOut={() => setHoveredButton(null)} // Reset hover state
      >
        <Icons name="remove" size={fontSize} color={fill ? '#fff' : color} />
      </TouchableOpacity>

      <Text style={[styles.value, {fontSize}]}>{value}</Text>

      <TouchableOpacity
        style={[
          styles.button,
          buttonStyle,
          {
            width: buttonSize,
            height: buttonSize,
            borderRadius: radius,
            backgroundColor: fill ? color : '#fff',
            borderColor: color,
          },
          // Apply hover style
        ]}
        onPress={handleIncrement}
        onPressIn={() => setHoveredButton('increment')} // Set hover state
        onPressOut={() => setHoveredButton(null)} // Reset hover state
      >
        <Icons name="add" size={fontSize} color={fill ? '#fff' : color} />
      </TouchableOpacity>
    </View>
  );
};
const Steppers = ({navigation}) => {
  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.headerContainer}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Stepper</Text>
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
          Stepper Style
        </Button>
      </View>

      {/* Default Steppers */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Default Steppers</Text>
        <View style={styles.line}></View>
        <View style={styles.row}>
          <View style={styles.stepperColumn}>
            <Text style={styles.label}>Default Stepper</Text>
            <CustomStepper size="small" />
          </View>
          <View style={styles.stepperColumn}>
            <Text style={styles.label}>Default Stepper</Text>
            <CustomStepper size="small" radius={8} />
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.stepperColumn}>
            <Text style={styles.label}>Fill Stepper</Text>
            <CustomStepper size="small" fill />
          </View>
          <View style={styles.stepperColumn}>
            <Text style={styles.label}>Fill Stepper</Text>
            <CustomStepper size="small" fill radius={8} />
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.stepperColumn}>
            <Text style={styles.label}>Small Stepper</Text>
            <CustomStepper size="small" />
          </View>
          <View style={styles.stepperColumn}>
            <Text style={styles.label}>Small Stepper</Text>
            <CustomStepper size="small" radius={8} />
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.stepperColumn}>
            <Text style={styles.label}>Small Fill Stepper</Text>
            <CustomStepper size="small" fill />
          </View>
          <View style={styles.stepperColumn}>
            <Text style={styles.label}>Small Fill Stepper</Text>
            <CustomStepper size="small" fill radius={8} />
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.stepperColumn}>
            <Text style={styles.label}>Large Stepper</Text>
            <CustomStepper size="small" />
          </View>
          <View style={styles.stepperColumn}>
            <Text style={styles.label}>Large Stepper</Text>
            <CustomStepper size="small" radius={8} />
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.stepperColumn}>
            <Text style={styles.label}>Large Fill Stepper</Text>
            <CustomStepper size="small" fill />
          </View>
          <View style={styles.stepperColumn}>
            <Text style={styles.label}>Large Fill Stepper</Text>
            <CustomStepper size="small" fill radius={8} />
          </View>
        </View>
      </View>

      {/* Switches Colors */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Different Size Steppers</Text>
        <View style={styles.line}></View>
        <View style={styles.row}>
          <View style={styles.stepperColumn}>
            <Text style={styles.label}>Default Stepper</Text>
            <CustomStepper size="small" />
          </View>
          <View style={styles.stepperColumn}>
            <Text style={styles.label}>Default Stepper</Text>
            <CustomStepper size="small" radius={8} />
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.stepperColumn}>
            <Text style={styles.label}>Fill Stepper</Text>
            <CustomStepper size="small" fill />
          </View>
          <View style={styles.stepperColumn}>
            <Text style={styles.label}>Fill Stepper</Text>
            <CustomStepper size="small" fill radius={8} />
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.stepperColumn}>
            <Text style={styles.label}>Small Stepper</Text>
            <CustomStepper size="small" />
          </View>
          <View style={styles.stepperColumn}>
            <Text style={styles.label}>Small Stepper</Text>
            <CustomStepper size="small" radius={8} />
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.stepperColumn}>
            <Text style={styles.label}>Small Fill Stepper</Text>
            <CustomStepper size="small" fill />
          </View>
          <View style={styles.stepperColumn}>
            <Text style={styles.label}>Small Fill Stepper</Text>
            <CustomStepper size="small" fill radius={8} />
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.stepperColumn}>
            <Text style={styles.label}>Large Stepper</Text>
            <CustomStepper size="small" />
          </View>
          <View style={styles.stepperColumn}>
            <Text style={styles.label}>Large Stepper</Text>
            <CustomStepper size="small" radius={8} />
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.stepperColumn}>
            <Text style={styles.label}>Large Fill Stepper</Text>
            <CustomStepper size="small" fill />
          </View>
          <View style={styles.stepperColumn}>
            <Text style={styles.label}>Large Fill Stepper</Text>
            <CustomStepper size="small" fill radius={8} />
          </View>
        </View>
      </View>

      {/* Switches Colors */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Different Color Steppers</Text>
        <View style={styles.line}></View>
        <View style={styles.row}>
          <View style={styles.stepperColumn}>
            <CustomStepper size="small" fill color="#CC0D39" />
          </View>
          <View style={styles.stepperColumn}>
            <CustomStepper size="small" fill radius={8} color="#4cb1ff" />
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.stepperColumn}>
            <CustomStepper size="small" fill color="#F6DBB3" />
          </View>
          <View style={styles.stepperColumn}>
            <CustomStepper size="small" fill radius={8} color="#ffcc00" />
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.stepperColumn}>
            <CustomStepper size="small" fill color="#FF8730" />
          </View>
          <View style={styles.stepperColumn}>
            <CustomStepper size="small" fill radius={8} color="#4cd964" />
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.stepperColumn}>
            <CustomStepper size="small" fill color="#159E42" />
          </View>
          <View style={styles.stepperColumn}>
            <CustomStepper size="small" fill radius={8} color="#000" />
          </View>
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
  steppercontainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    elevation: 2,
  },
  value: {
    marginHorizontal: 10,
    fontWeight: 'bold',
    textAlign: 'center',
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
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    padding: 10,
  },
  stepperColumn: {
    alignItems: 'center',
    margin: 10,
    marginBottom: 5,
  },
  label: {
    fontSize: 12,
    fontFamily: 'Poppins-SemiBold',
    marginHorizontal: 8,
    color: '#000',
    marginBottom: 5,
  },
});

export default Steppers;

import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Modal,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Modals = ({navigation}) => {
  const [visibleModal, setVisibleModal] = useState(null);
  const [modalAlign, setModalAlign] = useState('center'); // Top or Center alignment
  const [modalWidth, setModalWidth] = useState('50%'); // Default width
  const [modalHeight, setModalHeight] = useState('50%'); // Default height

  const openModal = (type, align, width, height) => {
    setModalAlign(align);
    setModalWidth(width);
    setModalHeight(height);
    setVisibleModal(type);
  };

  const closeModal = () => {
    setVisibleModal(null);
  };

  const renderModalContent = type => {
    switch (type) {
      case 'basic':
        return <Text style={styles.modalText}>This is a Basic Modal</Text>;
      case 'longContent':
        return (
          <ScrollView>
            <Text style={styles.modalText}>
              This is a Modal with Long Content
            </Text>
            <Text style={styles.modalText}>
              Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
              dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
              ac consectetur ac, vestibulum at eros. Praesent commodo cursus
              magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus
              vel augue laoreet rutrum faucibus dolor auctor. Aenean lacinia
              bibendum nulla sed consectetur. Praesent commodo cursus magna, vel
              scelerisque nisl consectetur et. Donec sed odio dui. Donec
              ullamcorper nulla non metus auctor fringilla. Cras mattis
              consectetur purus sit amet fermentum. Cras justo odio, dapibus ac
              facilisis in, egestas eget quam. Morbi leo risus, porta ac
              consectetur ac, vestibulum at eros. Praesent commodo cursus magna,
              vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel
              augue laoreet rutrum faucibus dolor auctor. Aenean lacinia
              bibendum nulla sed consectetur. Cras justo odio, dapibus ac
              facilisis in, egestas eget quam. Morbi leo risus, porta ac
              consectetur ac, vestibulum at eros.
            </Text>
          </ScrollView>
        );
      case 'centered':
        return <Text style={styles.modalText}>This is a Centered Modal</Text>;
      case 'large':
        return <Text style={styles.modalText}>This is a Large Modal</Text>;
      case 'static':
        return (
          <Text style={styles.modalText}>This is a Static Backdrop Modal</Text>
        );
      case 'small':
        return <Text style={styles.modalText}>This is a Small Modal</Text>;
      default:
        return null;
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation?.goBack?.()}>
          <Icon name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Modal</Text>
        <TouchableOpacity style={styles.menuButton}>
          {/* Placeholder for menu functionality */}
        </TouchableOpacity>
      </View>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Bootstrap Elements</Text>
        <Text style={styles.cardSubtitle}>Modal style</Text>
      </View>

      <View style={styles.buttonsContainer}>
        <View style={styles.section}>
          <Text
            style={[
              styles.cardTitle,
              {
                color: '#000',
                borderBottomWidth: 1,
                borderColor: '#ddd',
                padding: 15,
              },
            ]}>
            Bootstrap Modal
          </Text>
          <View style={{padding: 15}}>
            {[
              {
                label: 'Basic Modal',
                type: 'basic',
                align: 'top',
                width: '85%',
                height: '25%',
              },
              {
                label: 'Long Content Modal',
                type: 'longContent',
                align: 'center',
                width: '90%',
                height: '90%',
              },
              {
                label: 'Modal Centered',
                type: 'centered',
                align: 'center',
                width: '90%',
                height: '25%',
              },
              {
                label: 'Large Modal',
                type: 'large',
                align: 'top',
                width: '95%',
                height: '25%',
              },
              {
                label: 'Launch Static Backdrop Modal',
                type: 'static',
                align: 'top',
                width: '90%',
                height: '25%',
              },
              {
                label: 'Small Modal',
                type: 'small',
                align: 'top',
                width: '80%',
                height: '25%',
              },
            ].map(item => (
              <TouchableOpacity
                key={item.type}
                style={styles.button}
                onPress={() =>
                  openModal(item.type, item.align, item.width, item.height)
                }>
                <Text style={styles.buttonText}>{item.label}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </View>

      <Modal
        visible={!!visibleModal}
        transparent={true}
        animationType="slide"
        onRequestClose={closeModal}>
        <View
          style={[
            styles.modalOverlay,
            modalAlign === 'top' && styles.modalTop,
            modalAlign === 'center' && styles.modalCenter,
          ]}>
          <View
            style={[
              styles.modalContainer,
              {width: modalWidth, height: modalHeight},
            ]}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>Modal Title</Text>
              <TouchableOpacity onPress={closeModal}>
                <Icon name="close" size={24} color="#000" />
              </TouchableOpacity>
            </View>

            <View style={styles.modalBody}>
              {renderModalContent(visibleModal)}
            </View>

            <View style={styles.modalFooter}>
              <TouchableOpacity
                style={[
                  styles.closeButton,
                  visibleModal === 'static' && styles.staticCloseButton, // Special style for "static" modal
                ]}
                onPress={closeModal}>
                <Text
                  style={[
                    styles.closeButtonText,
                    visibleModal === 'static' && styles.staticCloseButtonText, // Special text color for "static" modal
                  ]}>
                  Close
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[
                  styles.closeButton,
                  styles.saveButton,
                  visibleModal === 'static' && styles.staticSaveButton, // Special style for "static" modal
                ]}
                onPress={closeModal}>
                <Text
                  style={[
                    styles.saveButtonText,
                    visibleModal === 'static' && styles.staticSaveButtonText, // Special text color for "static" modal
                  ]}>
                  {visibleModal === 'static'? 'Understood': 'Save Changes'}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
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
  card: {
    backgroundColor: '#6200EE',
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
  },
  cardTitle: {
    color: '#fff',
    fontSize: 16,
    fontFamily: 'Poppins-Bold',
  },
  section: {
    backgroundColor: 'white',
    borderColor: '#ddd',
    borderRadius: 18,
  },
  cardSubtitle: {
    color: '#EDE7F6',
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
  },
  buttonsContainer: {
    margin: 5,
    backgroundColor: 'white',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 18,
  },
  button: {
    backgroundColor: '#00695C',
    padding: 16,
    borderRadius: 8,
    marginVertical: 8,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    width: '85%',
    backgroundColor: '#fff',
    borderRadius: 8,
    overflow: 'hidden',
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

    padding: 16,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  modalTitle: {
    fontSize: 18,
    color: '#000',
    fontFamily: 'Poppins-Bold',
  },
  modalBody: {
    padding: 15,
  },
  modalFooter: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    padding: 16,
    backgroundColor: '#FFFFFF',
    borderTopColor: '#ddd',
  },
  closeButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    backgroundColor: '#fddbe3',
    marginLeft: 10,
  },
  modalTop: {
    justifyContent: 'flex-start', // Align modal at the top
    alignItems: 'center',
    paddingTop: 50, // Space from the top
  },
  modalCenter: {
    justifyContent: 'center', // Center modal vertically
    alignItems: 'center',
  },
  saveButton: {
    backgroundColor: '#4caf50',
  },
  saveButtonText: {
    color: '#fff',
    fontSize: 14,
    textAlign: 'center',
    fontFamily: 'Poppins-Bold',
  },
  closeButtonText: {
    color: '#cc0d39',
    fontSize: 14,
    textAlign: 'center',
    fontFamily: 'Poppins-Bold',
  },
  modalText: {
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    textAlign: 'center',
    color: '#000',
  },
  staticCloseButton: {
    backgroundColor: '#F6DBB3', // Light orange background
  },
  staticCloseButtonText: {
    color: '#000', // Darker orange text
  },
  staticSaveButton: {
    backgroundColor: '#04764E', // Light teal background
  },
  staticSaveButtonText: {
    color: '#fff', // Dark teal text
  },
});

export default Modals;

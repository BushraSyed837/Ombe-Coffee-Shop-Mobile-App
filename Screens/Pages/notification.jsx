import React, { useState, useContext } from 'react';
import { StyleSheet, View, Text, FlatList, TouchableOpacity, Modal } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { NotificationContext } from '../../App';

const NotificationScreen = ({ navigation }) => {
  const { notifications } = useContext(NotificationContext);
  const [visibleModal, setVisibleModal] = useState(null);
  const [modalContent, setModalContent] = useState('');
  const [modalTitle, setModalTitle] = useState('');
  const [modalDate, setModalDate] = useState('');

  const openModal = (item) => {
    setModalTitle(item.title); // Set the modal title as item.title
    setModalContent(item.text); // Set the modal content as item.text
    setModalDate(item.date); // Set the modal date as item.date
    setVisibleModal(true);
  };

  const closeModal = () => {
    setVisibleModal(false);
  };

  const renderItem = ({ item }) => (
    <View style={styles.notificationItem}>
       <TouchableOpacity onPress={() => openModal(item)}>
      <View style={styles.notificationDetails}>
        <Text style={styles.notificationTitle}>{item.title}</Text>
        <Text style={styles.notificationDate}>{item.date}</Text>
      </View>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Notifications ({notifications.length})</Text>
        <TouchableOpacity>
          <Icon name="search" size={24} color="#000" />
        </TouchableOpacity>
      </View>
      <FlatList
        data={notifications}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContent}
      />

      <Modal 
        visible={!!visibleModal}
        transparent={true}
        animationType="slide"
        onRequestClose={closeModal}>
        <View style={[styles.modalOverlay, styles.modalCenter]}>
          <View style={styles.modalContainer}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>{modalTitle}</Text>
              <TouchableOpacity onPress={closeModal}>
                <Icon name="close" size={24} color="#000" />
              </TouchableOpacity>
            </View>
            
            <View style={styles.modalBody}>
              <Text style={styles.modalDateCentered}>{modalDate}</Text>
              <Text style={styles.modalText}>{modalContent}</Text>
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
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    backgroundColor: '#fff',
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  listContent: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  notificationItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  notificationDetails: {
    flex: 1,
  },
  notificationTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 4,
  },
  notificationDate: {
    fontSize: 14,
    color: '#888',
  },

  // Modal Styles
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
  modalCenter: {
    justifyContent: 'center',
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
    textAlign: 'left',
    color: '#000',
  },
  modalDateCentered: {
    textAlign: 'center', 
    fontSize: 12,
    color: '#888',
    marginBottom: 10, 
  },
});

export default NotificationScreen;

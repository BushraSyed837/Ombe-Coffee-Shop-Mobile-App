import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Icons from 'react-native-vector-icons/MaterialIcons';
import {Menu, Button, Divider, Provider} from 'react-native-paper';

const Pagination = ({navigation}) => {
  const [activePage, setActivePage] = useState(1);

  const pages = [1, 2, 3, 4];
  const [activePage1, setActivePage1] = useState(2);
  const [activePage2, setActivePage2] = useState(1);
  const [activePage3, setActivePage3] = useState(1);
  const [activePage4, setActivePage4] = useState(1);
  const totalPages = 4;

  const handlePageChange = (page, setPage) => {
    if (page > 0 && page <= totalPages) {
      setPage(page);
    }
  };

  const renderPagination = (
    activePage,
    setActivePage,
    activeStyle,
    buttonStyle,
    sizes,
  ) => (
    <View style={styles.paginationContainer}>
      {/* Previous Button */}
      <TouchableOpacity
        onPress={() => handlePageChange(activePage - 1, setActivePage)}
        disabled={activePage === 1}
        style={[
          styles.button,
          buttonStyle,
          activePage === 1 && styles.disabledButton,
        ]}>
        <Text style={styles.icon}>&lt;</Text>
      </TouchableOpacity>

      {/* Page Numbers */}
      {Array.from({length: totalPages}).map((_, index) => {
        const pageNumber = index + 1;
        return (
          <TouchableOpacity
            key={pageNumber}
            onPress={() => handlePageChange(pageNumber, setActivePage)}
            style={[
              styles.pageButton,
              buttonStyle,
              activePage === pageNumber && activeStyle,
              sizes,
            ]}>
            <Text
              style={[
                styles.pageText,
                activePage === pageNumber && styles.activePageText,
              ]}>
              {pageNumber}
            </Text>
          </TouchableOpacity>
        );
      })}

      {/* Next Button */}
      <TouchableOpacity
        onPress={() => handlePageChange(activePage + 1, setActivePage)}
        disabled={activePage === totalPages}
        style={[
          styles.button,
          buttonStyle,
          activePage === totalPages && styles.disabledButton,
        ]}>
        <Text style={styles.icon}>&gt;</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <ScrollView style={styles.container}>
      {/* Timeline Header */}
      <View style={styles.headerContainer}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Pagination</Text>
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
          Timeline Style
        </Button>
      </View>

      {/* Default Pagination */}
      <View
        style={{
          borderWidth: 1,
          borderColor: '#ddd',
          margin: 18,
          borderRadius: 8,
        }}>
        <Text style={[styles.title, {padding: 10}]}>Default Pagination</Text>
        <View style={{borderTopWidth: 1, borderColor: '#ddd'}}></View>
        <View style={[styles.paginationContainer, {padding: 10}]}>
          {/* Previous Button */}

          <TouchableOpacity
            style={[
              styles.pageButton,
              activePage === 1 && styles.disabledButton,
              {width: 90, padding: 5},
            ]}
            onPress={() => setActivePage(prev => (prev > 1 ? prev - 1 : prev))}
            disabled={activePage === 1}>
            <Text style={[styles.pageText, {color: '#000'}]}>Previous</Text>
          </TouchableOpacity>

          {/* Page Buttons */}
          {pages.map(page => (
            <TouchableOpacity
              key={page}
              onPress={() => setActivePage(page)}
              style={[
                styles.pageButton,
                activePage === page && styles.activePageButton,
              ]}>
              <Text
                style={[
                  styles.pageText,
                  activePage === page && styles.activePageText,
                ]}>
                {page}
              </Text>
            </TouchableOpacity>
          ))}

          {/* Next Button */}
          <TouchableOpacity
            style={[
              styles.pageButton,
              activePage === pages.length && styles.disabledButton,
              {width: 50, padding: 5},
            ]}
            onPress={() =>
              setActivePage(prev => (prev < pages.length ? prev + 1 : prev))
            }
            disabled={activePage === pages.length}>
            <Text style={styles.pageText}>Next</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          borderWidth: 1,
          borderColor: '#ddd',
          margin: 18,
          borderRadius: 8,
          justifyContent: 'flex-start'
        }}>
        <View style={styles.paginationGroup}>
          <Text
            style={[styles.title, {padding: 10, fontFamily: 'Poppins-Bold'}]}>
            Pagination Sizes
          </Text>
          <View style={{borderTopWidth: 1, borderColor: '#ddd'}}></View>

          <View style={{alignItems:'flex-start', marginLeft: 15}}>
            {renderPagination(
              activePage1,
              setActivePage1,
              styles.activeGreenButton,
              styles.greenButtonSizes,
            )}

            {renderPagination(
              activePage1,
              setActivePage1,
              styles.activeGreenButton,
              styles.greenButtonBackground,
            )}

            {renderPagination(
              activePage1,
              setActivePage1,
              styles.activeGreenButton,
              styles.greenButtonSizes,
            )}
          </View>
        </View>
      </View>
      {/* Working with Icons */}
      <View
        style={{
          borderWidth: 1,
          borderColor: '#ddd',
          margin: 18,
          borderRadius: 8,
        }}>
        <View style={styles.paginationGroup}>
          <Text style={[styles.title, {padding: 10}]}>Working With Icons</Text>
          <View style={{borderTopWidth: 1, borderColor: '#ddd'}}></View>
          {renderPagination(
            activePage1,
            setActivePage1,
            styles.activeGreenButton,
            styles.greenButton,
          )}

          {/* Red Theme */}
          {renderPagination(
            activePage2,
            setActivePage2,
            styles.activeRedButton,
            styles.redButton,
          )}

          {/* Blue Theme */}
          {renderPagination(
            activePage3,
            setActivePage3,
            styles.activeBlueButton,
            styles.blueButton,
          )}

          {/* Orange Theme */}
          {renderPagination(
            activePage4,
            setActivePage4,
            styles.activeOrangeButton,
            styles.orangeButton,
          )}
        </View>
      </View>

      {/* Pagination Color */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
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
  paginationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  pageButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginHorizontal: 4,
    borderRadius: 6,
    borderWidth: 1,
    fontFamily: 'Poppins-Regular',
    borderColor: '#ddd',
    backgroundColor: '#fff',
  },
  pageText: {
    fontSize: 16,
    color: '#000',
    fontFamily: 'Poppins-Regular',
  },
  activePageButton: {
    backgroundColor: '#f2f2f2',
    borderColor: '#007bff',
  },
  activePageText: {
    color: '#007bff',
    fontFamily: 'Poppins-Bold',
  },
  disabledButton: {
    opacity: 0.5,
  },

  paginationGroup: {
    marginBottom: 20,
  },
  pagination: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  pageButton: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
    marginHorizontal: 5,
  },
  pageText: {
    fontSize: 16,
    color: '#000',
    fontFamily: 'Poppins-Regular', // Using Poppins-Bold
  },
  title: {
    fontSize: 18,
    marginBottom: 10,
    fontFamily: 'Poppins-Bold', // Using Poppins-Bold
    color: '#000',
  },
  paginationContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  button: {
    borderWidth: 1,
    borderRadius: 4,
    padding: 8,
    marginHorizontal: 4,
  },
  disabledButton: {
    opacity: 0.5,
  },
  icon: {
    fontSize: 16,
    color: '#333',
  },
  pageButton: {
    borderWidth: 1,
    borderRadius: 4,
    padding: 8,
    marginHorizontal: 2,
  },
  pageText: {
    fontSize: 14,
    color: 'black',
    fontFamily: 'Poppins-Regular', // Using Poppins-Bold
  },
  activePageText: {
    color: 'white',
    fontWeight: 'bold',
  },

  // Green Theme
  greenButton: {
    borderColor: '#0b8457',
    fontFamily: 'Poppins-Regular',
    backgroundColor: 'white',
  },
  greenButtonSizes: {
    borderColor: '#ddd',
    fontFamily: 'Poppins-Regular',
    backgroundColor: 'white',
    height: 30,
    width: 30,
  },
  greenButtonBackground: {
    borderColor: '#ddd',
    fontFamily: 'Poppins-Regular',
    backgroundColor: 'rgba(4, 118, 78, 0.25)',
    height: 35,
    width: 35,
  },
  activeGreenButton: {
    backgroundColor: '#0b8457',
  },

  greenButtonSizesSmall: {
    paddingVertical: 2,
    paddingHorizontal: 5,
    borderRadius: 4,
  },
  greenButtonSizesMedium: {
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 6,
  },
  greenButtonSizesLarge: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
  },

  // Red Theme
  redButton: {
    borderColor: '#d32f2f',
    fontFamily: 'Poppins-Regular', // Using Poppins-Bold
    backgroundColor: '#ffebee',
  },
  activeRedButton: {
    backgroundColor: '#d32f2f',
  },

  // Blue Theme
  blueButton: {
    borderColor: '#1976d2',
    fontFamily: 'Poppins-Regular',
    backgroundColor: '#e3f2fd',
  },
  activeBlueButton: {
    backgroundColor: '#1976d2',
  },

  // Orange Theme
  orangeButton: {
    borderColor: '#f57c00',
    fontFamily: 'Poppins-Regular',
    backgroundColor: '#fff3e0',
  },
  activeOrangeButton: {
    backgroundColor: '#f57c00',
  },
  paginationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
  pageButton: {
    width: 40, // Square width
    height: 40, // Square height (same as width)
    borderWidth: 1,
    borderRadius: 6, // Keeps slight rounded corners
    borderColor: '#ddd',
    backgroundColor: '#fff',
    justifyContent: 'center', // Center text vertically
    alignItems: 'center', // Center text horizontally
    marginHorizontal: 5, // Space between buttons
  },
  pageText: {
    fontSize: 16,
    color: '#000',
    fontFamily: 'Poppins-Regular',
  },
  activePageButton: {
    backgroundColor: '#007bff',
    borderColor: '#007bff',
  },
  activePageText: {
    color: '#fff',
    fontFamily: 'Poppins-Bold',
  },
  button: {
    width: 40, // Ensure same square dimension for Previous/Next buttons
    height: 40,
    borderWidth: 1,
    borderRadius: 6,
    padding: 0,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
  },
  disabledButton: {
    opacity: 0.5,
  },
  icon: {
    fontSize: 16,
    color: '#333',
  },
});

export default Pagination;

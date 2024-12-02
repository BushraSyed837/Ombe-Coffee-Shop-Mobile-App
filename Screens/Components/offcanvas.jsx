import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  Modal,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { Button } from "react-native-paper";

// Fetch screen dimensions dynamically
const { width, height } = Dimensions.get("screen");

const Offcanvas = ({ navigation }) => {
  const [visibleDrawer, setVisibleDrawer] = useState(null);

  const renderOffcanvasContent = () => {
    switch (visibleDrawer) {
      case "top":
        return <Text style={styles.drawerText}>Top Offcanvas Content</Text>;
      case "left":
        return <Text style={styles.drawerText}>Left Offcanvas Content</Text>;
      case "bottom":
        return <Text style={styles.drawerText}>Bottom Offcanvas Content</Text>;
      case "right":
        return <Text style={styles.drawerText}>Right Offcanvas Content</Text>;
      default:
        return null;
    }
  };

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.headerContainer}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Icon name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Offcanvas</Text>
        <TouchableOpacity style={styles.menuButton} />
      </View>

      {/* Section Header */}
      <View style={styles.headerTop}>
        <View style={styles.headerContent}>
          <Icon
            name="layers"
            size={28}
            color="#fff"
            style={{ marginRight: 10 }}
          />
          <Text style={styles.headerText}>Bootstrap Elements</Text>
        </View>
        <Button
          mode="outlined"
          style={styles.headerButton}
          labelStyle={styles.headerButtonText}
        >
          Offcanvas Style
        </Button>
      </View>

      {/* Offcanvas Buttons */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Bootstrap Modal</Text>
        <View style={styles.line}></View>
        <View style={{padding:15}}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => setVisibleDrawer("top")}
        >
          <Text style={styles.buttonText}>Toggle Top Offcanvas</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => setVisibleDrawer("left")}
        >
          <Text style={styles.buttonText}>Toggle Left Offcanvas</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => setVisibleDrawer("bottom")}
        >
          <Text style={styles.buttonText}>Toggle Bottom Offcanvas</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => setVisibleDrawer("right")}
        >
          <Text style={styles.buttonText}>Toggle Right Offcanvas</Text>
        </TouchableOpacity>
        </View>
      </View>

      {/* Offcanvas Modal */}
      <Modal
        visible={!!visibleDrawer}
        transparent
        animationType="slide"
        onRequestClose={() => setVisibleDrawer(null)}
      >
        <View
          style={[
            styles.modalContainer,
            visibleDrawer === "top" && { top: 0, width: "100%", height: height * 0.3 },
            visibleDrawer === "left" && { left: 0, width: width * 0.5, height: "100%" },
            visibleDrawer === "bottom" && { bottom: 0, width: "100%", height: height * 0.3 },
            visibleDrawer === "right" && { right: 0, width: width * 0.5, height: "100%" },
          ]}
        >
          {renderOffcanvasContent()}

          {/* Close Button */}
          <TouchableOpacity
            style={styles.closeButton}
            onPress={() => setVisibleDrawer(null)}
          >
            <Text style={styles.closeButtonText}>Close</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F9FA",
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  backButton: {
    padding: 8,
  },
  headerText: {
    fontSize: 18,
    color: "#000",
    fontFamily: "Poppins-Bold",
  },
  menuButton: {
    padding: 8,
  },
  headerTop: {
    backgroundColor: "#6a11cb",
    borderRadius: 8,
    margin: 15,
    padding: 10,
    flexDirection: "column",
    justifyContent: "flex-start",
    marginBottom: 5,
  },
  headerContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  headerButton: {
    borderColor: "#fff",
    borderRadius: 6,
    width: 180,
    marginLeft: 40,
  },
  headerButtonText: {
    color: "#fff",
    fontSize: 12,
    fontFamily: "Poppins-Regular",
  },
  section: {
    margin: 16,
    backgroundColor: "white",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  sectionTitle: {
    fontSize: 16,
    fontFamily: "Poppins-Bold",
    padding: 13,
    color: "#000",
  },
  line: {
    borderTopWidth: 1,
    borderColor: "#ddd",
    marginBottom: 10,
  },
  button: {
    backgroundColor: "#198754",
    paddingVertical: 12,
    borderRadius: 8,
    marginBottom: 8,
    alignItems: "center",
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 14,
    fontFamily: "Poppins-Bold",
  },
  modalContainer: {
    position: "absolute",
    backgroundColor: "#ffffff",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  drawerText: {
    fontSize: 16,
    color: "#000",
    marginBottom: 16,
    fontFamily: "Poppins-Regular",
  },
  closeButton: {
    backgroundColor: "#dc3545",
    paddingVertical: 8,
    paddingHorizontal: 16,
    
    borderRadius: 8,
  },
  closeButtonText: {
    color: "#ffffff",
    fontSize: 14,
    fontFamily: "Poppins-Bold",
  },
});

export default Offcanvas;

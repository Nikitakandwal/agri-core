import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  Image,
  Modal,
  FlatList,
} from "react-native";
import React, {useState, useRef} from "react";
import DropdownButton from "./DropdownButton";
import Icon from "react-native-vector-icons/FontAwesome";

const windowWidth = Dimensions.get("window").width;

const WhiteDropdownButton = () => {
  const [selectedValue, setSelectedValue] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const buttonRef = useRef(null);

  const toggleDropdown = () => {
    if (buttonRef.current) {
      buttonRef.current.measureInWindow((x, y, width, height) => {
        setModalPosition({ x, y: y + height });
      });
    }
    setIsDropdownOpen(!isDropdownOpen);
  };

  const options = [
    { label: "Option 1", value: "option1" },
    { label: "Option 2", value: "option2" },
    { label: "Option 3", value: "option3" },
  ];

  const [modalPosition, setModalPosition] = useState({ x: 0, y: 0 });

  return (
    <View style={{marginVertical:"5%", marginLeft:"28%"}}>
      <TouchableOpacity
        onPress={toggleDropdown}
        style={{
          backgroundColor: "#425343",
          width: 74,
          height: 20,
          borderRadius: 5,
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",
        }}
        ref={buttonRef}
      >
        <Text style={{ color: "#fff", fontSize: 9, marginHorizontal: 4 }}>
          {selectedValue || "Add to Basic"}
        </Text>
        <Icon
          name={isDropdownOpen ? "caret-up" : "caret-down"}
          size={10}
          color="#fff"
        />
      </TouchableOpacity>

      <Modal visible={isDropdownOpen} transparent={true} animationType="slide">
        <View
          style={[
            styles.modalContainer,
            { top: modalPosition.y, left: modalPosition.x },
          ]}
        >
          <FlatList
            data={options}
            keyExtractor={(item) => item.value}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => {
                  setSelectedValue(item.value);
                  setIsDropdownOpen(false);
                }}
              >
                <Text style={styles.modalItem}>{item.label}</Text>
              </TouchableOpacity>
            )}
          />
        </View>
      </Modal>
    </View>
  );
};

const Card = ({ category, imageSource, quantity, text, purchasedDate, subtext, subtext2, buttonText }) => {
  return (
    <View style={{ height: 162, width: windowWidth*0.41, backgroundColor: "#F8F8F8", borderRadius: 10, borderColor: "#00000010", borderWidth: 1, ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 2,
      },
      android: {
        elevation: 3,
      },
    }), }}>
      <View style={{ flexDirection: "row" }}>
        <View style={{ backgroundColor: "#0D8B2D80", width: windowWidth*0.13, height: 13, borderRadius: 3, marginLeft: "3%", marginTop: "6%" }}>
          <Text style={{ color: "#FFFFFF", fontSize: 8, textAlign: "center", textAlignVertical: "center" }}>{category}</Text>
        </View>
        <Image source={imageSource} style={{ marginLeft: "-3%", marginTop: "1%" }} />
        <View style={{ backgroundColor: "#FBDF4E", width: windowWidth*0.093, height: 25, borderRadius: 6, justifyContent: "center", alignItems: "center", marginTop: "3%", marginLeft: "3%" }}>
          <Image source={require("../assets/icons/solar_cart-outline.png")} />
        </View>
      </View>
      <View style={{ padding: 2 }}>
        <Text style={{ fontSize: 11, fontWeight: "700" }}>{subtext}</Text>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={styles.subtext1}>{text}</Text>
          <Text style={styles.subtext1}>{quantity}</Text>
          <Text style={styles.subtext1}>Purchased on</Text>
        </View>
        <View style={{ flexDirection: "row", justifyContent:"space-between" }}>
          <View>
            <Text style={styles.subtext}>{subtext2}</Text>
            <Text style={styles.subtext}>{quantity}</Text>
          </View>
          <View>
            <Text style={{ fontSize: 8, fontWeight: "800", left: 70 }}>{purchasedDate}</Text>
            <WhiteDropdownButton buttonText={buttonText} />
          </View>
        </View>
      </View>
    </View>
  );
};

const TrailHistory = ({ title, card1Data, card2Data }) => {
  return (
    <View style={{ marginHorizontal: windowWidth * 0.068 }}>
    <View style={{ flexDirection: "row", justifyContent: "space-between", width: windowWidth * 0.87 }}>
      <Text style={{ fontSize: 16, fontWeight: "600", marginVertical: "4%" }}>{title}</Text>
      <Text style={{ marginVertical: "4%" }}>view all</Text>
    </View>
    <View style={{ flexDirection: "row"}}>
      <View style={{ marginRight: 20}}>
        <Card {...card1Data} />
      </View>
      <Card {...card2Data} />
    </View>
  </View>
  );
};


export default TrailHistory;

const styles = StyleSheet.create({
  subtext:{
    fontSize:8,
    color:"#33333380",
    width:50,
     marginVertical:"2%"
  },
  subtext1:{
    fontSize:8,
    color:"#33333380",
    marginVertical:'1%'
  },
  modalContainer: {
    position: 'absolute',
    width: 70,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderColor: '#ccc',
    borderWidth: 1,
  },
  modalItem: {
    fontSize: 10,
    color: '#000',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});

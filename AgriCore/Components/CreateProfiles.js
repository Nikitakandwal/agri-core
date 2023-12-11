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
  import React, { useState, useRef } from "react";
  import Header from "./Header";
  import SearchBar from "./SearchBar";
  import Icon from "react-native-vector-icons/FontAwesome";
  import CategoriesComponent from "../Components/Categories.js";
  
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
      <View>
        <TouchableOpacity
          onPress={toggleDropdown}
          style={{
            backgroundColor: "#425343",
            width: 62,
            height: 25,
            borderRadius: 5,
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row",
          }}
          ref={buttonRef}
        >
          <Text style={{ color: "#fff", fontSize: 9, marginHorizontal: 4 }}>
            {selectedValue || "options"}
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
  
  const Price2 = ({ originalPrice, discountedPrice }) => {
    return (
      <View style={styles.pContainer}>
        <WhiteDropdownButton />
        <View style={styles.priceContainer}>
          <Text style={styles.originalPrice}>{`₹${originalPrice}`}</Text>
          <View style={styles.discountedPriceContainer}>
            <Text style={styles.discountedPrice}>{`₹${discountedPrice}`}</Text>
          </View>
        </View>
      </View>
    );
  };
  
  const Card = ({ cardData }) => {
    return (
      <TouchableOpacity style={styles.card1}>
        <Image
          source={require("../assets/img/Glycel.png")}
          style={styles.cardImage1}
        />
        <Image
          source={require("../assets/img/Union2.png")}
          style={styles.overlayImage1}
        />
        <Text style={styles.overlayText1}>{cardData.discount} off</Text>
        <Text style={styles.cardText1}>{cardData.title}</Text>
        <Text style={styles.label}>{cardData.label}</Text>
        <Price2
          originalPrice={cardData.originalPrice1}
          discountedPrice={cardData.discountPrice}
        />
      </TouchableOpacity>
    );
  };
  
  const Container1 = () => {
    const cardData1 = {
      imageSource: require("../assets/img/Glycel.png"),
      overlayImageSource: require("../assets/img/Union2.png"),
      discount: "30%",
      title: "Product Title 1",
      label: "Product Label 1",
      originalPrice1: 1000,
      discountPrice: 700,
      dropdownButtonText: "Select Option 1",
    };
  
    return <Card cardData={cardData1} />;
  };
  
  const Container2 = () => {
    const cardData1 = {
      imageSource: require("../assets/img/Glycel.png"),
      overlayImageSource: require("../assets/img/Union2.png"),
      discount: "30%",
      title: "Product Title 1",
      label: "Product Label 1",
      originalPrice1: 1000,
      discountPrice: 700,
      dropdownButtonText: "Select Option 1",
    };
  
    return <Card cardData={cardData1} />;
  };
  
  const OrderProfile5 = () => {
    const cardData = [
      { imagePath: require("../assets/img/Pesticides.png"), text: "Pesticides" },
      { imagePath: require("../assets/img/Fungicides.png"), text: "Fungicides" },
      {
        imagePath: require("../assets/img/Insecticides.png"),
        text: "Insecticides",
      },
      { imagePath: require("../assets/img/Herbicides.png"), text: "Herbicides" },
      {
        imagePath: require("../assets/img/Fertilizers.png"),
        text: "Fertilizers",
      },
      {
        imagePath: require("../assets/img/micro-nutrients.png"),
        text: "Micro Nutrients",
      },
      { imagePath: require("../assets/img/Seeds.png"), text: "Seeds" },
      {
        imagePath: require("../assets/img/GrowthPromoters.png"),
        text: "Growth Promoters",
      },
    ];
    return (
      <ScrollView style={{ backgroundColor: "#FFF" }}>
        <Header />
        <View style={{ marginVertical: "4%" }}>
          <SearchBar placeholder={"Herbicides, pesticides etc"} />
        </View>
        <View>
          <Text
            style={{
              fontSize: 14,
              color: "#333333",
              marginHorizontal: "5%",
              marginVertical: "2%",
              fontWeight:"600"
            }}
          >
            Add items
          </Text>
          <View style={styles.categoriesContainer}>
            <CategoriesComponent
              headingText="Top categories"
              headingStyle={{ color: "#414141", fontSize: 18, fontWeight:"600" }}
              buttonText="View all"
              buttonStyle={{ color: "#414141", fontSize: 14 }}
              cardData={cardData}
            />
          </View>
          <View>
            <Text
              style={{
                fontSize: 16,
                color: "#414141",
                marginLeft: "6%",
                marginTop: "15%",
                fontWeight: "600",
              }}
            >
              Items
            </Text>
            <View style={styles.cardsContainer}>
              <Container1 />
              <Container2 />
            </View>
          </View>
          <View
            style={{
              height: 193,
              backgroundColor: "#D9D9D9",
              marginVertical: "5%",
            }}
          ></View>
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <TouchableOpacity
              style={{
                width: 193,
                height: 50,
                justifyContent: "center",
                alignItems: "center",
                borderWidth: 1,
                borderColor: "#00000010",
                borderRadius: 10,
                flexDirection:"row"
              }}
            >
              <Icon name="camera" size={20} color="#676767" /> 
              <Text style={{fontWeight:"600", color:"#333333"}}> Scan to add</Text>
            </TouchableOpacity>
          </View>
          <View>
              <Text style={{fontSize:16, color:"#414141",marginLeft:"6%", marginTop:"5%"}}>You may also like</Text>
              <View style={styles.cardsContainer}>
            <Container1/>
            <Container2/>
          </View>
          </View>
          <View>
              <Text style={{fontSize:16, color:"#414141",marginLeft:"6%", marginTop:"5%"}}>Saved products</Text>
              <View style={styles.cardsContainer}>
            <Container1/>
            <Container2/>
          </View>
          </View>
          <View>
          <View style={styles.section}>
        <TouchableOpacity style={styles.buttonQuickOrder} activeOpacity={0.7}>
          <Text style={styles.quickBtnText}>Create order profile</Text>
        </TouchableOpacity>
      </View>
  
          </View>
        </View>
      </ScrollView>
    );
  };
  
  export default OrderProfile5;
  
  const styles = StyleSheet.create({
    categoriesContainer: {
      flex: 1,
      height: 220,
    },
    cardsContainer: {
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "space-around",
    },
    cardContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      flexWrap: "wrap",
    },
    card: {
      height: 93,
      width: 111,
      borderWidth: 1,
      borderRadius: 6,
      borderColor: "#00000010",
      marginBottom: 10,
      overflow: "hidden",
    },
    section: {
      height: 83,
      width: '100%',
      backgroundColor: '#ffffff', 
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      paddingHorizontal: 16 , 
      borderColor:"#33333310",
      borderWidth:1,
      marginTop:"5%",
      borderTopRightRadius:20,
      borderTopLeftRadius:20
    },
    cardTextContainer: {
      flexDirection: "row",
      alignItems: "center",
    },
    cardTitle: {
      fontSize: 10,
      color: "#333333",
      width: 73,
      marginLeft: 19,
    },
    viewedAgo: {
      fontSize: 7,
      color: "#ffffff",
      height: 20,
      width: "100%",
      backgroundColor: "#425343",
      textAlign: "center",
      marginTop: "6%",
      textAlignVertical: "center",
    },
    pContainer: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-around",
      borderBottomColor: "#ccc",
      marginLeft: 0,
      marginTop: 3,
    },
    priceContainer: {
      alignItems: "flex-start",
    },
    originalPrice: {
      textDecorationLine: "line-through",
      color: "rgba(51, 51, 51, 0.8)", // #333333 with 80% opacity
      fontSize: 8,
      marginLeft: 5,
    },
    discountedPrice: {
      fontWeight: "bold",
      color: "rgba(51, 51, 51, 1)", // #333333 with 100% opacity
      fontSize: 11,
    },
    overlayText: {
      position: "absolute",
      top: 0,
      left: 9,
      color: "#000",
      fontSize: 8,
    },
    cardsContainer: {
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "space-around",
    },
    card1: {
      width: 152,
      height: 175,
      margin: 8,
      backgroundColor: "#f8f8f8",
      borderRadius: 8,
      overflow: "hidden",
      elevation: 5,
      // For iOS
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.5,
      shadowRadius: 4,
    },
    cardImage1: {
      width: 79,
      height: 98,
      resizeMode: "cover",
      marginHorizontal: windowWidth * 0.1,
    },
    cardText1: {
      paddingLeft: 10,
      fontSize: 14,
      fontWeight: "500",
      color: "#333333",
    },
    text1: {
      fontSize: 14,
      color: "rgba(51, 51, 51, 0.5)", // #333333 with 50% opacity
    },
    text21: {
      fontSize: 12,
      color: "rgba(51, 51, 51, 0.7)",
    },
    label: {
      fontSize: 10,
      color: "rgba(51, 51, 51, 0.7)",
      marginHorizontal: "7%",
    },
    overlayImage1: {
      position: "absolute",
      top: 10,
      left: 3,
      resizeMode: "cover",
    },
    overlayText1: {
      position: "absolute",
      top: 12,
      left: 10,
      color: "#000",
      fontSize: 8,
    },
    btns: {
      height: 41,
      width: '45%',   
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 5,
    },
    quickBtnText:{
      color:"#FFF",
      fontSize: 16,
      fontWeight:'500'
    },
    buttonQuickOrder: {
      height: 41,
      width: '95%', 
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 5,
      backgroundColor:"#344435"
    },
    btnsText: {
      fontSize: 18,
      color:"#333333",
      fontWeight:'bold'
    },
  });
  
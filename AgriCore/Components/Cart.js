import {
    Image,
    ScrollView,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    FlatList,
  } from "react-native";
  import React, { useState } from "react";
  import Header from "../Components/Header";
  import StatusBar from "../Components/CartStatusBar";
  import Icon from "react-native-vector-icons/FontAwesome5"; 
  import UpiPaymentSection from "../Components/Upi";
  import Wallets from "../Components/Wallets";
  import Slider from "@react-native-community/slider";
import { Price } from "./Price2";

const CartSummary = () =>{
  
    return(
      <View>
      <View style={{backgroundColor:"#D9D9D910", height:257, width:325, borderWidth:1, borderColor:"#33333310", borderRadius:10}}>
         <View style={{flexDirection:"row", justifyContent:"space-between", marginHorizontal:"5%", marginTop:"4.5%"}}><Text style={{fontWeight:"bold", fontSize:14, color:"#333333"}}>Cart Total</Text><Text style={{fontWeight:"bold", fontSize:14, color:"#333333"}}>₹5000</Text></View>
         <View style={{flexDirection:"row", justifyContent:"space-between", marginHorizontal:"5%", marginTop:"4.5%"}}><Text style={{fontSize:14, color:"#333333"}}>Deals applied</Text><Text style={{fontSize:14, color:"#333333"}}>50% off</Text></View>
     
         <View style={{flexDirection:"row", justifyContent:"space-between", marginHorizontal:"5%", marginTop:"4.5%"}}><Text style={{fontWeight:"bold", fontSize:14, color:"#333333"}}>Coupons Discount</Text><Text style={{fontWeight:"bold", fontSize:14, color:"#333333"}}>-₹100</Text></View>
     
         <View style={{flexDirection:"row", justifyContent:"space-between", marginHorizontal:"5%", marginTop:"4.5%"}}><Text style={{fontWeight:"bold", fontSize:14, color:"#333333"}}>Loyalty discounts</Text><Text style={{fontWeight:"bold", fontSize:14, color:"#333333"}}>-₹150</Text></View>
     
         <View style={{flexDirection:"row", justifyContent:"space-between", marginHorizontal:"5%", marginTop:"4.5%"}}><Text style={{fontSize:14, color:"#333333"}}>Handling and packing fee</Text><Text style={{fontSize:14, color:"#333333"}}>₹400</Text></View>
     
         <View style={{flexDirection:"row", justifyContent:"space-between", marginHorizontal:"5%", marginTop:"4.5%"}}><Text style={{fontSize:14, color:"#333333"}}>Delivery charges</Text><Text style={{fontSize:14, color:"#333333"}}>₹500</Text></View>
     
         <View style={{flexDirection:"row", justifyContent:"space-between", marginHorizontal:"5%", marginTop:"4.5%"}}><Text style={{fontWeight:"bold", fontSize:14, color:"#333333"}}>Total Amount</Text><Text style={{fontWeight:"bold", fontSize:14, color:"#333333"}}>₹5750</Text></View>
      
      </View>
    </View>
    )
  }
  

export const Cart = ({savings, noOfProductsInCart, size, deliveryDate, quan, originalCost, discountedPrice}) => {
    const [activeButton, setActiveButton] = useState(null);
    const [quantity, setQuantity] = useState(quan);

    const decreaseQuantity = () => {
      if (quantity > 1) {
        setQuantity(quantity - 1);
      }
    };
  
    const increaseQuantity = () => {
      setQuantity(quantity + 1);
    };
  
    const data = [
      { id: "1", label: "Combo deals" },
      { id: "2", label: "New arrivals" },
      { id: "3", label: "Clearance sale" },
      { id: "4", label: "Button 4" },
    ];

    const cards = [
      { id: "card1", content: "Card 1" },
      { id: "card2", content: "Card 2" },
      { id: "card3", content: "Card 3" },
    ];

    const renderItem = ({ item }) => (
      <TouchableOpacity
        style={[
          styles.button2,
          { backgroundColor: activeButton === item.id ? "#333333" : "#FFFFFF" },
           ]}
        onPress={() => handleButtonPress(item.id)}
      >
        <Text
          style={{
            color: activeButton === item.id ? "#FFFFFF" : "#333333",
            textAlign: "center", fontSize:10
          }}
        >
          {item.label}
        </Text>
      </TouchableOpacity>
    );

    const renderCard = ({ item }) => (
      <View style={styles.card2}>
        <Text style={{ color: "#FFFFFF", textAlign: "center" }}>
          {item.content}
        </Text>
      </View>
    );

    const keyExtractor = (item) => item.id;

    const handleButtonPress = (buttonId) => {
      setActiveButton(buttonId);
    };

    return (
      <View>
        <View
          style={{
            height: 45,
            backgroundColor: "#EDFFEE",
            borderWidth: 1,
            borderColor: "#6A9D6D20",
            justifyContent: "center",
          }}
        >
          <Text style={{ color: "#2F9D35", textAlign: "center", fontSize: 14 }}>
            You have saved <Text style={{ fontWeight: "900" }}>₹{savings}</Text>{" "}
            on this cart
          </Text>
        </View>
        <View
          style={{
            justifyContent: "space-between",
            flexDirection: "row",
            marginHorizontal: "7%",
            marginVertical: "5%",
          }}
        >
          <Text style={{ fontWeight: "600" }}>
            Item(s) in your cart ({noOfProductsInCart})
          </Text>
          <Icon name="trash" size={18} color="grey" />
        </View>
        <View>
          <View
            style={{
              height: 170,
              width: "90%",
              backgroundColor: "#F8F8F8",
              borderRadius: 15,
              marginHorizontal: "5%",
              borderColor: "#00000010",
              borderWidth: 1,
            }}
          >
            <View style={{ flexDirection: "row", height: 150 }}>
              <View style={{ width: "40%", marginVertical: "3%" }}>
                <Image
                  source={require("../assets/img/Union2.png")}
                  style={{ left: "23%" }}
                />
                <Text
                  style={{
                    position: "absolute",
                    fontSize: 9,
                    marginHorizontal: "29%",
                  }}
                >
                  50% off
                </Text>
                <Image
                  source={require("../assets/img/ProductImage.png")}
                  style={{
                    width: 86,
                    height: 108,
                    marginHorizontal: "10%",
                    marginVertical: "5%",
                  }}
                />
              </View>
              <View style={{ marginVertical: "7%" }}>
                <Text
                  style={{ fontSize: 14, fontWeight: "bold", color: "#333333" }}
                >
                  {productName}{" "}
                </Text>
                <Icon
                  name="trash"
                  size={14}
                  color="grey"
                  style={{
                    left: "55%",
                    position: "absolute",
                    marginVertical: "1%",
                  }}
                />
                <View style={{ flexDirection: "row", marginVertical: "3%" }}>
                  <Text style={{ fontSize: 12, color: "#33333350" }}>
                    {brand}
                  </Text>
                  <Text
                    style={{
                      fontSize: 12,
                      color: "#33333390",
                      marginHorizontal: "25%",
                    }}
                  >
                    {size}
                  </Text>
                </View>
                <Text style={{ fontSize: 10, color: "#33333350" }}>
                  Delivered by{" "}
                  <Text style={{ fontWeight: "bold", color: "#333333" }}>
                    {deliveryDate}
                  </Text>
                </Text>
                <View style={{ flexDirection: "row", marginVertical: "3%" }}>
                  <View style={styles.quantityContainer}>
                    <TouchableOpacity
                      onPress={decreaseQuantity}
                      style={styles.iconContainer}
                    >
                      <Icon
                        name="minus"
                        size={12}
                        color="black"
                        style={{ textAlign: "center" }}
                      />
                    </TouchableOpacity>
                    <Text style={styles.quantityText2}>{quantity}</Text>
                    <TouchableOpacity
                      onPress={increaseQuantity}
                      style={styles.iconContainer}
                    >
                      <Icon
                        name="plus"
                        size={12}
                        color="black"
                        style={{ textAlign: "center" }}
                      />
                    </TouchableOpacity>
                  </View>
                  <View style={{ marginHorizontal: "19%" }}>
                    <Text style={styles.originalCost}>MRP ₹{originalCost}</Text>
                    <Text style={styles.discountedPrice}>
                      ₹{discountedPrice}
                    </Text>
                  </View>
                </View>
              </View>
            </View>
            <Text
              style={{
                fontSize: 8,
                color: "#FFFFFF",
                backgroundColor: "#6A9D6D",
                height: 20,
                textAlignVertical: "center",
                textAlign: "center",
                borderBottomLeftRadius: 10,
                borderBottomRightRadius: 10,
              }}
            >
              ₹100 Cash back applied
            </Text>
          </View>
          <View
            style={{
              height: 170,
              width: "90%",
              backgroundColor: "#F8F8F8",
              borderRadius: 15,
              marginHorizontal: "5%",
              borderColor: "#00000010",
              borderWidth: 1,
              marginVertical: "4%",
            }}
          >
            <View style={{ flexDirection: "row", height: 150 }}>
              <View style={{ width: "40%", marginVertical: "3%" }}>
                <Image
                  source={require("../assets/img/Union2.png")}
                  style={{ left: "23%" }}
                />
                <Text
                  style={{
                    position: "absolute",
                    fontSize: 9,
                    marginHorizontal: "29%",
                  }}
                >
                  50% off
                </Text>
                <Image
                  source={require("../assets/img/ProductImage.png")}
                  style={{
                    width: 86,
                    height: 108,
                    marginHorizontal: "10%",
                    marginVertical: "5%",
                  }}
                />
              </View>
              <View style={{ marginVertical: "7%" }}>
                <Text
                  style={{ fontSize: 14, fontWeight: "bold", color: "#333333" }}
                >
                  {productName}{" "}
                </Text>
                <Icon
                  name="trash"
                  size={14}
                  color="grey"
                  style={{
                    left: "55%",
                    position: "absolute",
                    marginVertical: "1%",
                  }}
                />
                <View style={{ flexDirection: "row", marginVertical: "3%" }}>
                  <Text style={{ fontSize: 12, color: "#33333350" }}>
                    {brand}
                  </Text>
                  <Text
                    style={{
                      fontSize: 12,
                      color: "#33333390",
                      marginHorizontal: "25%",
                    }}
                  >
                    {size}
                  </Text>
                </View>
                <Text style={{ fontSize: 10, color: "#33333350" }}>
                  Delivered by{" "}
                  <Text style={{ fontWeight: "bold", color: "#333333" }}>
                    {deliveryDate}
                  </Text>
                </Text>
                <View style={{ flexDirection: "row", marginVertical: "3%" }}>
                  <View style={styles.quantityContainer}>
                    <TouchableOpacity
                      onPress={decreaseQuantity}
                      style={styles.iconContainer}
                    >
                      <Icon
                        name="minus"
                        size={12}
                        color="black"
                        style={{ textAlign: "center" }}
                      />
                    </TouchableOpacity>
                    <Text style={styles.quantityText2}>{quantity}</Text>
                    <TouchableOpacity
                      onPress={increaseQuantity}
                      style={styles.iconContainer}
                    >
                      <Icon
                        name="plus"
                        size={12}
                        color="black"
                        style={{ textAlign: "center" }}
                      />
                    </TouchableOpacity>
                  </View>
                  <View style={{ marginHorizontal: "19%" }}>
                    <Text style={styles.originalCost}>MRP ₹{originalCost}</Text>
                    <Text style={styles.discountedPrice}>
                      ₹{discountedPrice}
                    </Text>
                  </View>
                </View>
              </View>
            </View>
            <Text
              style={{
                fontSize: 8,
                color: "#FFFFFF",
                backgroundColor: "#6A9D6D",
                height: 20,
                textAlignVertical: "center",
                textAlign: "center",
                borderBottomLeftRadius: 10,
                borderBottomRightRadius: 10,
              }}
            >
              ₹100 Cash back applied
            </Text>
          </View>
        </View>
        <View
          style={{
            height: 45,
            backgroundColor: "#DFFFF7",
            borderWidth: 1,
            borderColor: "#6A9D6D20",
            justifyContent: "center",
            marginVertical: "4%",
          }}
        >
          <Text style={{ color: "#108B6E", textAlign: "center", fontSize: 14 }}>
            You have saved <Text style={{ fontWeight: "900" }}>₹{savings}</Text>{" "}
            on this cart
          </Text>
        </View>

        <Text
          style={{ color: "#333333", fontSize: 16, marginHorizontal: "5%" }}
        >
          Saved products
        </Text>
        <View style={styles.cardsContainer}>
          <View style={styles.card}>
            <View style={styles.upperHalf}>
              <Text style={styles.quantityText}>100ml</Text>
              <Image
                source={require("../assets/img/Profex.png")}
                style={styles.image}
              />
              <Image
                source={require("../assets/img/Union2.png")}
                style={styles.overlayImage}
              />
              <Text style={styles.overlayText}>50% off</Text>
            </View>
            <View style={styles.lowerHalf}>
              <Text style={styles.productText}>Profex Super Insecticide</Text>
              <Text style={styles.brandText}>Nagarjuna</Text>
              <View style={styles.priceContainer2}>
                <Price originalPrice={168} discountedPrice={84} />
                <TouchableOpacity style={styles.addButton}>
                  <Text style={styles.buttonText}>ADD +</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <View style={styles.card}>
            <View style={styles.upperHalf}>
              <Text style={styles.quantityText}>100ml</Text>
              <Image
                source={require("../assets/img/Profex.png")}
                style={styles.image}
              />
              <Image
                source={require("../assets/img/Union2.png")}
                style={styles.overlayImage}
              />
              <Text style={styles.overlayText}>50% off</Text>
            </View>
            <View style={styles.lowerHalf}>
              <Text style={styles.productText}>Profex Super Insecticide</Text>
              <Text style={styles.brandText}>Nagarjuna</Text>
              <View style={styles.priceContainer2}>
                <Price originalPrice={168} discountedPrice={84} />
                <TouchableOpacity style={styles.addButton}>
                  <Text style={styles.buttonText}>ADD +</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
        <View style={{ paddingHorizontal: "5%", marginVertical: "7%" }}>
          <Text style={{ fontSize: 16, color: "#333333", marginVertical: 10 }}>
            Quick add ons
          </Text>
          <View
            style={{
              width: 325,
              height: 183,
              backgroundColor: "#F0F0F0",
              borderColor: "#00000010",
              borderWidth: 1,
              borderRadius: 10,
            }}
          >
            <View style={{ flexDirection: "row",
              marginVertical:'4%'}}>
              <Text style={{ marginHorizontal: "3%", marginVertical: "1%" }}>
                Items From:
              </Text>
              <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={keyExtractor}
                horizontal
                showsHorizontalScrollIndicator={false} 
              />
            </View>
            <FlatList
              data={cards}
              renderItem={renderCard}
              keyExtractor={(item) => item.id}
              horizontal
              style={styles.cardContainer2}
            />
          </View>
        </View>
        <View>
          <Text style={{color:"#333333", fontSize:16, marginHorizontal:"5%"}}>Offers and discounts</Text>
          <View style={{flexDirection:'row', height:62, width:324, borderColor:'#00000010', borderWidth:1, borderRadius:10, marginHorizontal:"5%", marginVertical:'4%'}}>
            <View style={{width:'50%', marginHorizontal:'4%', marginVertical:'3%'}}><Text>'GET100' applied</Text><Text>₹100 coupon Savings</Text></View>
          <View style={{width:101, height:30, backgroundColor:'#FFE5D220', justifyContent:'center', alignItems:'center', borderRadius:5, marginVertical:'4%'}}><Text style={{color:"#FF6B00", fontWeight:'500'}}>Remove</Text></View>
          </View>
        </View>
        <View style={{height:86, backgroundColor:'#F8F8F8', borderWidth:1, borderColor:"#33333310"}}>
         <Text style={{backgroundColor:"#D03E3E", width:131, color:'#FFFFFF', fontSize:8, textAlign:'center', borderBottomLeftRadius:3, borderBottomRightRadius:3, marginHorizontal:'8%'}}>Loyalty benefits for you.</Text>
         <View style={{flexDirection:'row'}}>
          <Text style={{fontSize:12, color:"#333333", width:140, marginHorizontal:"8%", marginVertical:"3%"}}><Text style={{color:"#D03E3E", fontWeight:'bold'}}>Gold</Text> Loyalty credits of ₹150 added for you for extra discounts!</Text>
          <Text style={{fontSize:8, width:140, marginVertical:"5%"}}>You will get ₹100 Loyalty credits for this order.</Text>
          </View></View>

          <View
          style={{
            height: 45,
            backgroundColor: "#DFFFF7",
            borderWidth: 1,
            borderColor: "#6A9D6D10",
            justifyContent: "center",
            marginVertical: "10%",
          }}
        >
          <Text style={{ color: "#2F619D", textAlign: "center", fontSize: 14 }}>
          Get all the products by <Text style={{ fontWeight: "900" }}>5th August 2023</Text>
    
          </Text>
        </View>
        <View style={{marginHorizontal:'5.4%'}}>
    <Text style={{fontSize:16, color:"#333333", marginBottom:"6%"}}>Cart Summary</Text>
      <CartSummary/>
      </View>
        <View style={{height:55, width:325, borderWidth:1, borderColor:"#00000010", backgroundColor:"#FFFEFE", borderTopRightRadius:37, borderTopLeftRadius:37, flexDirection:"row", justifyContent:"space-around", paddingVertical:"5%", marginHorizontal:"5%", marginTop:"13%"}}>
          <Text style={{color:"#425343", fontSize:14, fontWeight:"bold"}}>Payable Amount</Text>
          <Text style={{color:"#425343", fontSize:14, fontWeight:"bold"}}>₹5750</Text>
        </View>
        <View style={{backgroundColor:"#EFF6ED", height:70, flexDirection:"row", justifyContent:"space-around", paddingVertical:"4%"}}>
          <Text style={{width:"35%", color:"#525252", fontSize:12, fontWeight:'500'}}>
            Billed to Aditya singh{" "} 
            <Text style={{color:"#425343", fontSize:14, fontWeight:'700'}}>154 - A, Delhi</Text>
          </Text>
          <TouchableOpacity style={{marginVertical:"2%" }}><Text style={{color:"#425343", fontSize:14, fontWeight:'900'}}>Change</Text></TouchableOpacity>
        </View>
        <View style={{backgroundColor:"#344435", height:83, flexDirection:'row', justifyContent:"space-around",alignItems:"center"}}>
          <Text style={{color:"#FFFFFF", fontWeight:"700"}}>Add more items</Text>
          <TouchableOpacity style={{backgroundColor:"#FFFFFF", height:41, width:152, borderRadius:5, justifyContent:"center", alignItems:"center"}}><Text style={{fontWeight:"bold", color:"#425343", fontSize:16}}>Check out</Text></TouchableOpacity>
        </View>
      </View>
    );
  };

  const styles = StyleSheet.create({
    container: {
      backgroundColor: "#FFFFFF",
    },
    quantityContainer: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
    },
    iconContainer: {
      backgroundColor: "#FDEACF40",
      height: 25,
      width: 24,
      justifyContent: "center",
    },
    quantityText2: {
      fontSize: 14,
      marginHorizontal: 10,
    },
    originalCost: {
      textDecorationLine: "line-through",
      color: "gray",
      fontSize: 10,
    },
    discountedPrice: {
      fontSize: 16,
      fontWeight: "bold",
      color: "black",
    },
    cardsContainer: {
      margin: 4,
      flexDirection: "row",
    },
    card: {
      height: 141,
      width: 152,
      backgroundColor: "#F5F5F5",
      borderColor: "rgba(0, 0, 0, 0.2)",
      borderWidth: 1,
      borderRadius: 10,
      marginLeft: 15,
      marginTop: 15,
      ...Platform.select({
        android: {
          elevation: 5,
        },
        ios: {
          shadowColor: "black",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.2,
          shadowRadius: 4,
        },
      }),
    },
    heading: {
      fontSize: 16,
      fontWeight: "bold",
      marginBottom: 10,
      marginHorizontal:"5%",
      color:"#333333",
      marginTop:"6%"
    },
    upperHalf: {
      flexDirection: "row",
      alignItems: "center",
      paddingHorizontal: 8,
      paddingVertical: 4,
    },
    quantityText: {
      fontSize: 8,
      color: "#333333",
      backgroundColor: "#D9D9D9",
      height: 20,
      width: 33,
      borderRadius: 5,
      textAlign: "center",
      textAlignVertical: "center",
    },
    overlayImage: {
      position: "absolute",
      top: 4,
      right: 4,
    },
    overlayText: {
      position: "absolute",
      top: 6,
      right: 14,
      fontSize: 8,
      color: "#333333",
    },
    lowerHalf: {
      paddingHorizontal: 8,
      paddingVertical: 4,
    },
    productText: {
      fontSize: 10,
      color: "#333333",
    },
    brandText: {
      fontSize: 8,
      color: "rgba(51, 51, 51, 0.5)",
    },
    priceContainer2: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginTop: "8%",
    },
    priceText: {
      fontSize: 10,
      color: "#333333",
    },
    addButton: {
      height: 25,
      width: 62,
      backgroundColor: "#FDFDFD",
      borderColor: "rgba(51, 51, 51, 0.2)",
      borderWidth: 1,
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 5,
    },
    buttonText: {
      color: "#333333",
    },
    button: {
      height: 40,
      width: 152,
      backgroundColor: "rgba(250, 250, 250, 1)",
      borderColor: "rgba(0, 0, 0, 0.2)",
      borderWidth: 1,
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 5,
      marginHorizontal: 96,
      marginTop: 16,
    },
    buttonText2: {
      fontSize: 12,
      color: "rgba(51, 51, 51, 1)",
      fontWeight: "bold",
    },
    pContainer: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-around",
      borderBottomColor: "#ccc",
      marginLeft: 1,
      marginTop: 4,
      marginRight: 15,
    },
    priceContainer: {
      flexDirection: "row",
      alignItems: "flex-start",
    },
    originalPrice: {
      textDecorationLine: "line-through",
      color: "rgba(51, 51, 51, 0.8)", // #333333 with 80% opacity
      fontSize: 9,
      marginLeft: 5,
    },
    discountedPrice: {
      fontWeight: "bold",
      color: "rgba(51, 51, 51, 1)", // #333333 with 100% opacity
      fontSize: 11,
    },
    button2: {
      height: 19, 
      width:70,
      borderRadius: 5,
      borderColor:"#33333310",
      borderWidth:1, 
      marginHorizontal:5
    },
    cardContainer2: {
      marginTop: 5, 
    },
    card2: {
      width: 111,
      height: 93,
      backgroundColor: "#333333",
      margin: 5,
      borderRadius: 5,
      justifyContent: "center",
      alignItems: "center",
    },
    section: {
      height: 83,
      width: '100%',
      backgroundColor: '#344435', 
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      paddingHorizontal: 16 , 
    },
    btns: {
      height: 41,
      width: '45%',   
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 5,
    },
    quickBtnText:{
      color:"#333333",
      fontSize: 16,
      fontWeight:'500'
    },
    buttonQuickOrder: {
      height: 41,
      width: '45%', 
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 5,
      backgroundColor:"#FFFFFF"
    },
    btnsText: {
      fontSize: 18,
      color:"#FFFFFF",
      fontWeight:'bold'
    },
    card: {
      backgroundColor: "#3A4545",
      padding: 15,
      borderRadius: 10, 
      width: 250,
      marginLeft:15,
      elevation: 3, // Add elevation for a card-like shadow (Android)
      shadowColor: "#000", // Add shadow for a card-like shadow (iOS)
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      shadowRadius: 2,
    },
    cardNumber: {
      fontSize: 16,
      marginBottom: 10,
  
      color: "#FFFFFF",
    },
    cardDetails: {
      marginTop: 5,
    },
    detailText: {
      fontSize: 14,
      color: "#FFFFFF",
      marginBottom: 5,
    },
  });
  

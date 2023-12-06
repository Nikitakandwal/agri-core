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
import Icon from "react-native-vector-icons/FontAwesome5";
import UpiPaymentSection from "../Components/Upi";
import Wallets from "../Components/Wallets";
import AddressModal from "../Components/AddressModal";

const savings = "1250";
const noOfProductsInCart = 2;
const productName = "Tata Metri Herbicide";
const brand = "Rallis";
const size = "1Ltr";
const deliveryDate = "18/08/23";
const quan = 2;
const originalCost = 1630;
const discountedPrice = 1320;


const QuickOrder = () => {
  
  const [isModalVisible, setModalVisible] = useState(false);
  const [selectedAddress, setSelectedAddress] = useState('123 Main St, City');

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const saveAddress = (newAddress) => {
    setSelectedAddress(newAddress);
    // You can perform additional actions here, such as updating the address in your state or database.
  };


  const [quantity, setQuantity] = useState(quan);

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  // Dummy data for saved cards
  const savedCardsData = [
    {
      id: "1",
      cardNumber: "**** **** **** 1234",
      expirationDate: "12/25",
      cvv: "123",
      cardHolder: "John Doe",
    },
    {
      id: "2",
      cardNumber: "**** **** **** 5678",
      expirationDate: "06/23",
      cvv: "456",
      cardHolder: "Jane Doe",
    },
  ];

  return (
    <ScrollView style={{backgroundColor:"#FFFFFF"}}>
      <Header />
      <View>
        <Text
          style={{
            fontSize: 16,
            color: "#333333",
            fontWeight: "bold",
            marginVertical: "4%",
            marginHorizontal: "5%",
          }}
        >
          Order details
        </Text>
        <View
          style={{
            flexDirection: "row",
            height: 130,
            width: "90%",
            backgroundColor: "#D9D9D910",
            borderRadius: 15,
            marginHorizontal: "5%",
            borderColor: "#00000010",
            borderWidth: 1,
            marginBottom: "4%",
          }}
        >
          <View style={{ width: "40%", marginVertical: "2%" }}>
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
                width: 58,
                height: 72.7,
                marginHorizontal: "20%",
                marginVertical: "1%",
              }}
            />
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
          </View>
          <View style={{ marginVertical: "3%" }}>
            <Text
              style={{ fontSize: 14, fontWeight: "bold", color: "#333333" }}
            >
              {productName}
            </Text>
            <Icon
              name="trash"
              size={14}
              color="grey"
              style={{
                left: "63%",
                position: "absolute",
                marginVertical: "1%",
              }}
            />
            <View style={{ flexDirection: "row" }}>
              <Text style={{ fontSize: 12, color: "#33333350" }}>{brand}</Text>
              <Text
                style={{
                  fontSize: 12,
                  color: "#33333390",
                  marginHorizontal: "15%",
                }}
              >
                {size}
              </Text>
            </View>

            <View style={{ flexDirection: "row", marginVertical: "3%" }}>
              <View style={{ flexDirection: "row", left: -3 }}>
                <Text style={styles.discountedPrice}> ₹{discountedPrice}</Text>
                <Text style={styles.originalCost}>₹{originalCost}</Text>
                <View style={{ width: 76, marginHorizontal: "6%" }}>
                  <Text
                    style={{
                      fontSize: 8,
                      color: "#33333380",
                      width: 76,
                      textAlign: "center",
                    }}
                  >
                    ₹100 Cash back applicable:
                  </Text>
                  <TouchableOpacity
                    style={{
                      backgroundColor: "#EDFFEE",
                      width: 40,
                      height: 20,
                      borderWidth: 1,
                      borderColor: "#33333320",
                      borderRadius: 4,
                      justifyContent: "center",
                      marginHorizontal: "15%",
                      marginVertical: "4%",
                    }}
                  >
                    <Text
                      style={{
                        color: "#6A9D6D",
                        fontSize: 10,
                        fontWeight: "bold",
                        textAlign: "center",
                      }}
                    >
                      Apply
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <TouchableOpacity
              style={{
                backgroundColor: "#425343",
                width: 114,
                height: 24,
                borderRadius: 5,
                alignItems: "center",
                justifyContent: "center",
                top: -13,
              }}
            >
              <Text
                style={{ fontSize: 8, color: "#FFFFFF", fontWeight: "bold" }}
              >
                View product Details
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            height: 65,
            width: "90%",
            backgroundColor: "#D9D9D910",
            borderRadius: 15,
            marginHorizontal: "5%",
            borderColor: "#00000010",
            borderWidth: 1,
            justifyContent: "space-around",
            alignItems: "center",
            marginBottom: "4%",
          }}
        >
          <Text
            style={{
              fontSize: 12,
              color: "#333333",
              fontWeight: "bold",
              width: 50,
            }}
          >
            Delivery to
          </Text>
          <View>
            <Text
              style={{
                fontSize: 12,
                color: "#333333",
                fontWeight: "bold",
                width: 70,
              }}
            >
              Aditya Singh
            </Text>
            <Text style={{ fontSize: 10, color: "#33333350", width: 151 }}>
              Pocket - F, Kalka ji, New Delhi, 110091 - IN
            </Text>
          </View>
          <TouchableOpacity
            style={{
              width: 64,
              height: 19,
              backgroundColor: "#425343",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 6,
            }} onPress={openModal}
          >
            <Text
              style={{ color: "#FFFFFF", fontSize: 10, fontWeight: "bold" }}
            >
              Change
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: "row",
            height: 65,
            width: "90%",
            backgroundColor: "#D9D9D910",
            borderRadius: 15,
            marginHorizontal: "5%",
            borderColor: "#00000010",
            borderWidth: 1,
            justifyContent: "space-around",
            alignItems: "center",
            marginBottom: "4%",
          }}
        >
          <Text
            style={{
              fontSize: 12,
              color: "#333333",
              fontWeight: "bold",
              width: 50,
            }}
          >
            Get by
          </Text>
          <View>
            <Text
              style={{
                fontSize: 12,
                color: "#333333",
                fontWeight: "bold",
                width: 100,
              }}
            >
              18 Aug-19 Aug
            </Text>
            <Text style={{ fontSize: 10, color: "#33333350", width: 151 }}>
              Standard Delivery
            </Text>
          </View>
          <TouchableOpacity
            style={{
              width: 64,
              height: 19,
              backgroundColor: "#425343",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 6,
            }}
          >
            <Text
              style={{ color: "#FFFFFF", fontSize: 10, fontWeight: "bold" }}
            >
              Change
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <Text
          style={{
            fontSize: 16,
            color: "#333333",
            fontWeight: "bold",
            marginVertical: "4%",
            marginHorizontal: "5%",
          }}
        >
          Select payment method
        </Text>
        <View
          style={{
            flexDirection: "row",
            height: 65,
            width: "90%",
            backgroundColor: "#D9D9D910",
            borderRadius: 15,
            marginHorizontal: "5%",
            borderColor: "#00000010",
            borderWidth: 1,
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "7%",
          }}
        >
          <Text
            style={{
              fontSize: 12,
              color: "#425343",
              fontWeight: "bold",
              width: 150,
              marginHorizontal: "3%",
            }}
          >
            Payable Amount: 2640
          </Text>
          <TouchableOpacity>
            <Text
              style={{
                fontSize: 10,
                color: "#425343",
                width: 151,
                marginHorizontal: "16%",
              }}
            >
              View price breakage &gt;
            </Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            height: 126,
            width: "90%",
            backgroundColor: "#D9D9D910",
            borderRadius: 15,
            marginHorizontal: "5%",
            borderColor: "#00000010",
            borderWidth: 1,
            justifyContent: "space-between",
            marginBottom: "4%",
            paddingVertical: "7%",
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <View
              style={{
                backgroundColor: "#FFFFFF",
                borderColor: "#00000040",
                borderWidth: 0.5,
                borderRadius: 50,
                height: 13,
                width: 13,
                marginVertical: "2%",
                marginHorizontal: "3%",
              }}
            ></View>

            <Text
              style={{
                fontSize: 20,
                color: "#425343",
              }}
            >
              <Text
                style={{
                  fontWeight: "bold",
                }}
              >
                Split
              </Text>
              Pay
            </Text>
          </View>
          <Text
            style={{
              color: "#3B4A61",
              width: 258,
              height: 34,
              marginHorizontal: "10%",
            }}
          >
            <Text style={{ fontWeight: "bold" }}>Pay 30% upfront and </Text>rest
            amount in the interest of 3 6 or 9 monts.{" "}
          </Text>
        </View>
        <View>
        <Text style={styles.heading}>Your Saved Cards</Text>
        <FlatList
          data={savedCardsData}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <Text style={styles.cardNumber}>{item.cardNumber}</Text>
              <View style={styles.cardDetails}>
                <Text style={styles.detailText}>CVV: {item.cvv}</Text>
                <Text style={styles.detailText}>
                  Expires: {item.expirationDate}
                </Text>
                <Text style={styles.detailText}>
                  Cardholder: {item.cardHolder}
                </Text>
              </View>
            </View>
          )}
        />
        </View>
        
      </View>
      <TouchableOpacity style={{backgroundColor:"#F9FFFC", height:43, marginVertical:"9%", justifyContent:"center", borderColor:"#00000010", borderWidth:1}}>
            <Text style={{color:"#333333", fontSize:10, textAlign:"center", fontWeight:"500" }}>Add New Credit/Debit Card</Text>
      </TouchableOpacity> 
        <UpiPaymentSection/> 
        <Wallets/>
        <View style={styles.section}>
      <TouchableOpacity style={styles.btns} activeOpacity={0.7}>
        
      <Text style={{color:'#FFFFFF', fontSize:12}}>Payable Amount</Text>
        <Text style={styles.btnsText}>₹2640</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonQuickOrder} activeOpacity={0.7}>
        <Text style={styles.quickBtnText}>Proceed to pay</Text>
      </TouchableOpacity>
    </View>
    <AddressModal
        isVisible={isModalVisible}
        onClose={closeModal}
        onSave={saveAddress}
        currentAddress={selectedAddress}
      />
    </ScrollView>
  );
};

export default QuickOrder;

const styles = StyleSheet.create({
  quantityContainer: {
    flexDirection: "row",
    marginHorizontal: "12%",
    marginVertical: "2%",
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
    paddingHorizontal: "5%",
    top: 6,
  },
  discountedPrice: {
    fontSize: 16,
    fontWeight: "bold",
    color: "black",
  },
  heading: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
    marginHorizontal:"5%",
    color:"#333333",
    marginTop:"6%"
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
});

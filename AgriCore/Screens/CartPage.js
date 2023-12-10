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
import { Cart } from "../Components/Cart";

const savings = "1250";
const noOfProductsInCart = 2;
const productName = "Tata Metri Herbicide";
const brand = "Rallis";
const size = "1Ltr";
const deliveryDate = "18/08/23";
const quan = 2;
const originalCost = 1630;
const discountedPrice = 1320;

const ListItem = ({ onSelect, isSelected }) => {
  return (
    <View
      style={{
        height: 78,
        width: 325,  
        backgroundColor: isSelected ? '#6A9D6D' : '#F1F1F1',
        marginVertical: '2%',
        borderRadius:6,
        borderColor: isSelected?"#000000":"#33333320",
        borderWidth:1
      }}
    >
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity
          style={{
            height: 20,
            width: 20,
            backgroundColor: isSelected ? '#FFFFFF' : '#33333330',
            borderRadius: 50,
            margin: '5%',
            justifyContent: 'center',
            alignItems: 'center',
            borderColor: '#33333330',
            borderWidth: 1,
          }}
          onPress={onSelect}
        >
          {isSelected && (
            <View
              style={{
                height: 12,
                width: 12,
                backgroundColor: '#333333',
                borderRadius: 50,
                margin: '5%',
              }}
            />
          )}
        </TouchableOpacity>
    <View>
      <View style={{flexDirection:"row", width:133, marginVertical:"5%"}}>
      <Text style={{fontSize:12, fontWeight:"bold", color: isSelected ? '#FFFFFF' : '#333333'}}>Standard</Text>
      <Text style={{fontSize:12, color: isSelected ? '#FFFFFF' : '#333333'}}> - Get the package delivered by 18/08/23</Text>
      </View>
      <Text style={{fontWeight:"bold", color: isSelected ? '#FFFFFF' : '#333333'}}>₹2000</Text>
    </View>
      </View>
    </View>
  );
};

const RangeSlider = () => {
  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(100);

  const onValuesChange = (values) => {
    setMinValue(values[0]);
    setMaxValue(values[1]);
  };

  return (
    <View style={{ margin: 20 }}> 
      <Slider
        style={{ width: '100%', height: 40 }}
        minimumValue={0}
        maximumValue={100}
        step={1}
        values={[minValue, maxValue]}
        onValuesChange={onValuesChange}
        minLabel="Min"
        maxLabel="Max"
        minLabelStyle={{ fontSize: 12, color: 'black' }}
        maxLabelStyle={{ fontSize: 12, color: 'black' }}
      />
    </View>
  );
};


const CheckList = () => {
  const [selectedId, setSelectedId] = useState(null);

  const handleSelect = (id) => {
    setSelectedId(id);
  };


  const listItems = [
    { id: 1, label: 'Item 1' },
    { id: 2, label: 'Item 2' },
    { id: 3, label: 'Item 3' },
    // Add more items as needed
  ];

  return (
    <View>
      {listItems.map((item) => (
        <ListItem
          key={item.id}
          isSelected={selectedId === item.id}
          onSelect={() => handleSelect(item.id)}
        />
      ))}
    </View>
  );
};


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

const CartPage = () => {
  

  const Checkout = () =>{
   return( <View>
     <View style={{marginHorizontal:"5%"}}><Text style={{color:"#333333", fontSize:16, fontWeight:"600"}}>Choose Delivery options</Text>
     <CheckList/>
     <View style={{marginVertical:"5%"}}>
     <Text style={{color:"#333333", fontSize:16, fontWeight:"600", marginVertical:"3%"}}>Payout Summary</Text>
      <CartSummary/>
      </View>
      <View style={{height:91, width:325, backgroundColor:"FBFBFB", borderColor:"#00000010", borderWidth:1, borderRadius:10, justifyContent:"center"}}>
        <Text style={{color:"#333333", fontWeight:"700", marginHorizontal:"5%"}}>You have saved ₹1250 on this order</Text>
        <Text style={{fontSize:10, color:"#333333", width:270, marginHorizontal:"5%", marginTop:"2%"}}>₹100 cashback points will be credited to your account upon delivery </Text>
      </View>
      
     </View> 
     <View style={{backgroundColor:"#EFF6ED", height:70, flexDirection:"row", justifyContent:"space-around", paddingVertical:"4%"}}>
          <Text style={{width:"35%", color:"#525252", fontSize:12, fontWeight:'500'}}>
            Billed to Aditya singh{" "} 
            <Text style={{color:"#425343", fontSize:14, fontWeight:'700'}}>154 - A, Delhi</Text>
          </Text>
          <TouchableOpacity style={{marginVertical:"2%" }}><Text style={{color:"#425343", fontSize:14, fontWeight:'900'}}>Change</Text></TouchableOpacity>
        </View>
        <View style={styles.section}>
      <TouchableOpacity style={styles.btns} activeOpacity={0.7}>
        
      <Text style={{color:'#FFFFFF', fontSize:12}}>Payable Amount</Text>
        <Text style={styles.btnsText}>₹2640</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonQuickOrder} activeOpacity={0.7}>
        <Text style={styles.quickBtnText}>Proceed to pay</Text>
      </TouchableOpacity>
    </View>
     </View>
  )}

  return (
    <ScrollView style={styles.container}>
      <Header />
      <StatusBar />
      <Cart savings={savings} noOfProductsInCart={noOfProductsInCart} size={size} deliveryDate={deliveryDate}  quan={quan} discountedPrice={discountedPrice} originalCost={originalCost}/>
      {/* <Checkout/> */}
    {/* <Payment/> */}
    </ScrollView>
  );
};

const Payment = () =>{
  const [isChecked, setChecked] = useState(false);

  const handleCheck = () => {
    setChecked(!isChecked);
  };

  return(
    <View>
    <View>
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
      height: isChecked? 590: 126,
      width: "90%",
      backgroundColor:"#ECFFF530",
      borderRadius: 15,
      marginHorizontal: "5%",
      borderColor: "#33C5E525",
      borderWidth: 1, 
      marginBottom: "4%",
      paddingVertical: "7%",
    }}
  >
     <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      <TouchableOpacity
        onPress={handleCheck}
        style={{
          backgroundColor:   '#FFFFFF',
          borderColor: '#00000040',
          borderWidth: 0.5,
          borderRadius: 50,
          height: 13,
          width: 13,
          marginVertical: '2%',
          marginHorizontal: '3%',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {isChecked && (
          <View
            style={{
              backgroundColor: '#000000',
              borderRadius: 50,
              height: 8,
              width: 8,
            }}
          />
        )}
      </TouchableOpacity>

      <Text style={{ fontSize: 20, color: '#425343' }}>
        <Text style={{ fontWeight: 'bold' }}>Split</Text> Pay
      </Text>

    </View>
    <View style={{
        marginHorizontal: "10%"}}>
    <Text
      style={{
        color: "#3B4A61",
        width: 258,
        height: 34,
      }}
    >

      <Text style={{ fontWeight: "bold" }}>Pay 30% upfront and </Text>rest
      amount in the interest of 3 6 or 9 monts. 
    </Text>
    
    {isChecked && (
      <View>
        <Text style={{ fontSize: 12, color: '#425343', marginVertical:"4%" }}>
         <Text style={{fontWeight:"800"}}> Lowest interest rate</Text> part payment.
        </Text>
        <View>
          <View style={{flexDirection:"row", justifyContent:"space-between"}}>
          <Text style={{fontWeight:"800", fontSize:16}}>Amount</Text>
          <Text style={{fontWeight:"800", fontSize:16}}>₹4000</Text>
          </View>
          <RangeSlider/>
          <View style={{flexDirection:"row", justifyContent:"space-between"}}>
          <Text style={{fontWeight:"700", fontSize:16}}>Remaining amount</Text>
          <Text style={{fontWeight:"800", fontSize:16}}>₹4000</Text>
          </View>
          <View style={{height:307, width:"98%", backgroundColor:"#FFFFFF", borderColor:"#00000020", borderWidth:1, borderRadius:5, marginVertical:"5%"}}>
            </View>
        </View>
        </View>
      )}
      </View>
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
</View>  )
}

export default CartPage;

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

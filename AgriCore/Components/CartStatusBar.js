import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useState } from "react";

const CartStatusBar = () => {
    const[checkout, setCheckout] = useState(false)
    const[pay, setPay] = useState(false)
    const[orderPlaced, setOrderPlaced] = useState(false)

  return (
    <View style={{ height: 60, width: 302, marginVertical:'8%',marginHorizontal:'7%' }}>
      <View style={{ flexDirection: "row", marginHorizontal:'10%' }}>
        <View style={{ flexDirection: "row" }}>
          <View style={styles.circle}></View>

{checkout?<View style={styles.uline}></View>:

          <View style={styles.line}></View>}
        </View>
        <View style={{ flexDirection: "row" }}>
        {checkout?<View style={styles.circle}></View>:
           <View style={styles.ucircle}></View>}
          {pay?<View style={styles.uline}></View>:
          <View style={styles.line}></View>}

        </View>
        <View style={{ flexDirection: "row" }}>
        {pay?<View style={styles.circle}></View>:
           <View style={styles.ucircle}></View>}
          {orderPlaced?<View style={styles.uline}></View>:
          <View style={styles.line}></View>}

        </View>
        <View>
        {orderPlaced?<View style={styles.circle}></View>:
           <View style={styles.ucircle}></View>}
        </View>
      </View>
      <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 5 }}>
        <Text style={styles.text}>Cart</Text>
        {checkout?
        <Text style={styles.text}>Checkout</Text>
        :
        <Text style={styles.utext}>Checkout</Text>}
                {pay?
        <Text style={styles.text}>Pay Balance amount</Text>
        :
        <Text style={styles.utext}>Pay Balance amount</Text>}
          {orderPlaced?
        <Text style={styles.text}>Order placed</Text>
        :
        <Text style={styles.utext}>Order placed</Text>} 
      </View>
    </View>
  );
};

export default CartStatusBar;

const styles = StyleSheet.create({
  circle: {
    height: 10,
    width: 10,
    backgroundColor: "#333333",
    borderRadius: 50,
    
  },
  ucircle: {
    height: 10,
    width: 10,
    backgroundColor: "#33333340",
    borderRadius: 50,
  },
  line: {
    width: 65,
    height: 2,
    backgroundColor: "#33333340", 
    marginTop:'5%'
  }, 
  uline: {
    width: 65,
    height: 2,
    backgroundColor: "#333333", 
    marginTop:'5%'
  },
  text: {
    fontSize: 12,
    color: "#333333",
    textAlign: "center",
    marginBottom: 3,
    fontWeight:'bold',
    width:60
  },
  utext: {
    fontSize: 12,
    color: "#33333340",
    textAlign: "center",
    marginBottom: 3,
    fontWeight:'bold',
    width:60
  },
});

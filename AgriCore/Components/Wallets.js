import { StyleSheet, Text, View , TouchableOpacity, Image} from 'react-native'
import React from 'react'

const Wallets = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Wallets</Text>
      <View
          style={{
            flexDirection: "row",
            height: 65,
            width: "98%",
            backgroundColor: "#D9D9D910",
            borderRadius: 15, 
            borderColor: "#00000010",
            borderWidth: 1,
            justifyContent: "space-between",
            alignItems: "center",
            marginVertical: "4%",
          }}
        >
            <View style={{flexDirection:"row", marginHorizontal:"4%"}}>
          <Image source={require("../assets/icons/amazonpay.png")}/>
          <Text style={{fontSize:12, color:"#333333", fontWeight:'bold', marginHorizontal:"7%", marginVertical:"5%"}}>Amazon Pay</Text>
          </View>
          <TouchableOpacity>
            <Text
              style={{
                fontSize: 12,
                color: "#333333",
                fontWeight: "bold",
                width: 70,
              }}
            >
             Link Wallet
            </Text>
             
          </TouchableOpacity>
          
        </View>
        <View
          style={{
            flexDirection: "row",
            height: 65,
            width: "98%",
            backgroundColor: "#D9D9D910",
            borderRadius: 15, 
            borderColor: "#00000010",
            borderWidth: 1,
            justifyContent: "space-between",
            alignItems: "center", 
          }}
        >
            <View style={{flexDirection:"row", marginHorizontal:"4%"}}>
          <Image source={require("../assets/icons/paytmWallet.png")}/>
          <Text style={{fontSize:12, color:"#333333", fontWeight:'bold', marginHorizontal:"7%", marginVertical:"5%"}}>Paytm Wallet</Text>
          </View>
          <TouchableOpacity>
            <Text
              style={{
                fontSize: 12,
                color: "#333333",
                fontWeight: "bold",
                width: 70,
              }}
            >
             Link Wallet
            </Text>
             
          </TouchableOpacity>
          
        </View>
        <Text style={styles.heading2}>Other Payments Methods</Text>
      <TouchableOpacity
          style={{
            flexDirection: "row",
            height: 65,
            width: "98%",
            backgroundColor: "#D9D9D910",
            borderRadius: 15, 
            borderColor: "#00000010",
            borderWidth: 1,
            justifyContent: "space-between",
            alignItems: "center",
            marginVertical: "4%",
          }}
        >
            <View style={{flexDirection:"row", marginHorizontal:"4%"}}>
          <Image source={require("../assets/icons/netbanking.png")}/>
          <Text style={{fontSize:12, color:"#333333", fontWeight:'bold', marginHorizontal:"7%", marginVertical:"5%"}}>Net Banking</Text>
          </View>
        
          
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flexDirection: "row",
            height: 65,
            width: "98%",
            backgroundColor: "#D9D9D910",
            borderRadius: 15, 
            borderColor: "#00000010",
            borderWidth: 1,
            justifyContent: "space-between",
            alignItems: "center", 
          }}
        >
            <View style={{flexDirection:"row", marginHorizontal:"4%"}}>
          <Image source={require("../assets/icons/cod.png")}/>
          <Text style={{fontSize:12, color:"#333333", fontWeight:'bold', marginHorizontal:"7%", marginVertical:"4%"}}>Cash on delivery</Text>
          </View>          
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flexDirection: "row",
            height: 65,
            width: "98%",
            backgroundColor: "#D9D9D910",
            borderRadius: 15, 
            borderColor: "#00000010",
            borderWidth: 1,
            justifyContent: "space-between",
            alignItems: "center", 
            marginVertical:"4%"
          }}
        >
            <View style={{flexDirection:"row", marginHorizontal:"4%"}}>
          <Image source={require("../assets/icons/cred.png")}/>
          <Text style={{fontSize:12, color:"#333333", fontWeight:'bold', marginHorizontal:"7%", marginVertical:"3%"}}>Cred Pay</Text>
          </View>
          
        </TouchableOpacity>
    </View>
  )
}

export default Wallets

const styles = StyleSheet.create({
    container:{
        paddingHorizontal:"5%",
         paddingVertical:"5%"
    },
    heading:{
        fontSize:16,
        color:"#333333",
        fontWeight:"bold"
    },
    heading2:{
        fontSize:16,
        color:"#333333",
        fontWeight:"bold",
        marginTop:"10%"
    }
})
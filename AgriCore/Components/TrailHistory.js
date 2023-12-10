import { StyleSheet, Text, View, Dimensions, Image } from "react-native";
import React from "react";
const windowWidth = Dimensions.get("window").width;

const TrailHistory = () => {
  return (
    <View style={{marginHorizontal:windowWidth*0.068}}>
      <View style={{ flexDirection: "row", justifyContent:"space-between", width:windowWidth*0.87 }}>
        <Text>TrailHistory</Text>
        <Text>view all</Text>
      </View>
      <View style={{flexDirection:"row"}}>
        <View style={{height:162, width:152, backgroundColor:"#F8F8F8", borderRadius:10, borderColor:"#00000010", borderWidth:1, ...Platform.select({
              ios: {
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.3,
                shadowRadius: 2,
              },
              android: {
                elevation: 3,
              },
            }),}}>
            <View style={{flexDirection:"row"}}>
                <View style={{backgroundColor:"#0D8B2D80", width:48, height:13, borderRadius:3, marginLeft:"3%", marginTop:"6%"}}>
                    <Text style={{color:"#FFFFFF", fontSize:8, textAlign:"center", textAlignVertical:"center"}}>Combined</Text>
                </View>
            <Image source={require("../assets/img/fungicide1.png")} style={{marginLeft:"-3%", marginTop:"1%"}}/>    
                <View style={{backgroundColor:"#FBDF4E", width:25, height:25, borderRadius:6, justifyContent:"center", alignItems:"center", marginTop:"3%", marginLeft:"3%"}}>
                    <Image source={require("../assets/icons/solar_cart-outline.png")} />
                </View>
            </View>
        </View>
      </View>
    </View>
  );
};

export default TrailHistory;

const styles = StyleSheet.create({});

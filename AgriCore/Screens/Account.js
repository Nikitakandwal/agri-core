import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  Image,
} from "react-native";
import React from "react";
import Header from "../Components/Header";
import Name from "../Components/Name";
import SearchBar from "../Components/SearchBar";
import CardComponent from "../Components/CardComponent";
import { Ionicons } from "@expo/vector-icons";

const windowWidth = Dimensions.get("window").width;

const Account = () => {
  return (
    <ScrollView>
      <Header />
      <Name name={"Aditya Singh"} location={"Delhi"} />
      <SearchBar
        placeholder={"Account, settings"}
        styleContainer={{ backgroundColor: "#FFF" }}
        styleMain={{ marginVertical: "4%" }}
      />
      <CardComponent />
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          paddingBottom: "4%",
        }}
      >
        <TouchableOpacity
          style={{
            marginVertical: "2%",
            backgroundColor: "#FFFFFF",
            borderRadius: 10,
            width: windowWidth * 0.9,
            height: 46,
            borderColor: "#00000010",
            borderWidth: 1,
            flexDirection: "row",
            ...Platform.select({
              ios: {
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.3,
                shadowRadius: 2,
              },
              android: {
                elevation: 3,
              },
            }),
          }}
        >
          <View
            style={{
              width: windowWidth * 0.2,
              justifyContent: "center",
              alignItems: "center",
              marginVertical: "5%",
            }}
          >
            <Image source={require("../assets/icons/customer-service.png")} />
          </View>
          <View
            style={{
              alignItems: "center",
              alignContent: "center",
              justifyContent: "center",
            }}
          >
            <Text style={{ fontSize: 16, color: "#333333", fontWeight: "600" }}>
              Help and Support
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            marginVertical: "2%",
            backgroundColor: "#FFFFFF",
            borderRadius: 10,
            width: windowWidth * 0.9,
            height: 46,
            borderColor: "#00000010",
            borderWidth: 1,
            flexDirection: "row",
            ...Platform.select({
              ios: {
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.3,
                shadowRadius: 2,
              },
              android: {
                elevation: 3,
              },
            }),
          }}
        >
          <View
            style={{
              width: windowWidth * 0.2,
              justifyContent: "center",
              alignItems: "center",
              marginVertical: "5%",
            }}
          >
            <Image source={require("../assets/icons/settings.png")} />
          </View>
          <View
            style={{
              alignItems: "center",
              alignContent: "center",
              justifyContent: "center",
            }}
          >
            <Text style={{ fontSize: 16, color: "#333333", fontWeight: "600" }}>
              Settings
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            marginVertical: "2%",
            backgroundColor: "#FFFFFF",
            borderRadius: 10,
            width: windowWidth * 0.9,
            height: 46,
            borderColor: "#00000010",
            borderWidth: 1,
            flexDirection: "row",
            ...Platform.select({
              ios: {
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.3,
                shadowRadius: 2,
              },
              android: {
                elevation: 3,
              },
            }),
          }}
        >
          <View
            style={{
              width: windowWidth * 0.2,
              justifyContent: "center",
              alignItems: "center",
              marginVertical: "5%",
            }}
          >
            <Image
              source={require("../assets/icons/terms-and-conditions.png")}
            />
          </View>
          <View
            style={{
              alignItems: "center",
              alignContent: "center",
              justifyContent: "center",
            }}
          >
            <Text style={{ fontSize: 16, color: "#333333", fontWeight: "600" }}>
              Terms and conditions
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.layout}>
        <TouchableOpacity
          style={styles.btn}
        >
          <Text>Layout </Text>
          <View style={{ transform: [{ scaleX: -1 }] }}>
            <Ionicons name="exit-outline" size={24} color="black" />
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Account;

const styles = StyleSheet.create({
  layout:{
    width:109,
    height:46,
    marginBottom:"10%"
  },
  btn:{     
    width:109,
    height:46,
    backgroundColor: "#FAFAFA",
    flexDirection: "row",
    borderRadius:10,
    justifyContent:"center",
    alignItems:"center",
    elevation: 5,
    shadowColor: 'black', 
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    marginLeft: windowWidth * 0.64,
    borderWidth:1,
    borderColor:"#00000020"
  }
});

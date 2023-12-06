import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import Paytm from "../assets/icons/paytm.png";
import Phonepe from "../assets/icons/phonepe.png";
import gpay from "../assets/icons/gpay.png";

const UpiPaymentSection = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>UPI Apps</Text>
      <View style={styles.card}>
        <View style={styles.iconSection}>
          <View style={styles.icon}>
            <Image source={Paytm} style={{ height: 35, width: 35 }} />
          </View>
          <View style={styles.icon}>
            <Image source={Phonepe} />
          </View>
          <View style={styles.icon}>
            <Image source={gpay} />
          </View>
        </View>
        <View style={styles.horizontalLine} />
        <View style={styles.inputSection}>
          <TextInput
            style={styles.input}
            placeholder="Pay with UPI ID"
            placeholderTextColor="#33333380"
            /> 
          <TouchableOpacity style={styles.verifyButton}>
            <Text style={styles.verifyButtonText}>Verify</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    backgroundColor: "#FFFFFF",
  },
  heading: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
    marginHorizontal: "5%",
  },
  card: {
    backgroundColor: "#D9D9D910",
    borderRadius: 10,
    marginHorizontal: "5%",
    padding: 15,
    width: "89%",
    height: 131,
    borderColor: "#33333310",
    borderWidth: 1,
  },
  iconSection: {
    backgroundColor: "#D9D9D910",
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: "5%",
  },
  icon: {
    marginHorizontal: 10,
    backgroundColor: "#FFFFFF",
    height: 50,
    width: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    borderColor: "#00000010",
    borderWidth: 1,
  },
  horizontalLine: {
    borderBottomColor: "#00000010",
    borderBottomWidth: 1,
    marginVertical: 10,
    width: 323,
    marginLeft: "-5.3%",
  },
  inputSection: {
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    flex: 1,
    borderBottomWidth: 1,
    color: "#33333380",
    fontSize: 10,
    paddingVertical: 5,
    marginRight: 5,
    backgroundColor: "#FFFFFF",
    borderColor: "#00000010",
    borderWidth: 1,
    borderRadius: 5,
    height: 21,
    width: 195,
    paddingLeft:10
  }, 
  
  verifyButton: {
    backgroundColor: "#414141",
    borderRadius: 5, 
    justifyContent:"center",
    height:21,
    width:49
  },
  verifyButtonText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
    fontSize:8
  },
});

export default UpiPaymentSection;

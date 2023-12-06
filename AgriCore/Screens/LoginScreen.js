import React, { useState } from "react";
import {
  View,
  TextInput,
  Alert,
  Image,
  TouchableOpacity,
  StyleSheet,
  Text,
} from "react-native";
import axios from "axios";
import Rectangle5 from "../assets/img/Rectangle5.png";
import Rectangle6 from "../assets/img/Rectangle6.png";
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
  const navigation = useNavigation();
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otpPage, setOtpPage] = useState(false);
  const [otp, setOtp] = useState(["", "", "", ""]);
  const refs = otp.map((_, i) => React.createRef());

  const handleOtpChange = (index, value) => {
    setOtp((prevOtp) => {
      const newOtp = [...prevOtp];
      newOtp[index] = value;

      if (index < prevOtp.length - 1 && value) {
        refs[index + 1].current.focus();
      }

      return newOtp;
    });
  };

  const sendVerificationCode = async () => {
    try {
      console.log({ phoneNumber });
      const response = await axios.post(
        "http://192.168.1.5:3000/send-verification-code",
        {
          phoneNumber: phoneNumber,
        }
      );

      if (response.data.success) {
        Alert.alert(
          "Verification Code Sent",
          "Check your phone for the verification code."
        );
      } else {
        Alert.alert(
          "Error",
          "Failed to send verification code. Please try again."
        );
      }
    } catch (error) {
      console.error("Error sending verification code:", error);
      Alert.alert(
        "Error",
        "Failed to send verification code. Please try again."
      );
    } finally {
      console.log("g");
      setOtpPage(true);
    }
  };

  const verifyOTP = async () => {
    try {
      const otpNumber = parseInt(otp.join(''));
      console.log({ otpNumber });
  
      const response = await axios.post("http://192.168.1.5:3000/verify-otp", {
        phoneNumber: phoneNumber,
        otp: otpNumber.toString(), // Convert to string
      });
  
      if (response.data.success) {
        Alert.alert("Verification Successful", "You are now logged in!");
        navigation.navigate('HomePage');
      } else {
        
        Alert.alert(
          "Error",
          "Verification failed. Please check the OTP and try again."
        );
      }
    } catch (error) {
      console.log("Error verifying OTP:", error);
      Alert.alert(
        "Error",
        "Verification failed. Please check the OTP and try again."
      );
    }
  };
  

  const OtpInput = () => {
    return (
      <View style={styles.container}>
        {otp.map((digit, index) => (
          <TextInput
            key={index}
            ref={refs[index]}
            style={styles.input}
            keyboardType="numeric"
            maxLength={1}
            value={digit}
            onChangeText={(text) => handleOtpChange(index, text)}
            placeholder="0"
            placeholderTextColor="#aaa"
          />
        ))}
      </View>
    );
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
        backgroundColor: "white",
      }}
    >
      {otpPage ? (
        <Image
          source={Rectangle6}
          style={{ width: "100%", height: "44%", resizeMode: "cover" }}
        />
      ) : (
        <Image
          source={Rectangle5}
          style={{ width: "100%", height: "44%", resizeMode: "cover" }}
        />
      )}

      {otpPage ? (
        <Text
          style={{ fontSize: 20, color: "black", marginTop: 25, width: "80%" }}
        >
          Verify the confirmation code
        </Text>
      ) : (
        <Text
          style={{ fontSize: 20, color: "black", marginTop: 25, width: "80%" }}
        >
          Enter Your Contact Number
        </Text>
      )}
      {otpPage ? (
        <Text
          style={{ fontSize: 14, color: "black", marginTop: 12, width: "80%" }}
        >
          Please enter the verification code received on your contact number.
        </Text>
      ) : (
        <Text
          style={{ fontSize: 14, color: "black", marginTop: 12, width: "80%" }}
        >
          Please enter your contact number to login to your account.
        </Text>
      )}
      {otpPage && (
        <Text
          style={{ fontSize: 14, color: "rgba(94, 87, 87, 0.6)", width: "80%" }}
        >
          Contact Number: {phoneNumber}
        </Text>
      )}

      {otpPage ? (
        <View style={{ width: "100%" }}>
          <OtpInput />
          <View style={{ marginLeft: 35, marginTop: 20 }}>
            <Text>Did not receive verification code?</Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              width: "80%",
              marginLeft: 35,
              marginTop: 10,
            }}
          >
            <Text style={{ fontSize: 12, color: "#333333" }}>Resend Code</Text>
            <Text style={{ fontSize: 12, color: "#333333" }}>
              Request on Email
            </Text>
          </View>
        </View>
      ) : (
        <View
          style={{ flexDirection: "row", alignItems: "center", marginTop: 10 }}
        >
          <TouchableOpacity
            style={{
              flexDirection: "row",
              alignItems: "center",
              borderBottomWidth: 1,
              borderColor: "black",
              marginTop: 15,
            }}
          >
            <Text style={{ fontSize: 14, marginRight: 10 }}>+91</Text>
          </TouchableOpacity>

          <TextInput
            style={{
              marginLeft: 10,
              borderBottomWidth: 1,
              borderColor: "black",
              width: "65%",
              fontSize: 14,
              marginTop: 7,
            }}
            placeholder="Mobile Number"
            keyboardType="phone-pad"
            onChangeText={(text) => setPhoneNumber(`91${text}`)}
          />
        </View>
      )}
      {otpPage ? (
        <TouchableOpacity
          style={{
            backgroundColor: "rgba(94, 87, 87, 0.7)",
            width: 193,
            height: 50,
            justifyContent: "center",
            alignItems: "center",
            marginTop: 35,
            borderRadius: 8,
          }}
          onPress={verifyOTP}
        >
          <Text style={{ color: "white" }}>Sign in</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={{
            backgroundColor: "rgba(94, 87, 87, 0.7)",
            width: 193,
            height: 50,
            justifyContent: "center",
            alignItems: "center",
            marginTop: 35,
            borderRadius: 8,
          }}
          onPress={sendVerificationCode}
        >
          <Text style={{ color: "#ffffff" }}>Send Code</Text>
        </TouchableOpacity>
      )}
      <Text style={{ fontSize: 12, marginTop: 20 }}>
        Don't have an account?
      </Text>

      {otpPage ? (
        <TouchableOpacity
          style={{
            width: 165,
            height: 17,
            justifyContent: "center",
            alignItems: "center",
            marginTop: 10,
          }}
        >
          <Text
            style={{
              color: "#444444",
              fontSize: 14,
              fontWeight: 900,
            }}
          >
            Create New Account
          </Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={{
            width: 253,
            height: 50,
            justifyContent: "center",
            alignItems: "center",
            borderWidth: 1,
            marginTop: 25,
            borderRadius: 8,
            borderColor: "rgba(0, 0, 0, 0.2)",
          }}
        >
          <Text style={{ color: "#333333" }}>Create an account</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
  },
  input: {
    borderBottomWidth: 1,
    borderColor: "#aaa",
    width: 30,
    fontSize: 18,
    textAlign: "center",
    marginHorizontal: 5,
    color: "black",
  },
});
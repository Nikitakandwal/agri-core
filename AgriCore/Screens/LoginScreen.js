import React, { useContext, useState } from "react";
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
import { useNavigation } from "@react-navigation/native";
import { BASE_URL } from "../src/Backend";
import { GlobalContext } from "../App";

const LoginScreen = () => {
  const navigation = useNavigation();
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otpPage, setOtpPage] = useState(false);
  const [otp, setOtp] = useState(["", "", "", ""]);
  const refs = otp.map((_, i) => React.createRef());
  const { setLoggedInUser } = useContext(GlobalContext);

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
      setLoggedInUser(true)
      return
      console.log({ phoneNumber });
      const data = {
        phoneNumber: "917976114618",
      };
      // const response = await axios.post(
      //   `${BASE_URL}/send-verification-code`,
      //   {
      //     method: 'POST',
      //     headers: {
      //       'Content-Type': 'application/json',
      //     },
      //     body: data,
      //   }
      // );
      const response = await fetch(`${BASE_URL}/send-verification-code`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      console.log(response, "RES");
      if (response.data?.success) {
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
      const otpNumber = parseInt(otp.join(""));
      console.log({ otpNumber });

      const response = await axios.post(`${BASE_URL}/verify-otp`, {
        phoneNumber: phoneNumber,
        otp: otpNumber.toString(), // Convert to string
      });

      if (response.data.success) {
        Alert.alert("Verification Successful", "You are now logged in!");
        navigation.navigate("HomePage");
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
          style={{ fontSize: 20, color: "black", marginTop: 25, width: "80%", fontWeight: "500" }}
        >
          Verify the confirmation code
        </Text>
      ) : (
        <Text
          style={{
            fontSize: 20,
            color: "black",
            marginTop: 25,
            width: "80%",
            fontWeight: "500",
          }}
        >
          Enter Your Contact Number
        </Text>
      )}
      {otpPage ? (
        <Text
          style={{
            fontSize: 14,
            color: "black",
            marginTop: 12,
            width: "80%",
            fontWeight: "400",
          }}
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
          style={{ fontSize: 14, color: "rgba(94, 87, 87, 0.6)", width: "80%", fontWeight: "400", marginTop: 10 }}
        >
          Contact Number: {phoneNumber}
        </Text>
      )}

      {otpPage ? (
        <View style={{ width: "100%" }}>
          <OtpInput />
          <View style={{ marginLeft: 35, marginTop: 20 }}>
            <Text style={{ fontSize: 14, fontWeight: "400" }}>Did not receive verification code?</Text>
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
            <Text style={{ fontSize: 12, color: "#333333", fontWeight: "500" }}>Resend Code</Text>
            <Text style={{ fontSize: 12, color: "#333333", fontWeight: "500" }}>
              Request on Email
            </Text>
          </View>
        </View>
      ) : (
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            marginVertical: 20,
          }}
        >
          <TouchableOpacity
            style={{
              flexDirection: "row",
              alignItems: "center",
              borderBottomWidth: 1,
              borderColor: "black",
              // marginTop: 15,
            }}
          >
            <Text
              style={{
                fontSize: 18,
                marginRight: 10,
                fontWeight: "400",
              }}
            >
              +91
            </Text>
          </TouchableOpacity>

          <TextInput
            style={{
              marginLeft: 10,
              borderBottomWidth: 1,
              borderColor: "black",
              width: "65%",
              fontSize: 18,
              fontWeight: "400",
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
          <Text style={{ color: "white", fontSize: 16, fontWeight: "600" }}>Sign in</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={{
            backgroundColor: "rgba(94, 87, 87, 0.7)",
            width: "50%",
            height: 50,
            justifyContent: "center",
            alignItems: "center",
            marginTop: 35,
            borderRadius: 8,
          }}
          onPress={sendVerificationCode}
        >
          <Text style={{ color: "#ffffff", fontSize: 16, fontWeight: "600" }}>Send Code</Text>
        </TouchableOpacity>
      )}
      <Text style={{ fontSize: 12, marginTop: 20, fontWeight: "400" }}>
        Don't have an account?
      </Text>

      {otpPage ? (
        <TouchableOpacity
          onPress={() => { navigation.navigate("RegistrationScreen"); }}
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
              fontWeight: 700,
            }}
          >
            Create New Account
          </Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("RegistrationScreen");
          }}
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
          <Text style={{ color: "#333333", fontSize: 14, fontWeight: "500" }}>Create an account</Text>
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

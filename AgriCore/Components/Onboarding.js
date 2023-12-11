import React, { useState } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import Swiper from "react-native-swiper";
import { useNavigation } from '@react-navigation/native';

const OnboardingScreen = () => {
  const navigation = useNavigation();

  const [currentIndex, setCurrentIndex] = useState(1);

  const handleIndexChanged = (index) => {
    console.log(index, "I ma index");
    setCurrentIndex(index);
  };

  const handleContinue = () => {
    // Navigate to the next screen or perform any desired action
    navigation.navigate('LoginScreen'); // Change 'NextScreen' to the actual next screen name
  };

  return (
    <View style={styles.container}>
      <Swiper
        loop={false}
        showsPagination={currentIndex < 3}
        onIndexChanged={handleIndexChanged}
        dotColor="#DDDADA"
        activeDotColor="#727272"
      >
        {/* Slide 1 */}
        <View style={styles.slideContainer}>
          <Image
            source={require("../assets/img/slide1.png")}
            style={styles.image}
          />
          <View style={styles.bottomContainer}>
            <Text style={styles.title}>Faster and easy delivery process</Text>
            <Text style={styles.description}>
              Get products delivered faster and easier with Quick order option.
            </Text>
          </View>
        </View>

        {/* Slide 2 */}
        <View style={styles.slideContainer}>
          <Image
            source={require("../assets/img/image2.png")}
            style={styles.image}
          />
          <View style={styles.bottomContainer}>
            <Text style={styles.title}>
              Crop monitoring and suggested products
            </Text>
            <Text style={styles.description}>
              Easily monitor the diseases and get recommended products.
            </Text>
          </View>
        </View>

        {/* Slide 3 */}
        <View style={styles.slideContainer}>

          <Image
            source={require("../assets/img/image3.png")}
            style={styles.image}
          />
          <View style={styles.bottomContainer}>
            <Text style={styles.title}>Warehouse and Sales statistics</Text>
            <Text style={styles.description}>
              Easily manage your inventory woth our warehouse feature and boost
              up your sales with smart assistance.
            </Text>
          </View>
        </View>

        {/* Slide 4 */}
        <View style={styles.slideContainer}>

          <Image
            source={require("../assets/img/image4.png")}
            style={styles.image}
          />
          <View style={styles.bottomContainer}>
            <Text style={styles.title}>Order profiles and more</Text>
            <Text style={styles.description}>
              Quickly order products according to your recommendations added on
              order profiles.
            </Text>

            {currentIndex === 3 && (
              <TouchableOpacity
                style={styles.button}
                onPress={handleContinue}
              >
                <Text style={styles.buttonText}>Continue</Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
      </Swiper>
    </View>
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  slideContainer: {
    flex: 1,
  },
  image: {
    flex: 1,
    width: "100%",
    resizeMode: "cover",
  },
  bottomContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    padding: 32,
    paddingBottom: 40,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    height: 261
  },
  title: {
    fontWeight: "800",
    fontSize: 24,
    color: "#266937",
    textAlign: "center",
    letterSpacing: 2,
    lineHeight: 30,
    width: "100%"
  },
  description: {
    fontWeight: "500",
    textAlign: "center",
    color: "#266937",
    fontSize: 14,
    paddingTop: 0,
    marginVertical: 20,
    width: "80%"
  },
  button: {
    width: 189,
    height: 40,
    backgroundColor: "#266937",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10, // Add border radius if needed
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});
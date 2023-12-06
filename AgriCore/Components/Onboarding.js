import React, { useState } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import Swiper from "react-native-swiper";
import { useNavigation } from '@react-navigation/native';

const OnboardingScreen = () => {
  const navigation = useNavigation();

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleIndexChanged = (index) => {
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
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center",
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
      },
      title: {
        fontWeight: "900",
        fontSize: 30,
        marginBottom: 10,
        color: "#266937",
        textAlign: "center",
        paddingLeft: 30,
        paddingRight: 30,
      },
      description: {
        fontWeight: "700",
        textAlign: "center",
        color: "#266937",
        fontSize: 16,
        paddingTop: 0,
        paddingBottom: 35,
        paddingLeft: 30,
        paddingRight: 30,
      },
      button: {
        width: 189,
        height: 40,
        backgroundColor: "#266937",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 11, 
        marginTop:-10,// Add spacing if needed
        borderRadius: 10, // Add border radius if needed
      },
      buttonText: {
        color: "white",
        fontSize: 18,
        fontWeight: "bold",
      },
    });
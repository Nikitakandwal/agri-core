import {
    Image,
    ScrollView,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    FlatList,
  } from "react-native";
export const Price = ({ originalPrice, discountedPrice }) => {
    return (
      <View style={styles.pContainer}>
        <View style={styles.priceContainer}>
          <View style={styles.discountedPriceContainer}>
            <Text style={styles.discountedPrice}>{`₹${discountedPrice}`}</Text>
          </View>
          <Text style={styles.originalPrice}>{`₹${originalPrice}`}</Text>
        </View>
      </View>
    );
  };

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
  
import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import Rating from './Rating.js';
import PriceComponent from './Price.js';
import { useNavigation } from '@react-navigation/native';
const windowWidth = Dimensions.get("window").width;
const ProductCards = ({
  headingText,
  buttonText,
  cardTextColor,
  card1Size,
  card2Size,
  card1Image,
  card1ImageStyle,
  card1Text,
  card1TextStyle,
  card2Image,
  card2ImageStyle,
  card2Text,
  card2TextStyle,
  card1Discount,
  card2Discount,
  card1subtext,
  card2subtext,
  card1Rating,
  card2Rating,
  card1Text2,
  card2Text2,
  card1DiscountPrice,
  card1OriginalPrice,
  card2DiscountPrice ,
  card2OriginalPrice,
  
}) => {
  const navigation = useNavigation();

  const handleViewAll = () => {
    // Navigate to the desired screen when "View All" is clicked
    navigation.navigate('NewArrivals');
  };
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.heading}>{headingText}</Text>
        <TouchableOpacity style={styles.button} onPress={handleViewAll}>
          <Text style={styles.buttonText}>{buttonText}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.cardsContainer}>
        <View style={[styles.card, { height: card1Size.height }]}>
          <Image source={card1Image} style={[styles.cardImage, card1ImageStyle]} />
          <Image source={require("../assets/img/Union.png")}  style={styles.overlayImage}/>
          <Text style={styles.overlayText}>{card1Discount} off</Text>
          <Text style={[styles.cardText, card1TextStyle, { color: '#333333' }]}>
            {card1Text}
          </Text>
          <View style={styles.starContainer}>
          <Text style={styles.text}>{card1subtext}</Text>
          <Rating rating={card1Rating} />
          </View>
          <Text style={styles.text2}>{card1Text2}</Text>
          <PriceComponent originalPrice={card1OriginalPrice} discountedPrice={card1DiscountPrice} />
        
          <Text style={{textAlign:'center', color:'rgba(51, 51, 51, 0.5)', fontSize:12, marginTop:6}}>Free delivery applicable</Text>
        </View>
        <View style={{ marginHorizontal: 8 }} />
        <View style={[styles.card, { height: card2Size.height }]}>
          <Image source={card2Image} style={[styles.cardImage, card2ImageStyle]} />
          <Image source={require("../assets/img/Union.png")}  style={styles.overlayImage}/>
          <Text style={styles.overlayText}>{card2Discount} off</Text>
         
          <Text style={[styles.cardText, card2TextStyle, { color: '#333333' }]}>
            {card2Text}
          </Text>
          <View style={styles.starContainer}>
          <Text style={styles.text}>{card2subtext}</Text>
          <Rating rating={card2Rating} />
          </View>
          <Text style={styles.text2}>{card2Text2}</Text>
          <PriceComponent originalPrice={card2OriginalPrice} discountedPrice={card2DiscountPrice} />
          <Text style={{textAlign:'center', color:'rgba(51, 51, 51, 0.5)', fontSize:12, marginTop:6}}>Free delivery applicable</Text>
        </View>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginBottom: 20,
  },
  heading: {
    fontSize: 18,
    color: '#414141',
    width: 162
  },
  button: {
    fontSize: 14,
    width: 54,
    height: 17,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#414141',
  },
  cardsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
  },
  card: {
    backgroundColor: '#f8f8f8',
    borderRadius: 8,
    overflow: 'hidden',
    width:windowWidth*0.44,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
  },
  cardImage: { 
    alignSelf:"center",
    resizeMode: 'cover',
    marginHorizontal:22
  },
  cardText: {
    padding: 10,
    fontSize:14,
    fontWeight:500
  },
  text: {
    fontSize:14,
    color: 'rgba(51, 51, 51, 0.5)', // #333333 with 50% opacity
  },
  starContainer:{
    flexDirection: 'row',
    justifyContent:'space-around'
  },
  text2:{
    fontSize:12,
    color: 'rgba(51, 51, 51, 0.7)',
    margin:'7%',  
  },
  overlayImage: {
    position: 'absolute',
    top: 20, 
    left: 0,
    resizeMode: 'cover',
  },
  overlayText: {
    position: 'absolute',
    top: 22, 
    left: 7, 
    color: '#000',
    fontSize: 8
  },
});

export default ProductCards;

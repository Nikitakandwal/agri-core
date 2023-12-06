import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import Rating from './Rating.js';
import PriceComponent from './Price.js';

const ComboDeals =({
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
  return (
    <View style={styles.container}>
    <View style={styles.headerContainer}>
      <Text style={styles.heading}>Combo deals</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>View all</Text>
      </TouchableOpacity>
    </View>
    <View style={styles.cardsContainer}>
        <View style={[styles.card, { width: card1Size.width, height: card1Size.height }]}>
          <Image source={card1Image} style={[styles.cardImage, card1ImageStyle]} />
          <Image source={require("../assets/img/Union2.png")}  style={styles.overlayImage}/>
          
          <Text style={styles.overlayText}>{card1Discount} off</Text>
          <Text style={[styles.cardText, card1TextStyle, { color: '#333333' }]}>
            {card1Text}
          </Text>
          <View style={styles.starContainer}> 
          <Rating rating={card1Rating} />
          </View> 
          <PriceComponent originalPrice={card1OriginalPrice} discountedPrice={card1DiscountPrice} />
        
          <Text style={{textAlign:'center', color:'#ffffff', fontSize:12, marginVertical:13, backgroundColor:'#425343', height:17}}>Free delivery applicable</Text>
        </View>
        <View style={{ marginHorizontal: 8 }} />
        <View style={[styles.card, { width: card2Size.width, height: card2Size.height }]}>
          <Image source={card2Image} style={[styles.cardImage, card2ImageStyle]} />
          <Image source={require("../assets/img/Union.png")}  style={styles.overlayImage}/>
          <Text style={styles.overlayText}>{card2Discount} off</Text>
         
          <Text style={[styles.cardText, card2TextStyle, { color: '#333333' }]}>
            {card2Text}
          </Text>
          <View style={styles.starContainer}> 
          <Rating rating={card2Rating} />
          </View> 
          <PriceComponent originalPrice={card2OriginalPrice} discountedPrice={card2DiscountPrice} />
          <Text style={{textAlign:'center', color:'#ffffff', fontSize:12, marginVertical:13, backgroundColor:'#425343', height:17}}>Free delivery applicable</Text>
        </View>
      </View>

    </View>
  )
}

export default ComboDeals

const styles = StyleSheet.create({
    container: {
        marginVertical:30,
        marginHorizontal:10,
    },
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
      width: 162,
      fontWeight:'600'
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
      elevation: 5,
      // For iOS
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.5,
      shadowRadius: 4,
    },
    cardImage: { 
      resizeMode: 'cover',
      marginHorizontal:22,
      marginVertical:30
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
      marginHorizontal:10
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
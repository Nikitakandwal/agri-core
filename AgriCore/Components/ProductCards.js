import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import Rating from './Rating.js';
import PriceComponent from './Price.js';
import AddtoCard from './AddtoCart.js';
import AddtoCart from './AddtoCart.js';
import { useState } from 'react';
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
  card2DiscountPrice,
  card2OriginalPrice,

}) => {
  const [CartAdded, setCartAdded] = useState(false)
  const [quantity, setquantity] = useState(0)
  const IncreaseCart = (type) => {
    if (type == "Increase") {
      if (quantity == 0) {
        setCartAdded(true)
      }
      let q = quantity;
      q = q + 1
      setquantity(q)
    }
    else {
      let q = quantity;
      q = q - 1
      if (q == 0) {
        setCartAdded(false)
      }
      setquantity(q)
    }
  }
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.heading}>{headingText}</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>{buttonText}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.cardsContainer}>
        <View style={[styles.card, { width: card1Size.width, height: card1Size.height }]}>
          <Image source={card1Image} style={[styles.cardImage, card1ImageStyle]} />
          <Image source={require("../assets/img/Union.png")} style={styles.overlayImage} />
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
          {
            !CartAdded ?
              <AddtoCart title={"Add to cart"} onPress={() => { IncreaseCart("Increase") }} /> :
              <View>
                <View style={styles.CrtBtn}>
                  <TouchableOpacity onPress={() => { IncreaseCart("Decrease") }}>
                    <Text style={{ fontSize: 15, backgroundColor: "green", padding: 10, paddingVertical: 5, color: "white", borderRadius: 8 }}>-</Text>
                  </TouchableOpacity>
                  <Text>{quantity}</Text>
                  <TouchableOpacity onPress={() => { IncreaseCart("Increase") }} >
                    <Text style={{ fontSize: 15, backgroundColor: "green", padding: 10, paddingVertical: 5, color: "white", borderRadius: 8 }}>+</Text>
                  </TouchableOpacity>
                </View>
              </View>
          }
          <Text style={{ textAlign: 'center', color: 'rgba(51, 51, 51, 0.5)', fontSize: 12, marginTop: 6 }}>Free delivery applicable</Text>
        </View>
        <View style={{ marginHorizontal: 8 }} />
        <View style={[styles.card, { width: card2Size.width, height: card2Size.height }]}>
          <Image source={card2Image} style={[styles.cardImage, card2ImageStyle]} />
          <Image source={require("../assets/img/Union.png")} style={styles.overlayImage} />
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
          <AddtoCart title={"Add to cart"} />
          <Text style={{ textAlign: 'center', color: 'rgba(51, 51, 51, 0.5)', fontSize: 12, marginTop: 6 }}>Free delivery applicable</Text>
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
    elevation: 5,
    // For iOS
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
  },
  cardImage: {
    width: 95,
    height: 124,
    resizeMode: 'cover',
    marginHorizontal: 22
  },
  cardText: {
    padding: 10,
    fontSize: 14,
    fontWeight: 500
  },
  text: {
    fontSize: 14,
    color: 'rgba(51, 51, 51, 0.5)', // #333333 with 50% opacity
  },
  starContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  text2: {
    fontSize: 12,
    color: 'rgba(51, 51, 51, 0.7)',
    margin: '7%',
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
  CrtBtn: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around"
  }
});

export default ProductCards;

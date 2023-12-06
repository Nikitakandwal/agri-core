import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import Rating from './Rating';

const StarIcon = () => (
  <Text style={styles.starIcon}>&#9733;</Text>
);

const BidCard = ({ imageSource, topLeftText, topRightText, bottomText, buttonText, rupeeText, marketValueText, additionalTexts, tripText,bidText, rating }) => {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.card}>
        <View style={styles.upperHalf}>
          <Image source={imageSource} style={styles.image} />
          <Text style={styles.topLeftText}>{topLeftText}</Text>
          <Text style={styles.topRightText}>{topRightText}</Text>
        </View>
        <View style={styles.lowerHalf}>
          <Text style={styles.bottomText}>{bottomText}</Text>
          <View style={styles.lineContainer}>
            <Text style={styles.leftLineText}>{buttonText}</Text>
            <Rating rating={rating}/>
          </View>
          <View style={styles.lineContainer}>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>{buttonText}</Text>
            </TouchableOpacity>
            <View style={styles.rightTextContainer}>
              <Text style={styles.rupeeText}>{rupeeText}</Text>
              <Text style={styles.marketValueText}>{marketValueText}</Text>
            </View>
          </View>
          <View style={styles.threeTextsContainer}>
            {additionalTexts.map((text, index) => (
              <Text key={index} style={styles.additionalText}>{text}</Text>
            ))}
          </View>
          <View style={styles.twoItemsContainer}>
            <Text style={styles.tripText}>{tripText}</Text>
            <TouchableOpacity style={styles.arrowButton}>
              <Text style={styles.arrowButtonText}>{bidText}▼</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    height: 265,
    width: 156,
    flexDirection: 'row',
    marginLeft:15,
    
  },
  card: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    padding: 10,
    borderColor:'rgba(51, 51, 51, 0.5)',
    borderWidth:0.5,
    elevation: 5, // Apply elevation for shadow on Android
    shadowColor: '#333333', // Shadow color
    shadowOpacity: 0.5, // Opacity of the shadow
    shadowOffset: {
      width: 2, // Horizontal offset
      height: 2, // Vertical offset
    },
    shadowRadius: 5, // Radius of the shadow
  
  },
  upperHalf: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  lowerHalf: {
    flex: 1,
  },
  image: {
    borderRadius: 5,
  },
  topLeftText: {
    position: 'absolute',
    top: 5,
    left: 5,
    fontSize: 8,
    color: 'rgba(51, 51, 51, 0.8)',
  },
  topRightText: {
    position: 'absolute',
    top: 5,
    right: 5,
    fontSize: 8,
    color: 'rgba(51, 51, 51, 0.8)',
  },
  bottomText: {
    fontSize: 10,
    color: '#333333',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  lineContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
  },
  leftLineText: {
    fontSize: 8,
    color: 'rgba(51, 51, 51, 0.5)',
  },
  button: {
    height: 22,
    width: 46,
    backgroundColor: '#ffffff',
    borderColor: 'rgba(0, 0, 0, 0.1)',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 8,
    color: 'rgba(51, 51, 51, 0.8)',
  },
  rupeeText: {
    fontSize: 10,
    color: 'rgba(51, 51, 51, 0.9)',
  },
  marketValueText: {
    fontSize: 6,
    color: 'rgba(51, 51, 51, 0.7)',
  },
  rightTextContainer: {
    alignItems: 'flex-end',
  },
  threeTextsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
  },
  additionalText: {
    fontSize: 8,
    color: 'rgba(51, 51, 51, 0.8)',
  },
  twoItemsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
  },
  tripText: {
    width: 58,
    fontSize: 8,
    color: 'rgba(51, 51, 51, 0.6)',
  },
  arrowButton: {
    height: 25,
    width: 75,
    backgroundColor: '#425343',
    justifyContent: 'center',
    alignItems: 'center',
  },
  arrowButtonText: {
    fontSize: 10,
    color: '#ffffff',
  },
  starIcon: {
    fontSize: 8,
    color: 'rgba(51, 51, 51, 0.2)',
  },
});

export default BidCard;

import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const BulkDeals = ({ topText, leftCardData, rightCardData }) => {
  return (
    <View style={styles.container}>
    
      <Text style={styles.topText}>{topText}</Text>
 
      <View style={styles.bulkDealsContainer}>
        <View style={styles.bulkDealsTextContainer}>
          <Text style={styles.bulkDealsText}>Bulk deals</Text>
        </View>
        <TouchableOpacity>
          <Text style={styles.viewAllText}>View all</Text>
        </TouchableOpacity>
      </View>
<View style={{flexDirection:'row'}}>
  
      <View style={styles.cardContainer}>
        <View style={styles.cardUpperHalf}>
           <Image source={leftCardData.images[0]} style={styles.cardImageTop} />
          <View style={styles.imageRow}>
            {leftCardData.images.slice(1, 6).map((image, index) => (
              <Image key={index} source={image} style={styles.cardImage} />
            ))}
          </View>
        </View>
        <View style={styles.cardLowerHalf}>
          <Text style={styles.cardDescriptionText}>{leftCardData.description}</Text>
          <View style={styles.cardFooter}>
            <Text style={styles.priceText}>{leftCardData.price}</Text>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Buy</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.deliveryContainer}>
            <View style={styles.freeDelivery}>
              <Text style={styles.freeDeliveryText}>Free delivery applicable</Text>
            </View>
          </View>
        </View>
      </View> 
      <View style={styles.cardContainer}>
        <View style={styles.cardUpperHalf}>
           <Image source={leftCardData.images[0]} style={styles.cardImageTop} />
          <View style={styles.imageRow}>
            {leftCardData.images.slice(1, 6).map((image, index) => (
              <Image key={index} source={image} style={styles.cardImage} />
            ))}
          </View>
        </View>
        <View style={styles.cardLowerHalf}>
          <Text style={styles.cardDescriptionText}>{leftCardData.description}</Text>
          <View style={styles.cardFooter}>
            <Text style={styles.priceText}>{leftCardData.price}</Text>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Buy</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.deliveryContainer}>
            <View style={styles.freeDelivery}>
              <Text style={styles.freeDeliveryText}>Free delivery applicable</Text>
            </View>
          </View>
        </View>
      </View> 
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    marginTop: 10,
  },
  topText: {
    textAlign: 'center',
    color: '#414141',
    opacity: 0.8,
    fontSize: 10,
    marginVertical:10
  },
  bulkDealsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
  },
  bulkDealsTextContainer: {
    flex: 1,
    marginHorizontal:20
  },
  bulkDealsText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#414141',
  },
  viewAllText: {
    fontSize: 14,
    color: '#414141',
    marginHorizontal:35
  },
  cardContainer: {
    height: 248,
    width: "45%",
    borderRadius: 8,
    backgroundColor: '#FFFFFF',
    marginBottom: 30,
    borderRadius:5,
    borderColor:'rgba(0, 0, 0, 0.8)',
    borderWidth:0.5,
    elevation: 5, // Android shadow
    shadowColor: '#000000', // iOS shadow
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    marginHorizontal:10
  },
  cardUpperHalf: {
    flex: 1,
    overflow: 'hidden',
  },
  cardImageTop: {
      marginHorizontal:50,
      marginVertical:50
  },
  cardLowerHalf: {
    padding: 10,
  },
  cardDescriptionText: {
    fontSize: 12,
    color: '#333333',
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 5,
  },
  priceText: {
    fontSize: 10,
    color: 'rgba(51, 51, 51, 0.5)',
  },
  button: {
    backgroundColor: '#425343',
    borderRadius: 5,
    paddingVertical: 3,
    paddingHorizontal: 8,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 10,
  },
  deliveryContainer: {
    marginTop: 5,
    height: 17,
    backgroundColor: '#425343',
    justifyContent: 'center',
    alignItems: 'center',
  },
  freeDeliveryText: {
    color: '#FFFFFF',
    fontSize: 8,
  },
});

export default BulkDeals;

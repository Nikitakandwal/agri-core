import React, {useState} from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { CardsData } from '../Cards.js';
import NewArrivals from './NewCardData.js';
import ProductsYouMayLike from './ProductsYouMayLike.js'

const productsData = [
  {
    image: require('../assets/img/Glycel.png'),
    heading: 'Product 1',
    description: 'Product description',
    price: '$19.99',
  },
  {
    image: require('../assets/img/Glycel.png'),
    heading: 'Product 2',
    description: 'Product description',
    price: '$29.99',
  }, 
];

const NewArrivalPage = () => {
     return (
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={styles.heading}> New Arrivals </Text>
          <TouchableOpacity style={styles.button}>
          </TouchableOpacity>
        </View>
          <NewArrivals CardsData={CardsData} />
          <ProductsYouMayLike
        title="Products you may like"
        viewAllText="View all"
        products={productsData}
      />
      
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
        marginVertical:23,
        paddingBottom:5
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
   
  });
  

export default NewArrivalPage
 
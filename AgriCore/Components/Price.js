import React from 'react';
import { View, Text, StyleSheet, } from 'react-native';
import DropdownButton from './DropdownButton.js';

const PriceComponent = ({ originalPrice, discountedPrice }) => {
  return (
    <View style={styles.container}>
      <View style={styles.priceContainer}>
        <Text style={styles.originalPrice}>{`₹${originalPrice}`}</Text>
        <View style={styles.discountedPriceContainer}>
          <Text style={styles.discountedPrice}>{`₹${discountedPrice}`}</Text>
        </View>
      </View>
      <DropdownButton/>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        borderBottomColor: '#ccc',
      },
      priceContainer: {
        flexDirection: 'column',
        alignItems: 'flex-start',
      },
      originalPrice: {
        textDecorationLine: 'line-through',
        color: 'rgba(51, 51, 51, 0.8)', // #333333 with 80% opacity
        fontSize: 9,
      },
      discountedPrice: {
        fontWeight: 'bold',
        color: 'rgba(51, 51, 51, 1)', // #333333 with 100% opacity
        fontSize: 13,
      },

});

export default PriceComponent;

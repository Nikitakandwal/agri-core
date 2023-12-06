import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const ShopByBrands = ({ brandTitle, viewAllText, cardsData }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.brandTitle}>{brandTitle}</Text>
        <Text style={styles.viewAllText}>{viewAllText}</Text>
      </View>
      <View style={styles.cardContainer}>
        {cardsData.map((card, index) => (
          <View key={index} style={styles.card}>
            <Image source={card.image} style={styles.cardImage} />
            <Text style={styles.cardText}>{card.text}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 206,
    width: 335,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 10,
    
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  brandTitle: {
    fontSize: 16,
    color: '#414141',
    fontWeight: 'bold',
    left:15
  },
  viewAllText: {
    fontSize: 14,
    color: '#414141',
  },
  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  card: {
    width: 80,
    height: 82,
    backgroundColor: '#ffffff',
    borderRadius: 5,
    alignItems: 'center',
  },
  cardImage: {
    width: 50,
    height: 50,
    marginVertical: 8,
  },
  cardText: {
    fontSize: 12,
    color: '#18230C',
  },
});

export default ShopByBrands;

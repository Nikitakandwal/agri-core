import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TopSearches = ({ title, searches }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.cardContainer}>
        <View style={styles.row}>
          {searches.slice(0, 3).map((search, index) => (
            <View key={index} style={styles.card}>
              <Text style={styles.cardText}>{search}</Text>
            </View>
          ))}
        </View>
        <View style={styles.row}>
          {searches.slice(3, 5).map((search, index) => (
            <View key={index} style={styles.card}>
              <Text style={styles.cardText}>{search}</Text>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 15,
  },
  title: {
    fontSize: 16,
    color: '#414141',
    marginBottom: 10,
    fontWeight:'bold',
    marginHorizontal:10
  },
  cardContainer: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  row: {
    flexDirection: 'row',
  },
  card: {
    width: '30%', // Adjusted width to accommodate 3 cards in the first row and 2 in the second row
    height: 34,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderColor: 'rgba(0, 0, 0, 0.2)',
    borderWidth: 1,
    borderRadius: 5,
    marginVertical: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal:6,
   
  },
  cardText: {
    color: 'rgba(51, 51, 51, 0.9)',
    fontSize: 12,
    
  },
});

export default TopSearches;

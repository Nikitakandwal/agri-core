import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Bidding = () => {
  return (
    <View style={styles.container}>
      <View style={styles.cardContainer}>
        <View style={styles.card}>
          <Text style={styles.cardText}>Bidding benefits</Text>
        </View>
      </View>
      <View style={styles.lineContainer}>
        <Text style={styles.leftText}>Bidding deals</Text>
        <Text style={styles.rightText}>View all</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 271,
    width: 380,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 20,
    marginTop:25
  },
  cardContainer: {
    height: 189,
    width: 305,
    backgroundColor: '#686262',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardText: {
    fontSize: 14,
    color: '#ffffff',
    fontWeight:'500'
  },
  lineContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    marginRight:40,
    marginLeft:4
  },
  leftText: {
    fontSize: 16,
    color: '#333333',
    fontWeight:'600'
  },
  rightText: {
    fontSize: 14,
    color: '#333333',
  },
});

export default Bidding;

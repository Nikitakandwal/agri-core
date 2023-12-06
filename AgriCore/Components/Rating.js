import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

export default Rating = ({ rating }) => {
    const renderStars = () => {
      const stars = [];
      const totalStars = 5;
  
      for (let i = 1; i <= totalStars; i++) {
        stars.push(
          <Text key={i} style={i <= rating ? styles.starFilled : styles.starEmpty}>
            ★
          </Text>
        );
      }
  
      return stars;
    };
  
    return <View style={styles.starsContainer}>{renderStars()}<Text style={{fontSize: 13,
        color: 'rgba(51, 51, 51, 0.5)',}}>({rating})</Text></View>;
  };
  
const styles = StyleSheet.create({
    starsContainer: {
        flexDirection: 'row',
      },
      starFilled: {
        color: 'gold', // or any color you prefer
        fontSize: 14,
        marginRight: 3,
        marginHorizontal:-4
      },
      starEmpty: {
        color: 'gray', // or any color you prefer for empty stars
        fontSize: 14,
        marginRight: 2,
        marginHorizontal:-4
      },
}  )
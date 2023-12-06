import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default ProductRating = ({ rating, reviewCount }) => {
    const renderStars = () => {
      const stars = [];
      const totalStars = 5;
  
      for (let i = 1; i <= totalStars; i++) {
        stars.push(
            <TouchableOpacity key={i} style={{ marginRight: 3 }}>
            <Icon
              name={i <= rating ? 'star' : 'star-o'}
              size={20}
              color={i <= rating ? 'gold' : 'gold'} 
            />
          </TouchableOpacity>
  
        );
      }
  
      return stars;
    };
  
    return ( <View style={styles.container}>
    <View style={styles.starsContainer}>{renderStars()}</View>
    <Text style={{ fontSize: 10, color: '#0590CC', textAlign:'center', marginTop:5, marginBottom:-5 }}>{reviewCount} reviews</Text>
  </View>
    )
  };
  
const styles = StyleSheet.create({
    starsContainer: {
        flexDirection: 'row',
      }, 
}  )
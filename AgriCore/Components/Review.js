import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';


const ReviewSection = () => {
  // Sample data for top reviews
  const topReviews = [
    {
      userProfileImage: require('../assets/img/userProfile.png'),
      username: 'JohnDoe123',
      rating: 4.5,
      heading: 'Quality Product',
      date: 'October 15, 2023',
      review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      helpfulCount: 25,
    },
    {
      userProfileImage: require('../assets/img/userProfile.png'),
      username: 'Alice92',
      rating: 3.8,
      heading: 'Good Purchase',
      date: 'September 28, 2023',
      review: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      helpfulCount: 15,
    },
    // Add more reviews as needed
  ];

  return (
    <View style={styles.reviewSection}>
      <Text style={styles.reviewHeading}>Reviews</Text>
      {/* Rating Section */}
      <View style={styles.ratingSection}>
        <View style={styles.ratingContainer}>
          {/* Replace this with your actual rating component */}
          <Text style={styles.rating}>4.3</Text>
          <Text style={styles.outOfFive}>out of 5</Text>
        </View>
        <Text style={styles.reviewCount}>15 reviews</Text>
      </View>

      {/* Buttons Section */}
      <View style={styles.buttonsSection}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Write a Review</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button2}>
          <Text style={styles.buttonText}>Create a Video Review</Text>
        </TouchableOpacity>
      </View>

      {/* Top Reviews Section */}
      <Text style={styles.topReviewsHeading}>Top Reviews</Text>
      {topReviews.map((review, index) => (
        <View key={index}>
          {/* Individual Review */}
          <View style={styles.userReview}>
            <Image source={review.userProfileImage} style={styles.userProfileImage} />
            <View style={styles.userInfo}>
              <Text style={styles.username}>{review.username}</Text>
              {/* Replace with your actual rating component */}
              <Text style={styles.rating}>{review.rating} stars</Text>
            </View>
          </View>
          {/* Review Details */}
          <Text style={styles.reviewHeading}>{review.heading}</Text>
          <Text style={styles.reviewDate}>{review.date}</Text>
          <Text style={styles.reviewText}>{review.review}</Text>
          <Text style={styles.helpfulText}>{`${review.helpfulCount} people found this useful`}</Text>
          {/* Useful Button */}
          <TouchableOpacity style={styles.usefulButton}>
            <Text style={styles.usefulButtonText}>Useful</Text>
          </TouchableOpacity>
          {/* Separator Line */}
          <View style={styles.separator} />
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
    reviewSection: {
      paddingHorizontal: 16,
      paddingBottom: 20,
    },
    reviewHeading: {
      fontSize: 18,
      color: '#333333',
      fontWeight: 'bold',
      marginBottom: 10,
    },
    ratingSection: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 10,
    },
    ratingContainer: {
      flexDirection: 'row',
      marginRight: 8,
    },
    rating: {
      fontSize: 22,
      fontWeight: 'bold',
      color: '#333333',
    },
    outOfFive: {
      fontSize: 14,
      color: '#333333',
    },
    reviewCount: {
      fontSize: 14,
      color: '#333333',
    },
    buttonsSection: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 16,
    },
    button: {
      backgroundColor: '#525252',
      padding: 12,
      borderRadius: 5,
      width: '48%',
    },
    button2: {
      backgroundColor: '#6A9D6D',
      padding: 12,
      borderRadius: 5,
      width: '48%',
    },
    buttonText: {
      color: 'white',
      textAlign: 'center',
      fontSize: 14,
    },
    topReviewsHeading: {
      fontSize: 18,
      color: '#333333',
      fontWeight: 'bold',
      marginBottom: 10,
    },
    userReview: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 16,
    },
    userProfileImage: {
      width: 50,
      height: 50,
      borderRadius: 25,
      marginRight: 16,
    },
    reviewDetails: {
      flex: 1,
    },
    userInfo: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 8,
    },
    username: {
      fontSize: 16,
      color: '#333333',
      fontWeight: 'bold',
      marginRight: 8,
    },
    reviewDate: {
      fontSize: 12,
      color: '#666666',
      marginBottom: 8,
    },
    reviewHeading: {
      fontSize: 16,
      color: '#333333',
      fontWeight: 'bold',
      marginBottom: 8,
    },
    reviewText: {
      fontSize: 14,
      color: '#333333',
      marginBottom: 8,
    },
    helpfulText: {
      fontSize: 12,
      color: '#666666',
      marginBottom: 8,
    },
    usefulButton: {
      backgroundColor: '#6A9D6D',
      padding: 10,
      borderRadius: 5,
      width: '40%',
    },
    usefulButtonText: {
      color: 'white',
      textAlign: 'center',
      fontSize: 14,
    },
    separator: {
      height: 0.5,
      backgroundColor: '#00000020',
      marginBottom: 16,
    },
  });
  
export default ReviewSection;

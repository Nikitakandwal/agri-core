import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

const NewsAndUpdate = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headingText}>News and updates</Text>
        <TouchableOpacity>
          <Text style={styles.viewAllText}>View all</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.cardsContainer}>
        <View style={styles.card}>
          {/* Video Section */}
          <View style={styles.videoSection}>
            {/* Placeholder for Video (you can replace it with your actual video component) */}
            <Image
              source={require('../assets/video/thumbnail.png')}
              style={styles.videoPlaceholder}
            />
          </View>

          {/* Text Section */}
          <Text style={styles.cardText}>
            Annadata: How to do Bamboo Farming? - Agri News - Farming News.
          </Text>
        </View>

        {/* Repeat similar structure for the second card */}
        <View style={styles.card}>
          <View style={styles.videoSection}>
            <Image
              source={require('../assets/video/thumbnail.png')}
              style={styles.videoPlaceholder}
            />
          </View>
          <Text style={styles.cardText}>
            Annadata: How to do Bamboo Farming? - Agri News - Farming News.
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
    marginTop:20,
  },
  headingText: {
    fontSize: 16,
    color: '#333333',
    marginHorizontal:27,
    fontWeight:'bold',
    marginBottom:8
  },
  viewAllText: {
    fontSize: 12,
    color: '#333333',
    marginHorizontal:40
  },
  cardsContainer: {
    flexDirection: 'row',
    marginHorizontal:25
  },
  card: {
    height: 149,
    width: 138,
    borderColor: 'rgba(0, 0, 0, 0.2)',
    borderWidth: 1,
    borderRadius:8,
    marginRight:15
  },
  videoSection: {
    width: 138,
    height: 90,
    overflow: 'hidden',
  },
  videoPlaceholder: {
    width: '100%',
    height: '100%',
  },
  cardText: {
    fontSize: 10,
    color: '#333333',
    textAlign: 'center',
    paddingHorizontal: 8,
  },
});

export default NewsAndUpdate;

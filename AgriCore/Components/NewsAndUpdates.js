import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, Dimensions } from 'react-native';

const windowWidth = Dimensions.get("window").width;
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
    width: windowWidth*0.39,
    borderColor: 'rgba(0, 0, 0, 0.2)',
    borderWidth: 1,
    borderRadius:8,
    marginRight:15
  },
  videoSection: {
    width: windowWidth*0.385,
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

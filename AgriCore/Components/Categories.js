import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const CategoriesComponent = ({
  headingText,
  headingStyle,
  buttonText,
  buttonStyle,
  cardData,
}) => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.headerContainer}>
        <Text style={[styles.heading, headingStyle]}>{headingText}</Text>
        <TouchableOpacity style={[styles.button, buttonStyle]}>
          <Text>{buttonText}</Text>
        </TouchableOpacity>
      </View>

      {/* Cards */}
      <View style={styles.cardsContainer}>
        {[0, 1, 2, 3].map((index) => (
          <View key={index} style={styles.column}>
            {cardData.slice(index * 2, (index + 1) * 2).map((card, cardIndex) => (
              <View key={cardIndex} style={[styles.card, card.cardStyle]}>
                <Image
                  source={card.imagePath}
                  style={[styles.cardImage, card.imageStyle]}
                />
                <Text style={[styles.cardText, card.textStyle]}>{card.text}</Text>
              </View>
            ))}
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  heading: {
    fontSize: 18,
    color: '#414141',
  },
  button: {
    fontSize: 14,
    color: '#414141',
  },
  cardsContainer: {
    flexDirection: 'row',
    marginTop: 16,
    justifyContent: 'space-between',
  },
  column: {
    flex: 1,
    marginRight: 8,
  },
  card: {
    marginBottom: 16,
    alignItems: 'center',
  },
  cardImage: {
    width: 66,
    height: 63,
    marginBottom: 8,
  },
  cardText: {
    fontSize: 14,
    textAlign: 'center',
    color: '#333333',
  },
});

export default CategoriesComponent;

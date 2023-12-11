import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  Dimensions,
} from "react-native";

const screenWidth = Dimensions.get("window").width;

const CardComponent = () => {
  const cardWidth = (screenWidth - 16 * 3) / 2;
  const cardHeight = (cardWidth * 115) / 153;

  const cardsData = [
    { id: 1, image: require("../assets/icons/bag.png"), text: "Card 1" },
    { id: 2, image: require("../assets/icons/agricare.png"), text: "Card 2" },
    { id: 3, image: require("../assets/icons/warehouse.png"), text: "Card 3" },
    { id: 4, image: require("../assets/icons/save2.png"), text: "Card 4" },
    { id: 5, image: require("../assets/icons/bidTwo.png"), text: "Card 5" },
    { id: 6, image: require("../assets/icons/planting.png"), text: "Card 6" },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {cardsData.map((card) => (
        <View
          key={card.id}
          style={[styles.card, { width: cardWidth, height: cardHeight }]}
        >
          <Image source={card.image} style={styles.cardImage} />
          <Text style={styles.cardText}>{card.text}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    padding: 16,
  },
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    marginVertical: 8,
    alignItems: "center",
    borderColor: "#00000010",
    borderWidth: 1,
    justifyContent: "center",
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
  cardImage: {
    borderRadius: 8,
  },
  cardText: {
    fontSize: 16,
    fontWeight: "bold",
    marginVertical: 8,
  },
});

export default CardComponent;

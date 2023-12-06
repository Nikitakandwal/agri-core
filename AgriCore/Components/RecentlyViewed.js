import React from "react";
import { View, Text, Image, ScrollView, StyleSheet } from "react-native";

const Price = ({ originalPrice, discountedPrice }) => {
    return (
      <View style={styles.pContainer}>
        <View style={styles.priceContainer}>
          <View style={styles.discountedPriceContainer}>
            <Text style={styles.discountedPrice}>{`₹${discountedPrice}`}</Text>
          </View>
          <Text style={styles.originalPrice}>{`₹${originalPrice}`}</Text>
        </View>
      </View>
    );
  };


const RecentlyViewed = () => {
  const recentlyViewedData = [
    {
      id: 1,
      image: require("../assets/img/Sempra.png"),
      title: "Sempra Herbicides",
      viewedAgo: "Viewed 10 days ago",
    },
    {
      id: 2,
      image: require("../assets/img/Sempra.png"),
      title: "Sempra Herbicides",
      viewedAgo: "Viewed 10 days ago",
    },
    {
      id: 3,
      image: require("../assets/img/Sempra.png"),
      title: "Sempra Herbicides",
      viewedAgo: "Viewed 10 days ago",
    },
    // Add more items as needed
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Recently viewed items</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.cardContainer}
      >
        {recentlyViewedData.map((item) => (
          <View key={item.id} style={styles.card}>
            <Image source={require('../assets/img/union3.png')} style={{marginLeft:5}}/>
            <Text style={styles.overlayText}>Lowest - 35% off</Text>
            <View style={styles.cardTextContainer}>
              <Image source={item.image} />
<View>
              <Text style={styles.cardTitle}>{item.title}</Text>
              <Price originalPrice={939} discountedPrice={858} />
              </View>
            </View>
            
            <Text style={styles.viewedAgo}>{item.viewedAgo}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
  heading: {
    fontSize: 17,
    marginBottom: 15,
  },
  cardContainer: {
    flexDirection: "row",
  },
  card: {
    width: 151,
    height: 108,
    marginRight: 10,
    backgroundColor: "rgba(245, 245, 245, 0.8)",
    borderColor: "#333333",
    borderWidth: 0.5,
    borderRadius: 5,
    overflow: "hidden",
  },

  cardTextContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 5,
  },
  cardTitle: {
    fontSize: 15,
    color: "#333333",
    width:73,
    marginLeft:19,
  },
  viewedAgo: {
    fontSize: 10,
    color: "#ffffff",
    height: 24,
    width: '100%',
    backgroundColor: "#425343",
    textAlign: "center",
    paddingTop: 4.5
  },
  pContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    borderBottomColor: '#ccc',
    marginLeft:7,
    marginTop:3
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  originalPrice: {
    textDecorationLine: 'line-through',
    color: 'rgba(51, 51, 51, 0.8)', // #333333 with 80% opacity
    fontSize: 12,
    marginLeft:5
  },
  discountedPrice: {
    fontWeight: 'bold',
    color: 'rgba(51, 51, 51, 1)', // #333333 with 100% opacity
    fontSize: 15
  },
  overlayText: {
    position: 'absolute',
    top: 0, 
    left: 9, 
    color: '#000',
    fontSize: 8
  },
});

export default RecentlyViewed;

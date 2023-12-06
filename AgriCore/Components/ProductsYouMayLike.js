import React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

const ProductsYouMayLike = ({ title, viewAllText, products }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.viewAll}>{viewAllText}</Text>
      </View>
      <View style={styles.productsContainer}>
        {products.map((product, index) => (
          <View key={index} style={styles.card}>
            <Image source={product.image} style={styles.image} />
            <View style={styles.cardContent}>
              <Text style={styles.heading}>{product.heading}</Text>
              <Text style={styles.description}>{product.description}</Text>
              <View style={styles.cardFooter}>
                <TouchableOpacity style={styles.button}>
                  <Text style={styles.buttonText}>Button</Text>
                </TouchableOpacity>
                <Text style={styles.price}>{product.price}</Text>
              </View>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  title: {
    fontSize: 16,
    color: "#333333",
  },
  viewAll: {
    fontSize: 14,
    color: "#333333",
  },
  productsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap", // Allow products to wrap to the next line
  },
  card: {
    height: 171,
    width: width * 0.44, // Use 44% of the screen width
    marginBottom: '5%',
    marginRight: '2%', // Use a percentage value for responsive marginRight
    backgroundColor: '#f8f8f8',
    borderRadius: 10,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    borderColor: 'rgba(51, 51, 51, 0.1)',
    borderWidth: 1,
  },
  image: {
    resizeMode: "cover",
    marginHorizontal: 29,
    flex: 1,
  },
  cardContent: {
    padding: 8,
  },
  heading: {
    fontSize: 10,
    color: "#333333",
  },
  description: {
    fontSize: 8,
    color: "rgba(51, 51, 51, 0.5)",
  },
  cardFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 5,
  },
  button: {
    backgroundColor: "#425343",
    padding: 5,
    borderRadius: 5,
    height: 25,
    width: 62,
  },
  buttonText: {
    color: "white",
    fontSize: 10,
    textAlign: 'center',
  },
  price: {
    fontSize: 10,
    color: "#333333",
  },
});

export default ProductsYouMayLike;

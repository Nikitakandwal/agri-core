import { StyleSheet, Text, View, ScrollView, ActivityIndicator } from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "../Components/Header";
import BreadCrumb from "../Components/BreadCrumb";
import ProductPage from "../Components/Product";

const ProductsPage = () => {
  const [productData, setProductData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch data when the component mounts
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://192.168.1.5:3000/api/products"
        );

        const data = response.data;
        console.log(data);
        // Update state with the fetched data
        setProductData(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching product data:", error);
        setLoading(false);
      }
    };

    // Call the fetch function
    fetchData();
  }, []); // The empty dependency array ensures that this effect runs only once on mount

  // Access properties directly at the 0 index if the array is not empty
  const firstProduct = productData.length > 0 ? productData[0] : null;
   
  return (
    <ScrollView>
      <Header />
      <BreadCrumb />
      {loading ? (
        // Render a loading indicator in the center of the screen
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      ) : (
        // Render the product page when data is fetched
        firstProduct && (
          <ProductPage
            productImages={firstProduct.images}
            productName={firstProduct.productName}
            rating={firstProduct.rating}
            reviewCount={firstProduct.ratingCount}
            brand={firstProduct.brand}
            deliveryDate={firstProduct.deliveryDate}
            sizes={firstProduct.sizes}
            bulkSize={firstProduct.bulkSize}
            price={firstProduct.originalPrice}
            discountedPrice={firstProduct.discountedPrice}
            productDescription={firstProduct.productDescription}
            productFeatures={firstProduct.productDescription}
            usage={firstProduct.usage}
            reviews={firstProduct.reviews}
          />
        )
      )}
    </ScrollView>
  );
};

export default ProductsPage;

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

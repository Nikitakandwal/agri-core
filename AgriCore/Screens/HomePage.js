import React, { Component } from "react";
import { View, ScrollView, StyleSheet, Image, TouchableOpacity, Text } from "react-native";
import Header from "../Components/Header";
import BreadCrumb from "../Components/BreadCrumb.js";
import CategoriesComponent from "../Components/Categories.js";
import ProductCards from "../Components/ProductCards.js";
import PopularCards from "../Components/PopularProducts.js";
import RecentlyViewed from "../Components/RecentlyViewed.js";
import FourCards from "../Components/FourCards.js";
import BrowseProducts from "../Components/BrowseProducts.js";
import BlogComponent from "../Components/Blogs.js";
import Faqs from "../Components/Faqs.js";
import CarouselComponent from "../Components/CarouselComponent.js";

export default class HomePage extends Component {
  render() {
    const cardData = [
      { imagePath: require("../assets/img/Pesticides.png"), text: "Pesticides" },
      { imagePath: require("../assets/img/Fungicides.png"), text: "Fungicides" },
      { imagePath: require("../assets/img/Insecticides.png"), text: "Insecticides" },
      { imagePath: require("../assets/img/Herbicides.png"), text: "Herbicides" },
      { imagePath: require("../assets/img/Fertilizers.png"), text: "Fertilizers" },
      { imagePath: require("../assets/img/micro-nutrients.png"), text: "Micro Nutrients" },
      { imagePath: require("../assets/img/Seeds.png"), text: "Seeds" },
      { imagePath: require("../assets/img/GrowthPromoters.png"), text: "Growth Promoters" },
    ];

    return (
      <ScrollView style={styles.container}>
        <Header />
        <View style={styles.breadcrumbContainer}>
          <BreadCrumb />
        </View>
        <View style={styles.carouselContainer}>
          <CarouselComponent />
        </View>
        <View style={styles.categoriesContainer}>
          <CategoriesComponent
            headingText="Top categories"
            headingStyle={{ color: "#414141", fontSize: 18 }}
            buttonText="View all"
            buttonStyle={{ color: "#414141", fontSize: 14 }}
            cardData={cardData}
          />
        </View>

        <View style={styles.productCards}>
          <ProductCards
            headingText="New Arrivals"
            buttonText="View All"
            card1Size={{ width: 152, height: 285 }}
            card1Image={require("../assets/img/Navito.png")}
            card1Text="Navito Fungicide"
            card1Discount="11%"
            card1subtext="Bayer"
            card1Rating={4.1}
            card1Text2="1 kg(offers applicable)"
            card1DiscountPrice='9,229'
            card1OriginalPrice='10,300'
            card2Size={{ width: 152, height: 285 }}
            card2Image={require("../assets/img/Alika.png")}
            card2Text="Alika Insecticide"
            cardTextColor="#F8F8F8"
            card2Discount="34%"
            card2subtext="Syngeta"
            card2Rating={4.1}
            card2Text2="40 ml(offers applicable)"
            card2DiscountPrice='151'
            card2OriginalPrice='299'
          />
        </View>
        <View style={styles.popularCards}>
          <PopularCards headingText="Popular products"
            buttonText="View All"
            card1Size={{ width: 152, height: 195 }}
            card1Image={require("../assets/img/Glycel.png")}
            card1Text="Glycel Herbicide"
            card2Size={{ width: 152, height: 195 }}
            card2Image={require("../assets/img/Coragen.png")}
            card2Text="Carogen Insecticide"
            cardTextColor="#F8F8F8" /></View>
        <View style={styles.RecentlyViewed}>
          <RecentlyViewed />
        </View>
        <View style={styles.container2}>
          <Image
            source={require('../assets/img/Poster.png')}
            style={styles.image}
          />

          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.clearanceButton}>
              <Text style={styles.buttonText1}>Clearance deals</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.biddingButton}>
              <Text style={styles.buttonText2}>Bidding</Text>
            </TouchableOpacity>
          </View>
        </View>

        <FourCards />
        <View style={{ height: 40, width: '100%', backgroundColor: '#ffffff' }}></View>
        <BrowseProducts />
        <View>
          <BlogComponent />
          <Faqs />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  breadcrumbContainer: {
    height: 50,
  },
  carouselContainer: {
    height: 230,
  },
  categoriesContainer: {
    flex: 1,
    height: 220,
  },
  productCards: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: 430,
    marginBottom: -30
  },
  popularCards: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: 280,
  },
  RecentlyViewed: {
    flex: 1,
    marginBottom: 20
  },
  container2: {
    flex: 1,
  },
  image: {
    flex: 1,
    width: '100%',
    resizeMode: 'cover',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 16,
    marginBottom: 25,
    marginTop: 30
  },
  clearanceButton: {
    width: '48%',
    height: 40,
    backgroundColor: '#425343',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8
  },
  biddingButton: {
    width: '48%',
    height: 40,
    backgroundColor: 'F6F6F6',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.1)',
    borderRadius: 8
  },
  buttonText2: {
    fontSize: 14,
    color: 'rgba(51, 51, 51, 0.7)',
    fontWeight: 'bold'
  },
  buttonText1: {
    fontSize: 14,
    color: '#ffffff',
    fontWeight: 'bold'
  },
});

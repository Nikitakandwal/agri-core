import React, { Component } from 'react'
import Header from "../Components/Header";
import { Text, StyleSheet, View , ScrollView, Image} from 'react-native'
import BreadCrumb from "../Components/BreadCrumb";
import SearchBar from "../Components/SearchBar"; 
import CarouselComponent from "../Components/CarouselComponent.js";
import Herbicides from '../Components/Herbicides.js'; 
import ComboDeals from '../Components/ComboDeals.js';
import ProductsYouMayLike from '../Components/ProductsYouMayLike.js';
import TopSearches from '../Components/TopSearches.js';
import NewsAndUpdate from '../Components/NewsAndUpdates.js';
import Faqs from '../Components/Faqs.js';

const productsData = [
    {
      image: require('../assets/img/Glycel.png'),
      heading: 'Product 1',
      description: 'Product description',
      price: '$19.99',
    },
    {
      image: require('../assets/img/Glycel.png'),
      heading: 'Product 2',
      description: 'Product description',
      price: '$29.99',
    }, 
  ];

  const topSearchesData = ['Profile1', 'Profile2', 'Profile3', 'Create New'];

export default function ProductsCatalogPage() {
  return (
    <ScrollView style={styles.container}>
    <Header/>
    <BreadCrumb/>
    <SearchBar/>
      {/* <View style={styles.carouselContainer}>
          <CarouselComponent />
        </View> */}
    <Herbicides/> 
     <Image source={require('../assets/img/Banner2.png')} />
     <ComboDeals   
            card1Size={{ width: 152, height: 285 }}
            card1Image={require("../assets/img/combo1.png")}
            card1Image2={require("../assets/img/combo2.png")}
            card1Text="Foost Herbicide + Coragen insecticide"
            card1Discount="11%"
            card1subtext="Bayer"
            card1Rating={4.1}
            card1Text2="1 kg(offers applicable)"
            card1DiscountPrice='9,229'
            card1OriginalPrice='10,300'
            card2Size={{ width: 152, height: 285 }}
            card2Image={require("../assets/img/combo1.png")}
            card2Image2={require("../assets/img/combo2.png")}
            card2Text="Foost Herbicide + Coragen insecticide"
            cardTextColor="#F8F8F8" 
            card2Discount="34%"
            card2subtext="Syngeta"
            card2Rating={4.1}
            card2Text2="40 ml(offers applicable)"
            card2DiscountPrice='151'
            card2OriginalPrice='299'/>
       <ProductsYouMayLike
        title="Products you may like"
        viewAllText="View all"
        products={productsData}
      />
        {/* <View style={styles.carouselContainer}>
          <CarouselComponent />
        </View> */}
        <TopSearches searches={topSearchesData} title='Top Searches'/>
        <NewsAndUpdate/>
        <Faqs/>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "white",
    },
})
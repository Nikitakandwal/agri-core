import Header from "../Components/Header";
import { Text, StyleSheet, View , ScrollView} from 'react-native'
import React, { Component } from 'react'
import BreadCrumb from "../Components/BreadCrumb";
import SearchBar from "../Components/SearchBar";
import TopSearches from "../Components/TopSearches";
import CarouselComponent from "../Components/CarouselComponent";
import ProductCards from "../Components/ProductCards.js";
import PopularCards from "../Components/PopularProducts.js";
import ShopByBrands from "../Components/Brands.js";
import Bidding from "../Components/Bidding.js";
import BidCard from "../Components/BidCard.js";
import NewsAndUpdate from "../Components/NewsAndUpdates.js";
import BlogComponent from "../Components/Blogs.js";
import Faqs from "../Components/Faqs.js";
import BulkDeals from "../Components/BulkDeals.js";

const topSearchesData = ['Search1', 'Search2', 'Search3', 'Search4', 'Search5'];
const quickOrderData = ['Profile1','Profile2','Profile 3', 'Create New']

const brandsData = [
    {
      brandTitle: 'Shop by Brands',
      viewAllText: 'View all',
      cardsData: [
        { image: require('../assets/img/Syngenta.png'), text: 'Bayers' },
        { image: require('../assets/img/Bayer.png'), text: 'Fungicides' },
        { image: require('../assets/img/Seminis.png'), text: 'Insecticides' },
        { image: require('../assets/img/Dhanuka.png'), text: 'Herbicides' },
      ],
    },
  ];

 

export default class BuyPage extends Component {

  render() {
    return (
        <ScrollView style={styles.container}>
        <BreadCrumb/>
        <SearchBar placeholder={"Pesticides, herbicides"}/>
        <TopSearches searches={topSearchesData} title='Top Searches'/>
        <CarouselComponent/>
        <TopSearches searches={quickOrderData} title='Quick order'/>
        <View style={styles.container2}>
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
        <PopularCards headingText="Popular products"
            buttonText="View All"
            card1Size={{ width: 152, height: 195 }}
            card1Image={require("../assets/img/Glycel.png")}
            card1Text="Glycel Herbicide"
            card2Size={{ width: 152, height: 195 }}
            card2Image={require("../assets/img/Coragen.png")}
            card2Text="Carogen Insecticide"
            cardTextColor="#F8F8F8"/> 
        </View>
        <View style={styles.brands}>
      {brandsData.map((brand, index) => (
        <ShopByBrands
          key={index}
          brandTitle={brand.brandTitle}
          viewAllText={brand.viewAllText}
          cardsData={brand.cardsData}
        />
      ))}
    </View>
    <View style={styles.container3}>
        <Bidding/>
        <View style={styles.bidcard}>
        <BidCard
        imageSource={require('../assets/img/Profex2.png')}
        topLeftText="Top Left"
        topRightText="Top Right"
        bottomText="Bottom Text"
        buttonText="Button Text"
        rupeeText="₹100"
        rating={4.3}
        marketValueText="Market Value/Unit"
        additionalTexts={['Text 1', 'Text 2', 'Text 3']}
        bidText='Bid ₹300'
        tripText="Free Malaysia Trip"
      />
         <BidCard
        imageSource={require('../assets/img/Profex2.png')}
        topLeftText="Top Left"
        topRightText="Top Right"
        bottomText="Bottom Text"
        buttonText="Button Text"
        rupeeText="₹100"
        rating={4.3}
        marketValueText="Market Value/Unit"
        additionalTexts={['Text 1', 'Text 2', 'Text 3']}
        bidText='Bid ₹300'
        tripText="Free Malaysia Trip"
      />

      </View>
      <View style={{height:551, backgroundColor:"#ffffff", borderRadius:10, marginHorizontal:11, marginVertical:20}}>
    <NewsAndUpdate/>
    <BlogComponent/>
    </View>
    </View>
    <BulkDeals
  topText="Extra discounts on bulk deals to get more with less pay"
  leftCardData={{
    images: [require('../assets/img/img.png') ,],
    description: "Product description",
    price: "$19.99",
  }}
  rightCardData={{
    images: [require('../assets/img/img1.png')],
    description: "Product description",
    price: "$19.99",
  }}
     />
    <Faqs/>
        </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
        container: {
          flex: 1,
          backgroundColor: "white",
        },
        container2:{
            backgroundColor:'#F0F0F0',
            paddingTop:20,
            paddingBottom:20
        },
        brands:{
            paddingTop:14,
            height: 170
        },
        container3:{
            height: 1214,
            backgroundColor:'#F0F0F0'
        },
        bidcard:{
              flexDirection:'row',
             marginLeft:3,
             marginTop:25
        }
})
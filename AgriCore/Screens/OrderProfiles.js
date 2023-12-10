import { View, Text, ScrollView, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react' 
import Header from '../Components/Header'

import Rating from '../Components/Rating.js';
import PriceComponent from '../Components/Price.js';

const dummyCardData = [
    {
      id: 1,
      title: 'Card 1',
      discount: '20%',
      subtext: 'Subtext 1',
      rating: 4,
      offer: 'Special Offer 1',
      originalPrice: '$50',
      discountPrice: '$40',
      image: require('../assets/img/combo1.png'),
    },
    {
        id: 2,
        title: 'Card 1',
        discount: '20%',
        subtext: 'Subtext 1',
        rating: 4,
        offer: 'Special Offer 1',
        originalPrice: '$50',
        discountPrice: '$40',
        image: require('../assets/img/combo1.png'),
      }
  ];

const Card =({ cardData })=>{
    return(
        <TouchableOpacity style={styles.card}>
        <Image source={require("../assets/img/combo1.png")} style={styles.cardImage} />
        <Image source={require("../assets/img/Union.png")} style={styles.overlayImage} />
        <Text style={styles.overlayText}>{cardData.discount} off</Text>
        <Text style={styles.cardText}>{cardData.title}</Text>
        <View style={styles.starContainer}>
          <Text style={styles.text}>{cardData.subtext}</Text>
          <Rating rating={cardData.rating} />
        </View>
        <Text style={styles.text2}>{cardData.offer}</Text>
        <PriceComponent originalPrice={cardData.originalPrice} discountedPrice={cardData.discountPrice} />

        <Text style={{ textAlign: 'center', color: '#ffffff', fontSize: 12, marginTop: 17, backgroundColor: '#425343', height: 19 }}>Free delivery applicable</Text>
      </TouchableOpacity>
    )
}

const OrderProfiles = () => {
  return (
    <ScrollView>
      <Header/>
      <View style={{height:193, backgroundColor:"#D9D9D9"}}></View>
      <View style={{marginTop:"5%"}}>
        <Text style={{marginLeft:"6%", fontWeight:"bold", color:"#000000", fontSize:16, marginBottom:"3%"}}>Order Profiles</Text>
        <View style={{flexDirection:"row", marginHorizontal:"3%", justifyContent:"center"}}>
        <View style={{backgroundColor:"#EBFEDD30", marginHorizontal:"1%", justifyContent:"center", alignItems:"center", height:100, width:109, borderWidth:1, borderColor:"#00000030", borderRadius:10}} >
        <View style={{justifyContent:"center", alignItems:"center"}}>
            <Image source={require("../assets/icons/sprout.png")} />
            <Text style={{color:"#333333", fontSize:12, fontWeight:"bold"}}>Herb+Basic</Text>
        </View>
        </View>
        <View style={{backgroundColor:"#EBFEDD30", marginHorizontal:"1%", justifyContent:"center", alignItems:"center", height:100, width:109, borderWidth:1, borderColor:"#00000030", borderRadius:10}} >
        <View style={{justifyContent:"center", alignItems:"center"}}>
            <Image source={require("../assets/icons/planting.png")} />
            <Text style={{color:"#333333", fontSize:12, fontWeight:"bold"}}>Growth Promoters</Text>
        </View>
        </View>
        <View style={{backgroundColor:"#EBFEDD30", marginHorizontal:"1%", justifyContent:"center", alignItems:"center", height:100, width:109, borderWidth:1, borderColor:"#00000030", borderRadius:10}} >
        <View style={{justifyContent:"center", alignItems:"center"}}>
            <Image source={require("../assets/icons/harvest.png")} />
            <Text style={{color:"#333333", fontSize:12, fontWeight:"bold"}}>Vegetable seeds</Text>
        </View>
        </View>
        </View>
        <TouchableOpacity style={{backgroundColor:"#EBFEDD30", borderWidth:1, borderColor:"#33333320", borderRadius:7, height:50, width:193, justifyContent:"center", marginHorizontal:"23%", marginVertical:"8%"}}>
       <Text style={{color:"#425343", fontSize:16, textAlign:"center"}}>Create new profile</Text>
        </TouchableOpacity>
        <View>
            <Text style={{fontSize:14, color:"#414141",marginLeft:"6%", fontWeight:"bold"}}>You may also like</Text>
            <View style={styles.cardsContainer}>
          {dummyCardData.map((cardData) => (
            <Card key={cardData.id} cardData={cardData} />
          ))}
        </View>
        </View>
        <View>
            <Text style={{fontSize:16, color:"#414141",marginLeft:"6%", marginTop:"5%"}}>Saved products</Text>
            <View style={styles.cardsContainer}>
          {dummyCardData.map((cardData) => (
            <Card key={cardData.id} cardData={cardData} />
          ))}
        </View>
        </View>
      </View>
    </ScrollView>
  )
}

export default OrderProfiles

const styles = StyleSheet.create({
    cardsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',    
      },
      card: {
        width: 152, 
        height: 285, 
        margin: 8, 
        backgroundColor: '#f8f8f8',
        borderRadius: 8,
        overflow: 'hidden',
        elevation: 5,
        // For iOS
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 4,
      },
      paginationContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 20,
      },
      paginationButton: {
        padding: 8,
        marginHorizontal: 5,
        borderRadius: 5, 
      },
      activePaginationButton: {
        color: '#333333',  
      },
      paginationButtonText: {
        fontSize: 16,
        color: 'rgba(51, 51, 51, 0.6)',
        fontWeight:'bold'
      },
      paginationArrowButton: {
        padding: 8,
        marginHorizontal: 5,
        borderRadius: 50,
        height:35,
        width:35 , 
        justifyContent: 'center',
        alignItems: 'center',
        borderColor:'#333333',
        borderWidth:3
      },
      paginationArrowButtonText: {
        fontSize: 23,
        color: '#333333',
        fontWeight:'bold',
        marginTop:-10
      },
      cardImage: {
        width: 95,
        height: 124,
        resizeMode: 'cover',
        marginHorizontal:22
      },
      cardText: {
        padding: 10,
        fontSize:14,
        fontWeight:'500',
        color:'#333333'
      },
      text: {
        fontSize:14,
        color: 'rgba(51, 51, 51, 0.5)', // #333333 with 50% opacity
      },
      starContainer:{
        flexDirection: 'row',
        justifyContent:'space-around'
      },
      text2:{
        fontSize:12,
        color: 'rgba(51, 51, 51, 0.7)',
        margin:'7%',  
      },
      overlayImage: {
        position: 'absolute',
        top: 20, 
        left: 0,
        resizeMode: 'cover',
      },
      overlayText: {
        position: 'absolute',
        top: 22, 
        left: 7, 
        color: '#000',
        fontSize: 8
      },
      extraImageContainer:{
        marginVertical:12
      }
})
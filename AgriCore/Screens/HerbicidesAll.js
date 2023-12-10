import {  Text, StyleSheet, View , ScrollView, Image, TouchableOpacity, } from 'react-native' 
import Header from "../Components/Header";
import BreadCrumb from "../Components/BreadCrumb";
import SearchBar from "../Components/SearchBar";  
import React, {useState} from 'react';  
import { CardsData } from '../Cards.js';
import Rating from '../Components/Rating.js';
import PriceComponent from '../Components/Price.js';

const CardsAll = ({CardsData}) => {
  const totalCards = 24;
  const cardsPerPage = 12;
  const totalPages = Math.ceil(totalCards / cardsPerPage);

  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const renderCards = () => {
    const cards = [];
    const startIndex = (currentPage - 1) * cardsPerPage;
    const endIndex = Math.min(startIndex + cardsPerPage, totalCards);
  
    for (let i = startIndex; i < endIndex; i++) {
      const cardNumber = i + 1;
      const cardData = CardsData[i]; 
      if (cardData) {
      cards.push(
        <View key={cardNumber} style={styles.card}>
          <Image source={cardData.imageUrl} style={styles.cardImage} />
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
        </View>
      );
      }
      if ((i + 1) % 6 === 0 && i !== endIndex - 1) {
        cards.push(
          <View key={`extraImage${i}`} style={styles.extraImageContainer}>
            <Image source={require("../assets/img/SpecialDeal.png")}  />
          </View>
        );
      }
    }
  
    return cards;
  };
  

  const renderPagination = () => {
    const pages = [];

    for (let i = 1; i <= totalPages; i++) {
      const isActive = i === currentPage;

      pages.push(
        <TouchableOpacity
          key={i}
          style={styles.paginationButton}
          onPress={() => handlePageChange(i)}
        >
          <Text style={[styles.paginationButtonText, isActive && styles.activePaginationButton]}>{i}</Text>
        </TouchableOpacity>
      );
    }

    return pages;
  };

  return (
    <View style={styles.container2}>
      <View style={styles.cardsContainer}>{renderCards()}</View>
      <View style={styles.paginationContainer}>
        <TouchableOpacity
          style={styles.paginationArrowButton}
          onPress={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          <Text style={styles.paginationArrowButtonText}>{"<"}</Text>
        </TouchableOpacity>
        {renderPagination()}
        <TouchableOpacity
          style={styles.paginationArrowButton}
          onPress={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          <Text style={styles.paginationArrowButtonText}>{">"}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const HerbicidesPage = ({ filteredCardsData }) => {
     return (
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={styles.heading}> Herbicides</Text>
        </View>
      <CardsAll  CardsData={filteredCardsData} />
      </View>
    );
  };
  
 

const HerbicidesAll = () => {
  const [filteredCardsData, setFilteredCardsData] = useState(CardsData);

  const handleSearch = (text) => {
    const filtered = CardsData.filter((item) =>
      item.title.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredCardsData(filtered);
  };
  return (
    <ScrollView>
    <Header/>
    <BreadCrumb/>
    <SearchBar placeholder={"Pesticides, herbicides"} onSearch={handleSearch} /> 
      <HerbicidesPage filteredCardsData={filteredCardsData} />
    </ScrollView> 
  )
}

export default HerbicidesAll

const styles = StyleSheet.create({
  container: {
      marginVertical:23,
      paddingBottom:5
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginBottom: 20,  
   },
  heading: {
    fontSize: 18,
    color: '#414141',
    width: 162
  },
  button: {
    fontSize: 14,
    width: 54,
    height: 17,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#414141',
  },
  container2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
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
});
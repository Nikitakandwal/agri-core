import React, { useState, useRef }  from 'react';
import { ScrollView, StyleSheet, Text, View, TouchableOpacity, FlatList, Image, Dimensions,Modal } from 'react-native';
import Header from './Header';
import Icon from 'react-native-vector-icons/FontAwesome';

const WhiteDropdownButton = () => {
    const [selectedValue, setSelectedValue] = useState(null);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const buttonRef = useRef(null);
  
    const toggleDropdown = () => {
      if (buttonRef.current) {
        buttonRef.current.measureInWindow((x, y, width, height) => {
          setModalPosition({ x, y: y + height });
        });
      }
      setIsDropdownOpen(!isDropdownOpen);
    };
  
    const options = [
      { label: 'Option 1', value: 'option1' },
      { label: 'Option 2', value: 'option2' },
      { label: 'Option 3', value: 'option3' },
    ];
  
    const [modalPosition, setModalPosition] = useState({ x: 0, y: 0 });
  
    return (
      <View>
        <TouchableOpacity
          onPress={toggleDropdown}
         style={{backgroundColor:"#425343", width:62, height:25, borderRadius:5, justifyContent:"center", alignItems:"center", flexDirection:"row"}}
          ref={buttonRef}
        >
          <Text style={{color:"#fff", fontSize:9, marginHorizontal:4}}>{selectedValue || 'options'}</Text>
          <Icon name={isDropdownOpen ? 'caret-up' : 'caret-down'} size={10} color="#fff" />
        </TouchableOpacity>
  
        <Modal
          visible={isDropdownOpen}
          transparent={true}
          animationType="slide"
        >
          <View style={[styles.modalContainer, { top: modalPosition.y, left: modalPosition.x }]}>
            <FlatList
              data={options}
              keyExtractor={(item) => item.value}
              renderItem={({ item }) => (
                <TouchableOpacity
                  onPress={() => {
                    setSelectedValue(item.value);
                    setIsDropdownOpen(false);
                  }}
                >
                  <Text style={styles.modalItem}>{item.label}</Text>
                </TouchableOpacity>
              )}
            />
          </View>
        </Modal>
      </View>
    );
  };
  

const Price2 = ({ originalPrice, discountedPrice }) => {
    return (
      <View style={styles.pContainer}>
         <WhiteDropdownButton/> 
        <View style={styles.priceContainer}>
          <Text style={styles.originalPrice}>{`₹${originalPrice}`}</Text>
          <View style={styles.discountedPriceContainer}>
            <Text style={styles.discountedPrice}>{`₹${discountedPrice}`}</Text>
          </View>
        </View>
      </View>
    );
  };

  const Card =({ cardData })=>{
    return(
        <TouchableOpacity style={styles.card1}>
        <Image source={require("../assets/img/Glycel.png")} style={styles.cardImage1} />
        <Image source={require("../assets/img/Union2.png")} style={styles.overlayImage1} />
        <Text style={styles.overlayText1}>{cardData.discount} off</Text>
        <Text style={styles.cardText1}>{cardData.title}</Text>
        <Text style={styles.label}>{cardData.label}</Text>
        <Price2 originalPrice={cardData.originalPrice1} discountedPrice={cardData.discountPrice} />
 </TouchableOpacity>
    )
}
const windowWidth = Dimensions.get('window').width;


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

const OrderProfile4 = () => {
  const menuOptions = [
    { id: '1', label: 'Option 1' },
    { id: '2', label: 'Option 2' },
    { id: '3', label: 'Option 3' },
    // Add more options as needed
  ];

  const [selectedOption, setSelectedOption] = useState(menuOptions[0].id);

  const handleOptionPress = (optionId) => {
    setSelectedOption(optionId);
  };

  const renderMenuOption = ({ item }) => (
    <TouchableOpacity
      style={[
        styles.menuOption,
        {
          backgroundColor:
            item.id === selectedOption ? '#425343' : '#ffffff',
          borderColor: '#00000010',
        },
      ]}
      onPress={() => handleOptionPress(item.id)}
    >
      <Text style={{ color: item.id === selectedOption ? '#FFFFFF' : '#333333', fontSize:10 }}>
        {item.label}
      </Text>
    </TouchableOpacity>
  );

  const renderCard = (item, index) => (
    <View key={index} style={styles.card}>
      <View key={item.id}>
        <Image source={require('../assets/img/union3.png')} style={{ marginLeft: 5 }} />
        <Text style={styles.overlayText}>Lowest - 35% off</Text>
        <View style={styles.cardTextContainer}>
          <Image source={item.image}/>
          <View>
            <Text style={styles.cardTitle}>{item.title}</Text>
            <Price originalPrice={item.originalPrice} discountedPrice={item.discountedPrice} />
          </View>
        </View>
        <Text style={styles.viewedAgo}>Add to cart</Text>
      </View>
    </View>
  );

  const itemsByOption = {
    '1': [
        { id: '1', image: require('../assets/img/Sempra.png'), title: 'Sempra Herbicides', originalPrice: 939, discountedPrice: 858, },
        { id: '2', image: require('../assets/img/Sempra.png'), title: 'Sempra Herbicides', originalPrice: 939, discountedPrice: 858, },
        { id: '3', image: require('../assets/img/Sempra.png'), title: 'Sempra Herbicides', originalPrice: 939, discountedPrice: 858, },
        { id: '4', image: require('../assets/img/Sempra.png'), title: 'Sempra Herbicides', originalPrice: 939, discountedPrice: 858, },
        { id: '5', image: require('../assets/img/Sempra.png'), title: 'Sempra Herbicides', originalPrice: 939, discountedPrice: 858, },
        { id: '6', image: require('../assets/img/Sempra.png'), title: 'Sempra Herbicides', originalPrice: 939, discountedPrice: 858, },
        // Add more items with the same structure
      ],
      '2': [
        { id: '7', image: require('../assets/img/Sempra.png'), title: 'Sempra Herbicides', originalPrice: 1129, discountedPrice: 1058, viewedAgo: '1 day ago' },
        { id: '8', image: require('../assets/img/Sempra.png'), title: 'Sempra Herbicides', originalPrice: 939, discountedPrice: 858, viewedAgo: '2 hours ago' },
        { id: '9', image: require('../assets/img/Sempra.png'), title: 'Sempra Herbicides', originalPrice: 939, discountedPrice: 858, viewedAgo: '2 hours ago' },
        { id: '10', image: require('../assets/img/Sempra.png'), title: 'Sempra Herbicides', originalPrice: 939, discountedPrice: 858, viewedAgo: '2 hours ago' },
        { id: '11', image: require('../assets/img/Sempra.png'), title: 'Sempra Herbicides', originalPrice: 939, discountedPrice: 858, viewedAgo: '2 hours ago' },
        { id: '12', image: require('../assets/img/Sempra.png'), title: 'Sempra Herbicides', originalPrice: 939, discountedPrice: 858, viewedAgo: '2 hours ago' },
        // Add more items with the same structure
      ],
      '3': [
        { id: '13', image: require('../assets/img/Sempra.png'), title: 'Sempra Herbicides', originalPrice: 939, discountedPrice: 858, viewedAgo: '2 hours ago' },
        { id: '14', image: require('../assets/img/Sempra.png'), title: 'Sempra Herbicides', originalPrice: 939, discountedPrice: 858, viewedAgo: '2 hours ago' },
        { id: '15', image: require('../assets/img/Sempra.png'), title: 'Sempra Herbicides', originalPrice: 939, discountedPrice: 858, viewedAgo: '2 hours ago' },
        { id: '16', image: require('../assets/img/Sempra.png'), title: 'Sempra Herbicides', originalPrice: 939, discountedPrice: 858, viewedAgo: '2 hours ago' },
        { id: '17', image: require('../assets/img/Sempra.png'), title: 'Sempra Herbicides', originalPrice: 939, discountedPrice: 858, viewedAgo: '2 hours ago' },
        { id: '18', image: require('../assets/img/Sempra.png'), title: 'Sempra Herbicides', originalPrice: 939, discountedPrice: 858, viewedAgo: '2 hours ago' },
        // Add more items with the same structure
      ],
    };

  const currentItems = itemsByOption[selectedOption];

  return (
    <ScrollView style={styles.container}>
        <Header/>
      <Text style={styles.header}>Profile customized according to needs</Text>

      <Text style={styles.sectionHeader}>Saved items</Text>
      <View style={styles.section}>
        <View style={{ backgroundColor: "#D9D9D920", borderWidth: 1, borderColor: "#00000010", borderRadius:7, height:352, width: 352, padding:5}}>
          {/* Menu Options */}
          <View style={{flexDirection:"row", marginVertical:"4%"}}>
          <Text style={{width:"34%"}}>Category: </Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.menuContainer}
          >
            <FlatList
              horizontal
              data={menuOptions}
              renderItem={renderMenuOption}
              keyExtractor={(item) => item.id}
            />
          </ScrollView>
          </View>
         <View style={{marginVertical:"5%"}}>
          <View style={styles.cardContainer}>
            {currentItems.map((item, index) => renderCard(item, index))}
          </View>
          </View>
          <View style={{justifyContent:"center", alignItems:"center"}}>
          <TouchableOpacity style={{backgroundColor:"#FAFAFA", height:35, width:153, alignItems:"center", justifyContent:"center", borderWidth:1,  borderColor:"#00000010", borderRadius:10, backgroundColor:"#FFFFFF"}}><Text style={{color:"#414141", fontWeight:"700", textAlign:"center"}}>Add items</Text></TouchableOpacity>
          </View>
        </View>
        </View>
        <View style={{justifyContent:"center", alignContent:"center", alignItems:"center"}}>
        <TouchableOpacity style={{backgroundColor:"#F6F6F6", borderWidth:1, borderColor:"#33333320", borderRadius:7, height:50, width:193, justifyContent:"center", marginVertical:"8%"}}>
       <Text style={{color:"#425343", fontSize:16, textAlign:"center"}}>Create new profile</Text>
        </TouchableOpacity>
        </View>
        <View>
            <Text style={{fontSize:16, color:"#414141",marginLeft:"6%", marginTop:"5%"}}>You may also like</Text>
            <View style={styles.cardsContainer}>
          <Container1/>
          <Container2/>
        </View>
        </View>
        <View>
            <Text style={{fontSize:16, color:"#414141",marginLeft:"6%", marginTop:"5%"}}>Saved products</Text>
            <View style={styles.cardsContainer}>
          <Container1/>
          <Container2/>
        </View>
        </View>
    </ScrollView>
  );
};

const Container1 = () => {
    const cardData1 = {
      imageSource: require('../assets/img/Glycel.png'),
      overlayImageSource: require('../assets/img/Union2.png'),
      discount: '30%',
      title: 'Product Title 1',
      label: 'Product Label 1',
      originalPrice1: 1000,
      discountPrice: 700,
      dropdownButtonText: 'Select Option 1',
    };
  
    return <Card cardData={cardData1} />;
  };
  
  const Container2 = () => {
    const cardData1 = {
      imageSource: require('../assets/img/Glycel.png'),
      overlayImageSource: require('../assets/img/Union2.png'),
      discount: '30%',
      title: 'Product Title 1',
      label: 'Product Label 1',
      originalPrice1: 1000,
      discountPrice: 700,
      dropdownButtonText: 'Select Option 1',
    };
  
    return <Card cardData={cardData1} />;
  };

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF"
  },
  header: {
    fontSize: 14, 
    marginVertical: 16,
    marginHorizontal: windowWidth * 0.03,
    color:"#33333380"
  },
  section: {
    justifyContent:"center",
    alignItems:"center"
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: '500',
    marginBottom: 8,
    marginHorizontal: windowWidth * 0.03,
  },
  menuContainer: {
    flexDirection: 'row',
  },
  menuOption: { 
    borderRadius: 6,
    borderWidth: 1,
    marginRight: 10,
    height:19,
    width:67,
    justifyContent:"center",
    alignItems:"center"
  },
  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap'
  },
  card: {
    height: 93,
    width: 111,
    borderWidth: 1,
    borderRadius: 6,
    borderColor: '#00000010',
    marginBottom: 10,
    overflow: "hidden",
  },
  cardTextContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  cardTitle: {
    fontSize: 10,
    color: "#333333",
    width:73,
    marginLeft:19,
  },
  viewedAgo: {
    fontSize: 7,
    color: "#ffffff",
    height: 20,
    width: '100%',
    backgroundColor: "#425343",
    textAlign: "center",
    marginTop:"6%",
    textAlignVertical:"center"
  },
  pContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    borderBottomColor: '#ccc',
    marginLeft:0,
    marginTop:3
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  originalPrice: {
    textDecorationLine: 'line-through',
    color: 'rgba(51, 51, 51, 0.8)', // #333333 with 80% opacity
    fontSize: 8,
    marginLeft:5
  },
  discountedPrice: {
    fontWeight: 'bold',
    color: 'rgba(51, 51, 51, 1)', // #333333 with 100% opacity
    fontSize: 11
  },
  overlayText: {
    position: 'absolute',
    top: 0, 
    left: 9, 
    color: '#000',
    fontSize: 8
  },
  cardsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',    
  },
  card1: {
    width: 152, 
    height: 175, 
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
  cardImage1: {
    width: 79,
    height: 98,
    resizeMode: 'cover',
    marginHorizontal:windowWidth*0.1
  },
  cardText1: {
    paddingLeft: 10,
    fontSize:14,
    fontWeight:'500',
    color:'#333333'
  },
  text1: {
    fontSize:14,
    color: 'rgba(51, 51, 51, 0.5)', // #333333 with 50% opacity
  },
  text21:{
    fontSize:12,
    color: 'rgba(51, 51, 51, 0.7)',
  },
  label:{
    fontSize:10,
    color: 'rgba(51, 51, 51, 0.7)',
    marginHorizontal:"7%"
  },
  overlayImage1: {
    position: 'absolute',
    top: 10, 
    left: 3,
    resizeMode: 'cover',
  },
  overlayText1: {
    position: 'absolute',
    top: 12, 
    left: 10, 
    color: '#000',
    fontSize: 8
  },
});

export default OrderProfile4;

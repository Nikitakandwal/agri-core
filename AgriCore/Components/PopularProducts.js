import React, { useState, useRef }  from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Modal, FlatList } from 'react-native';
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
        style={styles.buttonContainer}
        ref={buttonRef}
      >
        <Text style={styles.buttonText}>{selectedValue || 'options'}</Text>
        <Icon name={isDropdownOpen ? 'caret-up' : 'caret-down'} size={10} color="#000" />
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

const Price = ({ originalPrice, discountedPrice }) => {
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
  

const PopularCards = ({
  headingText,
  buttonText,
  card1Size,
  card2Size,
  card1Image,
  card1ImageStyle,
  card1Text,
  card1TextStyle,
  card2Image,
  card2ImageStyle,
  card2Text,
  card2TextStyle,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.heading}>{headingText}</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>{buttonText}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.cardsContainer}>
        <View style={[styles.card, { width: card1Size.width, height: card1Size.height }]}>
          <Image source={card1Image} style={[styles.cardImage, card1ImageStyle]} />
          <Image source={require("../assets/img/Union2.png")}  style={styles.overlayImage}/>
          <Text style={styles.overlayText}>11% off</Text>
          <Text style={[styles.cardText, card1TextStyle, { color: '#333333' }]}>
            {card1Text}
          </Text>
              <Text style={styles.text}>Sumitomo</Text>
             
              <Price originalPrice={939} discountedPrice={630} />
       </View>
        <View style={{ marginHorizontal: 8 }} />
        <View style={[styles.card, { width: card2Size.width, height: card2Size.height }]}>
          <Image source={card2Image} style={[styles.cardImage, card2ImageStyle]} />
          <Image source={require("../assets/img/Union2.png")}  style={styles.overlayImage}/>
          <Text style={styles.overlayText}>34% off</Text>
         
          <Text style={[styles.cardText, card2TextStyle, { color: '#333333' }]}>
            {card2Text}
          </Text>
       
          <Text style={styles.text}>FMC</Text>
          <Price originalPrice={220} discountedPrice={180} />
       </View>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginBottom: 20,
    marginTop:20
  },
  heading: {
    fontSize: 18,
    color: '#414141',
    width: 162,
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
  cardsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
  },
  card: {
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
  cardImage: {
    width: 95,
    height: 124,
    resizeMode: 'cover',
    marginHorizontal:24,
  },
  cardText: {
    paddingLeft: 8,
    fontSize:14,
    fontWeight:500,
  },
  text: {
    fontSize:12,
    color: 'rgba(51, 51, 51, 0.5)',
    marginLeft:8 // #333333 with 50% opacity
  },
  overlayImage: {
    position: 'absolute',
    top: 20, 
    left: 2,
    resizeMode: 'cover',
  },
  overlayText: {
    position: 'absolute',
    top: 22, 
    left: 7, 
    color: '#000',
    fontSize: 8
  },
  buttonContainer: {
    width: 70,
    height: 25,
    backgroundColor: '#ffffff',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 8,
    borderColor: '#0000001A',
    borderWidth: 0.5,
    borderRadius:3,
  },
  buttonText: {
    fontSize: 10,
    color: '#000',
  },
  modalContainer: {
    position: 'absolute',
    width: 70,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderColor: '#ccc',
    borderWidth: 1,
  },
  modalItem: {
    fontSize: 10,
    color: '#000',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  pContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    borderBottomColor: '#ccc',
    marginLeft:-10
  },
  priceContainer: {
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  originalPrice: {
    textDecorationLine: 'line-through',
    color: 'rgba(51, 51, 51, 0.8)', // #333333 with 80% opacity
    fontSize: 9,
  },
  discountedPrice: {
    fontWeight: 'bold',
    color: 'rgba(51, 51, 51, 1)', // #333333 with 100% opacity
    fontSize: 13,
  },
});

export default PopularCards;

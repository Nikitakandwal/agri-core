import React from 'react';
import { View, Text, Image, TouchableOpacity,Dimensions,  StyleSheet } from 'react-native';

const windowWidth = Dimensions.get("window").width;

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

const FourCards = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>
        Special discounts upto 60% off specially curated for you
      </Text>

      <View style={styles.cardsContainer}>
        <View style={styles.column}>
          <View style={styles.card}>
            <View style={styles.upperHalf}>
              <Text style={styles.quantityText}>100ml</Text>
              <Image source={require('../assets/img/Profex.png')} style={styles.image} />
              <Image source={require('../assets/img/Union2.png')} style={styles.overlayImage} />
              <Text style={styles.overlayText}>50% off</Text>
            </View>
            <View style={styles.lowerHalf}>
              <Text style={styles.productText}>Profex Super Insecticide</Text>
              <Text style={styles.brandText}>Nagarjuna</Text>
              <View style={styles.priceContainer}>
              <Price originalPrice={168} discountedPrice={84} />
                <TouchableOpacity style={styles.addButton}>
                  <Text style={styles.buttonText}>ADD +</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <View style={styles.card}>
            <View style={styles.upperHalf}>
              <Text style={styles.quantityText}>100ml</Text>
              <Image source={require('../assets/img/Profex.png')} style={styles.image} />
              <Image source={require('../assets/img/Union2.png')} style={styles.overlayImage} />
              <Text style={styles.overlayText}>50% off</Text>
            </View>
            <View style={styles.lowerHalf}>
              <Text style={styles.productText}>Profex Super Insecticide</Text>
              <Text style={styles.brandText}>Nagarjuna</Text>
              <View style={styles.priceContainer}>
              <Price originalPrice={168} discountedPrice={84} />
                <TouchableOpacity style={styles.addButton}>
                  <Text style={styles.buttonText}>ADD +</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.column}>
          <View style={styles.card}>
            <View style={styles.upperHalf}>
              <Text style={styles.quantityText}>100ml</Text>
              <Image source={require('../assets/img/Profex.png')} style={styles.image} />
              <Image source={require('../assets/img/Union2.png')} style={styles.overlayImage} />
              <Text style={styles.overlayText}>50% off</Text>
            </View>
            <View style={styles.lowerHalf}>
              <Text style={styles.productText}>Profex Super Insecticide</Text>
              <Text style={styles.brandText}>Nagarjuna</Text>
              <View style={styles.priceContainer}>
              <Price originalPrice={168} discountedPrice={84} />
                <TouchableOpacity style={styles.addButton}>
                  <Text style={styles.buttonText}>ADD +</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <View style={styles.card}>
            <View style={styles.upperHalf}>
              <Text style={styles.quantityText}>100ml</Text>
              <Image source={require('../assets/img/Profex.png')} style={styles.image} />
              <Image source={require('../assets/img/Union2.png')} style={styles.overlayImage} />
              <Text style={styles.overlayText}>50% off</Text>
            </View>
            <View style={styles.lowerHalf}>
              <Text style={styles.productText}>Profex Super Insecticide</Text>
              <Text style={styles.brandText}>Nagarjuna</Text>
              <View style={styles.priceContainer}>
              <Price originalPrice={168} discountedPrice={84} />
                <TouchableOpacity style={styles.addButton}>
                  <Text style={styles.buttonText}>ADD +</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </View>
      <TouchableOpacity style={styles.button}>
      <Text style={styles.buttonText2}>View all products</Text>
    </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 430,
    width:windowWidth*1,
    backgroundColor: '#E4E4E4',
    borderColor: 'rgba(0, 0, 0, 0.1)',
    borderWidth: 1,
    justifyContent:"center",
    alignItems:"center"
  },
  headerText: {
    fontSize: 11,
    color: 'rgba(65, 65, 65, 0.8)',
    height: 14,
    width: 287,
    textAlign:'center',
    margin:10
  },
  cardsContainer: {
    margin: 4,
    flexDirection: 'row',
  },
  card: {
    height: 141,
    width: 152,
    backgroundColor: '#FDFDFD',
    borderColor: 'rgba(0, 0, 0, 0.2)',
    borderWidth: 1,
    borderRadius:10, 
    marginHorizontal:8,
    marginTop:15,
    ...Platform.select({
      android: {
        elevation: 5,
      },
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
      },
    }),
  },
  upperHalf: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  quantityText: {
    fontSize: 8,
    color: '#333333',
    backgroundColor:'#D9D9D9',
    height:20,
    width:33,
    borderRadius:5,
    textAlign:'center',
    textAlignVertical:'center'
  },
  overlayImage: {
    position: 'absolute',
    top: 4,
    right: 4,
  },
  overlayText: {
    position: 'absolute',
    top: 6,
    right: 14,
    fontSize: 8,
    color: '#333333',
  },
  lowerHalf: {
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  productText: {
    fontSize: 10,
    color: '#333333',
  },
  brandText: {
    fontSize: 8,
    color: 'rgba(51, 51, 51, 0.5)',
  },
  priceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 4,
  },
  priceText: {
    fontSize: 10,
    color: '#333333',
  },
  addButton: {
    height: 25,
    width: 62,
    backgroundColor: '#FDFDFD',
    borderColor: 'rgba(51, 51, 51, 0.2)',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius:5
  },
  buttonText: {
    color: '#333333',
  },
  button: {
    height: 40,
    width: 152,
    backgroundColor: 'rgba(250, 250, 250, 1)',
    borderColor: 'rgba(0, 0, 0, 0.2)',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius:5,
    marginHorizontal:96,
    marginTop:16
  },
  buttonText2: {
    fontSize: 12,
    color: 'rgba(51, 51, 51, 1)',
    fontWeight:'bold'
  },
  pContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    borderBottomColor: '#ccc',
    marginLeft:1,
    marginTop:4,
    marginRight:15
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  originalPrice: {
    textDecorationLine: 'line-through',
    color: 'rgba(51, 51, 51, 0.8)', // #333333 with 80% opacity
    fontSize: 9,
    marginLeft:5
  },
  discountedPrice: {
    fontWeight: 'bold',
    color: 'rgba(51, 51, 51, 1)', // #333333 with 100% opacity
    fontSize: 11
  },
});

export default FourCards;

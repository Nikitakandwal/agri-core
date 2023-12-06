import {
  View,
  Image,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput, FlatList,
  Dimensions,
} from "react-native";
import Swiper from "react-native-swiper";
import React, { useState } from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import ProductRating from "./ProductRating";
import EIcon from "react-native-vector-icons/Entypo";
import ProductsYouMayLike from "./ProductsYouMayLike";
import CompareProducts from "./CompareProducts";
import ReviewSection from "./Review";

const { width } = Dimensions.get("window");

const CartButtonsSection = () => {
  return (
    <View style={styles.section}>
      <TouchableOpacity style={styles.btns} activeOpacity={0.7}>
        <Text style={styles.btnsText}>Add to Cart</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonQuickOrder} activeOpacity={0.7}>
        <Text style={styles.quickBtnText}>Quick Order</Text>
      </TouchableOpacity>
    </View>
  );
};

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


const SaveButtonIcon = () => {
  const [isSaved, setIsSaved] = useState(false);

  const handlePress = () => {
    setIsSaved(!isSaved);
    // Add your save logic here
  };
  

  return (
    <TouchableOpacity
      onPress={handlePress}
      activeOpacity={0.7}
      style={styles.icon}
    >
      <Icon
        name={isSaved ? "bookmark" : "bookmark-o"} // 'bookmark' for filled, 'bookmark-o' for outline
        size={30}
        color={isSaved ? "#6A9D6D" : "#6A9D6D"}
        // Fill color when saved, outline color when not saved
      />
    </TouchableOpacity>
  );
};

const onButtonPress = {};

const ProductPage = ({
  productImages,
  productName,
  rating,
  reviewCount,
  brand,
  deliveryDate,
  sizes,
  bulkSize,
  discountedPrice,
  price,
  productDescription,
  productFeatures,
  usage,
  reviews,
}) => {   
  const [activeTab, setActiveTab] = useState('description');
  const usageOn = activeTab === 'usage';
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };
  
  const dropdownData = ['Option 1', 'Option 2', 'Option 3']; 

  const selectOption = (option) => {
    setSelectedOption(option);
    setDropdownOpen(false);
  };

  const products = [
    {
      name: 'Product 1',
      brand: 'Brand A',
      deliveryBy: 'Delivery Service 1',
      size: 'Small',
      usage: 'Indoor',
      price: '$19.99',
    },
    {
      name: 'Product 2',
      brand: 'Brand B',
      deliveryBy: 'Delivery Service 2',
      size: 'Medium',
      usage: 'Outdoor',
      price: '$29.99',
    },
    {
      name: 'Product 3',
      brand: 'Brand C',
      deliveryBy: 'Delivery Service 3',
      size: 'Large',
      usage: 'Both',
      price: '$39.99',
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.container2}>
      <Swiper
        style={styles.swiperContainer}
        showsButtons={false}
        showsPagination={true}
        dotStyle={styles.paginationDot}
        activeDotStyle={styles.activePaginationDot}
      >
        {productImages.map((image, index) => (
          <Image key={index} source={image} style={styles.productImage} />
        ))}
      </Swiper>
      <SaveButtonIcon />
      <View style={styles.productInfo}>
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.productTitle}>{productName}</Text>
          <ProductRating rating={rating} reviewCount={reviewCount} />
        </View>
        <Text style={styles.brand}>{brand}</Text>
      </View>
      <View style={{ flexDirection: "row" }}>
        <Text style={{marginVertical:'2%'}}>PinCode:</Text>
        <View style={styles.pinCode}>
          <TextInput style={styles.input} placeholder="Enter pincode" />
          <TouchableOpacity style={styles.button} onPress={onButtonPress}>
            <Text style={styles.buttonText}>Apply</Text>
          </TouchableOpacity>
        </View>
        <EIcon name="share" size={26} color="#0590CC" />
      </View>

      <Text
        style={{
          fontSize: 13,
          color: "rgba(51, 51, 51, 0.7)",
          marginVertical: '3%',
        }}
      >
        Delivery by{" "}
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 16,
            color: "rgba(51, 51, 51, 1)",
          }}
        >
          {deliveryDate}
        </Text>
      </Text>
      <Text style={{ fontSize: 10, color: "rgba(51, 51, 51, 0.7)" }}>
        (fast delivery available)*
      </Text>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginVertical: 10,
        }}
      >
        <Text style={{ fontSize: 16 }}>Size:</Text>
        <Text
          style={{
            textAlign: "right",
            color: "rgba(51, 51, 51, 0.4)",
            fontSize: 10,
          }}
        >
          {Object.keys(sizes)[0]}{" "}
          <Text style={{ color: "#333333", fontSize: 14 }}>
            {sizes[Object.keys(sizes)[0]]}{" "}
          </Text>
          <Text>(19% off)</Text>
        </Text>
      </View>
      <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
        <Text
          style={{
            height: 32,
            textAlignVertical: "center",
            textAlign: "center",
            width: '31%',
            color: "rgba(51, 51, 51, 0.4)",
            fontSize: 10,
            borderWidth: 1,
            borderColor: "rgba(51,51,51,0.1)",
            borderRadius: 7,
          }}
        >
          {Object.keys(sizes)[1]}{" "}
          <Text style={{ color: "#333333", fontSize: 14 }}>
            {sizes[Object.keys(sizes)[1]]}{" "}
          </Text>
          <Text>(35% off)</Text>
        </Text>
        <Text
          style={{
            height: 42,
            textAlignVertical: "center",
            textAlign: "center",
            width: '24%',
            color: "rgba(51, 51, 51, 0.4)",
            fontSize: 10,
            borderWidth: 1,
            borderColor: "rgba(51,51,51,0.1)",
            borderRadius: 7,
          }}
        >
          {Object.keys(sizes)[2]}{" "}
          <Text style={{ color: "#333333", fontSize: 14 }}>
            {sizes[Object.keys(sizes)[2]]}{" "}
          </Text>
          <Text>(19% off)</Text>
        </Text>
        <Text
          style={{
            height: 42,
            textAlignVertical: "center",
            textAlign: "center",
            width: '24%',
            color: "rgba(51, 51, 51, 0.4)",
            fontSize: 10,
            borderWidth: 1,
            borderColor: "rgba(51,51,51,0.1)",
            borderRadius: 7,
          }}
        >
          {Object.keys(sizes)[3]}{" "}
          <Text style={{ color: "#333333", fontSize: 14 }}>
            {sizes[Object.keys(sizes)[3]]}{" "}
          </Text>
          <Text>(19% off)</Text>
        </Text>
      </View>
      <View style={{ marginVertical: '4%', flexDirection: "row", height:90 }}>
        <Text style={{ fontSize: 16, marginVertical:'2%' }}>Bulk Size:</Text>
        <View style={styles.dropdownContainer}>
        <TouchableOpacity
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          height: 42,
          width: 133,
          borderWidth: 1,
          borderColor: 'rgba(51,51,51,0.1)',
          borderRadius: 7,
          padding: 5,
        }}
        onPress={toggleDropdown}
      >
        <View style={{ flex: 1 }}>
          <Text style={{ color: 'rgba(51, 51, 51, 0.4)', fontSize: 10 }}>
            {bulkSize[0]} {'   '}
            <Text style={{ color: '#333333', fontSize: 14 }}>{bulkSize[1]}</Text>{' '}
          </Text>
          <Text style={{ color: 'rgba(51, 51, 51, 0.4)', fontSize: 10 }}>
            ({bulkSize[2]} off) {' '}
            {bulkSize[3]}
          </Text>
        </View>
        <Image
          source={require('../assets/img/dropdown.png')} // Replace with your dropdown icon
        />
      </TouchableOpacity>

      {isDropdownOpen && (
        <View style={styles.dropdown}>
          <FlatList
            data={dropdownData}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => selectOption(item)}>
                <Text style={{ paddingVertical: 8 }}>{item}</Text>
              </TouchableOpacity>
            )}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      )}
 
      <View style={styles.selectedOptionContainer}>
        <Text style={styles.selectedOptionText}>{selectedOption || ''}</Text>
      </View>
      
    </View>
    <Price originalPrice={price} discountedPrice={discountedPrice} />
   
    </View>
    <View style={{height:30, width:'95%', flexDirection:'row', justifyContent:'center'}}>
      <Text style={{fontSize:9.5, color:'#333333', backgroundColor:'#F4D639', height:30, width:'65%', borderTopLeftRadius:8, textAlignVertical:'center',textAlign:"center",borderBottomLeftRadius:8}}>Save more: ₹100 off on orders above ₹1500</Text>
      <Text style={{fontSize:8, color:'#414141', backgroundColor:'#ECECEC', height:30,  textAlignVertical:'center', padding:'3%', textAlign:"center"}}>GET100</Text><Text style={{fontSize:10, color:'#425343', fontWeight:'bold',  backgroundColor:'#ECECEC',paddingHorizontal:'4%',textAlign:"center", height:30, borderTopRightRadius:8, borderBottomRightRadius:8, textAlignVertical:'center'}}>Apply</Text>
      </View>
</View>
      <View style={{height:632, width: width, backgroundColor:'#F0F0F0', justifyContent:'center', alignContent:'center'}}>
      <View style={styles.productContainer}> 
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity
          style={{
            backgroundColor: activeTab === 'description' ? '#6A9D6D' : '#ffffff',
            width: '50%',
            height: 62,
            borderTopLeftRadius: 10,
            borderBottomLeftRadius: 10,
            justifyContent:'center'
          }}
          onPress={() => setActiveTab('description')}
        >
          <Text style={{ color: activeTab === 'description' ? '#ffffff' : '#414141', fontSize: 16, textAlign: 'center', fontWeight:'bold'  }}>Description</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: activeTab === 'usage' ? '#6A9D6D' : '#ffffff',
            width: '50%',
            height: 62,
            borderTopRightRadius: 10,
            borderBottomRightRadius: 10,
            borderColor: 'rgba(0, 0, 0, 0.1)',
            borderWidth: 0.4,
            justifyContent:'center'
          }}
          onPress={() => setActiveTab('usage')}
        >
          <Text style={{ color: activeTab === 'usage' ? '#ffffff' : '#414141', fontSize: 16, textAlign: 'center', fontWeight:'bold'}}>Usage</Text>
        </TouchableOpacity>
      </View>

      {usageOn ? (
        <View>
          <Text>{usage}</Text>
          {/* Additional content for Usage tab */}
        </View>
      ) : (
        <View style={{marginVertical:20, marginHorizontal:10}}>
          <Text style={{fontWeight:'bold', fontSize:16, marginVertical:20}}>Product Description</Text>
          <Text style={{fontWeight:'bold', fontSize:14, color:'rgba(51,51,51,0.8)'}}>{productDescription}</Text>
          <Text style={{fontWeight:'bold', fontSize:16, marginVertical:20}}>Features</Text>
          <Text style={{ fontSize:14, color:'rgba(51,51,51,0.8)'}}>{productFeatures}</Text>
        </View>
      )}
    </View>
      </View>
      <ProductsYouMayLike
        title="Products you may like"
        viewAllText="View all"
        products={productsData}
      />
     <CompareProducts products={products} />
     <ReviewSection/>
     <CartButtonsSection/>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#FFFFFF'
  },
  container2:{
    padding: 16,
  },
  swiperContainer: {
    height: 276,
  },
  productInfo: {
    marginBottom: 16,
  },
  productTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#414141",
    width: "67%",
  },
  brand: {
    fontSize: 16,
    color: "rgba(51, 51, 51, 0.6)",
    fontWeight: "600",
    width:'60%',
    marginTop: '-2%',
  },
  icon: {
    position: "absolute",
    right: 10,
    height: 49,
    width: '12%',
    backgroundColor: "#F0F0F0",
    justifyContent: "center",
    alignItems: "center",
    top:'1%',
    borderRadius:5
  },
  paginationDot: {
    width: 18.71,
    height: 3,
    borderRadius: 5,
  },
  activePaginationDot: {
    width: 18.71,
    height: 3,
    borderRadius: 5,
    backgroundColor: "#777777",
  },
  pinCode: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 3,
    borderColor: "rgba(51, 51, 51, 0.1)",
    height: '70%',
    width: '60%',
    marginHorizontal: '6%',
    fontSize: 14,
    marginBottom: '4%',
  },
  input: {
    width: '50%',
    fontSize: 10, 
  },
  button: {
    backgroundColor: "#6A9D6D",
    borderTopRightRadius: 3,
    borderBottomRightRadius: 3,
    height: '100%',
    width: '50%', 
  },
  buttonText: {
    color: "#FFFFFF",
    marginVertical:'6%',
    textAlign: "center",
    fontSize: 10,
    fontWeight: "500",
  },
  dropdownContainer: {
    position: 'relative',
    marginHorizontal:'9%'
  }, 
  dropdown: {
    position: 'absolute', 
    left: 0,
    width: '100%',
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'rgba(51,51,51,0.1)',
    borderRadius: 7,
    padding: 5,
    zIndex: 1,
  },
  selectedOptionContainer: {
    marginTop: 5,
    padding: 5,
  },
  selectedOptionText: {
    color: '#333333',
    fontSize: 14,
  },
  pContainer: {
    flexDirection: 'row', 
    borderBottomColor: '#ccc',
    marginHorizontal:'3%', 
    marginTop:'1.5%'
  },
  priceContainer: {
    flexDirection: 'row',
  },
  originalPrice: {
    textDecorationLine: 'line-through',
    color: 'rgba(51, 51, 51, 0.8)', // #333333 with 80% opacity
    fontSize: 14,
    marginLeft:5
  },
  discountedPrice: {
    fontWeight: 'bold',
    color: 'rgba(51, 51, 51, 1)', // #333333 with 100% opacity
    fontSize: 20
  },
  productContainer:{
    width: width * 0.95, // Use 95% of the screen width
    height: 567,
    backgroundColor: '#ffffff',
    borderRadius: 13,
    marginHorizontal: '2.5%', 
  ...Platform.select({
      ios: {
        shadowColor: 'rgba(0, 0, 0, 0.1)',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
      },
      android: {
        elevation: 5,
      }, 
  })
},
section: {
  height: 83,
  width: '100%',
  backgroundColor: '#E8ECE6', 
  flexDirection: 'row',
  justifyContent: 'space-around',
  alignItems: 'center',
  paddingHorizontal: 16 
},
btns: {
  height: 41,
  width: '45%',
  backgroundColor: '#FFFFFF',
  borderColor: '#00000020',
  borderWidth: 1,
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: 5
},
quickBtnText:{
  color:"#ffffff",
  fontSize: 14,
  fontWeight:'bold'
},
buttonQuickOrder: {
  height: 41,
  width: '45%',
  backgroundColor: '#425343',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: 5
},
btnsText: {
  fontSize: 14,
  color:'rgba(65, 65, 65, 0.8)',
  fontWeight:'bold'
},
});

export default ProductPage;

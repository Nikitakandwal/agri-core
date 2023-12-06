import { ScrollView, StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native'
import React, {useState} from 'react'
import Header from './Header'
import BreadCrumb from './BreadCrumb'
import Swiper from 'react-native-swiper';
import ProductRating from './ProductRating';
import { biddingProduct } from '../biddingProduct';
import { Icon } from 'react-native-elements';
import EIcon from "react-native-vector-icons/Entypo";


const BiddingPage = () => {
  const [inputText, setInputText] = useState('');

const handleInputChange = (text) => {
  setInputText(text);
};

const onButtonPress = {};

const BidButton = () => {
  return (
    <View style={styles.section}>
      <TouchableOpacity style={styles.btns} activeOpacity={0.7}>
        <Text style={styles.btnsText}>2nd</Text>
        <Text style={{color:'#33333350', fontSize:12}}>Your position</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonQuickOrder} activeOpacity={0.7}>
        <Text style={styles.quickBtnText}>Bid Amount</Text>
      </TouchableOpacity>
    </View>
  );
};
  return (
    <ScrollView style={styles.container}>
       <Header/>
       <BreadCrumb/>
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
      <EIcon name="share" style={styles.icon} size={24} color="#0590CC" />
   
      <View style={styles.productInfo}>
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.productTitle}>{productName}</Text>
          <ProductRating rating={rating} reviewCount={reviewCount} />
        </View>
        <Text style={styles.brand}>{brand}</Text>
      </View>
      <View style={{height:69, width:'93%', borderColor:'rgba(51,51,51,0.2)', borderWidth:1, borderRadius:10, padding:10, marginHorizontal:'3.3%'}}>
        <Text style={{color:'rgba(51,51,51,0.8)', fontSize:12, width:'80%' }}>Dr Flower - Flowering Agent , one of the best organic flowering agent for increasing the flowering of crops .
</Text>
      </View>
      <View style={{flexDirection:'row', justifyContent:'space-between', marginHorizontal:'4%', marginVertical:'4%'}}>
        <Text style={{fontSize:16, color:'#333333', fontWeight:'bold'}}>MRP:</Text>
      <View style={{flexDirection:'row', justifyContent:'space-evenly'}}>
      <TouchableOpacity style={{height:28, width:'25%', backgroundColor:'#6A9D6D', flexDirection:'row', justifyContent:'space-around', borderRadius:5}}>
        <Text style={{fontSize:8, color:'#FFFFFF80', textAlignVertical:'center'}}>{Object.keys(sizes)[0]}</Text>
        <Text style={{fontSize:12, color:"#FFFFFF", textAlignVertical:'center'}}>{sizes[Object.keys(sizes)[0]]}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{height:28, width:'25%',borderColor:'#33333320', borderWidth:1, flexDirection:'row', justifyContent:'space-around', borderRadius:5}}>
        <Text style={{fontSize:8, color:'#33333340', textAlignVertical:'center'}}>{Object.keys(sizes)[1]}</Text>
        <Text style={{fontSize:12, color:"#333333", textAlignVertical:'center'}}>{sizes[Object.keys(sizes)[1]]}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{height:28, width:'25%',borderColor:'#33333320', borderWidth:1, flexDirection:'row', justifyContent:'space-around', borderRadius:5}}>
        <Text style={{fontSize:8, color:'#33333340', textAlignVertical:'center'}}>{Object.keys(sizes)[2]}</Text>
        <Text style={{fontSize:12, color:"#333333", textAlignVertical:'center'}}>{sizes[Object.keys(sizes)[2]]}</Text>
      </TouchableOpacity>
      </View>
      </View>
      <View style={{flexDirection:'row', marginHorizontal:'4%', marginVertical:'4%'}}> 
      <Text style={{fontSize:14, color:'#333333'}}>Bid Start date</Text>
      <Text style={{fontSize:14, color:'#333333', fontWeight:'bold', marginHorizontal:'6%'}}>{BidDate}</Text>
      </View>
      <View style={{height:'8%', width:325, borderColor:'#00000020', borderWidth:1, borderRadius:14, marginHorizontal:"5%", marginVertical:'4%', flexDirection:'row', justifyContent:'space-around', paddingVertical:'5%'}}>
          <View style={{height:59, width:50, justifyContent:'center',}}><Text style={{textAlign:'center', fontSize:16, fontWeight:'bold'}}>₹{StartingBid}</Text>
          <Text style={{textAlign:'center', fontSize:12, color:'#333333'}}>Starting Bid</Text>
          </View>
          <View style={{height:59, width:50, justifyContent:'center',}}><Text style={{textAlign:'center', fontSize:16, fontWeight:'bold'}}>{bidsReceived}</Text>
          <Text style={{textAlign:'center', fontSize:12, color:'#333333'}}>Bid Received</Text>
          </View>
          <View style={{height:59, width:51, justifyContent:'center',}}><Text style={{textAlign:'center', fontSize:16, fontWeight:'bold'}}>₹{Highest[1]}</Text>
          <Text style={{textAlign:'center', fontSize:12, color:'#333333'}}>{Highest[0]}</Text><Text style={{textAlign:'center', fontSize:12, color:'#333333'}}>(Highest)</Text>
          </View>
      </View>
      <View style={{flexDirection:'row', marginHorizontal:'4%', marginVertical:'4%'}}> 
      <Text style={{fontSize:14, color:'#333333'}}>Bid End date</Text>
      <Text style={{fontSize:14, color:'#333333', fontWeight:'bold', marginHorizontal:'6%'}}>{BidEndDate}</Text>
      </View>
      <View style={{marginVertical:'3%'}}>
        <Text style={{fontSize:14, color:'#333333', fontWeight:'bold', marginHorizontal:'4%', }}>Quick Bid</Text>
        <View style={{flexDirection:'row', justifyContent:'space-evenly'}}>
          <TouchableOpacity style={{width:99, height:28, backgroundColor:'#6A9D6D', borderRadius:5, justifyContent:'center', marginVertical:'4%'}}>
                <Text style={{textAlign:'center', fontSize:14, color:'#FFF', fontWeight:"bold"}}>₹{QuickBid[0]}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{width:99, height:28, borderColor:'#00000020',borderWidth:1, borderRadius:5, justifyContent:'center', marginVertical:'4%'}}>
                <Text style={{textAlign:'center', fontSize:14, color:'#333333'}}>₹{QuickBid[1]}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{width:99, height:28, borderColor:'#00000020',borderWidth:1, borderRadius:5, justifyContent:'center', marginVertical:'4%'}}>
                <Text style={{textAlign:'center', fontSize:14, color:'#333333'}}>₹{QuickBid[2]}</Text>
          </TouchableOpacity>
        </View>
        <View style={{flexDirection:'row', justifyContent:'space-evenly'}}>
        <TouchableOpacity style={{width:99, height:28, borderColor:'#00000020',borderWidth:1, borderRadius:5, justifyContent:'center'}}>
                <Text style={{textAlign:'center', fontSize:14, color:'#333333'}}>₹{QuickBid[3]}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{width:99, height:28, borderColor:'#00000020',borderWidth:1, borderRadius:5, justifyContent:'center'}}>
                <Text style={{textAlign:'center', fontSize:14, color:'#333333'}}>₹{QuickBid[4]}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{width:99, height:28, borderColor:'#00000020',borderWidth:1, borderRadius:5, justifyContent:'center'}}>
                <Text style={{textAlign:'center', fontSize:14, color:'#333333'}}>₹{QuickBid[5]}</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{marginVertical:'4%', flexDirection:'row'}}>
      <Text style={{fontSize:14, color:'#333333', fontWeight:'bold', marginHorizontal:'4%', marginVertical:'1%'}}>Custom Bid:</Text>
      <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
        <TextInput
          style={{ 
            height: 28,
            borderColor: '#00000020',
            borderWidth: 1,
            width:'60%',
            borderRadius:5,
            paddingLeft:10
          }}
          placeholder="₹410"
          onChangeText={handleInputChange}
          value={inputText}
        />
        <Icon
          name="pencil"
          type="font-awesome"
          color="#414141" 
          size={12}
          containerStyle={{ position: 'absolute', right: '45%' }}
        />
      </View>
      </View>
      <View style={{ flexDirection: "row", marginVertical:'2%' }}>
        <Text style={{marginVertical:'2%', fontSize:14, color:'#333333', fontWeight:'bold', marginLeft:'4%', marginVertical:'1%'}}>PinCode:</Text>
        <View style={styles.pinCode}>
          <TextInput style={styles.input} placeholder="Enter pincode" />
          <TouchableOpacity style={styles.button} onPress={onButtonPress}>
            <Text style={styles.buttonText}>Apply</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ marginHorizontal:'4%', marginVertical:'4%'}}> 
      <View  style={{flexDirection:'row'}}>
      <Text style={{fontSize:14, color:'#33333370', fontWeight:'500'}}>Delivery by</Text>
      <Text style={{fontSize:14, color:'#333333', fontWeight:'bold', marginHorizontal:'1%'}}>{DeliveryDate}</Text>
      </View>
      <Text style={{fontSize:10, color:'#33333370'}}>(fast delivery available)*</Text>
      </View>
      <View style={{ height: 45,marginHorizontal:'4%', width: '127' }}>
  <Text style={{ color: '#33333360', fontSize: 16 }}>Free Malaysia Trip</Text>
</View>
<BidButton/>
    </ScrollView>
  )
}

export default BiddingPage

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#ffffff'
    },
    swiperContainer: {
        height: 276,
      },
      paginationDot: {
        width: 10,
        height: 10,
        borderRadius: 5,
      },
      activePaginationDot: {
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: "#777777",
      },
      productInfo: {
        marginBottom: 16,
        marginHorizontal:'3%'
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
      section: {
        height: 83,
        width: '100%',
        backgroundColor: '#E8ECE6', 
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingHorizontal: 16 , 
      },
      btns: {
        height: 41,
        width: '45%',   
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5
      },
      quickBtnText:{
        color:"#ffffff",
        fontSize: 16,
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
        fontSize: 18,
        color:'rgba(65, 65, 65, 0.8)',
        fontWeight:'bold'
      },
      icon: {
        position: "absolute",
        right: 10,
        height: 49,
        width: '12%',
        backgroundColor: "#F0F0F0",
        justifyContent: "center",
        alignItems: "center",
        textAlign:'center',
        textAlignVertical:'center',
        top:'10%',
        borderRadius:5
      },
})
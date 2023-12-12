import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Dimensions } from 'react-native'
import React from 'react'
import Header from '../Components/Header'
import BreadCrumb from '../Components/BreadCrumb'
import TrailHistory from '../Components/TrailHistory'
import FourCards from '../Components/FourCards'
const windowWidth = Dimensions.get("window").width;

const Trails = () => {
  const card1Data = {
    category: "Combined",
    imageSource: require("../assets/img/fungicide1.png"),
    quantity: "1 Ltr",
    purchasedDate: "10/07/23",
    text:"Syngeta",
    subtext: "Simodis Fungicides",
    subtext2: "Received with Herbicides",
    buttonText: "Your Button Text 1",
  };

  const card2Data = {
    category: "Combined",
    imageSource: require("../assets/img/fungicide1.png"),
    quantity: "2 Ltr",
    purchasedDate: "11/07/23",
    text:"Syngeta",
    subtext: "Simodis Fungicides",
    subtext2: "Another Supplier",
    buttonText: "Your Button Text 2",
  };


  return (
    <ScrollView style={{backgroundColor:"#FFF"}}>
      <Header/>
      <BreadCrumb/>
      <TrailHistory
      title="Trail History"
      card1Data={card1Data}
      card2Data={card2Data}
    />
    <TrailHistory
      title="New Trails"
      card1Data={card1Data}
      card2Data={card2Data}
    />
      <View>
        <Text style={{marginHorizontal:windowWidth*0.06, fontSize:16, fontWeight:"600", marginTop:"10%"}}>Special Deals</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.clearanceButton}>
          <Text style={styles.buttonText1}>Clearance deals</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.biddingButton}>
          <Text style={styles.buttonText2}>Bidding</Text>
        </TouchableOpacity>
      </View>
      </View>
    
    <FourCards/>
    </ScrollView>
  )
}

export default Trails

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 16,
    marginBottom: 25,
    marginTop:30
  },
  clearanceButton: {
    width: '48%',
    height: 40,
    backgroundColor: '#425343',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius:8
  },
  biddingButton: {
    width: '48%',
    height: 40,
    backgroundColor: 'F6F6F6',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.1)',
    borderRadius:8
  },
  buttonText2: {
    fontSize: 14,
    color: 'rgba(51, 51, 51, 0.7)' ,
    fontWeight: 'bold'
  },
  buttonText1: {
    fontSize: 14,
    color: '#ffffff' ,
    fontWeight: 'bold'
  },
})
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import NewsAndUpdate from './NewsAndUpdates'

const BrowseProducts = () => {
  return (
    <View style={styles.container}>
        <View style={styles.mainContent}>
      <NewsAndUpdate/>
      <View style={styles.lowerHalf}>
        <View style={styles.icons}>
            <Image source={require('../assets/img/icons.png')} />
            <Image source={require('../assets/img/icons2.png')} style={{marginTop:40}}/>
        </View>
        <TouchableOpacity style={styles.button}>
      <Text style={styles.buttonText}>Browse Products</Text>
    </TouchableOpacity>
      </View>
      </View>
    </View>
  )
}

export default BrowseProducts;


const styles = StyleSheet.create({
   container:{
    height:632,
    width:375,
    backgroundColor:'#D9D9D9',
    flex: 1,
    justifyContent: 'center', 
    alignItems: 'center',
   },
   mainContent:{
    backgroundColor:'#ffffff',
    height:565,
    width:320,
    marginRight:10,
    paddingTop:20,
    borderRadius:10,
   },
   lowerHalf:{
    justifyContent: 'center', 
    alignItems: 'center',
    
   },
   icons:{
    marginTop:40,
    justifyContent: 'center', 
    alignItems: 'center',
   },
   button: {
    width: 193,
    height: 50,
    backgroundColor: '#425343',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius:10,
    marginTop:30
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 15,
    fontWeight: 'bold',
  }
})
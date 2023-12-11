import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons'; 


const Name = ({name, location}) => {
  return (
    <View style={{flexDirection:"row", backgroundColor:"#FFFFFF", height:119, width:"100%", padding:30, borderBottomColor:"#00000040", borderBottomWidth:1}}>
        <Image source={require('../assets/img/profilePicture.png')} style={{marginHorizontal:"6%"}}/>
      <View style={{marginVertical:"2%"}}><Text style={{fontSize:16, color:"#333333", fontWeight:"600"}}>{name} <MaterialCommunityIcons name="pencil" size={18} color="black" /></Text><Text style={{fontWeight:"400", color:"#333333"}}>{location}</Text></View>
      <Ionicons name="settings-sharp" size={35} color="black" style={{marginHorizontal:"19%", marginVertical:"2%"}}/>
    </View>
  )
}

export default Name

const styles = StyleSheet.create({})
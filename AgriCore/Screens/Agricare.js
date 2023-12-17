import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import Header from '../Components/Header'
import BreadCrumb from '../Components/BreadCrumb'
import SearchBar from '../Components/SearchBar'
import CarouselComponent from '../Components/CarouselComponent'

export default function Agricare() {
  return (
    <ScrollView>
      <BreadCrumb/>
      <SearchBar placeholder={"Pesticides, herbicides"}/>
      <View style={{marginVertical:"5%"}}>
      <CarouselComponent/>
      </View>
      <Text style={{textAlign:"center"}}>Under construction</Text>
    </ScrollView>
  )
}

const styles = StyleSheet.create({})
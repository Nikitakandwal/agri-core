import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import Header from '../Components/Header'
import BreadCrumb from '../Components/BreadCrumb'
import TrailHistory from '../Components/TrailHistory'

const Trails = () => {
  return (
    <ScrollView>
      <Header/>
      <BreadCrumb/>
      <TrailHistory/>
    </ScrollView>
  )
}

export default Trails

const styles = StyleSheet.create({})
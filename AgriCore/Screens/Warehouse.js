import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../Components/Header'
import BreadCrumb from '../Components/BreadCrumb'
import SearchBar from '../Components/SearchBar'
import CarouselComponent from '../Components/CarouselComponent'
import SalesStats from '../Components/SalesStats'
import SalesHistory from '../Components/SalesHistory'
import Inventory from '../Components/Inventory'
import RecentPurchases from '../Components/RecentPurchases'
import NewArrivalPage from '../Components/NewArrivalsPage'

const Warehouse = () => {
     // Mock data for demonstration
  const todaySale = {
    units: 100,
    cost: '$500',
  };

  const pendingOrders = {
    count: 20,
    price: '$200',
  };

  const totalStockUnits = 500;
  const leastSoldProduct = 'Product X';
  const todaysEarnings = '$700';

  return (
    <ScrollView>
      <Header/>
      <BreadCrumb/>
      <SearchBar placeholder={"Pesticides, herbicides"}/>
      <CarouselComponent/>
      <Text>Sales statistics</Text>
      <SalesStats
        todaySale={todaySale}
        pendingOrders={pendingOrders}
        totalStockUnits={totalStockUnits}
        leastSoldProduct={leastSoldProduct}
        todaysEarnings={todaysEarnings}
      />
      <Text>Sales History</Text>
      <SalesHistory/>
      <Text>Inventory</Text>
      <Inventory/>
      <RecentPurchases/>
    </ScrollView>
  )
}

export default Warehouse

const styles = StyleSheet.create({})
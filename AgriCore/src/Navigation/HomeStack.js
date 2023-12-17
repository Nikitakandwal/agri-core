import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BuyPage from '../../Screens/BuyPage';
import HomePage from '../../Screens/HomePage';
import ProductsCatalogPage from '../../Screens/ProductsCatalogPage';
import NewArrivalsAll from '../../Screens/NewArrivalsAll';
import ProductPage from '../../Components/Product';
import CartPage from '../../Screens/CartPage';
import AddAddress from '../../Components/AddAddress';
const Stack = createNativeStackNavigator();

const HomeStack = () => {
    return (
        <Stack.Navigator initialRouteName='Home' screenOptions={{ headerShown: false }}>
            <Stack.Screen name='Home' component={HomePage} />
            <Stack.Screen name='BuyPage' component={BuyPage} />
            <Stack.Screen name='ProductsCatalogPage' component={ProductsCatalogPage} />
            <Stack.Screen name='NewArrivalsAll' component={NewArrivalsAll} />
            <Stack.Screen name='ProductPage' component={ProductPage} />
            <Stack.Screen name='CartPage' component={CartPage} />
            <Stack.Screen name='AddAddress' component={AddAddress} />





        </Stack.Navigator>
    )
}

export default HomeStack
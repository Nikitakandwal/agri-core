// App.js
import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "./Screens/LoginScreen.js";
import RegistrationScreen from "./Screens/RegistrationScreen.js";
import HomePage from "./Screens/HomePage.js";
import BuyPage from "./Screens/BuyPage.js";
import ProductsCatalogPage from "./Screens/ProductsCatalogPage.js";
import HerbicidesAll from "./Screens/HerbicidesAll.js";
import NewArrivalsAll from "./Screens/NewArrivalsAll.js";
import ProductsPage from "./Screens/ProductsPage.js";
import BiddingPage from "./Components/BiddingPage.js";
import CartPage from "./Screens/CartPage.js";
import Landing from "./Screens/Landing.js";
import QuickOrder from "./Screens/QuickOrder.js";
import AddAddress from "./Components/AddAddress.js";
import SearchPage from "./Screens/SearchPage.js";
import OrderProfiles from "./Screens/OrderProfiles.js";
import OrderProfile4 from "./Components/OrderProfile4.js";
import OrderProfile5 from "./Components/OrderProfile5.js";
import CreateProfiles from "./Components/CreateProfiles.js";
import SupportPage from "./Screens/SupportPage.js";
import Account from "./Screens/Account.js";
import Trails from "./Screens/Trails.js";
import Warehouse from "./Screens/Warehouse.js";

const Stack = createStackNavigator();

const App = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator>
       <Stack.Screen
          name="Warehouse"
          component={Warehouse}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

// App.js
import React, { createContext, useState } from "react";
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
import Search from "./Screens/Search.js";
import Filter from "./Screens/Filter.js";

const Stack = createStackNavigator();
export const GlobalContext = createContext();

const App = () => {
  const [user, setUser] = useState(false);

  const updateAuth = (value) => {
    setUser(value);
  };

  return (
    // <GlobalContext.Provider
    //   value={{
    //     user: user,
    //     setLoggedInUser: userObj => { setUser(userObj) },
    //   }}>
    //   <NavigationContainer>
    //     {
    //       !user ?
    //         <Stack.Navigator>
    //           <Stack.Screen
    //             name="Landing"
    //             component={Landing}
    //             options={{
    //               headerShown: false,
    //             }}
    //           />
    //           <Stack.Screen
    //             name="LoginScreen"
    //             component={LoginScreen}
    //             options={{
    //               headerShown: false,
    //             }}
    //           />
    //           <Stack.Screen
    //             name="RegistrationScreen"
    //             component={RegistrationScreen}
    //             options={{
    //               headerShown: false,
    //             }}
    //           />
    //         </Stack.Navigator>
    //         :
    //         <Stack.Navigator>
    //           <Stack.Screen
    //             name="HomePage"
    //             component={HomePage}
    //             options={{
    //               headerShown: false,
    //             }} />
    //         </Stack.Navigator>

    //     }

    //   </NavigationContainer>
    // </GlobalContext.Provider>
    // <Filter />
    <Search />
  );
};

export default App;

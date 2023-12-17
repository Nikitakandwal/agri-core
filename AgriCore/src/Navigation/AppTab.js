import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image, Text, View } from 'react-native';
import Header from '../../Components/Header.js';
import Warehouse from '../../Screens/Warehouse.js';
import Agricare from '../../Screens/Agricare.js';
import Account from '../../Screens/Account.js';
import Home from '../Stacks/HomeStack.js';
import Buy from '../Stacks/BuyStack.js';
import HomeStack from './HomeStack.js';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const AppTab = () => {
  return (
    <NavigationContainer>
      {/* <View style={{ flex: 1, zIndex: 1 }}> */}
      {/* <Header /> */}
      {/* <View style={{ flex: 1, position: 'relative', zIndex: 0 }}> */}
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarStyle: [{ elevation: 0, backgroundColor: "white", borderTopWidth: 1, borderTopColor: "#808080", height: 80, paddingVertical: 15 },],

          headerShown: false,
          tabBarShowLabel: false, showIcon: false,
          // tabBarIcon: ({ color }) => {
          //   let iconName;

          //   if (route.name === 'Home') {
          //     iconName = require('../../assets/icons/homeTab.png');
          //   } else if (route.name === 'BuyStack') {
          //     iconName = require('../../assets/icons/badTab.png');
          //   } else if (route.name === 'Warehouse') {
          //     iconName = require('../../assets/icons/warehouseTabIcon.png');
          //   } else if (route.name === 'Agricare') {
          //     iconName = require('../../assets/icons/plant.png');
          //   } else if (route.name === 'Account') {
          //     iconName = require('../../assets/icons/dad.png');
          //   }

          //   return <Image source={iconName} style={{ tintColor: color }} />;
          // },
        })}
      // tabBarStyle={{
      //   backgroundColor: '#EEEEEE',
      //   borderTopWidth: 1,
      //   borderTopColor: '#00000020',
      //   position: 'absolute',
      //   left: 0,
      //   right: 0,
      //   bottom: 0,
      //   padding: 10,
      //   // height: 450
      // }}
      >
        <Tab.Screen
          name="Home"
          component={HomeStack}
          // options={{
          //   headerShown: false,
          //   color: "red"
          // }}
          options={{
            tabBarIcon: ({ focused }) => (
              <View style={{
                alignItems: 'center', justifyContent: 'center', borderWidth: 0.45, borderColor: "#000000", paddingVertical: 15, height: 60, borderRadius: 8, padding: 2
              }}>
                <Image source={require('../../assets/icons/homeTab.png')} style={{ tintColor: focused ? "blue" : "black" }
                } />
                <Text style={{ color: focused ? '#F05656' : '#808080' }}>Home</Text>
              </View>
            )
          }}
        />
        <Tab.Screen
          name="BuyStack"
          component={Buy}
          options={{
            tabBarIcon: ({ focused }) => (
              <View style={{ borderWidth: 0.45, borderColor: "#000000", height: 60, borderRadius: 8, padding: 2 }}>
                <Image source={require('../../assets/icons/badTab.png')} style={{ tintColor: focused ? "blue" : "black" }} />
                <Text style={{ color: focused ? '#F05656' : '#808080' }}>Buy</Text>
              </View>
            )
          }}
        />
        <Tab.Screen
          name="Warehouse"
          component={Warehouse}
          options={{
            tabBarIcon: ({ focused }) => (
              <View style={{
                alignItems: 'center', justifyContent: 'center', borderWidth: 0.45, borderColor: "#000000", paddingVertical: 15, height: 60, borderRadius: 8, padding: 2
              }} >
                <Image source={require('../../assets/icons/warehouseTabIcon.png')} style={{ tintColor: focused ? "blue" : "black" }} />
                <Text style={{ color: focused ? '#F05656' : '#808080' }}>Warehouse</Text>
              </View>
            )
          }}
        />
        <Tab.Screen
          name="Agricare"
          component={Agricare}
          options={{
            tabBarIcon: ({ focused }) => (
              <View style={{
                alignItems: 'center', justifyContent: 'center', borderWidth: 0.45, borderColor: "#000000", paddingVertical: 15, height: 60, borderRadius: 8, padding: 2
              }}>
                <Image source={require('../../assets/icons/plant.png')} style={{ tintColor: focused ? "blue" : "black", width: 25, height: 25 }} />
                <Text style={{ color: focused ? '#F05656' : '#808080' }}>Agricare</Text>
              </View>
            )
          }}
        />
        <Tab.Screen
          name="Account"
          component={Account}
          options={{
            tabBarIcon: ({ focused }) => (
              <View style={{
                alignItems: 'center', justifyContent: 'center', borderWidth: 0.45, borderColor: "#000000", paddingVertical: 15, height: 60, borderRadius: 8, padding: 2
              }}>
                <Image source={require('../../assets/icons/dad.png')} style={{ tintColor: focused ? "blue" : "black" }} />
                <Text style={{ color: focused ? '#F05656' : '#808080' }}>Account</Text>
              </View>
            )
          }}
        />
      </Tab.Navigator>
      {/* </View>
      </View> */}
    </NavigationContainer >
  );
};

export default AppTab;

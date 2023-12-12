import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image, View } from 'react-native';
import Header from '../../Components/Header.js';
import Warehouse from '../../Screens/Warehouse.js';
import Agricare from '../../Screens/Agricare.js';
import Account from '../../Screens/Account.js';
import Home from '../Stacks/HomeStack.js';
import Buy from '../Stacks/BuyStack.js';

const Tab = createBottomTabNavigator();

const AppTab = () => {
  return (
    <NavigationContainer>
      <View style={{ flex: 1, zIndex: 1 }}> 
       <Header />
        <View style={{ flex: 1, position: 'relative', zIndex: 0 }}>
          <Tab.Navigator
            screenOptions={({ route }) => ({
              tabBarIcon: ({ color }) => {
                let iconName;

                if (route.name === 'Home') {
                  iconName = require('../../assets/icons/homeTab.png');
                } else if (route.name === 'BuyStack') {
                  iconName = require('../../assets/icons/badTab.png');
                } else if (route.name === 'Warehouse') {
                  iconName = require('../../assets/icons/warehouseTabIcon.png');
                } else if (route.name === 'Agricare') {
                  iconName = require('../../assets/icons/plant.png');
                } else if (route.name === 'Account') {
                  iconName = require('../../assets/icons/dad.png');
                }

                return <Image source={iconName} style={{ tintColor: color }} />;
              },
            })}
            tabBarStyle={{
              backgroundColor: '#EEEEEE',
              borderTopWidth: 1,
              borderTopColor: '#00000020',
              position: 'absolute',
              left: 0,
              right: 0,
              bottom: 0,
              height: 150,
            }}
          >
            <Tab.Screen
              name="Home"
              component={Home}
              options={{
                headerShown: false,
              }}
            />
            <Tab.Screen
              name="BuyStack"
              component={Buy}
              options={{
                headerShown: false,
              }}
            />
            <Tab.Screen
              name="Warehouse"
              component={Warehouse}
              options={{
                headerShown: false,
              }}
            />
            <Tab.Screen
              name="Agricare"
              component={Agricare}
              options={{
                headerShown: false,
              }}
            />
            <Tab.Screen
              name="Account"
              component={Account}
              options={{
                headerShown: false,
              }}
            />
          </Tab.Navigator>
        </View>
      </View>
    </NavigationContainer>
  );
};

export default AppTab;

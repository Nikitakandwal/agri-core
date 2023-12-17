// Add these imports at the top of your file
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import HerbicidesAll from '../../Screens/HerbicidesAll';
import BuyPage from '../../Screens/BuyPage';
import ProductsCatalogPage from '../../Screens/ProductsCatalogPage';
const Stack = createStackNavigator();

const Buy = () => {
  return ( 
      <Stack.Navigator>
        <Stack.Screen name="BuyPage" component={BuyPage} options={{
                headerShown: false,
              }}/>
              <Stack.Screen name="ProductCatalogue" component={ProductsCatalogPage} options={{
                headerShown: false,
              }}/>
      </Stack.Navigator> 
  );
};

export default Buy;

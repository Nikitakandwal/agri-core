// Add these imports at the top of your file
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import HomePage from '../../Screens/HomePage';
import HerbicidesAll from '../../Screens/HerbicidesAll';
import NewArrivalsAll from '../../Screens/NewArrivalsAll';
// Wrap your HomePage component with NavigationContainer
const Stack = createStackNavigator();

const Home = () => {
  return ( 
      <Stack.Navigator>
        <Stack.Screen name="HomePage" component={HomePage} options={{
                headerShown: false,
              }}/>
              <Stack.Screen name="NewArrivals" component={NewArrivalsAll} options={{
                headerShown: false,
              }}/>
      </Stack.Navigator> 
  );
};

export default Home;

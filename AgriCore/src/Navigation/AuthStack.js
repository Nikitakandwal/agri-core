// import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createStackNavigator } from 'react-navigation-stack';
import Landing from '../../Screens/Landing';
import LoginScreen from '../../Screens/LoginScreen';
// import Login from '../Screen/Auth/Signup';
// import Documentfilling from '../Screen/Document/Documentfilling';
// import PastEarnings from '../Screen/PastDetails/PastEarnings';
// import DeliveredOrder from '../Screen/Orders/DeliveredOrder';
// const Stack = createNativeStackNavigator();
const Stack = createStackNavigator();

const AuthStack = () => {
    console.log('====================================');
    console.log("Hi");
    console.log('====================================');
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen
                name="LoginScreen"
                component={LoginScreen}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name="Landing"
                component={Landing}
                options={{
                    headerShown: false,
                }}
            />

            {/* <Stack.Screen name="EarnigTime" component={PastEarnings} />
            <Stack.Screen name="DeliveredOrder" component={DeliveredOrder} /> */}
        </Stack.Navigator>
    )
}

export default AuthStack
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from "../screens/WelcomeScreen";
import ListingDetailsScreen from "../screens/ListingDetailsScreen";
import Splashscreen from "../screens/Splashscreen"
import LoginScreen from "../screens/LoginScreen"
import RegisterScreen from "../screens/RegisterScreen"
import CardTab from "./CardTab"
const Stack = createStackNavigator();  
const Tab = createStackNavigator();  
function NavigtionTrail() {
    return (
        <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen name="Splash" component={Splashscreen} options={{headerShown: false}} />
          <Stack.Screen name="Welcome" component={WelcomeScreen} options={{headerShown: false}} />
          <Stack.Screen name="Welcome1" component={CardTab} options={{headerShown: false}} />
          <Stack.Screen name="Welcome2" component={ListingDetailsScreen} initialParams="" options={{headerShown: false}} />
          <Stack.Screen name="Login" component={LoginScreen} options={{headerShown: false}} />
          <Stack.Screen name="Register" component={RegisterScreen} options={{headerShown: false}} />
        </Stack.Navigator>
      </NavigationContainer>
    )
}

export default NavigtionTrail

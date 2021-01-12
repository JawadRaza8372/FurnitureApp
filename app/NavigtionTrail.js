import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from "./screens/WelcomeScreen";
import CardRenderingScreen from "./screens/CardRenderingScreen";
import ListingDetailsScreen from "./screens/ListingDetailsScreen";
import Splashscreen from "./screens/Splashscreen"
import LoginScreen from "./screens/LoginScreen"
import RegisterScreen from "./screens/RegisterScreen"

const Stack = createStackNavigator();

function NavigtionTrail() {
    return (
        <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen name="Splash" component={Splashscreen} options={{headerShown: false}} />
          <Stack.Screen name="Welcome" component={WelcomeScreen} options={{headerShown: false}} />
          <Stack.Screen name="Welcome1" component={CardRenderingScreen} options={{headerShown: false}} />
          <Stack.Screen name="Welcome2" component={ListingDetailsScreen} initialParams="" options={{headerShown: false}} />
          <Stack.Screen name="Login" component={LoginScreen} options={{headerShown: false}} />
          <Stack.Screen name="Register" component={RegisterScreen} options={{headerShown: false}} />

        </Stack.Navigator>
      </NavigationContainer>
    )
}

export default NavigtionTrail

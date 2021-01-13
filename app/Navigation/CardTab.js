import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CardRenderingScreen from "../screens/CardRenderingScreen";
import ViewImageScreen from '../screens/ViewImageScreen';
import AccountScreen from '../screens/AccountScreen';
import {MaterialCommunityIcons} from "@expo/vector-icons"
export default function CardTab() {
    const Tabss=createBottomTabNavigator();

   
     return (  <Tabss.Navigator tabBarOptions={{activeBackgroundColor:"white",activeTintColor:"#F93D3D",inactiveBackgroundColor:"white",inactiveTintColor:"black",}}>
            <Tabss.Screen name="Items" component={CardRenderingScreen} options={{ tabBarIcon: ({color,size}) => (
            <MaterialCommunityIcons name="apps" color={color} size={size}/>)}} />
            <Tabss.Screen name="Add Items" component={ViewImageScreen} options={{ tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="playlist-edit" color={color} size={28}/>)}} />
   <Tabss.Screen name="Account" component={AccountScreen} options={{ tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="account" color={color} size={28}/>)}} />
        </Tabss.Navigator>)
    
}



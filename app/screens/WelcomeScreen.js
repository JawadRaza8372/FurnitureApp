import React from 'react';
import { ImageBackground,SafeAreaView,StyleSheet,View,Platform,StatusBar,Button,Alert, Image,Text } from 'react-native';
import ViewImageScreen from './ViewImageScreen';
import MyButton from '../Components/MyButton';
import { TouchableOpacity } from 'react-native-gesture-handler';
import TextAnchor from '../Components/TextAnchor';
import {useDimensions} from "@react-native-community/hooks";
import SplashScreen from 'react-native-simple-splash-screen'
import appName from "../TextData"
import ListingDetailsScreen from './ListingDetailsScreen';

function WelcomeScreen({navigation}) {
  const dimension= useDimensions().screen.width;
    return (
        <SafeAreaView style={styles.contan}>
       <View style={{position:"absolute",top:0,width:'100%',height:'58%',justifyContent:"center",backgroundColor:"white",borderBottomLeftRadius: ((dimension)/2)+80,borderBottomRightRadius:  ((dimension)/2)+80,      paddingTop:Platform.OS === "android" ? StatusBar.currentHeight+10:0,}}>
         <Image style={styles.logo} source={require("../assets/sofa.png")}/>
         
         </View>
         <Text style={styles.tagline} numberOfLines={5}>Welcome To {appName}</Text>

                         <MyButton title="Login" varient="white" textcolor="#F93D3D" onPress={()=>{navigation.navigate("Login")}}/>
                         <TextAnchor title="CREATE AN ACCOUNT!!" textcolor="white" onPress={()=>{navigation.navigate("Register")}} />

                         </SafeAreaView>
        );
}
const styles = StyleSheet.create({
    logo:{width:250,
        height:250,
        alignSelf:"center",
     },
    tagline:{
        marginVertical:80,
        alignSelf:"center",
        fontSize:23,
        textTransform:"uppercase",
        color:"white",
       fontWeight: "bold"},
    container: {
      flex: 1,
      flexDirection: "column"
    },
    contan: {
      paddingTop:Platform.OS === "android" ? StatusBar.currentHeight+10:0,
      flex: 1,
      justifyContent:'flex-end',
      backgroundColor:"#F93D3D",paddingBottom:45
    },
    text: {
      color: "white",
      fontSize: 42,
      fontWeight: "bold",
      textAlign: "center",
      backgroundColor: "#000000a0"
    }
  });

export default WelcomeScreen;
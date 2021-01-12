import React from 'react'
import Screen from '../Components/Screen'
import {StyleSheet,Image,View,StatusBar,Platform,SafeAreaView } from 'react-native';
import AppText from '../Components/AppText';
import * as Yup from "yup";
import {useDimensions} from "@react-native-community/hooks";
import AppFormField from "../Components/forms/AppFormField"
import SubmitButton from '../Components/forms/SubmitButton';
import AppForm from '../Components/forms/AppForm';
function LoginScreen({navigation}) {
  const dimension= useDimensions().screen.width;
console.log(dimension)
    const validationSchema=Yup.object().shape({
emaill:Yup.string().required().email().label("Email"),
passwordd:Yup.string().required().min(6).label("Password")
    });
    return (
    <SafeAreaView style={styles.contan}>
    <View style={{position:"absolute",top:0,width:'100%',height:260,justifyContent:"center",backgroundColor:"white",borderBottomLeftRadius: ((dimension)/2)+80,borderBottomRightRadius:  ((dimension)/2)+80,      paddingTop:Platform.OS === "android" ? StatusBar.currentHeight+10:0,}}>
         <Image style={styles.logo} source={require("../assets/sofa.png")}/>
         
         </View>
         <View style={{position:"absolute",top:265,width:'100%',justifyContent:"center"}}>
         <AppText style={styles.text}>Login</AppText>

    <AppForm initialValues={{emaill:"",passwordd:""}}
    onSubmit={(values)=>{console.log(values);navigation.navigate("Welcome1")}}
    validationSchema={validationSchema}
    >
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          iconName="email"
          iconColor="#F93D3D"
          keyboardType="email-address"
          name="emaill"
          placeholder="Email"
          textContentType="emailAddress"
          varient="white"
        />
         <AppFormField
          autoCapitalize="none"
          secureTextEntry
          autoCorrect={false}
          iconName="lock"
          iconColor="#F93D3D"
          name="passwordd"
          placeholder="Password"
          varient="white"
        />
   <SubmitButton title="Login" varient="white" textcolor="#F93D3D"/>
  </AppForm>
   
</View>
    </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    logo:{width:250,maxHeight:190,resizeMode:"contain",
      alignSelf:"center",},

    text: {
      color: "white",
      fontSize: 30,
      fontWeight: "bold",
      textAlign: "center",
    },contan: {
      paddingTop:Platform.OS === "android" ? StatusBar.currentHeight+10:0,
      flex: 1,
      justifyContent:'center',
      backgroundColor:"#F93D3D",paddingBottom:45
    }
  });

export default LoginScreen

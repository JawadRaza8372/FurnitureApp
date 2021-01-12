import React from "react";
import { StyleSheet,StatusBar,Platform,SafeAreaView,View,Image} from "react-native";
import * as Yup from "yup";
import AppFormField from "../Components/forms/AppFormField"
import SubmitButton from '../Components/forms/SubmitButton';
import AppForm from '../Components/forms/AppForm';
import {useDimensions} from "@react-native-community/hooks";
import AppText from '../Components/AppText';

const validationSchema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

function RegisterScreen({navigation}) {
  const dimension= useDimensions().screen.width;

  return (
    <SafeAreaView style={styles.contan}>
    <View style={{position:"absolute",top:0,width:'100%',height:260,justifyContent:"center",backgroundColor:"white",borderBottomLeftRadius: ((dimension)/2)+80,borderBottomRightRadius:  ((dimension)/2)+80,      paddingTop:Platform.OS === "android" ? StatusBar.currentHeight+10:0,}}>
         <Image style={styles.logo} source={require("../assets/sofa.png")}/>
         
         </View>
         <View style={{position:"absolute",top:265,width:'100%',justifyContent:"center"}}>
         <AppText style={styles.text}>Create An Account</AppText>
      <AppForm
        initialValues={{ name: "", email: "", password: "" }}
        onSubmit={(values) => {console.log(values);navigation.navigate("Welcome1")}}
        validationSchema={validationSchema}
      >
        <AppFormField
          autoCorrect={false}
          iconName="account"
          iconColor="#F93D3D"
          name="name"
          placeholder="Name"
          varient="white"
        />
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          iconName="email"
          iconColor="#F93D3D"
          keyboardType="email-address"
          name="email"
          placeholder="Email"
          textContentType="emailAddress"
          varient="white"
        />
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          iconName="lock"
          iconColor="#F93D3D"
          name="password"
          placeholder="Password"
          secureTextEntry
          textContentType="password"
          varient="white"
        />
        <SubmitButton title="Register"  varient="white" textcolor="#F93D3D"/>
      </AppForm>
    </View></SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },logo:{width:250,maxHeight:190,resizeMode:"contain",
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

export default RegisterScreen;

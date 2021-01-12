import React from 'react'
import { StyleSheet, Text,Platform } from 'react-native'

function AppText({style,children,...otherProps}) {
    return (
       <Text style={[styles.tagline,style]} {...otherProps}>{children}</Text>
    )
}

const styles = StyleSheet.create({
    // tagline:{
    //     alignSelf:"center",
    //     fontSize:30,
    //     color:"tomato",
    //    fontWeight: "bold",
    //    fontFamily:Platform.OS === "android"?"Roboto":"Aviner" //iss sy achi aik aur approach hy jo k platfornm.select hy
    
    // }
    tagline:{
        color:"black",
       fontWeight: "bold",
     ...  Platform.select({
        ios:{
            fontFamily:"Aviner",
            fontSize:20
        },
        android:{
            fontFamily:"Roboto",
            fontSize:18
    
        }
    })  
    }
          });
       
export default AppText
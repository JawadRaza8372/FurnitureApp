import React from 'react'
import { ImageBackground,SafeAreaView,StyleSheet,Button,Alert,View, Image,Text } from 'react-native';
import AppText from '../Components/AppText';
import { MaterialCommunityIcons,Ionicons,AntDesign } from '@expo/vector-icons'; 
export default function ViewImageScreen() {
    return (<View style={styles.container}>
     
        <View style={styles.close}>
        <MaterialCommunityIcons name="delete-circle" size={28} color="#ffffff" />
      </View>
        <View style={styles.open}>
        <Ionicons name="ios-close-circle" size={28} color="#ffffff" /></View>
        <Image source={{uri:"https://images.unsplash.com/photo-1484101403633-562f891dc89a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1053&q=80"}}
         style={styles.image}/>
         </View>
    );
    
}
 const styles = StyleSheet.create({
close:{top:40,left:30,position:"absolute",borderRadius:50,alignItems:"center",justifyContent:"center"},
open:{top:40,right:30,position:"absolute",borderRadius:50},
        container: {
          flex: 1,
          backgroundColor:"#000",
          marginTop:30
        },
        image: {
         width:"100%",
         height:"100%",
          resizeMode: "contain",
        
        }
        
      });
   
import React from 'react'
import { Image, View,Text,StyleSheet } from 'react-native'
import AppText from "./AppText"
function PosterUser(props) {
    return (
       <View style={{flexDirection:"row",paddingHorizontal:10,paddingVertical:10}}>
       {props.img && (<Image style={{borderRadius:35,width:70,height:70,marginRight:10}} source={{uri:`${props.img}`}}/>
)}
<View style={{paddingVertical:10}}>
        <AppText style={styles.title}>{props.title}</AppText>
        <AppText style={styles.subtitle}>{props.subtitle}</AppText>
        </View>

       </View>
    )
}
const styles = StyleSheet.create({
    card:{
        borderRadius:20,
        borderColor:"#000",
        borderWidth:2,
        backgroundColor:"#ffffff",
        marginBottom:20,
        overflow:"hidden",    
    }
    ,image: {
        width:330,
        height:200,
         resizeMode: "stretch",
         borderTopLeftRadius:16,
         borderTopRightRadius:16,
    
       
       },
    title:{
        fontSize:20,marginBottom:7,textTransform:"capitalize"
    },subtitle:{
        fontSize:18,
        color:"#808080",textTransform:"capitalize",fontSize:16
    
    }
    
        })
export default PosterUser

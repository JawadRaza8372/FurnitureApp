import React from 'react'
import { Image, View,Text,StyleSheet } from 'react-native'
import AppText from "./AppText"
import Icon from "./Icon"
function Iconwala(props) {
    return (
       <View style={{flexDirection:"row",paddingHorizontal:10,paddingVertical:10,alignItems:"center"}}>
       {props.name &&(<Icon  name={props.name} background={props.iconColor}/>
) }
<View style={{paddingVertical:10}}>
        <AppText style={styles.title}>{props.title}</AppText>
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
        fontSize:18,marginBottom:7,textTransform:"capitalize",marginTop:4
    },subtitle:{
        fontSize:18,
        color:"#808080",textTransform:"capitalize"
    
    }
    
        })
export default Iconwala

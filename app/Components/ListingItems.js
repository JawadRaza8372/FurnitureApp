import React from 'react'
import { Image, View,Text,StyleSheet, TouchableHighlight } from 'react-native'
import AppText from "./AppText"
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { MaterialCommunityIcons } from "@expo/vector-icons";
function ListingItems(props) {
    return (<Swipeable renderRightActions={props.right}>
        <TouchableHighlight underlayColor={"#c0c0c0"} onPress={props.onPress}>
       <View style={{flexDirection:"row",paddingHorizontal:10,paddingVertical:10}}>
       {props.img && (<Image style={{borderRadius:35,width:70,height:70,marginRight:10}} source={{uri:`${props.img}`}}/>
) }
<View style={{paddingVertical:10,flex:1}}>
        <AppText style={styles.title} numberOfLines={1}>{props.title}</AppText>
        <AppText style={styles.subtitle} numberOfLines={2}>{props.subtitle}</AppText>
        </View>
        <View style={{justifyContent:"center",alignItems:"center"}}>
       <MaterialCommunityIcons
            name="chevron-right"
            size={30}
            color={"grey"}
          />
          
        </View>
       </View>
      

      
       </TouchableHighlight></Swipeable>
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
        fontSize:16,marginBottom:7,textTransform:"capitalize"
    },subtitle:{
        fontSize:14,
        color:"#808080",textTransform:"capitalize"
    
    }
    
        })
export default ListingItems

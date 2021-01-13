import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native';

function MyButton(props) {
    return (
       <TouchableOpacity onPress={props.onPress} style={{marginVertical:5,backgroundColor:`${props.varient}`,borderRadius:25,justifyContent:"center",alignItems:"center",padding:15,width:"80%",alignSelf:"center"}}>
<Text style={{color:`${props.textcolor}`,fontSize:18,textTransform:"capitalize",fontWeight:'bold'}}>{props.title}</Text>

       </TouchableOpacity>
    )
}

export default MyButton;

   
import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native';

function TextAnchor(props) {
    return (
       <TouchableOpacity onPress={props.onPress} style={{marginVertical:5,justifyContent:"center",alignItems:"center",padding:15,width:"90%",alignSelf:"center"}}>
<Text style={{color:`${props.textcolor}`,fontSize:18,textTransform:"uppercase",fontWeight:'bold'}}>{props.title}</Text>

       </TouchableOpacity>
    )
}

export default TextAnchor;


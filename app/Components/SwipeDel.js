import React from 'react'
import { TouchableWithoutFeedback, View } from 'react-native'
import { MaterialCommunityIcons,Ionicons,AntDesign } from '@expo/vector-icons'; 
function SwipeDel(props) {
    return (
        <TouchableWithoutFeedback onPress={props.onPress}>
                <View style={{backgroundColor:"#ffffff",width:70,alignItems:"center",justifyContent:"center"}}>
        <MaterialCommunityIcons name="trash-can" size={38} color="red" />
        </View></TouchableWithoutFeedback>

    )
}

export default SwipeDel

import React from 'react'
import { Image, Text, View,StyleSheet } from 'react-native'
function MyCard(props) {
    return (
      <View style={styles.card}><View style={{paddingVertical:25,paddingHorizontal:10}}>
      {props.img && (        <Image style={styles.image} source={{uri:`${props.img}`}}/>
) }</View>
        <View style={{paddingVertical:55,paddingHorizontal:10}}>
        <Text style={styles.title}>{props.title}</Text>
        <Text style={styles.subtitle}>{props.subtitle}</Text>
        <Text>{Array(props.stars).fill().map((item,index)=>(<Text key={index} role="img">⭐</Text> ))}{Array(5-props.stars).fill().map((item,index)=>(<Text key={index} role="img">💭</Text> ))}</Text>
        </View>
      </View>
    )
    }
    const styles = StyleSheet.create({
card:{
borderRadius:15,
    flexDirection:"row",
    backgroundColor:"#FFFFFF",
    marginBottom:20,
    overflow:"hidden",
    marginHorizontal:20
}
,image: {
    width:150,
    height:130,
     resizeMode: "stretch",
     borderTopLeftRadius:16,
     borderTopRightRadius:16,
   
   },
title:{
    fontSize:20,marginBottom:7,textTransform:"capitalize",fontWeight:"bold"
},subtitle:{
    fontSize:18,
    color:"#A49C9C",textTransform:"capitalize"

}

    })

export default MyCard

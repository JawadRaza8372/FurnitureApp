import React from 'react'
import { Image, StyleSheet, View,Text } from 'react-native'
import AppText from '../Components/AppText'
import PosterUser from './PosterUser'

function ListingDetails() {
    return (
        <View style={{marginTop:30}}>
            <Image style={styles.image} source={{uri:"https://media.istockphoto.com/photos/child-hands-formig-heart-shape-picture-id951945718?k=6&m=951945718&s=612x612&w=0&h=ih-N7RytxrTfhDyvyTQCA5q5xKoJToKSYgdsJ_mHrv0="}}/>
            <View style={{padding:20}}>
        <AppText style={styles.title}>title</AppText>
        <AppText style={styles.subtitle}>price</AppText>
        </View>
        <PosterUser img="https://media.istockphoto.com/photos/child-hands-formig-heart-shape-picture-id951945718?k=6&m=951945718&s=612x612&w=0&h=ih-N7RytxrTfhDyvyTQCA5q5xKoJToKSYgdsJ_mHrv0=" title="Jawad" subtitle="5 listings"/>
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
        width:"100%",
        height:250,
         resizeMode: "stretch",
       },
    title:{
        fontSize:24,marginBottom:7,textTransform:"capitalize"
    },subtitle:{
        fontSize:20,
        color:"#1e90ff",textTransform:"capitalize"
    
    }
    
        })
export default ListingDetails

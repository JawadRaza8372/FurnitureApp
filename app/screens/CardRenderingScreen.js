import React,{useState,useEffect,useCallback} from 'react';
import { StyleSheet, View,SafeAreaView, FlatList ,Platform,StatusBar,Text,ScrollView} from "react-native";
import MyCard from '../Components/MyCard';
import Seprators from '../Components/Seprators';
import {TextInputwithIconSimple} from '../Components/TextInputwithIcon';
import {products,punchLines} from "../TextData"
import Carousel from "react-native-snap-carousel"
import { TouchableOpacity } from 'react-native-gesture-handler';

function CardRenderingScreen({navigation}) {
  const names=punchLines;
    const initmessages = products;
    const [newName, setnewName] = useState(`${names[0].line}`);

    const shuffle = useCallback(() => {
        const index = Math.floor(Math.random() * names.length);
        setnewName(names[index].line);
    }, []);

    useEffect(() => {
        const intervalID = setInterval(shuffle, 3000);
        return () => clearInterval(intervalID);
    }, [shuffle])
    return (
 <SafeAreaView style={styles.screen}>
<TextInputwithIconSimple iconName="ios-search" iconColor="#707070" varient="white" placeholder="Search" />
<View style={{backgroundColor:"#D93A3A"}}>
            <Text  style={{color:"white",fontSize:24,textAlign:"center",marginVertical:50,marginHorizontal:50}}>{newName}</Text>

</View>
   
  
  <ScrollView scrollEnabled style={{marginVertical:10}}>
{initmessages.map((item)=>(<TouchableOpacity key={item.id} onPress={()=>{navigation.navigate("Welcome2",{item})}}><MyCard key={item.id}  img={item.img} title={item.title} stars={item.stars} subtitle={item.subtitle}/></TouchableOpacity>))}
  </ScrollView>
    

  
   
 
 

 </SafeAreaView>

    )
}
const styles = StyleSheet.create({
    screen: {
      backgroundColor: "#F8F6F6",flex:1,paddingTop:Platform.OS === "android" ? StatusBar.currentHeight+10:0
  
    },
  });
  
  
export default CardRenderingScreen

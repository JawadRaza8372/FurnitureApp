import React,{useState,useRef} from "react";
import { View, Image, StyleSheet,StatusBar,Platform,SafeAreaView,Text,ScrollView } from "react-native";
import {imagesLink} from "../TextData"
import Carousel from "react-native-snap-carousel" 
import {useDimensions} from "@react-native-community/hooks";
import MyButton from "../Components/MyButton"
function ListingDetailsScreen({navigation,route}) {
  const dimension= useDimensions().screen.width;
  const data=route.params.item;
const stars=4;   
const c=useRef(null)
  return (
    <SafeAreaView style={styles.contan}>
 <View style={{width:'100%',height:255,justifyContent:"center"}}>

<Carousel
              ref={c}
              data={imagesLink}
              renderItem={({ item }) => (
                <Image key={item.id} style={styles.image} source={{uri:`${item.img}`}}/>
           
          )}
              sliderWidth={dimension-5}
              itemWidth={dimension-10}
            />
</View>

                <ScrollView style={{borderRadius:15,padding:20,marginTop:20,borderColor:"#707070",borderWidth:2,backgroundColor:"#FFFFFF",marginBottom:20,overflow:"hidden",marginHorizontal:20}}>
                <Text style={{fontSize:16,}}>{Array(data.stars).fill().map((item,index)=>(<Text key={index} role="img">⭐</Text> ))}{Array(5-data.stars).fill().map((item,index)=>(<Text key={index} role="img">💭</Text> ))}  {data.stars}/5</Text>
                <Text style={{ fontSize:16,color:"#A49C9C",textTransform:"capitalize"}}>{data.subtitle}</Text>
                <View>
                <Text style={{ fontSize:18,textTransform:"uppercase",fontWeight:"bold"}}>Description {data.title}</Text>
                <Text style={{ fontSize:14,color:"#A49C9C",textTransform:"capitalize"}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Text>
                </View><View  style={{marginVertical:10}}>
                <MyButton title="Login" varient="#F93D3D" textcolor="white" onPress={()=>{console.log("pahla")}}/>
               

</View>


            </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  detailsContainer: {
    padding: 20,
  },
  image: {
    width:"100%",
    height:250,
     resizeMode: "stretch",
  },
  contan: {
    paddingTop:Platform.OS === "android" ? StatusBar.currentHeight+10:0,
    flex: 1,
    marginHorizontal:2,
    backgroundColor:"#F8F6F6"
  },
  price: {
    color: "red",
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
  },
  userContainer: {
    marginVertical: 40,
  },
});

export default ListingDetailsScreen;

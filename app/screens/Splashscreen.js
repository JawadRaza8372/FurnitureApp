import React,{useState,useEffect,useCallback} from 'react'
import { View, Text,Image } from 'react-native'
import appName from "../TextData"

const Splashscreen = ({navigation}) => {
    const [newName, setnewName] = useState("....");

    const names=[{line:"."},{line:".."},{line:"..."}];
    const shuffle = useCallback(() => {
        const index = Math.floor(Math.random() * names.length);
        setnewName(names[index].line);
    }, []);

    useEffect(() => {
        const intervalID = setInterval(shuffle, 1000);
        return () => clearInterval(intervalID);
    }, [shuffle])
    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('Welcome');
          }, 5000);
       
    }, []) 
    return (
        <View style={{backgroundColor:"#F93D3D",flex:1,justifyContent:"center",alignContent:"center"}}>
               
                <Image style={{width:220,height:230,alignSelf:"center",marginVertical:20}} source={require("../assets/sofa.png")}/>
               

                
                <Text style={{fontSize:22,textTransform:"uppercase",color:"white",fontWeight: "bold",alignSelf:"center"}}>Welcome to {appName}</Text>
           <Text style={{fontSize:38,textTransform:"uppercase",color:"white",fontWeight: "bold",alignSelf:"center"}}>{newName}</Text>
        </View>
    )
}

export default Splashscreen

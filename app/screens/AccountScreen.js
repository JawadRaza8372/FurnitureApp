import React from "react";
import { StyleSheet, View,SafeAreaView, FlatList ,Platform,StatusBar} from "react-native";
import Seprators from '../Components/Seprators';
import PosterUser from "../Components/PosterUser";
import Iconwala from "../Components/Iconwala";

const menuItems = [
  {
    title: "My Listings",
      name: "format-list-bulleted",
      bg:"#f194ff",
    
  },
  {
    title: "My Messages",
      name: "email",
      bg: "#1e90ff",
  
  },
];

function AccountScreen() {
  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.container}>
        <PosterUser
          title="Mosh Hamedani"
          subtitle="programmingwithmosh@gmail.com"
          img="https://images.unsplash.com/photo-1484101403633-562f891dc89a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1053&q=80"

        />
      </View>
      <View style={styles.container}>
        <FlatList
          data={menuItems}
          keyExtractor={(menuItem) => menuItem.title}
          ItemSeparatorComponent={Seprators}
          renderItem={({ item }) => (
           <Iconwala title={item.title} iconColor={item.bg} name={item.name}/>
           
          )}
        />
      </View>
      <View style={styles.container}>

      <Iconwala title="logout" iconColor="#daa520" name="logout"/>
</View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: "white",flex:1,paddingTop:Platform.OS === "android" ? StatusBar.currentHeight+10:0,

  },
  container: {
    marginVertical: 20,backgroundColor:"#fafafa"
  },
});

export default AccountScreen;

import React from 'react';
import { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, Image, Button } from "react-native";
import MemeButton from "../components/MemeButton";

const MemeScreen = () => {

    const [meme, setMeme] = useState("http://i.imgflip.com/1866qe.jpg");
  
    const handleNewMeme = () => {
        getMeme().then(memeURL => {
            setMeme(memeURL);
            console.log(meme);
        })
    }
  
    return (
      <>
        <View style={styles.container}>
          <Text>{"\n"}</Text>
          <MemeButton
            handleNewMeme = {handleNewMeme}
          />
          <Text>{"\n"}</Text>
          <Image 
            source={{uri: meme}}
            style={{width: 400, height: 400}}
          />
          <Text>{"\n"}</Text>
        </View>
      </>
    );
}
  

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#24A7C1",
      alignItems: "center",
      justifyContent: "center"
    },
    headerText: {
      color: "#FFFFFF",
      fontWeight: "bold",
      fontSize: 30
    },
    paraText : {
      color: "#FFFFFF",
      fontSize: 10
    },
});
  
  
async function getMeme(){
    try {
        let response = await fetch('https://api.imgflip.com/get_memes');
        let memeData = await response.json();
        var randomIndex = Math.floor(Math.random() * 99) + 1; 
        let memeURL = memeData.data.memes[randomIndex].url;
        return memeURL;
    } 
    catch (error) {
        console.error(error);
    }
}

export default MemeScreen;

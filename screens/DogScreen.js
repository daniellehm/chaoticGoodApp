import React from 'react';
import { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, Image, Button } from "react-native";
import DogButton from "../components/DogButton";

const DogScreen = () => {

    const [dog, setDog] = useState("https://images.dog.ceo/breeds/sheepdog-shetland/n02105855_9093.jpg");
  
    const handleNewDog = () => {
        getDog().then(dogURL => {
            setDog(dogURL);
            console.log(dog);
        })
    }
  
    return (
      <>
        <View style={styles.container}>
          <Text>{"\n"}</Text>
          <DogButton
            handleNewDog = {handleNewDog}
          />
          <Text>{"\n"}</Text>
          <Image 
            source={{uri: dog}}
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
      backgroundColor: "#D4AEFA",
      alignItems: "center",
      justifyContent: "center"
    },
    headerText: {
      color: "#FFFFFF",
      fontWeight: "bold",
      fontSize: 30
    },
    homeImage : {
      width: 200, 
      height: 200
    },
    paraText : {
      color: "#FFFFFF",
      fontSize: 10
    },
});
  
  
async function getDog(){
    try {
        let response = await fetch('https://dog.ceo/api/breeds/image/random');
        let dogData = await response.json();
        let dogURL = dogData.message;
        return dogURL;
    } 
    catch (error) {
        console.error(error);
    }
}

export default DogScreen;

import React from 'react';
import { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, Image, Button } from "react-native";
import MemeButton from "../components/MemeButton";

const PoemButton = ({handleNewPoem}) => {
    return (
        <Button  
        title="Random Poem" 
        color = "#000000"
        onPress={handleNewPoem}
        />
    );
}

const audioButton = () => {
    
}

const PoemScreen = () => {

    const [poem, setPoem] = useState("to be or not to it be like that sometimes");
    const [title, setTitle] = useState("pooja");
  
    const handleNewPoem = () => {
        getPoem().then(poemData => {
            setPoem(poemData.poem);
            setTitle(poemData.title);
        })
    }
  
    return (
      <>
        <View style={styles.container}>
          <Text>{"\n"}</Text>
          <PoemButton
            handleNewPoem = {handleNewPoem}
          />
          <Text>{"\n"}</Text>
          <Text style = {styles.poemTitle}>{title}</Text>
          <Text>{"\n"}</Text>
          <View style={styles.poemContainer}>
            <Text>{poem}</Text>
          </View>
          <Text>{"\n"}</Text>
        </View>
      </>
    );
}
  

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#CB1E60",
      alignItems: "center",
      justifyContent: "center"
    },
    headerText: {
      color: "#FFFFFF",
      fontWeight: "bold",
      fontSize: 30
    },
    poemContainer: {
        backgroundColor: "#FFFFFF",
        padding: 10,
    },
    poemTitle : {
        backgroundColor: "#FFFFFF",
        fontWeight: "bold",
    }
});
  
  
async function getPoem(){
    try {
        let response = await fetch('https://www.poemist.com/api/v1/randompoems');
        let poemData = await response.json();
        let poem = poemData[0].content;
        let title = poemData[0].title;
        return {
            poem : poem,
            title : title
        }
    } 
    catch (error) {
        console.error(error);
    }
}

export default PoemScreen;

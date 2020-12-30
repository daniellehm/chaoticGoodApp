import React from 'react';
import { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, Image, Button, TouchableHighlight } from "react-native";

const PopGameScreen = () => {

    const [popCount, setPopCount] = useState(-1);

    let show;
    if (popCount == -1){
        show = (<Text style = {styles.popText}>{'Tap to begin!'}</Text>)
    }
    else{
        show = (<Text style = {styles.popText} >{popCount}</Text>)
    }
    
    const dealWithPress = () => {
        if (popCount == 10){
            setPopCount(-1);
        }
        else{
            setPopCount(popCount + 1);
        }
    };
  
    return (
      <>
        <View style={styles.container}>
          <Text>{"\n"}</Text>
          <Text style = {styles.headerText}>Pop Game</Text>
          <Text>{"\n"}</Text>
          <TouchableHighlight style = {styles.popContainer} onPress = {dealWithPress}>
            <View>
                    <Text>{"\n"}</Text>
                    {show}
            </View>
          </TouchableHighlight>
          <Text>{"\n"}</Text>
        </View>
        
      </>
    );
}
  

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#FFBF16",
      alignItems: "center",
      justifyContent: "center"
    },
    popContainer: {
        backgroundColor: "#000000",
        flex: 1,
        width: 300,
        height: 300
    },
    headerText: {
      color: "#000000",
      fontWeight: "bold",
      fontSize: 30
    },
    popText : {
        color: "#BA9430",
        fontWeight: "bold",
        fontSize: 30,
        textAlign: "center",
    }
});
  

export default PopGameScreen;

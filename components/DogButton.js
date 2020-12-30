import React from "react";
import {
  Button,
  Image
} from "react-native";

const DogButton = ({handleNewDog}) => {

  return (
  <Button  
    title="Random Dog Picture" 
    color = "#000000"
    onPress={handleNewDog}
  />
  );
}

export default DogButton;

import React from "react";
import {
  Button,
  Image
} from "react-native";

const MemeButton = ({handleNewMeme}) => {

  return (
  <Button  
    title="Random Meme" 
    color = "#000000"
    onPress={handleNewMeme}
  />
  );
}

export default MemeButton;

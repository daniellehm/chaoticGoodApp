import React from 'react';
import { StyleSheet, View, Text, KeyboardAvoidingView, Image } from "react-native";

import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import MemeScreen from "./screens/MemeScreen";
import DogScreen from "./screens/DogScreen";
import NewsScreen from "./screens/NewsScreen";
import PoemScreen from "./screens/PoemScreen";
import PopGameScreen from "./screens/PopGameScreen";
import cglogo from './assets/cglogo.png';
import fullcglogo from './assets/fullcglogo.png';
import { ScrollView } from 'react-native-gesture-handler';

class App extends React.Component {
  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
        <Text>{"\n"}</Text>
        <ScrollView>
          <Image style={{width: 400, height: 50}} source={fullcglogo}></Image>
          <Text style={styles.introText}>scroll for random chaos.</Text>
          <Text>{"\n"}</Text>
          <MemeScreen></MemeScreen>
          <Text>{"\n"}</Text>
          <DogScreen></DogScreen>
          <Text>{"\n"}</Text>
          <NewsScreen></NewsScreen>
          <Text>{"\n"}</Text>
          <PoemScreen></PoemScreen>
          <Text>{"\n"}</Text>
          <PopGameScreen></PopGameScreen>
          <Text>{"\n"}</Text>
        </ScrollView>
        <View>
          {/* <Text style={styles.introText}>poojaGames ©</Text> */}
          <Image style={{width: 50, height: 50}} source={cglogo}></Image>
        </View>
      </KeyboardAvoidingView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
    alignItems: "center",
    justifyContent: "center",
  },
  headerText: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 40
  },
  introText:{
    color:"#FFFF",
    textAlign: "center",
  }
});

export default App;

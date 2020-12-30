import React from 'react';
import { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, Image, Button, TextInput, Linking,  Slider } from "react-native";
import {KeyboardAvoidingView} from 'react-native';


const NewsScreen = () => {

    const [inputText, setInputText] = useState('');
    const [news, setNews] = useState("");
    const [newsImage, setNewsImage] = useState("");
    const [newsURL, setNewsURL] = useState("");

    const [day, setDay] = useState(1);
  
    const handleSubmit = (e) => {
        let userInput = e.nativeEvent.text;
        console.log(userInput);

        //Set the date of the search
        let d = new Date();
        d.setDate(d.getDate() - day);
        let date = d.toISOString();

        getNews(userInput,date).then(newsData => {
            console.log(newsData);
            if (newsData.success === true){
                setNews(newsData.title);
                setNewsImage(newsData.imageURL);
                setNewsURL(newsData.articleURL);
            }
            else{
                setNews("Could not find any news!");
                setNewsImage("");
                setNewsURL("");
            }
        })
    }

    const updateArticleWithData = e => {

        //Set the date of the search
        let d = new Date();
        d.setDate(d.getDate() - e);
        let date = d.toISOString();

        if (inputText != ""){
            getNews(inputText,date).then(newsData => {
                console.log(newsData);
                if (newsData.success === true){
                    setNews(newsData.title);
                    setNewsImage(newsData.imageURL);
                    setNewsURL(newsData.articleURL);
                }
                else{
                    setNews("Could not find any news!");
                    setNewsImage("");
                    setNewsURL("");
                }
            })
        }
    };
  
    return (
      <>
        <View style={styles.container}>
            <Text>{"\n"}</Text>
            <Text style={styles.headerText}>News Search</Text>
            <TextInput
                style = {styles.textIn}
                onChangeText = {text => setInputText(text)}
                value = {inputText}
                placeholder = {"Search for news updates ... "}
                onSubmitEditing = {handleSubmit}
            />    
            <Text>{"\n"}</Text>
            <Text style={ { color: "#000000", fontWeight: "bold"} }>
                {'Search up to ' + day + ' days ago'}
            </Text>
            <Slider 
                style = {styles.slider}
                minValue = {1}
                maximumValue = {10}
                step = {1}
                onValueChange = {value => setDay(value)}
                value = {day}
                onSlidingComplete = {updateArticleWithData}
            />
            <Text>{"\n"}</Text>
            <View style={styles.internalNewsContainer}>
                <Text style = {styles.newsText} onPress = {() => Linking.openURL(newsURL)}>
                    {news}
                </Text>
                <Image 
                    source={{uri: newsImage}}
                    style={{width: 300, height: 300}}
                />
                <Text>{"\n"}</Text>
            </View>
            <Text>{"\n"}</Text>
        </View>
      </>
    );
}
  

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#54E7B2",
      alignItems: "center",
      justifyContent: "center"
    },
    headerText: {
      color: "#000000",
      fontWeight: "bold",
      fontSize: 30
    },
    paraText : {
      color: "#000000",
      fontSize: 15  
    },
    textIn : {
        height: 40, 
        width: 340,
        borderColor: 'gray', 
        borderWidth: 1,
        backgroundColor: "#FFFFFF",
        padding : 10,
    },
    newsText : {
        padding: 10,
        fontSize: 20,
        color: "#000000",
        fontWeight: "bold"
    },
    internalNewsContainer : {
        width: 350,
        alignItems: "center",
        backgroundColor: "#FFFFFF"
    },
    slider :{ 
        width: 350
    }
});


//https://newsapi.org/docs/get-started
async function getNews(userQuery, time){

    let newsAPIKey = "46a827704b754c599c40a9122518f72e";

    let newsURL = 
    'https://newsapi.org/v2/everything?' +
    'q=' + userQuery +
    '&from=' + time +
    '&sortBy=relevancy' +
    '&apiKey=' + newsAPIKey;

    console.log(newsURL);

    
    try {
        let response = await fetch(newsURL);
        let newsData = await response.json();
        let success;
        let title;
        let image;
        let articleURL;
        console.log(newsData.articles[0]);
        if (newsData.totalResults !== 0){
            title = newsData.articles[0].title;
            image = newsData.articles[0].urlToImage;
            articleURL = newsData.articles[0].url;
            success = true;
        }
        else{
            success = false;
        }
        return {
            success : success,
            title : title,
            imageURL : image,
            articleURL : articleURL
        }
    } 
    catch (error) {
        console.error(error);
    }
}

export default NewsScreen;



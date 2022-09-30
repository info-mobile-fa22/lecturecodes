import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View, ImageBackground, Switch, TextInput, Image, KeyboardAvoidingView, ScrollView} from 'react-native';
import background from './assets/background.jpg'
import logo from './assets/favicon.png'


export default function App() {

  const[isEnabled, setIsEnabled] = useState(false)
  const[text, setText] = useState("")

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView
        behavior="padding"
      >
        <TextInput
          placeholder="put in some text"
          numberOfLines={5}
          value={text}
          style={styles.textInput}
          onChangeText={(value)=>setText(value)}
          maxlength={100}
        />
      </KeyboardAvoidingView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },background: {
    width:"100%",
    height:"100%",
    justifyContent:"center",
    alignItems: "center",
  },text:{
    color:"#FFFFFF",
    backgroundColor:"#000000C0"
  }, textInput:{
    borderWidth:1,
    borderColor: "black",
    width:200,
    height:250,
    maxHeight:300,
    textAlignVertical:"top",
    margin:5,
    padding:5,
  }, scrollView:{
    paddingTop:20
  }
});


// === ImageBackground Component ===
/*      <ImageBackground 
        source={background} 
        style={styles.background} 
        blurRadius="5"
        resizeMode="cover">
           
      </ImageBackground>
*/

// === Switch Component ===
/*
<Switch
  //background color
  trackColor={{ false: "grey", true: "blue" }}
  //foreground color
  thumbColor={this.state.isEnabled ? "green" : "yellow"}
  //ios background color
  ios_backgroundColor="purple"
  //what to do when user switch on and off
  onValueChange={this.setEnabled}
  value={this.state.isEnabled}
        />
*/

// === TextInput Component ===
/*
 <TextInput
  placeholder="put in some text"
  multiline
  numberOfLines={5}
  value={text}
  style={{fontSize:20, backgroundColor: 'black', color:'white', padding:5, width:'80%', height:200}}
  onChangeText={(value)=>setText(value)}
  textAlignVertical='top'
  maxlength={100}
/>
*/

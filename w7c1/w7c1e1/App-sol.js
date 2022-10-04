import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View, ImageBackground, Switch, TextInput, Image, KeyboardAvoidingView, Button} from 'react-native';
import background from './assets/background.jpg'
import logo from './assets/favicon.png'


export default function App() {

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  return (
    <View style={styles.container}>
      <ImageBackground
        source={background}
        style={styles.background}
        blurRadius='20'
      >

        <KeyboardAvoidingView>
          <TextInput
            placeholder="username"
            value={username}
            style={styles.textInput}
            onChangeText={(value)=>setUsername(value)}
          />
          <TextInput
            placeholder="password"
            value={password}
            style={styles.textInput}
            onChangeText={(value)=>setPassword(value)}
          />
          <Button
            title="login"
            color="black"
            onPress={()=>alert(username)}
          />
        </KeyboardAvoidingView>
      </ImageBackground>

        
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
  }, textInput:{
    borderBottomWidth:1,
    borderColor: "black",
    color: 'white',
    width:250,
    height: 20,
    margin:5,
    padding:5,
  }
});


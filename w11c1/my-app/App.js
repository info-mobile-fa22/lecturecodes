import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react'; //import the default export in the module
import { StyleSheet, Text, View, Image, Button, TextInput} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as SecureStore from 'expo-secure-store';


export default function App() {


  const [firstname, setFirstname] = useState("")
  const [lastname, setLastname] = useState("")
  const [name, setName] = useState({firstname:"", lastname:""})


  useEffect(()=>{
    (async()=>{
      // let savedFirstname = await AsyncStorage.getItem("firstname")
      // if(savedFirstname){
      //   // alert(savedFirstname)
      //   setFirstname(savedFirstname)
      // }

      // let savedLastname = await AsyncStorage.getItem("lastname")
      // if(savedLastname){
      //   // alert(savedLastname)
      //   setFirstname(savedLastname)
      // }

      // let jsonSavedName = await AsyncStorage.getItem("name")
      let jsonSavedName = await SecureStore.getItemAsync("name")
      let savedName = JSON.parse(jsonSavedName)
      console.log(jsonSavedName)
      setName(savedName)
    })()
    
  },[])


  return(
    <View style={styles.container}>
      <TextInput
        style = {styles.text}
        placeholder="First Name"
        // onChangeText={text=>{setFirstname(text)}}
        onChangeText={text=>{setName({...name, firstname:text})}}
        defaultValue={name?name.firstname:""}
      />
      <TextInput
        style = {styles.text}
        placeholder="Last Name"
        defaultValue={name?name.lastname:""}
        // onChangeText={text=>{setLastname(text)}}
        onChangeText={text=>{setName({...name, lastname:text})}}
      />
      <Button
        color = "#2A3132"
        title = "save"
        onPress = {async()=>{

          let jsonName = JSON.stringify(name)

          // await AsyncStorage.setItem("name", jsonName)
          await SecureStore.setItemAsync("name", jsonName)
          // await AsyncStorage.setItem("firstname", firstname)
          // await AsyncStorage.setItem("lastname", lastname)
        }}
      />
      <Button
        color = "#2A3132"
        title = "clear"
        onPress = {async()=>{
          // await AsyncStorage.removeItem("firstname")
          // await AsyncStorage.removeItem("lastname")
          // await AsyncStorage.removeItem("name")
          await SecureStore.deleteItemAsync("name")
        }}
      />
    </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center',
    backgroundColor: '#fff',
    margin:2
  },text:{
    borderColor:"black", 
    borderBottomWidth:1,
    margin:5,
    padding:5, 
  }
});

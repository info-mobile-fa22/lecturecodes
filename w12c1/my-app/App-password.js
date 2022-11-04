import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, signInWithRedirect } from "firebase/auth";

const firebaseConfig = {
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();


export default function App() {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [status, setStatus] = useState("")
  const [user, setUser] = useState(null)

  const signUp = ()=>{
    createUserWithEmailAndPassword(auth,email, password)
    .then(result=>{
      const user = result.user
      setUser(user)
    })
    .catch(error=>{
      console.log(error.code + " : " + error.message)
    })

  }

  const logIn = ()=>{

    signInWithEmailAndPassword(auth,email, password)
    .then(result=>{
      const user = result.user
      setUser(user)
    })
    .catch(error=>{
      console.log(error.code + " : " + error.message)
    })


  }

  const logOut = ()=>{
    signOut(auth)
    .then(()=>{
      setUser(null)
    })
    .catch(error=>{
      console.log(error.code + " : " + error.message)
    })

  }

  return (
    <View style={styles.container}>
      <TextInput
        style = {{borderColor:"black", borderBottomWidth:1}}
        placeholder="Email"
        defaultValue={email}
        onChangeText={text=>setEmail(text)}
      />
      <TextInput
        style = {{borderColor:"black", borderBottomWidth:1}}
        placeholder="Password"
        defaultValue={password}
        secureTextEntry={true}
        onChangeText={text=>setPassword(text)}
      />
      <Button
        color = "#2A3132"
        title = "Sign Up"
        onPress = {signUp}
        style={styles.button}
      />
      <Button
        color = "#2A3132"
        title = {user?"Sign out":"Sign in"}
        onPress = {user?logOut:logIn}
        style={styles.button}
      />
      <Text>Current user: {user?user.email:null}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center',
    backgroundColor: '#fff',
    margin:10
  }, button:{
    margin:20
  }
});

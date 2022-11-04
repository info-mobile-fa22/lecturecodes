import { StatusBar } from 'expo-status-bar';
import React, {useState,useEffect} from 'react'; //import the default export in the module
import { StyleSheet, Text, View, Image, Button, TextInput} from 'react-native';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, doc, getDoc, setDoc, deleteDoc } from "firebase/firestore"; 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default function App (){


  const [firstname, setFirstname] = useState("")
  const [lastname, setLastname] = useState("")
  const [email, setEmail] = useState("")
  const [userInfo, setUserInfo] = useState([])


  const saveData = async() =>{
    const docRef = await setDoc(doc(db, "users", email), {
      firstname: firstname,
      lastname: lastname,
      email: email
    });
  }

  const removeData = async(key)=>{
    await deleteDoc(doc(db, "users", key));
  }

  const getData = async(key) =>{

    const docRef = doc(db, "users", key);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {

      setFirstname(docSnap.data().firstname)
      setLastname(docSnap.data().lastname)
      setEmail(docSnap.data().email)

      console.log("Document data:", docSnap.data());
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }

  }

  useEffect(()=>{
    getData("Aki@gmail.com");
  },[])

    return(
      <View style={styles.container}>
        <TextInput
          style = {styles.text}
          placeholder="First Name"
          defaultValue={firstname}
          onChangeText={text => setFirstname(text)}
        />
        <TextInput
          style = {styles.text}
          placeholder="Last Name"
          defaultValue={lastname}
          onChangeText={text => setLastname(text)}
        />
        <TextInput
          style = {styles.text}
          placeholder="Email"
          defaultValue={email}
          onChangeText={text => setEmail(text)}
        />
        <Button
          color = "#2A3132"
          title = "save"
          onPress = {()=>saveData()}
        />
        <Button
          color = "#2A3132"
          title = "delete"
          onPress = {()=>removeData(email)}
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
    margin:10
  },text:{
    borderColor:"black", 
    borderBottomWidth:1,
    margin:5,
    padding:5, 
  }
});


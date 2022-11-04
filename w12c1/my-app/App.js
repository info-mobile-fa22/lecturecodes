import { StatusBar } from 'expo-status-bar';
import React, {useState,useEffect} from 'react'; 
import { StyleSheet, Text, View, Image, Button, TextInput} from 'react-native';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, doc, getDoc, getDocs, setDoc, deleteDoc, query, where, orderBy, limit } from "firebase/firestore"; 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAbbuhmi1qAEI2c4ByQiWmBaXIo3LTXjrY",
  authDomain: "w11c2-lecture2.firebaseapp.com",
  projectId: "w11c2-lecture2",
  storageBucket: "w11c2-lecture2.appspot.com",
  messagingSenderId: "351349622717",
  appId: "1:351349622717:web:1ec3be6ff408a5a9bbb4d4"
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

  const getAllData = async() =>{

    const colRef = collection(db, "users");
    const docSnap = await getDocs(colRef);
    let newUserInfo = []

    docSnap.forEach((doc)=>{
      let newUser = {
        firstname: doc.data().firstname,
        lastname: doc.data().lastname,
        email: doc.data().email
      }
      newUserInfo.push(newUser)
    })
    setUserInfo(newUserInfo)

  }

  const getQueryData = async() =>{

    const colRef = collection(db, "users");
    const queryString = query(colRef, where("firstname", "==", "Luna"))
    const docSnap = await getDocs(queryString);
    let newUserInfo = []

    docSnap.forEach((doc)=>{
      let newUser = {
        firstname: doc.data().firstname,
        lastname: doc.data().lastname,
        email: doc.data().email
      }
      newUserInfo.push(newUser)
    })
    setUserInfo(newUserInfo)

  }

  const getMoreQueryData = async() =>{

    const colRef = collection(db, "users");
    const queryString = query(colRef, where("lastname", "==", "Chung"), where("firstname", "==", "Aki"))
    const docSnap = await getDocs(queryString);
    let newUserInfo = []

    docSnap.forEach((doc)=>{
      let newUser = {
        firstname: doc.data().firstname,
        lastname: doc.data().lastname,
        email: doc.data().email
      }
      newUserInfo.push(newUser)
    })
    setUserInfo(newUserInfo)

  }

  const getQueryDataOrder = async() =>{

    const colRef = collection(db, "users");
    const queryString = query(colRef, orderBy("firstname"), limit(2))
    const docSnap = await getDocs(queryString);
    let newUserInfo = []

    docSnap.forEach((doc)=>{
      let newUser = {
        firstname: doc.data().firstname,
        lastname: doc.data().lastname,
        email: doc.data().email
      }
      newUserInfo.push(newUser)
    })
    setUserInfo(newUserInfo)

  }

  useEffect(()=>{
    // getData("Aki@gmail.com");
    // getAllData()
    // getQueryData()
    // getMoreQueryData()
    getQueryDataOrder()
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
        {userInfo.map(user=><Text key={user.email}>{user.firstname} {user.lastname}, {user.email}</Text>)}
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


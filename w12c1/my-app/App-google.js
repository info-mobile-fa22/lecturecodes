import React, {useState, useEffect} from 'react';
import * as Google from 'expo-auth-session/providers/google';
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithCredential } from 'firebase/auth';
import { StyleSheet, View, Button } from 'react-native';

// Initialize Firebase
initializeApp({
  apiKey: "AIzaSyAbbuhmi1qAEI2c4ByQiWmBaXIo3LTXjrY",
  authDomain: "w11c2-lecture2.firebaseapp.com",
  projectId: "w11c2-lecture2",
  storageBucket: "w11c2-lecture2.appspot.com",
  messagingSenderId: "351349622717",
  appId: "1:351349622717:web:1ec3be6ff408a5a9bbb4d4"
});

// WebBrowser.maybeCompleteAuthSession();

export default function App() {

  const [request, response, promptAsync] = Google.useIdTokenAuthRequest(
    {
      clientId: '351349622717-96idg76bj1njl96s1a25ur9oh101eoao.apps.googleusercontent.com',
    },
  );

  useEffect(() => {
    console.log(response)
    if (response?.type === 'success') {
      const { id_token } = response.params;
      const auth = getAuth();
      const credential = GoogleAuthProvider.credential(id_token);
      signInWithCredential(auth, credential);
    }
  }, [response]);

  return (
    <View style={styles.container}>
      <Button
        disabled={!request}
        title="Google Login"
        onPress={() => {
          promptAsync();
        }}
      />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }

});
import React, {useState, useEffect} from 'react';
import * as Google from 'expo-auth-session/providers/google';
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithCredential } from 'firebase/auth';
import { StyleSheet, View, Button } from 'react-native';

// Initialize Firebase
initializeApp({
});

// WebBrowser.maybeCompleteAuthSession();

export default function App() {

  const [request, response, promptAsync] = Google.useIdTokenAuthRequest(
    {
      clientId: '',
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
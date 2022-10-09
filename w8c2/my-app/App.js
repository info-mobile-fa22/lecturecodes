// import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';


export default function App() {
  const Tap = createBottomTabNavigator();

  return (
    <NavigationContainer>
        <Tap.Navigator>
          <Tap.Screen
            name="First"
            component={FirstScreenSet}
          />
          <Tap.Screen
            name="Second"
            component={SecondScreen}
          />
          <Tap.Screen
            name="Third"
            component={ThirdScreen}
          />
        </Tap.Navigator>
      </NavigationContainer>
  );
}

function FirstScreenSet() {
  const Tap = createMaterialTopTabNavigator();

  return (
    <Tap.Navigator>
      <Tap.Screen
        name="FirstScreenSetA"
        component={FirstScreenSetA}
      />
      <Tap.Screen
        name="FirstScreenSetB"
        component={FirstScreenSetB}
      />
    </Tap.Navigator>
  );
}

function FirstScreenSetA(props){
    return(
      <View style={styles.firstA}>
        <Text>FirstScreenSetA</Text>
      </View>
      )
}

function FirstScreenSetB(props){
    return(
      <View style={styles.firstB}>
        <Text>FirstScreenSetB</Text>
      </View>
      )
}

function FirstScreen (props){
    return(
      <View style={styles.first}>
        <Text>First Screen</Text>
      </View>
      )
}

function SecondScreen (props){
    return(
      <View style={styles.second}>
        <Text>Second Screen</Text>
      </View>
      )
}

function ThirdScreen (props){
    return(
      <View style={styles.third}>
        <Text>Third Screen</Text>
      </View>
      )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },first:{
    flex: 1,
    backgroundColor:'skyblue',
    alignItems: 'center',
    justifyContent: 'center',
  },second:{
    flex: 1,
    backgroundColor:'lightpink',
    alignItems: 'center',
    justifyContent: 'center',
  },third:{
    flex: 1,
    backgroundColor:'lightyellow',
    alignItems: 'center',
    justifyContent: 'center',
  },firstA:{
    flex: 1,
    backgroundColor:'grey',
    alignItems: 'center',
    justifyContent: 'center',
  },firstB:{
    flex: 1,
    backgroundColor:'red',
    alignItems: 'center',
    justifyContent: 'center',
  }
});

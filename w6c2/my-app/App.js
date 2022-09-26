import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
  

export default class App extends React.Component {
  render(){
    return(  
        <View style={styles.container}>
          <View style={styles.item1}>
            <Text>item1</Text>
          </View>
          <View style={styles.item2}>
              <Text>item2</Text>
            </View>
            <View style={styles.item3}>
              <Text>item3</Text>
            </View>
            <View style={styles.item4}>
              <Text>item4</Text>
          </View>
        </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column-reverse',
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
    backgroundColor: '#555',
    margin:2
  },item1:{
    flex:1,
    width:100,
    height:40,
    backgroundColor:"mediumpurple",
    padding: 10,
    margin:2,
  }, item2:{
    flex:1,
    width:100,
    height:40,
    backgroundColor:"skyblue",
    padding: 10,
    margin:2,
  }, item3:{
    flex:1,
    width:100,
    height:40,
    backgroundColor:"teal",
    padding: 10,
    margin:2,
  },item4:{
    flex:1,
    width:100,
    height:40,
    backgroundColor:"palevioletred",
    padding: 10,
    margin:2,
  }
});

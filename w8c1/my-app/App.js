import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen 
          name="Home" 
          component={HomeScreen}
          options={{
            title:'My Title',
            headerStyle:{backgroundColor:'black'},
            headerTintColor:'white'
          }}
          />
        <Stack.Screen 
          name="Second" 
          component={SecondScreen}
          options={{
            title:'My Second Title',
            headerStyle:{backgroundColor:'crimson'},
            headerTintColor:'white'
          }}
          />
        <Stack.Screen 
          name="Third" 
          component={ThirdScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function HomeScreen(props) {
  return (
    <View style={styles.homescreen}>
      <Text>Home Screen</Text>
      <Button
        title="go to second"
        onPress={()=>props.navigation.navigate('Second',{'prevScreen':'HomeScreen'})}
      />
      <Button
        title="go to third"
        onPress={()=>props.navigation.navigate('Third',{'list':[1,2,3,4,5]})}
      />
    </View>
  );
}

function SecondScreen(props) {
  return (
    <View style={styles.secondscreen}>
      <Text>Second Screen</Text>
      <Button
        title="go to third"
        onPress={()=>props.navigation.navigate('Third')}
      />
      <Button
        title="go back"
        onPress={()=>props.navigation.goBack()}
      />
      <Text>{props.route.params.prevScreen}</Text>

    </View>
  );
}

function ThirdScreen(props) {
  return (
    <View style={styles.thirdscreen}>
      <Text>Third Screen</Text>
      <Button
        title="go back"
        onPress={()=>props.navigation.goBack()}
      />
      <Text>{props.route.params.list[4]}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },homescreen:{ 
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center',
    backgroundColor: 'skyblue'
  },secondscreen:{ 
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center',
    backgroundColor: 'lightyellow'
  },thirdscreen:{ 
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center',
    backgroundColor: 'lightpink'
  }
});

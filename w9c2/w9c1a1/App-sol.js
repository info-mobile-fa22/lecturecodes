import { StatusBar } from 'expo-status-bar';
import React,{useState, useEffect} from 'react';
import { StyleSheet, Text, View, Image, FlatList, TextInput, Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as Location from 'expo-location'
import MapView from 'react-native-maps'

const API_KEY = ""
const baseURL = "http://api.weatherbit.io/v2.0/forecast/daily?"

export default function App() {

  const Stack = createNativeStackNavigator();

  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Search">
          <Stack.Screen 
            name="Search" 
            component={SearchScreen}
            />
          <Stack.Screen 
            name="Results" 
            component={ResultScreen}
            />
        </Stack.Navigator>
      </NavigationContainer>
  )
}


/* Getting the weather data from the SearchScreen */
function ResultScreen(props) {

  
  return (
    <View style={styles.container}>
      <Text style={styles.header}>{props.route.params.latitude},{props.route.params.longitude}</Text>
      <Text style={styles.header}>16-day forecast</Text>
      <FlatList
        data={props.route.params.weatherObject}
        renderItem = {({item})=>
          <Weather
            key={item.ts}
            temp={item.temp} 
            desc={item.weather.description} 
            icon={item.weather.icon} />
        }
        keyExtractor={(item, index)=>index.toString()}
      />
      <StatusBar style="auto" />
    </View>
  )
}

function SearchScreen(props){
  const [text, setText] = useState("")
  const [location, setLocation] = useState(null)

  useEffect(()=>{
    (async()=>{
      let {status} = await Location.requestForegroundPermissionsAsync()
      console.log(status)

      if(status !== "granted"){
        console.log("location permission is not granted")
      }

      let results = await Location.getCurrentPositionAsync()
      setLocation(results)
    })()
  },[])

  const getWeatherLatLon = async(lat, lon)=>{
    // setCity(city)
    const URL = baseURL + "lat=" + lat + "&lon="+ lon + "&units=I&days=16&key=" + API_KEY
    console.log(URL)

    let response  = await fetch(URL)
    let results = await response.json()

    // console.log(results.data)

    return results.data
  }

  return(
     <View style={styles.container}>
        <View style={styles.searchPanel}>
          {location&&<MapView
            style={styles.map}
            provider="google"
            initialRegion={{
              latitude:location.coords.latitude,
              longitude:location.coords.longitude,
              latitudeDelta:0.1,
              longitudeDelta:0.1
            }}
            onLongPress= {async(e)=>{
              let latitude = e.nativeEvent.coordinate.latitude
              let longitude = e.nativeEvent.coordinate.longitude
              let weatherObject = await getWeatherLatLon(latitude, longitude)
              console.log(weatherObject.length)
              props.navigation.navigate("Results",{weatherObject:weatherObject, latitude:latitude, longitude: longitude})
            }}
          />}
        </View>   
      </View>  
    )
}

function Weather(props){

  const imgSrc = "https://www.weatherbit.io/static/img/icons/" + props.icon + ".png"
  return(
    <View style={styles.panel}>
      <Text style={styles.text}>{props.temp}</Text>
      <Text style={styles.text}>{props.desc}</Text>
      <Image style={styles.image} source={{uri:imgSrc}}/>
    </View>)
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 50
  },panel: {
    flexDirection:'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 320,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    padding: 3,
    marginHorizontal: 5,
    backgroundColor:'white'
  }, header:{
    fontSize:16,
    fontWeight:'bold',
    marginBottom: 10
  },text:{
    color:"gray",
    fontSize: 14
  }, image:{
    width: 40,
    height:40
  },searchPanel:{
    flexDirection:"row",
    justifyContent: 'center',
    color: 'gray',
    width: '80%',
    marginTop: 5,
    marginBottom: 5,
  },textInput:{
    flex:4,
    borderBottomWidth:1,
    padding:3,
    margin: 5
  },button:{
    flex:1,
    padding:3,
    margin: 5
  }, map:{
    width:400,
    height:400
  }
})
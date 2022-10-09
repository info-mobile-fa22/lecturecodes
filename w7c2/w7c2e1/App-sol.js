import { StatusBar } from 'expo-status-bar';
import React,{useState, useEffect} from 'react';
import { StyleSheet, Text, View, Image, FlatList} from 'react-native';
import background from './assets/background.jpg'
import logo from './assets/favicon.png'

const API_KEY = ""
const CITY_NAME = "Tokyo"
const baseURL = "http://api.weatherbit.io/v2.0/forecast/daily?"
const feature = ""
const parameters = "city=" + CITY_NAME + "&units=I&key=" + API_KEY

export default function App() {

  const [weatherObject, setWeatherObject] = useState(null)

  useEffect(()=>{

    const URL = baseURL + parameters

    fetch(URL)
    .then(response => response.json())
    .then(results =>{
      setWeatherObject(results.data)
    })

  },[])

  return (
    <View style={styles.container}>
      <Text style={styles.header}>{CITY_NAME} 16-day forecast</Text>
      <FlatList
        data={weatherObject}
        renderItem = {({item})=>
          <Weather
            key={item.ts}
            temp={item.temp} 
            desc={item.weather.description} 
            icon={item.weather.icon} />
        }
        keyExtractor={(item, index)=>index.toString()}
        stickyHeaderIndices = {[0]}
      />
      {/*{weatherObject&&weatherObject.map(object => 
        <Weather
          key={object.ts}
          temp={object.temp} 
          desc={object.weather.description} 
          icon={object.weather.icon} />)}*/}
      <StatusBar style="auto" />
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
    paddingTop: 30
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
  }
})
import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button} from 'react-native';
import MapView, {Marker,Callout} from 'react-native-maps'
import * as Location from 'expo-location'
import pin from './assets/pin.png'
import cafe from './assets/cafe.png'

var cafes =[{
  coordinate: {latitude:39.1714796, longitude:-86.5346882},
  title:"Crumble Cafe West",
  description:"Cumble Cafe on the west side of Bloomington"
  },
  {
    coordinate: {latitude:39.1668473, longitude:-86.535055},
    title:"Inkwell Cafe",
    description:"Inkwell Cafe on the College ave"
  },
  {
    coordinate: {latitude:39.1662291, longitude:-86.5322359},
    title:"Soma E Kirkwood",
    description:"Soma Coffee Hous and Juice Bar East Kirkwood"
  },
  {
    coordinate: {latitude:39.1664427, longitude:-86.5329044},
    title:"Blu Boy Cafe&Cakery",
    description:"Blu Boy Chocolate and Cafe"
  },
  {
    coordinate: {latitude:39.1673509, longitude:-86.5357833},
    title:"Brilliant Coffee Company",
    description:"Brilliant Coffee & Nourish Bar"
  }
];

export default function App() {

  const [location, setLocation] = useState(null)

  useEffect(()=>{
    (async()=>{
      // console.log("useEffect")
      let {status} = await Location.requestForegroundPermissionsAsync()
      console.log(status)

      if(status !== "granted"){
        console.log("location permission is not granted")
      }

      // let results = await Location.getCurrentPositionAsync()
      let results = await Location.geocodeAsync("Eskenazi Museum of Art, 1133 E 7th St, Bloomington, IN 47405")
      let museums = []
      
      let museum = {
        coordinate: {latitude:results[0].latitude, longitude:results[0].longitude},
        title:"Eskenazi Museum of Art",
        description:"Eskenazi Museum of Art"
      }

      museums.push(museum)

      results = await Location.geocodeAsync("308 W 4th St, Bloomington, IN 47404")

      museum = {
        coordinate: {latitude:results[0].latitude, longitude:results[0].longitude},
        title:"WonderLab Science Museum",
        description:"WonderLab Science Museum"
      }
      museums.push(museum)

      results = await Location.geocodeAsync("307 E 2nd St, Bloomington, IN 47401")

      museum = {
        coordinate: {latitude:results[0].latitude, longitude:results[0].longitude},
        title:"Wylie House Museum",
        description:"Wylie House Museum"
      }
      museums.push(museum)

      setLocation(museums)
      console.log(museums)
    })()
  },[])

  return (
    <View style={styles.container}>
      {/*Reulst from getCurrentPositionAsync()*/}
      {/*<Text>{location?location[0].latitude:""}</Text>
      <Text>{location?location[0].longitude:""}</Text>*/}
      {/*Results from geocodeAsync()*/}
      {/*<Text>{location?location[0].latitude:""}</Text>
      <Text>{location?location[0].longitude:""}</Text>*/}
      <MapView
        style={styles.map}
        provider="google"
        initialRegion={{
          latitude: 39.165325,
          longitude:-86.5263857,
          latitudeDelta:0.1,
          longitudeDelta:0.1
        }}
      >
      {/*<Marker
        coordinate= {{latitude:39.1672848, longitude:-86.5255016}}
        title= "Student Building"
        description = "I400/I590 classroom"
        pinColor="purple"
        image={pin}
      />*/}
      {location&&location.map((item,index)=>
        <Marker
        key={index}
        coordinate= {item.coordinate}
        title= {item.title}
        description = {item.description}

      />
      )}
      {/*{cafes.map((item,index)=>
        <Marker
        key={index}
        coordinate= {item.coordinate}
        title= {item.title}
        description = {item.description}
        image={cafe}
      >
        <Callout>
          <View>
            <Image
              source={cafe}
              style={{width:40, height:40}}
            />
            <Text>More Information about {item.title}</Text>
          </View>
        </Callout>
      </Marker>
      )}*/}
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },map:{
    width: 400,
    height: 400
  }

});

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, FlatList, Button } from 'react-native';
import React, { useState, useEffect } from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { MaterialIcons } from '@expo/vector-icons';

const API_KEY = ""
const apiURL = "https://api.nytimes.com/svc/movies/v2/reviews/search.json?api-key=" + API_KEY

export default function App() {

  const Tap = createBottomTabNavigator();

  return (
    <NavigationContainer>
        <Tap.Navigator>
          <Tap.Screen
            name="Movie Review"
            component={MovieReviewScreen}
            options={{
              tabBarIcon:({color,size})=>(<MaterialIcons name="local-movies" size={size} color={color} />)
            }}
          />
          <Tap.Screen
            name="Critic's Pick"
            component={CriticPickScreen}
            options={{
              tabBarIcon:({color,size})=>(<MaterialIcons name="star" size={size} color={color} />)
            }}
          />
        </Tap.Navigator>
      </NavigationContainer>
    
  );
}

function MovieReviewScreen(props){
  const [movies, setMovies] = useState([])
  const [keyword, setKeyword] = useState("")
  const [offset, setOffset] = useState(0)

  const getReviews = (searchKey, searchOffset) => {
    const reviewURL = apiURL + "&query=" + searchKey + "&offset=" + searchOffset
    console.log(reviewURL)

    fetch(reviewURL)
    .then(response => response.json())
    .then(results=>{
      let movieList = results.results
      let movieArray = []

      movieList.forEach((item, index)=>{
        let key = searchOffset + index
        let movieObject = {
          id:key,
          key:key,
          title:item.display_title,
          name:item.byline,
          date:item.publication_date,
          address:item.link.url,
          source:item.multimedia?item.multimedia.src:"",
        }

        console.log(item.display_title)
        movieArray.push(movieObject)
      })

      if(searchKey !== "" && searchOffset===0){
        setMovies([...movieArray])
        setOffset(0)
      }
      else
        setMovies([...movies, ...movieArray])
    })
  }

  useEffect(()=>{

    getReviews("",offset)

  },[])
  return(
    <View style={styles.container}>
      <Text style={styles.header}>Movie Reviews - The New York Times</Text>
      <SearchPanel 
        text={keyword}
        textFunction={setKeyword}
        searchFunction={getReviews}/>
      <FlatList
        data={movies}
        renderItem={({item})=>
          <MoviePanel
            {...(item)}
            deleteFunction={(id)=>setMovies(movies.filter(element=>element[0] !== id))}
          />}
        KeyExtrator={(item, index)=>index.toString()}
        contentContainerStyle={styles.view}
        ListFooterComponent={()=><Footer clickFunction={()=>{
          let offsetNow = offset + 20
          console.log(offsetNow)
          setOffset(offsetNow); 
          getReviews(keyword,offsetNow)}}/>}
      />
      
      <StatusBar style="auto" />
    </View>
    )
}

function CriticPickScreen(props){
  const Tap = createMaterialTopTabNavigator();

  return (
    <Tap.Navigator>
      <Tap.Screen
        name="Opening Date"
        component={OpeningScreen}
      />
      <Tap.Screen
        name="Publication Date"
        component={PublicationScreen}
      />
    </Tap.Navigator>    
  );
}

function OpeningScreen(props){
  const [movies, setMovies] = useState([])

  const getReviews = () => {
    const openingURL = "https://api.nytimes.com/svc/movies/v2/reviews/picks.json?order=by-opening-date&api-key=" + API_KEY
    console.log(openingURL)

    fetch(openingURL)
    .then(response => response.json())
    .then(results=>{
      let movieList = results.results
      let movieArray = []

      movieList.forEach((item, index)=>{
        let movieObject = {
          id:index,
          key:index,
          title:item.display_title,
          name:item.byline,
          date:item.publication_date,
          address:item.link.url,
          source:item.multimedia?item.multimedia.src:"",
        }

        console.log(item.display_title)
        movieArray.push(movieObject)
      })

        setMovies([...movieArray])
    })
  }

  useEffect(()=>{

    getReviews()

  },[])

  return(
    <View style={styles.container}>
      <FlatList
        data={movies}
        renderItem={({item})=>
          <MoviePanel
            {...(item)}
            deleteFunction={(id)=>setMovies(movies.filter(element=>element[0] !== id))}
          />}
        KeyExtrator={(item, index)=>index.toString()}
        contentContainerStyle={styles.view}
      />
      
      <StatusBar style="auto" />
    </View>
    )
}

function PublicationScreen(props){
  const [movies, setMovies] = useState([])

  const getReviews = () => {
    const openingURL = "https://api.nytimes.com/svc/movies/v2/reviews/picks.json?order=by-publication-date&api-key=" + API_KEY
    console.log(openingURL)

    fetch(openingURL)
    .then(response => response.json())
    .then(results=>{
      let movieList = results.results
      let movieArray = []

      movieList.forEach((item, index)=>{
        let movieObject = {
          id:index,
          key:index,
          title:item.display_title,
          name:item.byline,
          date:item.publication_date,
          address:item.link.url,
          source:item.multimedia?item.multimedia.src:"",
        }

        console.log(item.display_title)
        movieArray.push(movieObject)
      })

        setMovies([...movieArray])
    })
  }

  useEffect(()=>{

    getReviews()

  },[])

  return(
    <View style={styles.container}>
      <FlatList
        data={movies}
        renderItem={({item})=>
          <MoviePanel
            {...(item)}
            deleteFunction={(id)=>setMovies(movies.filter(element=>element[0] !== id))}
          />}
        KeyExtrator={(item, index)=>index.toString()}
        contentContainerStyle={styles.view}
      />
      
      <StatusBar style="auto" />
    </View>
    )
}

function SearchPanel(props){
  return(
      <View style={styles.panelBody}>              
        <TextInput
          placeholder="Search Keywords"
          onChangeText={(value)=>props.textFunction(value)}
          value={props.text}
        />
        <Button 
          title="Search"
          onPress={()=>{props.searchFunction(props.text,0);props.textFunction("")}/* Use Movie Review API to Search*/}/>
      </View>     
    )
}

function MoviePanel(props){
  return(
      <View style={styles.panelBody}>
        <View style={styles.text}>
          <Title title={props.title}/>
          <Author name={props.name}/>
          <PubDate date={props.date}/>
          <HideButton/>
        </View>
        <Poster source={props.source}/>
      </View>     
    )
}

function Footer(props){
  return(
    <TouchableOpacity style={styles.footer}>
     <Text style={styles.status} onPress={props.clickFunction}>more</Text>
    </TouchableOpacity>
    )
}

function Title(props){
  return(
      <Text style={styles.captionDisplay}>{props.title}</Text>
    )
}

function Author(props){
  return(
    <Text style={styles.status}>{props.name}</Text>
    )
}

function PubDate(props){
  return(
    <Text style={styles.status}>{props.date}</Text>
    )
}


function HideButton(props){
  return(
    <TouchableOpacity >
     <Text style={styles.hide}>hide this review</Text>
     </TouchableOpacity>
    )
}

function Poster(props){
  return(
    <View style={styles.poster}>
      <Image style={styles.image} source={{uri:props.source}}/>
    </View>)
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 20,
  },panelBody: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '90%',
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    padding: 3,
    marginVertical: 5,
    marginHorizontal: 0,
  },text:{
    flex: 6,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
    padding: 3,
    marginVertical: 5,
    marginHorizontal: 0,
  },poster:{
    justifyContent: 'center',
    alignItems: 'center',
    flex: 4,
    padding: 3,
    marginVertical: 5,
    marginHorizontal: 0,
  },captionDisplay:{
    color: '#2F83D0',
    fontSize: 18,
    padding: 3,
    marginVertical: 10,
    marginHorizontal: 5, 
  },status:{ 
    color: 'gray',
    fontSize: 16,
    padding: 3,
    marginVertical: 0,
    marginHorizontal: 5, 
  },hide:{
    color:'#5588c1',
    fontSize: 14,
    padding: 3,
    marginVertical: 0,
    marginHorizontal: 5,
  },image:{
    width: '90%',
    height: undefined,
    aspectRatio: 1.3,
  },panelAdd:{
    flexDirection:"row",
    justifyContent: 'flex-start',
    color: 'gray',
    width: '80%',
    marginTop: 5,
    marginBottom: 5,
  },header:{
    fontSize: 20,
    fontWeight: 'bold',
  },view:{
    width:'100%',
    alignItems:'center'
  }, footer: {
    alignItems:'flex-end',
    justifyContent:'flex-end',
    padding:3,
    margin: 5
  }


});


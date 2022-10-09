import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, Button, ScrollView} from 'react-native';
import React, { useState, useEffect } from 'react';

const API_KEY = ""
const apiURL = "https://api.nytimes.com/svc/movies/v2/reviews/search.json?api-key=" + API_KEY

export default function App() {
  const [movies, setMovies] = useState([])

  const getReviews = (searchKey) =>{
    const searchURL = apiURL + "&query=" + searchKey

    fetch(searchURL)
    .then(response => response.json())
    .then(results=>{
      let movieList = results.results.slice(0,5)
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

        movieArray.push(movieObject)
      })

      setMovies([...movieArray])
    })

  }

  useEffect(()=>{

    getReviews("")

  },[])

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Movie Reviews - The New York Times</Text>
      <SearchPanel searchFunction = {getReviews}/>
      <ScrollView style={styles.view}>
        {movies.map(movie=>
          <MoviePanel
            {...movie}
            deleteFunction={(id)=>setMovies(movies.filter(item=>item[0] !== id))}/>)}
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}

function SearchPanel(props){
  const [text, setText] = useState("")

  return(
      <View style={styles.panelAdd}>              
        <TextInput
          style={styles.textinput}
          placeholder="Search Keywords"
          onChangeText={(value)=>setText(value)}
          value={text}
        />
        <Button 
          color="grey"
          title="Search"
          onPress={()=>{
          /* Use Movie Review API to Search*/
          props.searchFunction(text)
          setText("")}}/>
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

function ControlPanel(props){
  return(
    <View style={styles.panelAdd}>
      <AButton aId="more-review" aCaption="More Reviews +" clickFunction={props.movieFunction}/>
      <AButton aId="show-posters" aCaption="Show Posters" clickFunction={props.showFunction}/>
    </View>)
}

function AButton(props){
  return(
    <TouchableOpacity >
     <Text style={styles.status} id={props.aId} onClick={props.clickFunction}>{props.aCaption}</Text>
    </TouchableOpacity>
      // <a  href="#" style={styles.status} id={props.aId} onClick={props.clickFunction}>{props.aCaption}</a>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 30,
  },panelBody: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // width: '80%',
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
  },header:{
    fontSize: 20,
    fontWeight: 'bold',
  },textinput:{
    borderBottomWidth:1,
    flex:4,
    padding: 3,
    margin: 5,
  }, button:{
    flex:1
  },view:{
    width:'90%',
    contentContainerStyle:{
      alignItems:'center'
    }
  }


});


import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React, { useState, useEffect } from 'react';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Movie Reviews - The New York Times</Text>
        <ControlPanel 
          showFunction={()=>{}}
          movieFunction = {()=>{}}
        />
      <MoviePanel 
          title="Stay on Board: The Leo Baker Story" 
          name="Teo Bugbee" 
          date="2022-08-11" 
          source="https://static01.nyt.com/images/2022/08/12/arts/11leo-baker-review1/11leo-baker-review1-mediumThreeByTwo440.jpg" 
      />
      <MoviePanel 
        title="The Princess" 
        name="Glenn Kenny" 
        date="2022-08-11" 
        source="https://static01.nyt.com/images/2022/08/12/arts/11princess-review/11princess-review-mediumThreeByTwo440.jpg" 
      />
      <StatusBar style="auto" />
    </View>
  );
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
      <TouchableOpacity sylte={styles.stauts} id={props.aId} onPress={props.clickFunction}>
        <Text>{props.aCaption}</Text>
      </TouchableOpacity>
      // <a  href="#" class="status" id={props.aId} onClick={props.clickFunction}>{props.aCaption}</a>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },panelBody: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '80%',
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
    marginHorizontal: 10, 
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
    color: 'gray',
    width: '80%',
    marginTop: 5,
    flexDirection: 'row',
  },header:{
    fontWeight: 'bold',
    fontSize: 20
  }


});


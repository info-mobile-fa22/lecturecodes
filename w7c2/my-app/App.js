import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView, FlatList, SectionList } from 'react-native';


const shows = 
[{
  month: 10,
  date: 6,
  title: "First Thursdays",
},{
  month: 10,
  date: 15,
  title: "Ron White",
},{
  month: 10,
  date: 18,
  title: "Soweto Gospel Choir",
},{
  month: 10,
  date: 19,
  title: "Theresa Caputo Live! The Experience",
},{
  month: 10,
  date: 20, 
  title: "A Conversation with Nikole Hannah-Jones",
},{
  month: 10,
  date: 25, 
  title: "My Fair Lady",
},{
  month: 10,
  date: 28, 
  title: "Dennis James Hosts Halloween",
},{
  month: 11,
  date: 3, 
  title: "First Thursdays",
},{
  month: 11,
  date: 12, 
  title: "Potpourri of the Arts in the African American Tradition",
},{
  month: 12,
  date: 3, 
  title: "Chimes of Christmas",
},{
  month: 12,
  date: 4, 
  title: "Alton Brown Live: Beyond The Eats – The Holiday Variant",
},{
  month: 12,
  date: 16, 
  title: "Straight No Chaser",
}]

const showsByMonth = 
[{
  month: "October",
  data: ["First Thursdays","Ron White","Soweto Gospel Choir", "Theresa Caputo Live! The Experience", "A Conversation with Nikole Hannah-Jones", "My Fair Lady", "Dennis James Hosts Halloween"]
},{
  month: "November",
  data: ["First Thursdays","Potpourri of the Arts in the African American Tradition"]
},{
  month: "December",
  data: ["Chimes of Christmas", "Alton Brown Live: Beyond The Eats – The Holiday Variant", "Straight No Chaser"]
}]

/*
*/

export default function App() {

  return (
    <View style={styles.container}>
      {/*<FlatList
          data = {shows}
          renderItem = {({item})=>(<Show title={item.title}/>)}
          keyExtractor = {(item,index)=>(index.toString())}
          contentContainerStyle={styles.view}
          ItemSeparatorComponent={()=><Separator/>}
          ListHeaderComponent={()=><Header />}
          ListFooterComponent={()=><Footer />}
        />*/}
      <SectionList
        sections={showsByMonth}
        renderItem={({item})=><Show title={item}/>}
        keyExtractor={(item,index)=>index.toString()}
        renderSectionHeader={({section})=><SectionHeader title={section.month}/>}
      />

      <StatusBar style="auto" />
    </View>
  )
}

function Separator(props){
  return(<View style={styles.separator}/>)
}

function Show(props){
  return(
    <View style={styles.show}>
      <Text style={styles.text}>{props.title}</Text>
    </View>
  )
}

function Header(props){
  return(
    <View style={styles.header}>
      <Text style={styles.headerText}>Header</Text>
    </View>
  )
}

function SectionHeader(props){
  return(
    <View style={styles.header}>
      <Text style={styles.headerText}>{props.title}</Text>
    </View>
  )
}

function Footer(props){
  return(
    <View style={styles.header}>
      <Text style={styles.headerText}>Footer</Text>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 30
  }, show:{
    backgroundColor:"#606c38",
    padding: 3,
    margin: 3,
  }, text:{
    fontSize: 30
  }, view:{
    backgroundColor:"#283618"
  }, separator:{
    backgroundColor:"#bc6c25",
    padding:1
  }, header:{
    backgroundColor:"#dda15e",
    padding: 5
  }, headerText:{
    color:"#fefae0",
    fontSize: 35,
    fontWeight: 'bold'
  }
});




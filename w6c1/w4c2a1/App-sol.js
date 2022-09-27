import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';

const orgMovie = [
  ["O1","13: The Musical","Amy Nicholson","2022-08-12","https://www.nytimes.com/2022/08/12/movies/13-the-musical-review.html","https://static01.nyt.com/images/2022/08/10/arts/thirteen1/thirteen1-mediumThreeByTwo440.jpg"],
  ["O2","Day Shift","Jeannette Catsoulis","2022-08-12","https://www.nytimes.com/2022/08/11/movies/day-shift-review.html","https://static01.nyt.com/images/2022/08/12/arts/dayshift1/merlin_211046976_063d0b06-20dd-4615-a069-3e1accf3ee12-mediumThreeByTwo440.jpg"],
  ["O3","Stay on Board: The Leo Baker Story","Teo Bugbee","2022-08-11","https://www.nytimes.com/2022/08/11/movies/stay-on-board-the-leo-baker-story-review.html","https://static01.nyt.com/images/2022/08/12/arts/11leo-baker-review1/11leo-baker-review1-mediumThreeByTwo440.jpg"],
  ["O4","The Princess","Glenn Kenny","2022-08-11","https://www.nytimes.com/2022/08/11/movies/the-princess-review-diana.html","https://static01.nyt.com/images/2022/08/12/arts/11princess-review/11princess-review-mediumThreeByTwo440.jpg"]
]
const newMovie = [
  ["N1","Girl Picture","Amy Nicholson", "2022-08-11", "https://www.nytimes.com/2022/08/11/movies/girl-picture-review.html", "https://static01.nyt.com/images/2022/08/12/arts/11girl/11girl-mediumThreeByTwo210.jpg"],
  ["N2","A Little Night Music", "Jesse Green", "2022-08-12","https://www.nytimes.com/2022/08/12/theater/a-little-night-music-great-barrington-stage.html","https://static01.nyt.com/images/2022/08/12/arts/12little-night/12little-night-mediumThreeByTwo210.jpg"]
]

function App() {

  const [showPoster, setShowPoster] = useState(true)
  const [movies, setMovies] = useState(orgMovie)

  return (
    <div className="App">
      <header className="App-header">
        <h4>Movie Reviews - The New York Times</h4>
        <TimePanel />
        <ControlPanel movieList ={movies} showFunction={()=>setShowPoster(!showPoster)} movieFunction = {()=>setMovies([...movies, ...newMovie])}/>
          {movies.map(movie=>
            <MoviePanel
              id = {movie[0]} 
              title={movie[1]} 
              name={movie[2]} 
              date={movie[3]} 
              address={movie[4]} 
              source={movie[5]} 
              isShow={showPoster}
              deleteFunction={(id)=>setMovies(movies.filter(item=>item[0] !== id))}/>)}
      </header>
    </div>
  );
}

function TimePanel(props){
  const [text, setText] = useState("")
  const orgMonths = ["May", "June", "July", "August", "September"]
  const allMonths = ["January","Fabruary", "March","April","May", "June", "July", "August", "September", "October", "November", "December"]
  const [months, setMonth] = useState(orgMonths)
  const [msg, setMsg] = useState("")

  
  useEffect(()=>{

    if(text&&allMonths.indexOf(text) === -1)
      setMsg("it's not a month")
    else
      setMsg("")

  },[text])

  return(
      <div class="panel-body">

        {months.map(month =><a class="status" href="#">{month}</a>)}
                
        <input
          placeholder="Month"
          onChange={(event)=>setText(event.target.value)}
          value={text}
        />
        <span class="message">{msg}</span>
        <ButtonTemplate label="Add a Month" clickFunction = {()=>{
          setMonth([...months, text]); 
          setText("")}}/>
        <ButtonTemplate label="Delete a month" clickFunction ={()=>{
          setMonth(months.filter(month=>month!==text));
          setText("")}}/>
      </div>     
    )
}

function ButtonTemplate(props){
  return(
      <button onClick={props.clickFunction}>{props.label}</button>
    )
}

function ControlPanel(props){
  return(
    <div class="panel-add">
      <AButton aId="more-review" aCaption="More Reviews +" clickFunction={props.movieFunction}/>
      <AButton aId="show-posters" aCaption="Show Posters" clickFunction={props.showFunction}/>
    </div>)
}

function AButton(props){
  return(
      <a  href="#" class="status" id={props.aId} onClick={props.clickFunction}>{props.aCaption}</a>
    )
}

function MoviePanel(props){
  return(
      <div class="panel-body">
        <div class="text">
          <Title title={props.title}/>
          <Author name={props.name}/>
          <PubDate date={props.date}/>
          <URL address={props.address}/>
          <HideButton deleteID = {props.id} clickFunction={props.deleteFunction}/>
        </div>
        <Poster source={props.source} isShow={props.isShow}/>
      </div>     
    )
}

function Title(props){
  return(
    <div class="caption-display">
      <span>{props.title}</span>
    </div>
    )
}

function Author(props){
  return(
    <span class="status">{props.name}</span>
    )
}

function PubDate(props){
  return(
    <span class="status">{props.date}</span>
    )
}

function URL(props){
  return(
    <span class="status">{props.address}</span>
    )
}

function HideButton(props){
  return(
    <a href="#" class="hide" onClick={()=>props.clickFunction(props.deleteID)}> hide this review </a>
    )
}

function Poster(props){

  if(props.isShow)
    return(
      <div class="poster">
        <img class ="image" src={props.source}/>
      </div>)
  else
    return("")
}

export default App;

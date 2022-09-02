import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {

  
  const [showPoster, setShowPoster] = useState(true)
  const [text, setText] = useState("")
  

  return (
    <div className="App">
      <header className="App-header">
        <h4>Movie Reviews - The New York Times</h4>
        <h6>{text}</h6>
        
        
        
        {/*<button onClick={()=>setTime(new Date())}>Get Time</button>
        <button onClick={()=>setShowTime(!showTime)}>Show Time</button>*/}

        <TimePanel setTextFunction={setText} textValue={text}/>
        
        <div class="panel-add">
          <a  href="#" class="status" id="more-review">More Reviews +</a>
          <a  href="#" class="status" id="more-review" onClick = {()=>setShowPoster(!showPoster)}>Show Posters</a>
        </div>
        <MoviePanel
          title="13: The Musical" 
          name="Amy Nicholson" date="2022-08-12" 
          address="https://www.nytimes.com/2022/08/12/movies/13-the-musical-review.html" 
          source="https://static01.nyt.com/images/2022/08/10/arts/thirteen1/thirteen1-mediumThreeByTwo440.jpg" 
          isShow={showPoster}/>
        <MoviePanel
          title="Day Shift" 
          name="Jeannette Catsoulis" 
          date="2022-08-12" 
          address="https://www.nytimes.com/2022/08/11/movies/day-shift-review.html" 
          source="https://static01.nyt.com/images/2022/08/12/arts/dayshift1/merlin_211046976_063d0b06-20dd-4615-a069-3e1accf3ee12-mediumThreeByTwo440.jpg" 
          isShow={showPoster}/>
        <MoviePanel
          title="Stay on Board: The Leo Baker Story" 
          name="Teo Bugbee" 
          date="2022-08-11" 
          address="https://www.nytimes.com/2022/08/11/movies/stay-on-board-the-leo-baker-story-review.html" 
          source="https://static01.nyt.com/images/2022/08/12/arts/11leo-baker-review1/11leo-baker-review1-mediumThreeByTwo440.jpg" 
          isShow={showPoster}/>
        <MoviePanel 
          title="The Princess" 
          name="Glenn Kenny" 
          date="2022-08-11" 
          address="https://www.nytimes.com/2022/08/11/movies/the-princess-review-diana.html" 
          source="https://static01.nyt.com/images/2022/08/12/arts/11princess-review/11princess-review-mediumThreeByTwo440.jpg" 
          isShow={showPoster}/>
      </header>
    </div>
  );
}


function TimePanel(props){
  const [time, setTime] = useState(new Date())
  const [showTime, setShowTime] = useState(true)
    

  return(
      <div class="panel-body">
        <h6>{showTime?time.toString():""}</h6>
        <ButtonTemplate clickFunction = {()=>setTime(new Date())} label="Get Time"/>
        <ButtonTemplate clickFunction = {()=>setShowTime(!showTime)} label="Show Time"/>

                
        <input
          placeholder="write something"
          onChange={(event)=>props.setTextFunction(event.target.value)}
        />
        <ButtonTemplate clickFunction = {()=>alert(props.textValue)} label="Show Text"/>
      </div>     
    )
}

function ButtonTemplate(props){
  return(
      <button onClick={props.clickFunction}>{props.label}</button>
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
          <HideButton />
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
    <a href="#" class="hide"> hide this review </a>
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

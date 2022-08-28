import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {

  const [time, setTime] = useState(new Date())
  const [show, setShow] = useState(true)

  return (
    <div className="App">
      <header className="App-header">
        <h4>Movie Reviews - The New York Times</h4>
        <h6>{show?time.toString():""}</h6>
        <button onClick={()=>setTime(new Date())}>Set Time</button>
        <button onClick={()=>setShow(!show)}>show Time</button>
        <div class="panel-add">
          <a  href="#" class="status" id="more-review">More Reviews +</a>
          <a  href="#" class="status" id="more-review">Show Posters</a>
        </div>
        <div class="panel-body">
          <div class="text">
            <Title title="13: The Musical"/>
            <Author name="Amy Nicholson"/>
            <span class="status">2022-08-12</span>
            <span class="status">https://www.nytimes.com/2022/08/12/movies/13-the-musical-review.html</span>
            <a href="#" class="hide"> hide this review </a>
          </div>
          <div class="poster">
            <img class ="image" src="https://static01.nyt.com/images/2022/08/10/arts/thirteen1/thirteen1-mediumThreeByTwo440.jpg"/>
          </div>
        </div>
        <div class="panel-body">
        <div class="text">
          <Title title="Day Shift"/>
          <Author name="Jeannette Catsoulis"/>
          <span class="status">2022-08-12</span>
          <span class="status">https://www.nytimes.com/2022/08/11/movies/day-shift-review.html</span>
          <a href="#" class="hide"> hide this review </a>
        </div>
        <div class="poster">
          <img class ="image" src="https://static01.nyt.com/images/2022/08/12/arts/dayshift1/merlin_211046976_063d0b06-20dd-4615-a069-3e1accf3ee12-mediumThreeByTwo440.jpg"/>
        </div>
      </div>
      </header>
    </div>
  );
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

export default App;

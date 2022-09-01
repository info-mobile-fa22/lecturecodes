import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {

  const [show, setShow] = useState(true)

  // function setShowStatue (){

  // }

  return (
    <div className="App">
      <header className="App-header">
        <h4>Movie Reviews - The New York Times</h4>
        <div class="panel-add">
          <a  href="#" class="status" id="more-review">More Reviews +</a>
          <a  href="#" class="status" id="show-posters" onClick={()=>setShow(!show)}>Show Posters</a>
        </div>
        <div class="panel-body">
          <div class="text">
            <Title title="13: The Musical"/>
            <Author name="Amy Nicholson"/>
            <PubDate date="2022-08-12" />
            <URL addr="https://www.nytimes.com/2022/08/12/movies/13-the-musical-review.html" />
            <a href="#" class="hide"> hide this review </a>
          </div>
          <Poster isShow={show} source="https://static01.nyt.com/images/2022/08/10/arts/thirteen1/thirteen1-mediumThreeByTwo440.jpg"/>
        </div>
        <div class="panel-body">
          <div class="text">
            <Title title="Day Shift"/>
            <Author name="Jeannette Catsoulis"/>
            <PubDate date="2022-08-12" />
            <URL addr="https://www.nytimes.com/2022/08/11/movies/day-shift-review.html" />
            <a href="#" class="hide"> hide this review </a>
          </div>
          <Poster isShow={show} source="https://static01.nyt.com/images/2022/08/12/arts/dayshift1/merlin_211046976_063d0b06-20dd-4615-a069-3e1accf3ee12-mediumThreeByTwo440.jpg"/>
        </div>
        <div class="panel-body">
          <div class="text">
            <Title title="Stay on Board: The Leo Baker Story"/>
            <Author name="Teo Bugbee"/>
            <PubDate date="2022-08-11" />
            <URL addr="https://www.nytimes.com/2022/08/11/movies/stay-on-board-the-leo-baker-story-review.html"/>
             <a href="#" class="hide"> hide this review </a>
          </div>
          <Poster isShow={show} source="https://static01.nyt.com/images/2022/08/12/arts/11leo-baker-review1/11leo-baker-review1-mediumThreeByTwo440.jpg"/>
        </div>
        <div class="panel-body">
          <div class="text">
            <Title title="The Princess"/>
            <Author name="Glenn Kenny"/>
            <PubDate date="2022-08-11" />
            <URL addr="https://www.nytimes.com/2022/08/11/movies/the-princess-review-diana.html"/>
            <a href="#" class="hide"> hide this review </a>
          </div>
          <Poster isShow={show} source="https://static01.nyt.com/images/2022/08/12/arts/11princess-review/11princess-review-mediumThreeByTwo440.jpg"/>
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

function PubDate(props){
  return(
    <span class="status">{props.date}</span>
    )
}

function URL(props){
  return(
    <span class="status">{props.addr}</span>
    )
}

function Poster(props){

  if (props.isShow){
    return(
      <div class="poster">
        <img class ="image" src={props.source}/>
      </div>
      )
  }else{
    return("")
  }
}
export default App;

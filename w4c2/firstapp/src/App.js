import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect, useContext} from 'react';

const newMovie = [["Girl Picture","Amy Nicholson", "2022-08-11", "https://www.nytimes.com/2022/08/11/movies/girl-picture-review.html", "https://static01.nyt.com/images/2022/08/12/arts/11girl/11girl-mediumThreeByTwo210.jpg"],["A Little Night Music", "Jesse Green", "2022-08-12","https://www.nytimes.com/2022/08/12/theater/a-little-night-music-great-barrington-stage.html","https://static01.nyt.com/images/2022/08/12/arts/12little-night/12little-night-mediumThreeByTwo210.jpg"]]

const ColorContext = React.createContext()
function App() {

  
  const [showPoster, setShowPoster] = useState(true)
  const [showNewMovie, setShowNewMovie] = useState(false)

  return (
    <div className="App">
      <header className="App-header">
        <ColorContext.Provider value={{textColor:"#556f44", authorColor:"#283f3b"}}>
          <h4>Movie Reviews - The New York Times</h4>

          <TimePanel />
          
          <ControlPanel  
            newMovieFunction={()=>setShowNewMovie(!showNewMovie)} 
            posterFunction={()=>setShowPoster(!showPoster)}/>

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
          {showNewMovie&&
            <MoviePanel 
              title={newMovie[0][0]} 
              name={newMovie[0][1]} 
              date={newMovie[0][2]} 
              address={newMovie[0][3]} 
              source={newMovie[0][4]} 
              isShow={showPoster}/>}
          {showNewMovie&&
            <MoviePanel 
            title={newMovie[1][0]}
            name={newMovie[1][1]}
            date={newMovie[1][2]}
            address={newMovie[1][3]} 
            source={newMovie[1][4]} 
            isShow={showPoster}/>}
          </ColorContext.Provider>
      </header>
    </div>
  );
}


function TimePanel(props){
  const [text, setText] = useState("")
  const allMonths = ["May", "June", "July", "August", "September"]
  const [months, setMonth] = useState(allMonths)
  const [number, setNumber] = useState(months.length)
  const colorContext = useContext(ColorContext)

  useEffect(()=>{
    setNumber(months.length)
  }, [months])

  return(
      <div class="panel-body">
      <span class="status" style={{color:colorContext.textColor}}> Total {number} months of reviews</span>
        {/*<a class="status" href="#">{allMonths[0]}</a>
        <a class="status" href="#">{allMonths[1]}</a>
        <a class="status" href="#">{allMonths[2]}</a>
        <a class="status" href="#">{allMonths[3]}</a>*/}

        {months.map(month =><a class="status" href="#">{month}</a>)}
                
        <input
          placeholder="Month"
          onChange={(event)=>setText(event.target.value)}
          value={text}
        />
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
        <ControlButton id="more-review" label="More Reviews +" clickFunction={props.newMovieFunction}/>
        <ControlButton id="show-poster" label="Show Posters" clickFunction={props.posterFunction}/>
      </div>     
    )
}

function ControlButton(props){
  return(<a  href="#" class="status" id={props.id} onClick = {props.clickFunction}>{props.label} </a>)
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
  const colorContext = useContext(ColorContext)
  return(
    <span class="status" style={{color:colorContext.authorColor}}>{props.name}</span>
    )
}

function PubDate(props){
  const colorContext = useContext(ColorContext)
  return(
    <span class="status" style={{color:colorContext.textColor}}>{props.date}</span>
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

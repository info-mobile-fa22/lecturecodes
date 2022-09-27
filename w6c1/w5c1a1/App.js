import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';

// const orgMovie = [
//   ["O1","13: The Musical","Amy Nicholson","2022-08-12","https://www.nytimes.com/2022/08/12/movies/13-the-musical-review.html","https://static01.nyt.com/images/2022/08/10/arts/thirteen1/thirteen1-mediumThreeByTwo440.jpg"],
//   ["O2","Day Shift","Jeannette Catsoulis","2022-08-12","https://www.nytimes.com/2022/08/11/movies/day-shift-review.html","https://static01.nyt.com/images/2022/08/12/arts/dayshift1/merlin_211046976_063d0b06-20dd-4615-a069-3e1accf3ee12-mediumThreeByTwo440.jpg"],
//   ["O3","Stay on Board: The Leo Baker Story","Teo Bugbee","2022-08-11","https://www.nytimes.com/2022/08/11/movies/stay-on-board-the-leo-baker-story-review.html","https://static01.nyt.com/images/2022/08/12/arts/11leo-baker-review1/11leo-baker-review1-mediumThreeByTwo440.jpg"],
//   ["O4","The Princess","Glenn Kenny","2022-08-11","https://www.nytimes.com/2022/08/11/movies/the-princess-review-diana.html","https://static01.nyt.com/images/2022/08/12/arts/11princess-review/11princess-review-mediumThreeByTwo440.jpg"]
// ]
// const newMovie = [
//   ["N1","Girl Picture","Amy Nicholson", "2022-08-11", "https://www.nytimes.com/2022/08/11/movies/girl-picture-review.html", "https://static01.nyt.com/images/2022/08/12/arts/11girl/11girl-mediumThreeByTwo210.jpg"],
//   ["N2","A Little Night Music", "Jesse Green", "2022-08-12","https://www.nytimes.com/2022/08/12/theater/a-little-night-music-great-barrington-stage.html","https://static01.nyt.com/images/2022/08/12/arts/12little-night/12little-night-mediumThreeByTwo210.jpg"]
// ]

const API_KEY = ""
const apiURL = "https://api.nytimes.com/svc/movies/v2/reviews/search.json?api-key=" + API_KEY

function App() {

  const [showPoster, setShowPoster] = useState(true)
  const [movies, setMovies] = useState([])
  const [moreMovies, setMoreMovies] = useState([])


  useEffect(()=>{

    fetch(apiURL)
    .then(response => response.json())
    .then(results=>{
      let movieList = results.results.slice(0,5)
      let movieArray = []

      movieList.forEach((item, index)=>{
        let movieObject = {
          id:index,
          title:item.display_title,
          name:item.byline,
          date:item.publication_date,
          address:item.link.url,
          source:item.multimedia?item.multimedia.src:"",
        }

        movieArray.push(movieObject)
      })

      setMovies([...movies, ...movieArray])

      let moreMovieList = results.results.slice(5,7)
      let moreMovieArray = []

      moreMovieList.forEach((item, index)=>{
        let movieObject = {
          id:index,
          title:item.display_title,
          name:item.byline,
          date:item.publication_date,
          address:item.link.url,
          source:item.multimedia?item.multimedia.src:"",
        }

        moreMovieArray.push(movieObject)
      })

      setMoreMovies([...moreMovies, ...moreMovieArray])

    })

  },[])


  return (
    <div className="App">
      <header className="App-header">
        <h4>Movie Reviews - The New York Times</h4>
        <ControlPanel 
          showFunction={()=>{setShowPoster(!showPoster)}}
          movieFunction = {()=>setMovies([...movies, ...moreMovies])}
        />
        {/*{movies.map(movie=>
            <MoviePanel
              id = moive.id 
              title=movie.title
              name=movie.name
              date=movie.date
              address=movie.address
              source=movie.source
              isShow={showPoster}
              deleteFunction={(id)=>setMovies(movies.filter(item=>item[0] !== id))}/>)}*/}
        {movies.map(movie=>
            <MoviePanel
              {...movie}
              isShow={showPoster}
              deleteFunction={(id)=>setMovies(movies.filter(item=>item[0] !== id))}/>)}
      </header>
    </div>
  );
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
    <a href="#" class="hide" onClick={()=>{
      props.clickFunction(props.deleteID)
    }}> hide this review </a>
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

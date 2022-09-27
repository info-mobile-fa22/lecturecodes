import logo from './logo.svg';
import './App.css';
import React,{useState, useEffect} from 'react';


const API_KEY = ""
const CITY_NAME = "Tokyo"
const baseURL = "http://api.weatherbit.io/v2.0/forecast/daily?"
const feature = ""
const parameters = "city=" + CITY_NAME + "&units=I&days=7&key=" + API_KEY

function App() {

  const [weatherObject, setWeatherObject] = useState(null)

  useEffect(()=>{

    const URL = baseURL + parameters

    fetch(URL)
    .then(response => response.json())
    .then(results =>{
      setWeatherObject(results.data)
    })

  },[])

  return (
    <div className="App">
      <header className="App-header">
      <h6>{CITY_NAME} seven-day forecast</h6>
      {weatherObject&&weatherObject.map(object => <Weather temp={object.temp} desc={object.weather.description} icon={object.weather.icon} />)}
      </header>
    </div>
  )
}

function Weather(props){

  const imgSrc = "https://www.weatherbit.io/static/img/icons/" + props.icon + ".png"
  return(
    <div class="panel">
      <span class="status">{props.temp}</span>
      <span class="status">{props.desc}</span>
      <img style={{width:"20px"}} src={imgSrc}/>
    </div>)
}


export default App;

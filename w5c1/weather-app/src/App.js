import logo from './logo.svg';
import './App.css';
import React,{useState, useEffect} from 'react';


const API_KEY = ""
const baseURL = "http://api.weatherbit.io/v2.0/current?"
const feature = ""
const parameters = "city=Taipei&units=I&key=" + API_KEY

function App() {

  const [temp, setTemp] = useState(0)

  useEffect(()=>{
    // fetch(baseURL + parameters)
    // .then(response => response.json())
    // .then(data => setTemp(data.data[0].temp))

    getTempAPI()
  })

  const getTempAPI = async() =>{
    let response = await fetch(baseURL + parameters)
    let data = await response.json()

    setTemp(data.data[0].temp)
  }

  return (
    <div className="App">
      <header className="App-header">
      <span class="status">Current Temperature in Taipei is {temp} F</span>
      </header>
    </div>
  )
}


export default App;

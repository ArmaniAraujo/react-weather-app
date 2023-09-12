import { useEffect, useState } from 'react';
import { WeatherTile } from './WeatherTile';
import axios from 'axios'
import WeatherTileRow from './WeatherTileRow';
// require('dotenv').config()

/*
 * 
 * TODO: Make cityOptions use lat and long params from geolocator() method
 * TODO: If geolocation grabber does not work, add dropdown to get country name, then dropdown to get state/location
 * TODO: Component output row of tiles
 * TODO: Fix up fetch/promise/then
 * TODO: Figure out where to use let/var/const
 * 
 */

function App() {

  const[weather, setWeather] = useState([])
  const[location, setLocation] = useState(() => { geolocator() })
  const cityOptions = {
    
    // method: 'GET',
    // url: 'http://api.openweathermap.org/geo/1.0/reverse?',
    // params: {
    //   lat: 43.595310, 
    //   lon: -79.640579, 
    //   limit: 1, 
    //   appid: 'tempidk'
    // }
  }
  
  let fakeItems = [
    {id:1, weekday: 'Tuesday', temp: 17, feels_like: 20},
    {id:2, weekday: 'Wednesday', temp: 20, feels_like: 25},
    {id:3, weekday: 'Thursday', temp: 23, feels_like: 15},
    {id:4, weekday: 'Friday', temp: 3, feels_like: 10},
    {id:5, weekday: 'Saturday', temp: 18, feels_like: 7},
    {id:6, weekday: 'Sunday', temp: 25, feels_like: 20},
    {id:7, weekday: 'Monday', temp: 25, feels_like: 22},

  ]

  const[city, setCity] = useState(() => {
    axios(cityOptions)
    .then((res) => {
      console.log(res.data)
      // setCity(res.data[0].name)
      setCity('TempCity')
    })
    .catch((err) => {
      console.log(err)
      setCity('TempCity')
      
    })
  
})

  
  useEffect(() => fetchWeather(), [])

  const fetchWeather = () => {
    console.log('fetching weather... ')
  }

  useEffect(() => {
    const options = {
      method: 'GET',
      url: 'https://openweathermap.com/.....',
      headers: {

      }
    }
  })


  // Grab location code
  function geolocator() {

  if (navigator.geolocation)
    navigator.geolocation.getCurrentPosition(locationSuccess, locationError) 
  else {
    console.log('Geolocation not supported!')
    alert('Geolocation not supported! Please idk... get good ig')
  }
}

  function locationSuccess(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
  }

  function locationError() {
    console.log('Error: Please enable location permissions to access weather')
  }

  function tileCreator() {
    const rows = []
    const numrows = 5
  for (let i = 0; i < numrows; i++) {
      rows.push(<WeatherTile/>);
  }
  return <tbody>{rows}</tbody>;
  }

  return (
    <div className="App">
      <h1>Hello, World!</h1>

      <h1>You exist in: { city }</h1>

      <button></button>
      <div>
      
        <WeatherTileRow weather={fakeItems}/>
      </div>
    </div>
  );
}


export default App;

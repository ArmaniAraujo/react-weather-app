import { useEffect, useState } from 'react';
import { WeatherTile } from './WeatherTile';
import axios from 'axios'

function App() {

  const[weather, setWeather] = useState([])
  const[location, setLocation] = useState(() => { geolocator() })
  const cityOptions = {}
    
  //   method: 'GET',
  //   url: 'http://api.openweathermap.org/geo/1.0/reverse?',
  //   params: {
  //     lat: 43.595310, 
  //     lon: -79.640579, 
  //     limit: 1, 
  //     appid: 'c9fb87ec5bad0d4dd7570738d7461030'}
  // }

  const[city, setCity] = useState(() => {
    axios(cityOptions)
    .then((res) => {
      console.log(res.data)
      return res.data.name
    })
    .catch((err) => {
      console.log(err)
      setCity('Mississauga')
      
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

  return (
    <div className="App">
      <h1>Hello, World!</h1>

      <h1>You exist in: { city }</h1>

      <button></button>
      <WeatherTile />
    </div>
  );
}

export default App;

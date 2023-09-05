import { useEffect, useState } from 'react';
import { WeatherTile } from './WeatherTile';

function App() {

  const[weather, setWeather] = useState([])
  useEffect(() => fetchWeather(), [])

  const fetchWeather = () => {
    console.log('fetching weather... ')

    
  }


  return (
    <div className="App">
      <h1>Hello, World!</h1>
      <button></button>
      <WeatherTile />
    </div>
  );
}

export default App;

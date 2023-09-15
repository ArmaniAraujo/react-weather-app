import { useEffect, useState } from 'react';
import { WeatherTile } from './WeatherTile';
import axios from 'axios'
import WeatherTileRow from './WeatherTileRow';

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

    
    const[coords, setCoords] = useState(() =>{ geolocator() })
    const[city, setCity] = useState([])
    const[weather, setWeather] = useState([])
    
    // Gets city from server based on user coordinates
    useEffect(() => {
        if (coords !== null && coords !== undefined) {
          // Your code here that depends on coords
          console.log('Coords are available:', coords);
      
          // Additional code to fetch city based on coords
          const params = {
            lat: coords[0],
            lon: coords[1],
            limit: 1,
          };
      
          const options = {
            method: 'GET',
            url: 'http://localhost:8000/getcity',
            params: params,
          };
      
          console.log('Coordinates are: ' + coords)
          axios.request(options).then((response) => {
              if (response.status === 200) {
                setCity('poo');
              } else {
                alert('Error getting city. Please try again later');
              }
            });
        }
      }, [coords]);
  
  
  // let fakeItems = [
  //   {id:1, weekday: 'Tuesday', temp: 17, feels_like: 20},
  //   {id:2, weekday: 'Wednesday', temp: 20, feels_like: 25},
  //   {id:3, weekday: 'Thursday', temp: 23, feels_like: 15},
  //   {id:4, weekday: 'Friday', temp: 3, feels_like: 10},
  //   {id:5, weekday: 'Saturday', temp: 18, feels_like: 7},
  //   {id:6, weekday: 'Sunday', temp: 25, feels_like: 20},
  //   {id:7, weekday: 'Monday', temp: 25, feels_like: 22}, ]

    let fakeItems = {
    "cod": "200",
    "message": 0,
    "cnt": 5,
    "list": [
        {
            "dt": 1694736000,
            "main": {
                "temp": 29.69,
                "feels_like": 31.21,
                "temp_min": 28.66,
                "temp_max": 29.69,
                "pressure": 1001,
                "sea_level": 1001,
                "grnd_level": 988,
                "humidity": 54,
                "temp_kf": 1.03
            },
            "weather": [
                {
                    "id": 802,
                    "main": "Clouds",
                    "description": "scattered clouds",
                    "icon": "03n"
                }
            ],
            "clouds": {
                "all": 32
            },
            "wind": {
                "speed": 3.79,
                "deg": 112,
                "gust": 5.52
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2023-09-15 00:00:00"
        },
        {
            "dt": 1694746800,
            "main": {
                "temp": 28.84,
                "feels_like": 30.77,
                "temp_min": 28.16,
                "temp_max": 28.84,
                "pressure": 1004,
                "sea_level": 1004,
                "grnd_level": 990,
                "humidity": 60,
                "temp_kf": 0.68
            },
            "weather": [
                {
                    "id": 801,
                    "main": "Clouds",
                    "description": "few clouds",
                    "icon": "02d"
                }
            ],
            "clouds": {
                "all": 17
            },
            "wind": {
                "speed": 4.15,
                "deg": 115,
                "gust": 5.01
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2023-09-15 03:00:00"
        },
        {
            "dt": 1694757600,
            "main": {
                "temp": 34.76,
                "feels_like": 35.95,
                "temp_min": 34.76,
                "temp_max": 34.76,
                "pressure": 1005,
                "sea_level": 1005,
                "grnd_level": 991,
                "humidity": 37,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 801,
                    "main": "Clouds",
                    "description": "few clouds",
                    "icon": "02d"
                }
            ],
            "clouds": {
                "all": 11
            },
            "wind": {
                "speed": 4.1,
                "deg": 133,
                "gust": 3.94
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2023-09-15 06:00:00"
        },
        {
            "dt": 1694768400,
            "main": {
                "temp": 39.51,
                "feels_like": 40.27,
                "temp_min": 39.51,
                "temp_max": 39.51,
                "pressure": 1002,
                "sea_level": 1002,
                "grnd_level": 988,
                "humidity": 25,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "clouds": {
                "all": 9
            },
            "wind": {
                "speed": 3.15,
                "deg": 136,
                "gust": 2.24
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2023-09-15 09:00:00"
        },
        {
            "dt": 1694779200,
            "main": {
                "temp": 41.16,
                "feels_like": 41.44,
                "temp_min": 41.16,
                "temp_max": 41.16,
                "pressure": 1000,
                "sea_level": 1000,
                "grnd_level": 986,
                "humidity": 21,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "clouds": {
                "all": 8
            },
            "wind": {
                "speed": 4.52,
                "deg": 100,
                "gust": 3.51
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2023-09-15 12:00:00"
        }
    ],
    "city": {
        "id": 286963,
        "name": "Oman",
        "coord": {
            "lat": 21,
            "lon": 57
        },
        "country": "OM",
        "population": 2967717,
        "timezone": 14400,
        "sunrise": 1694743144,
        "sunset": 1694787363
    }
}
    
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
        setCoords([latitude, longitude])
        console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
    }
    
    function locationError() {
        console.log('Error: Please enable location permissions to access weather')
    }

    // ------------------------------ Driver Code ------------------------------





  return (
    <div className="App">
      <h1>Hello, World!</h1>

      <h1>You exist in: { city }</h1>


      <button></button>
      <div>
        <WeatherTileRow weather={fakeItems.list}/>
      </div>
    </div>
  );
}


export default App;

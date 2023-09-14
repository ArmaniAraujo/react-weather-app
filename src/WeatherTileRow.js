import React, { Component } from 'react';
import { WeatherTile } from './WeatherTile';
import styles from './styles/styles.module.css'

// Either use WeatherTileRow(props)
// let weather = props.weather
// weather[0].weekday
// Or use this

export default function WeatherTileRow({ weather }) {
    console.log(weather)
    let list = weather.map((day) => (
        <WeatherTile day = { day } key={ day.dt } />
    ));    

    return (
        <div className={ styles.weathertilerow }>
            {list}
        </div>

    
    
    
    
    
    
    
    
    
    )
}
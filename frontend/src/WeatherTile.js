import React, { Component } from 'react';
import styles from './styles/styles.module.css'

export class WeatherTile extends Component {

  render() {
    // const {weekday, temp, feels_like} = this.props.day
    const weatherItem = this.props.day
    let icon = weatherItem.weather[0].icon
    console.log(icon)
    const iconUrl = 'https://openweathermap.org/img/wn/' + icon + '@2x.png'
    const condition = weatherItem.weather[0].description
    const temperature = weatherItem.main.temp

    return(
      <div>
        <div className={styles.weathertile}>
          <img src={iconUrl} alt={condition} />
          <p>{condition}</p>
          <p>{Math.round(temperature)}°C</p>
        </div>
      </div>
    )
  }
}
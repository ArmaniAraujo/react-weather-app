import React, { Component } from 'react';
import { WeatherTile } from './WeatherTile';

export class WeatherTileRow extends Component {

  render() {
    return(
      <div><WeatherTile/><WeatherTile/><WeatherTile/><WeatherTile/></div>
    )
  }

}
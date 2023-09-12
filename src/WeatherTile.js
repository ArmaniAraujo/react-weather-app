import React, { Component } from 'react';

export class WeatherTile extends Component {

  render() {
    const {weekday, temp, feels_like} = this.props.day

    return(
      <div>
        <p>{ weekday }</p>
        <p>{ temp }</p>
        <p>{ feels_like }</p>
      </div>
    )
  }
}
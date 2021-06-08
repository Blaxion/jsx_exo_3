import React from 'react'
export default class App extends React.Component{
  render() {
    let today = new Date();
    let day = today.getDate();
    let month = today.getMonth();
    let year = today.getFullYear();
    let hours = today.getHours();
    let minutes = today.getMinutes();
    return(
      <div>
        <p>On est le {day}/{month}/{year}</p>
        <p>il est {hours}:{minutes}</p>
      </div>
    );
  }
}


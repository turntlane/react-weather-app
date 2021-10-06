import './App.css';
import React from 'react';
import WeatherSearch from './weatherOutline';

class App extends React.Component {


  render() {


    return (
      <div className="outter-container">
        <WeatherSearch />
      </div>
    )

  }
}

export default App;

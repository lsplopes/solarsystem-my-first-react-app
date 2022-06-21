import React from 'react';
import Head from './components/Header';
import Missions from './components/Missions';
import Solarsystem from './components/SolarSystem';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="solarsystem">
        <Head />
        <Solarsystem />
        <Missions />
        <footer>Developed by Lucas Lopes</footer>
      </div>
    );
  }
}

export default App;

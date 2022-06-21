import React from 'react';
import Head from './components/Header';
import Missions from './components/Missions';
import Solarsystem from './components/SolarSystem';

class App extends React.Component {
  render() {
    return (
      <>
        <Head />
        <Solarsystem />
        <Missions />
      </>
    );
  }
}

export default App;

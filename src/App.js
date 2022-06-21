import React from 'react';
import Head from './components/Header';
import Solarsystem from './components/SolarSystem';

class App extends React.Component {
  render() {
    return (
      <>
        <Head />
        <Solarsystem />
      </>
    );
  }
}

export default App;

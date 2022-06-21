import React from 'react';
import Title from './Title';
import Planetcard from './PlanetCard';
import Planets from '../data/planets';

class Solarsystem extends React.Component {
  render() {
    return (
      <div data-testid="solar-system" className="planetscontainer">
        <Title headline="Planetas" />
        {Planets.map((planet) => (<Planetcard
          key={ planet.name }
          planetName={ planet.name }
          planetImage={ planet.image }
        />))}
      </div>
    );
  }
}

export default Solarsystem;

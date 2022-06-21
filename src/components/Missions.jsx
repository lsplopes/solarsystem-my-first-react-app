import React from 'react';
import Missioncard from './MissionCard';
import Title from './Title';
import missions from '../data/missions';

class Missions extends React.Component {
  render() {
    return (
      <div data-testid="missions" className="mission-container">
        <Title headline="Missões" />
        {missions.map((mis) => (<Missioncard
          key={ mis.name }
          name={ mis.name }
          year={ mis.year }
          country={ mis.country }
          destination={ mis.destination }
        />))}
      </div>
    );
  }
}

export default Missions;

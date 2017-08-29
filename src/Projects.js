import React from 'react';
import Card from 'react-md/lib/Cards/Card';
import CardTitle from 'react-md/lib/Cards/CardTitle';
import CardText from 'react-md/lib/Cards/CardText';
import ProjectTile from './ProjectTile';

const TournamentTracker = {
  projectTitle: 'Tournament Tracker',
  summary: 'Multi-tournament swiss-pairing tracker build in Python3.0 and PostgreSQL',
  imgLink: 'https://via.placeholder.com/550x300',
};

const Projects = () =>
  (<div className="md-grid">
    <div className="md-cell--3">
      <Card>
        <CardTitle title={TournamentTracker.projectTitle} />
        <CardText>
          {TournamentTracker.summary}
        </CardText>
      </Card>
    </div>
  </div>);
export default Projects;

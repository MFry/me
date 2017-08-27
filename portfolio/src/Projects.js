import React from 'react';
import ProjectTile from './ProjectTile';

const TournamentTracker = {
  projectTitle: 'Tournament Tracker',
  summary: 'Multi-tournament swiss-pairing tracker build in Python3.0 and PostgreSQL',
  imgLink: 'https://via.placeholder.com/550x300',
};

const Projects = () =>
  (<div className="row">
    <div className="col-md-6 col-sm-12">
      <ProjectTile {...TournamentTracker} />
    </div>
  </div>);
export default Projects;

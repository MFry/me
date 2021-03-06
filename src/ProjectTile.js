import React from 'react';
import PropTypes from 'prop-types';
import './style/scss/card.scss';

const ProjectTile = ({ projectTitle, summary, imgLink }) =>
  (<div className="card">
    <div className="card-image">
      <img className="img-responsive" src={imgLink} alt={`${projectTitle}`} />
      <span className="card-title">
        {projectTitle}
      </span>
    </div>
    <div className="card-content">
      {summary}
    </div>
    <div className="card-action">
      <a
        href="https://github.com/MFry/pyTournamentTracker"
        target="_blank"
        rel="noopener noreferrer"
      >
        Github
      </a>
    </div>
  </div>);
ProjectTile.propTypes = {
  projectTitle: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  imgLink: PropTypes.string.isRequired,
};
export default ProjectTile;

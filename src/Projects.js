import React from "react";
import ProjectCard from "./ProjectCard";

const TournamentTracker = [
  {
    projectTitle: "Tournament Tracker",
    summary:
      "Multi-tournament swiss-pairing tracker build in Python3.0 and PostgreSQL",
    imgLink: "https://via.placeholder.com/550x300"
  },
  {
    projectTitle: "Movie Site",
    summary: "Server side rendered Python 3 movie listing site"
  }
];

const Projects = () =>
  <div>
    <div className="md-grid">
      <div className="md-text-container">
        <div className="md-cell md-cell--12">
          <h2 className="md-title">Portfolio</h2>
        </div>
      </div>
    </div>
    <div className="md-grid">
      <ProjectCard
        title={TournamentTracker[0].projectTitle}
        summary={TournamentTracker[0].summary}
      />
      <ProjectCard
        title={TournamentTracker[1].projectTitle}
        summary={TournamentTracker[1].summary}
      />
    </div>
  </div>;
export default Projects;

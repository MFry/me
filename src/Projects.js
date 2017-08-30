import React from "react";
import Card from "react-md/lib/Cards/Card";
import CardTitle from "react-md/lib/Cards/CardTitle";
import CardText from "react-md/lib/Cards/CardText";

const TournamentTracker = {
  projectTitle: "Tournament Tracker",
  summary:
    "Multi-tournament swiss-pairing tracker build in Python3.0 and PostgreSQL",
  imgLink: "https://via.placeholder.com/550x300"
};

const Projects = () =>
  <div className="md-grid">
    <div className="md-text-container">
      <div className="md-cell md-cell--12">
        <h2 className="md-title">Portfolio</h2>
      </div>
      <div className="md-cell--6">
        <Card>
          <CardTitle title={TournamentTracker.projectTitle} />
          <CardText>
            {TournamentTracker.summary}
          </CardText>
        </Card>
      </div>
    </div>
  </div>;
export default Projects;

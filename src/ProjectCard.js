import React from "react";
import Paper from "react-md/lib/Papers";
import CardTitle from "react-md/lib/Cards/CardTitle";
import CardText from "react-md/lib/Cards/CardText";

const ProjectCard = ({ title, summary, tags }) =>
  <div className="md-cell md-cell--6">
    <Paper zDepth={0} raiseOnHover={true}>
      <CardTitle title={title} />
      <CardText>
        {summary}
      </CardText>
    </Paper>
  </div>;
export default ProjectCard;

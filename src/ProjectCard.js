import React from "react";
import Card from "react-md/lib/Cards/Card";
import CardTitle from "react-md/lib/Cards/CardTitle";
import CardText from "react-md/lib/Cards/CardText";

const ProjectCard = ({ title, summary, tags }) =>
  <div className="md-cell--6">
    <Card>
      <CardTitle title={title} />
      <CardText>
        {summary}
      </CardText>
    </Card>
  </div>;
export default ProjectCard;

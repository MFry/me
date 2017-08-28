import React from 'react';
import Card from 'react-md/lib/Cards/Card';
import CardTitle from 'react-md/lib/Cards/CardTitle';
import CardText from 'react-md/lib/Cards/CardText';

const Profile = () =>
  (<div className="md-grid">
    <div className="md-cell--12">
      <Card>
        <CardTitle title="Michal Frystacky" subtitle="Web and Software Developer" />
      </Card>
    </div>
  </div>);
export default Profile;

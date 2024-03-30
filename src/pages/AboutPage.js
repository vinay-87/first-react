import React from 'react';
import Card from '../components/Card';

function AboutPage() {
  return (
    <div>
      <h1>About Us</h1>
      <h3>Team Members</h3>
      <Card
        title="1.Archit Sovale"
        image=""
        description="IIT2023225"
      />
      <Card
        title="2.Vinay Kumar"
        image=""
        description="IIT2023227"
      />
      <Card
        title="3.Pawan"
        image=""
        description="IIT2023226"
      />
      <Card
        title="4.Aniket"
        image=""
        description="IIT2023230"
      />
    </div>
  );
}

export default AboutPage;

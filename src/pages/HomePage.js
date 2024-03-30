import React from 'react';
import Card from '../components/Card';

function HomePage() {
  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <Card
        title="React App - components"
        image="\logo512.png"
        description="This is a card component."
      />
    </div>
  );
}

export default HomePage;

import React from 'react';
import 'App.css';
import Welcome from 'Components/Welcome';
import LandingPage from 'Pages/LandingPage';

function App() {
  return (
    <div className="App">
      <LandingPage />
      <Welcome />
    </div>
  );
}

export default App;

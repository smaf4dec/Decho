import React, { Component } from 'react';
import 'App.css';
import LandingPage from 'Pages/LandingPage';
import Timeline from 'Pages/TimelinePage';

class App extends Component {
  state = {
    currentPage: 'landing',
  };
  render() {
    const { currentPage } = this.state;
    return (
      <div className="App">
        {currentPage === 'landing' && <LandingPage />}
        {currentPage === 'timeline' && <Timeline />}
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import 'App.css';
import LandingPage from 'Pages/LandingPage';
import TimelinePage from 'Pages/TimelinePage';

class App extends Component {
  state = {
    currentPage: 'timeline',
  };
  
  changePage = (page) => {
   return () => this.setState({
      currentPage: page
    })
  }
  render() {
    const { currentPage } = this.state;
    return (
      <div className="App">
        {currentPage === 'landing' && <LandingPage changePage={ this.changePage('timeline') } />}
        {currentPage === 'timeline' && <TimelinePage  />}
      </div>
    );
  }
}

export default App;

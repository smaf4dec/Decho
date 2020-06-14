import React, { Component } from 'react';
import 'Components/App.css';
import LandingPage from 'Pages/Landing//LandingPage';
import TimelinePage from 'Pages/Timeline/TimelinePage';
import { getOneOppFromServer } from 'Utils/getOpp';
// import { getOneOppFromServer } from '../Utils/getOpp';
// import './App.css';
// import LandingPage from '../Pages/Landing//LandingPage';
// import TimelinePage from '../Pages/Timeline/TimelinePage';
// import { getOneOppFromServer } from '../Pages/partisans/getOpp';

class App extends Component {
  state = {
    currentPage: 'landing',
    currentLean: 'right',
    opp: '',
  };

  //this is a closure / work around to aviod using redux
  //this can totally be refactored

  changePage = (page) => {
    return (currentLean) => {
      getOneOppFromServer(currentLean).then((opp) => {
        this.setState({
          currentPage: page,
          currentLean: currentLean || this.state.currentLean,
          opp,
        });
      });
    };
  };
  render() {
    const { currentPage } = this.state;
    return (
      <div className="App">
        {currentPage === 'landing' && <LandingPage changePage={this.changePage('timeline')} />}
        {currentPage === 'timeline' && (
          <TimelinePage politicalLean={this.state.currentLean} partisan={this.state.opp} />
        )}
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import LandingPage from 'Pages/Landing/LandingPage';
import TimelinePage from 'Pages/Timeline/TimelinePage';
import { getOneOppFromServer } from 'Utils/getOpp';
import 'Components/App.css';
// import { getOneOppFromServer } from '../Utils/getOpp';
// import LandingPage from '../Pages/Landing//LandingPage';
// import TimelinePage from '../Pages/Timeline/TimelinePage';
// import { getOneOppFromServer } from '../Utils/getOpp';

class App extends Component {
  state = {
    currentPage: 'landing',
    currentLean: 'Right',
    opp: '',
  };

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

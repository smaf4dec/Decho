import React, { Component } from 'react';
import 'App.css';
import LandingPage from 'Pages/LandingPage';
import TimelinePage from 'Pages/TimelinePage';
import {getOneOppFromServer} from 'Pages/partisans/getOpp'

class App extends Component {
  state = {
    currentPage: 'landing',
    currentLean: 'right',
    opp: '',
  };
  
  changePage = (page) => {
   return (currentLean) =>{

    getOneOppFromServer(currentLean)
      .then((opp) => {
        this.setState({
          currentPage: page,
          currentLean: currentLean || this.state.currentLean ,
          opp
        })
      })
   }
  }
  render() {
    const { currentPage } = this.state;
    return (
      <div className="App">
        {currentPage === 'landing' && <LandingPage changePage={ this.changePage('timeline') } />}
        {currentPage === 'timeline' && <TimelinePage politicalLean={this.state.currentLean} partisan={this.state.opp}/>}
      </div>
    );
  }
}

export default App;

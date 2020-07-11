import React, { Component } from 'react';
import LandingPage from 'Pages/Landing/LandingPage';
import TimelinePage from 'Pages/Timeline/TimelinePage';
import { getOneOppFromServer } from 'Utils/getOpp';
import 'Components/App.css';
import firebase from 'firebase';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

const hiddenApiKey = process.env.REACT_APP_FBS_APIKEY;
const hiddenAuthDomain = process.env.REACT_APP_FBS_AUTHDOMAIN;
firebase.initializeApp({
  apiKey: hiddenApiKey,
  authDomain: hiddenAuthDomain
});

class App extends Component {
  state = {
    currentPage: 'landing',
    currentLean: 'Right',
    opp: '',
    isSignedIn: false
  };

  uiConfig = {
    signInFlow: "popup",
    signInOptions: [
      firebase.auth.TwitterAuthProvider.PROVIDER_ID
    ],
    callbacks: {
      signInSuccess: () => false
    }
  }

  componentDidMount = () => {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({ isSignedIn: !!user })
      console.log("user", user)
    })
  }

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
        {this.state.isSignedIn ? (
            <div>
              {currentPage === 'landing' && <LandingPage changePage={this.changePage('timeline')} />};
              {currentPage === 'timeline' && (
                <TimelinePage politicalLean={this.state.currentLean} partisan={this.state.opp} />
              )};
              <button onClick={() => firebase.auth().signOut()}>Sign out!</button>
              <img
                alt=""
                src={firebase.auth().currentUser.photoURL}
              />
            </div>
            
          ) 
          : 
          (
            <StyledFirebaseAuth
              uiConfig={this.uiConfig}
              firebaseAuth={firebase.auth()}
            />
          )
        }
      </div>
    );
  }
}

export default App;

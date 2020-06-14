import React, { Component } from 'react';
import UserForm from 'Components/Form/Form';
import 'Pages/Landing/LandingPage.styles.css';
import { ReactComponent as DeChoLogo } from 'assets/logo-big.svg';
// import './LandingPage.styles.css';
// import UserForm from '../Components/Form/Form';

export default class LandingPage extends Component {
  render() {
    return (
      <div>
        <div className="text-constiner">Minimize your social media echo chambers & Engage in healthy interactions</div>
        <div className="logo">
          <DeChoLogo id="megaphonoLogo" />
        </div>
        <div className="column landing">
          <div>
            <UserForm changePage={this.props.changePage} />
          </div>
        </div>
      </div>
    );
  }
}

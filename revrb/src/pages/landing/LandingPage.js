import React, { Component } from 'react';
import UserForm from 'components/form/Form';
import 'pages/landing/LandingPage.styles.css';
import { ReactComponent as DeChoLogo } from 'assets/logo-big.svg';

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

import React, { Component } from 'react';
import UserForm from 'Components/Form/Form';
import 'Pages/Landing/LandingPage.styles.css';
// import './LandingPage.styles.css';
// import UserForm from '../Components/Form/Form';

export default class LandingPage extends Component {
  render() {
    return (
      <div>
        <div className="logo">
          <div id="de-echo-to" className="title">De-Echo</div>
        </div>
        <div className="column landing" /*style={{ border: '1px solid black' }}*/>
          <div>
            <UserForm changePage={this.props.changePage} />
          </div>
        </div>
      </div>
    );
  }
}

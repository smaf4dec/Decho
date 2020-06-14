import React, { Component } from 'react';
import UserForm from '../Components/Form';

export default class LandingPage extends Component {
  render() {
    return (
      <div style={{ border: '1px solid black' }}>
        <div className="title">Landing page for App de-Echo</div>
        <div>
          <UserForm changePage={this.props.changePage} />
        </div>
      </div>
    );
  }
}

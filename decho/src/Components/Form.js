import React, { Component } from 'react';
import { Timeline } from 'react-twitter-widgets';

export default class UserForm extends Component {
  state = {
    username: null,
    politicalLean: null,
  };

  render() {
    return (
      <div style={{ border: '1px solid blue' }}>
        <form action="">
          <input type="text" value={this.state.username} /> <br />
          <input type="text" value={this.state.politicalLean} /> <br />
        </form>
      </div>
    );
  }
}

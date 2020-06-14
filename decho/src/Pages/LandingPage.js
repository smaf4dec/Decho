import React, { Component } from 'react';
import UserForm from '../Components/Form';

export default class LandingPage extends Component {
  render() {
    return (
      <div>
        <div className='logo'>

        </div>
        <div className='column landing' /*style={{ border: '1px solid black' }}*/>
          <div className="title">De-Echo</div>
          <div>
            <UserForm changePage={this.props.changePage} />
          </div>
        </div>
      </div>
    );
  }
}

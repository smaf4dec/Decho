import React, { Component } from 'react';
import { Timeline } from 'react-twitter-widgets';
import 'Components/ShowProfile/ShowProfile.styles.css';
// import './ShowProfile.styles.css';

export default class ShowProfile extends Component {
  render() {
    return (
      <div>
        <Timeline
          dataSource={{
            sourceType: 'profile',
            screenName: 'BarackObama',
          }}
          options={{
            height: '300',
          }}
        />
      </div>
    );
  }
}

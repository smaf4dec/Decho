import React, { Component } from 'react';
import { Timeline } from 'react-twitter-widgets';
import 'Components/OppositeProfile/OppositeProfile.styles.css';
// import './OppositeProfile.styles.css'

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
            height: '800',
          }}
        />
      </div>
    );
  }
}

import React, { Component } from 'react'
import { Timeline } from 'react-twitter-widgets'

export default class ShowProfile extends Component {
  render() {
    return (
      <div>
        <Timeline
          dataSource={{
            sourceType: 'profile',
            screenName: 'BarackObama'
          }}
          options={{
            height: '800'
          }}
        />
      </div>
    )
  }
}

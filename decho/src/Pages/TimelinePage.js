import React, { Component } from 'react';
import { Timeline } from 'react-twitter-widgets';
import {getOneOpp} from './partisans/getOpp'

const TimelinePage = ({ politicalLean }) => {
  let partisan = getOneOpp('left').twitterHandle
  console.log(`the partisan is ${partisan}`)
  return (
    <div>
      <div className="page-title">Timeline of {politicalLean} Tweets</div>;
      <Timeline
          dataSource={{
            sourceType: 'profile',
            screenName: partisan
          }}
          options={{
            height: '800'
          }}
        />
    </div>
  );
};

// console.log(getOneOpp('left'))
export default TimelinePage;

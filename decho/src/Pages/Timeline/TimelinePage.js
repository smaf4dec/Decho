import React from 'react';
import { Timeline } from 'react-twitter-widgets';
import 'Pages/Timeline/TimelinePage.styles.css';

const TimelinePage = ({ politicalLean, partisan }) => {
  console.log(`the partisan is ${partisan.twitterHandle}`);
  return (
    <div class="proto-container">
      <div className="page-title" style={{ padding: '30px' }}>
        De-Echo Feed of {politicalLean === 'right' ? 'Left' : 'Right'}-Leaning Tweets
      </div>
      <Timeline
        dataSource={{
          sourceType: 'profile',
          screenName: partisan.twitterHandle,
        }}
        options={{
          height: '800',
          width: '400',
        }}
      />
    </div>
  );
};

export default TimelinePage;

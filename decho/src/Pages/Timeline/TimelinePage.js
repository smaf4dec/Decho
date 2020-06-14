import React from 'react';
import { Timeline } from 'react-twitter-widgets';
import 'Pages/Timeline/TimelinePage.styles.css';
// import './TimelinePage.styles.css';

const TimelinePage = ({ politicalLean, partisan }) => {
  console.log(`the partisan is ${partisan.twitterHandle}`);
  // console.log(partisan)
  return (
    <div>
      <div className="page-title">Timeline of {politicalLean === 'right' ? 'left' : 'right'} Tweets</div>
      <Timeline
        dataSource={{
          sourceType: 'profile',
          screenName: partisan.twitterHandle,
        }}
        options={{
          height: '800',
        }}
      />
    </div>
  );
};

// console.log(getOneOpp('left'))
export default TimelinePage;
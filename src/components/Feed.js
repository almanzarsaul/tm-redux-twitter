import React from 'react';
import TweetCard from './TweetCard';

const Feed = ({ tweets, heading = 'Feed' }) => {
  return (
    <React.Fragment>
      <h3 className='center'>{heading}</h3>
      <ul className='dashboard-list'>
        {tweets.map(id => {
          return <TweetCard key={id} tweetId={id} />;
        })}
      </ul>
    </React.Fragment>
  );
};

export default Feed;

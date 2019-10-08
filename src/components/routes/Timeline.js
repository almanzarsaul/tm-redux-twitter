import React from 'react';
import { useSelector } from 'react-redux';
import Feed from '../Feed';

const Timeline = () => {
  const tweets = useSelector(({ tweets }) => tweets);
  const tweetIds = Object.keys(tweets);

  return <Feed tweets={tweetIds} heading='Your Timeline' />;
};

export default Timeline;

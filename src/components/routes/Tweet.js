import React, { useState, useEffect } from 'react';
import TweetCard from '../TweetCard';
import NewTweet from '../NewTweet';
import { useSelector } from 'react-redux';
import Feed from '../Feed';

const Tweet = ({ match, history }) => {
  const [id, setId] = useState(match.params.id);
  const tweets = useSelector(state => state.tweets);

  useEffect(() => {
    setId(match.params.tweetId);
  }, [match.params.tweetId]);

  if (!id) {
    return <h1>Loading</h1>;
  }

  const tweet = tweets[id];
  const replies = tweets[id].replies;
  return (
    <React.Fragment>
      <TweetCard tweetId={id} />
      <NewTweet heading='Reply' replyingTo={tweet.id} />
      {replies.length > 0 && <Feed tweets={replies} heading='Replies' />}
    </React.Fragment>
  );
};

export default Tweet;

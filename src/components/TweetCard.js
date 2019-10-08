import React from 'react';
import moment from 'moment';
import {
  TiArrowBackOutline,
  TiHeartOutline,
  TiHeartFullOutline
} from 'react-icons/ti/index';
import { useDispatch, useSelector } from 'react-redux';
import { handleToggleLike } from '../actions/tweets';
import { Link, withRouter } from 'react-router-dom';

const TweetCard = ({ tweetId, history }) => {
  const dispatch = useDispatch();
  const { tweets, users, authedUser } = useSelector(
    ({ tweets, users, authedUser }) => ({ tweets, users, authedUser })
  );
  const tweet = tweets[tweetId];
  const author = users[tweet.author];
  const replyingTo = tweet.replyingTo ? tweets[tweet.replyingTo].author : null;

  return (
    <li>
      <Link to={`/tweet/${tweet.id}`} className='tweet'>
        <img src={author.avatarURL} alt={`${author.name}`} className='avatar' />
        <div className='tweet-info'>
          <div>
            <span>{author.name}</span>
            <span></span>
            <div>{moment(tweet.timestamp).format('LT [|] l')}</div>
            {replyingTo && (
              <button
                className='replying-to'
                onClick={e => {
                  e.preventDefault();
                  history.push(`/tweet/${tweet.replyingTo}`);
                }}
              >
                replying to @{replyingTo}
              </button>
            )}

            <p>{tweet.text}</p>
          </div>
          <div className='tweet-icons'>
            <TiArrowBackOutline
              className='tweet-icon'
              onClick={e => {
                e.preventDefault();
                history.push(`/tweet/${tweet.id}`);
              }}
            />
            <span>{tweet.replies && tweet.replies.length}</span>
            {tweet.likes.includes(authedUser) ? (
              <TiHeartFullOutline
                className='tweet-icon'
                color='rgb(224, 36, 94)'
                onClick={e => {
                  e.preventDefault();
                  dispatch(handleToggleLike(tweet.id));
                }}
              />
            ) : (
              <TiHeartOutline
                className='tweet-icon'
                onClick={e => {
                  e.preventDefault();
                  dispatch(handleToggleLike(tweet.id));
                }}
              />
            )}
            <span>{tweet.likes && tweet.likes.length}</span>
          </div>
        </div>
      </Link>
    </li>
  );
};

export default withRouter(TweetCard);

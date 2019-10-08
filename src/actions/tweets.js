import { RECIEVE_DATA, TOGGLE_LIKE, SAVE_TWEET } from './types';
import { saveLikeToggle, saveTweet } from '../utils/api';
import { showLoading, hideLoading } from 'react-redux-loading-bar';

export const recieveTweets = tweets => {
  return {
    type: RECIEVE_DATA,
    tweets
  };
};

const _saveTweet = tweet => ({
  type: SAVE_TWEET,
  tweet
});

const toggleTweet = (tweet, authedUser, hasLiked = false) => ({
  type: TOGGLE_LIKE,
  tweet,
  authedUser,
  hasLiked
});

export const handleSaveTweet = (text, author, replyingTo = null) => {
  return dispatch => {
    dispatch(showLoading());
    return saveTweet({ text, author, replyingTo })
      .then(formattedTweet => {
        dispatch(_saveTweet(formattedTweet));
        dispatch(hideLoading());
      })
      .catch(e => console.log('There was an error saving your tweet. ', e));
  };
};

export const handleToggleLike = tweet => {
  return (dispatch, getState) => {
    const state = getState();
    const { tweets, authedUser } = state;
    const hasLiked = tweets[tweet].likes.includes(authedUser) || false;

    dispatch(toggleTweet(tweet, authedUser, hasLiked));
    saveLikeToggle(tweets[tweet]).catch(e => {
      dispatch(toggleTweet(tweet, authedUser, hasLiked));
      console.warn('There was an error saving the tweet. ', e);
    });
  };
};

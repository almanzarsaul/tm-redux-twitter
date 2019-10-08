import { RECIEVE_DATA, SAVE_TWEET } from '../actions/types';

const users = (state = {}, action) => {
  switch (action.type) {
    case RECIEVE_DATA:
      return {
        ...state,
        ...action.users
      };
    case SAVE_TWEET:
      return {
        ...state,
        [action.tweet.author]: {
          ...state[action.tweet.author],
          tweets: state[action.tweet.author].tweets.concat([action.tweet.id])
        }
      };
    default:
      return state;
  }
};

export default users;

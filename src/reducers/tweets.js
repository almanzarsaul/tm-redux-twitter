import { RECIEVE_DATA, TOGGLE_LIKE, SAVE_TWEET } from '../actions/types';

const tweets = (state = {}, action) => {
  switch (action.type) {
    case RECIEVE_DATA:
      if (action.tweets) {
        const sortedTweets = Object.keys(action.tweets)
          .sort(
            (a, b) => action.tweets[b].timestamp - action.tweets[a].timestamp
          )
          .reduce(
            (_sortedObj, key) => ({
              ..._sortedObj,
              [key]: action.tweets[key]
            }),
            {}
          );

        return {
          ...state,
          ...sortedTweets
        };
      }

      return state;
    case TOGGLE_LIKE:
      return {
        ...state,
        [action.tweet]: {
          ...state[action.tweet],
          likes: action.hasLiked
            ? state[action.tweet].likes.filter(
                user => user !== action.authedUser
              )
            : state[action.tweet].likes.concat(action.authedUser)
        }
      };
    case SAVE_TWEET:
      return {
        [action.tweet.id]: action.tweet,
        ...state,
        [action.tweet.replyingTo]: {
          ...state[action.tweet.replyingTo],
          replies: [action.tweet.id, ...state[action.tweet.replyingTo].replies]
        }
      };
    default:
      return state;
  }
};

export default tweets;

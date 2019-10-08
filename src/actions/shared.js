import { getInitialData } from '../utils/api';
import { recieveUsers, setAuthUsers } from './users';
import { recieveTweets } from './tweets';
import { showLoading, hideLoading } from 'react-redux-loading-bar';

const AUTHED_ID = 'tylermcginnis';

export const handleInitialData = () => {
  return dispatch => {
    dispatch(showLoading());
    return getInitialData()
      .then(({ users, tweets }) => {
        dispatch(recieveUsers(users));
        dispatch(recieveTweets(tweets));
        dispatch(setAuthUsers(AUTHED_ID));
        dispatch(hideLoading());
      })
      .catch(e =>
        console.warn(`There was an error fetching initial data. ${e}`)
      );
  };
};

import { combineReducers } from 'redux';
import users from './users';
import tweets from './tweets';
import authedUser from './authedUser';
import { loadingBarReducer } from 'react-redux-loading-bar';

export default combineReducers({
  tweets,
  loadingBar: loadingBarReducer,
  users,
  authedUser
});

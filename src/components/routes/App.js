import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import LoadingBar from 'react-redux-loading-bar';
import { handleInitialData } from '../../actions/shared';
import Timeline from './Timeline';
import New from '../NewTweet';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Nav from '../Nav';
import Tweet from './Tweet';

const App = () => {
  const dispatch = useDispatch();
  const { loading } = useSelector(state => ({
    loading: state.loadingBar.default
  }));

  React.useEffect(() => {
    dispatch(handleInitialData());
  }, []);

  return (
    <Router>
      <LoadingBar />
      <div className='container'>
        <Nav />
        {!loading && (
          <Switch>
            <Route path='/' exact component={Timeline} />
            <Route
              path='/new'
              component={props => <New heading='Compose a Tweet' {...props} />}
            />
            <Route path='/tweet/:tweetId' component={Tweet} />
          </Switch>
        )}
      </div>
    </Router>
  );
};

export default App;

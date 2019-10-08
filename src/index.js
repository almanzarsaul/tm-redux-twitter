import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/routes/App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import middleware from './middleware';

const store = createStore(reducers, composeWithDevTools(middleware));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

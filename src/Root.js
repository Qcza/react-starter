import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './containers/App';

const Root = ({ store }) => (
  <Provider store={store} >
    <Router>
      <Route exact path="/" component={App} />
    </Router>
  </Provider>
);

export default Root;
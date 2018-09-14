import React from 'react';
import ReactDom from 'react-dom';
import store from './redux/store';
import Root from './Root';

ReactDom.render(
  <Root store={store} />,
  document.getElementById('root'),
);

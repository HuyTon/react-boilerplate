import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from '@store/store';
import app from './app';
require('es6-promise').polyfill();

ReactDOM.render(
    <Provider store={store}>{app}</Provider>,
    document.getElementById('root')
  );
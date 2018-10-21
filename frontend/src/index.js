import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Root from './Root';
import * as serviceWorker from './serviceWorker';
import jwt_decode from 'jwt-decode';
import * as APIUtil from './util/session_api_util';
import configureStore from './store/store';

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  window.getState = store.getState;
  if (localStorage.jwtToken) {
    APIUtil.setAuthToken(localStorage.jwtToken);
    const decoded = jwt_decode(localStorage.jwtToken);
    store.dispatch(APIUtil.setCurrentUser(decoded));

    const currentTime = Date.now() / 1000;
    if (decoded.exp < currentTime) {
      store.dispatch(APIUtil.logoutUser());
      window.location.href = '/login';
    }
  }
  
  ReactDOM.render(<Root store={store} />, document.getElementById('root'));
  serviceWorker.register();
});

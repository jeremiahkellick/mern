import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from './util/route_util';
import GreetingContainer from './greeting/greeting_container';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';

class App extends Component {
  render() {
    return (
      <div>
        <AuthRoute path="/login" component={LoginFormContainer} />
        <AuthRoute path="/signup" component={SignupFormContainer} />
        <ProtectedRoute path="/secret" render={() => <h1>secret</h1>} />
        <Route expect path="/" render={() => (
          <div>
            <h1>App</h1>
            <GreetingContainer />
          </div>
        )} />
      </div>
    );
  }
}

export default App;

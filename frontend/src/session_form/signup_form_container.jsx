import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { registerUser } from '../util/session_api_util';
import SessionForm from './session_form';

const mapStateToProps = ({ errors }) => {
  return {
    errors: Object.values(errors),
    formType: 'signup',
    navLink: <Link to="/login">log in instead</Link>,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: (user) => dispatch(registerUser(user)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);

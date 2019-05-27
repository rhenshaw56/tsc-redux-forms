import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import Form from './form';

// TODO: refactor to use one whole component
const LoginForm = reduxForm({
  form: 'login'
})(Form);

export default LoginForm;
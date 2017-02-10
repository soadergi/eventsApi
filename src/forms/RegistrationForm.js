import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

const doSubmit = values => {
  console.log(values);
  values.preventDefault();
  fetch('http://api.itboost.org:82/app_dev.php/api/login_check',
  {method: "POST", data: {_username:'soader',_password:54321}})
      .then( response => {
          if (response.status !== 200) {
            console.log('Looks like there was a problem. Status Code: ' +
              response.status);
            return;
          }
          response.json().then( data => {
            console.log(data);
          });
        }
      )
      .catch(err => {
        console.log('Fetch Error', err);
      });
}

let RegistrationForm = props => (
  <form onSubmit={props.handleSubmit(doSubmit)}>
    <Field name='_username' component='input'
      type='text' placeholder='Username'/>
    <Field name='_password' component='input'
      type='text' placeholder='Password'/>
    <button type='submit'>Register</button>
  </form>
)

RegistrationForm = reduxForm({ form: 'RegistrationForm'})(RegistrationForm);

export default RegistrationForm;

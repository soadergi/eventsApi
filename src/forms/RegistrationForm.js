import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class RegistrationForm extends Component{
  render() {
    const {handleSubmit, onUserRegistration} = this.props;
    const onSubmit = (values) => {
      values = JSON.stringify(values);
      fetch('http://api.itboost.org:82/app_dev.php/api/login_check',{
        method:"POST",
        headers: { "Content-type": "application/json" },
        body:values
      })
      .then( response => {
        if (response.status !== 200) {
          console.log('Looks like there was a problem. Status Code: '+response.status);
            return;
        }
        response.json().then( data => {
          onUserRegistration(data.token)
        });
      })
      .catch(function(err) {
        console.log('Fetch Error', err);
      });
    }
    return(
      <form onSubmit={handleSubmit(onSubmit)}>
        <Field name='_username' component='input'
          type='text' placeholder='Username' required/><br/><br/>
        <Field name='_password' component='input'
          type='text' placeholder='Password' required/><br/><br/>
        <button type='submit'>Submit</button>
      </form>
    )
  }
}

RegistrationForm = reduxForm({
  form: 'RegistrationForm',
  initialValues: {
    _username: 'soadergi@gmail.com',
    _password: '54321q'
  }
})(RegistrationForm);

export default RegistrationForm;

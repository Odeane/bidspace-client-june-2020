import React from 'react'
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form'
import { Button } from 'semantic-ui-react';
import { authenticate } from '../../state/action/authActions'

function LoginForm(props) {
  const renderField = ({ input, label, type, meta }) => {
    return (
      <div>
        <label>
          {label}
        </label>
        <div>
          <input {...input} type={type} />
        </div>
      </div>
    )
  }

  return (
    <div className='login'>
      <h1 className='login__text'>Login Now</h1>
      <h3>{props.errorMessage}</h3>
      <form className='login__form'>
        <Field name='email' type='email' component={renderField} label='Email' />
        <Field name='password' type='password' component={renderField} label='Password' required/>
        <div>
          <Button color='black' inverted  className='login__btn' type="submit" onClick={props.authenticate}>Log In</Button>
        </div>
      </form>
    </div>
  )
}

const mapStateToProps = ({ auth }) => {
  return {
    errorMessage: auth.errorMessage
  };
};

export default connect(mapStateToProps, { authenticate })(reduxForm({ form: 'loginForm' })(LoginForm))

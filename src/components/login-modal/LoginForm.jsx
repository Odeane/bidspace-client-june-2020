import React from 'react'
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form'
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
    <div>
      <h1>Login</h1>
      <h3>{props.errorMessage}</h3>
      <form>
        <Field name='email' type='email' component={ renderField} label='Email'/>
        <Field name='password' type='password' component={renderField} label='Password' />
        <div>
          <button type="submit"  onClick={props.authenticate}>Log In</button>
        </div>
      </form>
    </div>
  )
}

const mapStateToProps = ({auth}) => {
  return {
    errorMessage: auth.errorMessage
  };
};

export default connect(mapStateToProps, { authenticate })(reduxForm({form: 'loginForm'})(LoginForm))

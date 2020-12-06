import React from 'react'
import { Field, reduxForm } from 'redux-form'

function LoginForm() {

  const renderField = ({ input, label, meta }) => {
    return (
      <div>
        <label>
          {label}
        </label>
        <div>
          <input {...input} />
        </div>
      </div>
  )
  }

  return (
    <div>
      <h1>Login</h1>
      <form>
        <Field name='usename' type='text' component={ renderField} label='Email'/>
        <Field name='password' type='password' component={renderField} label='Password' />
        <div>
          <button type="submit" >Log In</button>
        </div>
      </form>
    </div>
  )
}

export default reduxForm({form: 'loginForm'})(LoginForm)

import auth from '../../modules/auth'
import { RENDER_LOGIN_FORM, AUTHENTICATE, FAIL_AUTHENTICATE, SIGN_OUT } from './types'

export const toggleFormRendering = () => dispatch => {
  dispatch({
    type: RENDER_LOGIN_FORM
  })
}

export const authenticate = (event) => (dispatch, getState) => {
  event.preventDefault()
  const email = getState().form.loginForm.values.email
  const password = getState().form.loginForm.values.password

  auth.signIn(email, password)
    .then(userDatas => {
      dispatch({
        type: AUTHENTICATE,
        payload: userDatas
      })
    })
    .catch(error => {
      dispatch({
        type: FAIL_AUTHENTICATE,
        payload: error.response.data.errors[0]
      })
    });
}

export const signingOut = () => (dispatch) => {

  auth
    .signOut()
    .then(response => {
      dispatch({
        type: SIGN_OUT
      })
    })
    .catch(error => {
      console.log(error);
    });
}

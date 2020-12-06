import auth from '../../modules/auth'
import { RENDERLOGINFORM, AUTHENTICATE, FAIL_AUTHENTICATE } from './types'

export const toggleFormRendering = () => dispatch => {
  dispatch({
    type: RENDERLOGINFORM
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



  // dispatch({
  //   type: AUTHENTICATE
  // })
}

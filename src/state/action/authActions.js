import auth from '../../modules/auth'
import { RENDERLOGINFORM, AUTHENTICATE } from './types'

export const toggleFormRendering = () => dispatch => {
  dispatch({
    type: RENDERLOGINFORM
  })
}

export const authenticate = () => async (dispatch, getState) => {
  const email = getState().form.loginForm.values.email
  const password = getState().form.loginForm.values.password
  

  try {
    let response = await auth.signIn(email, password)
  } catch (error){
    console.log(error)
  }
  
  
  // dispatch({
  //   type: AUTHENTICATE
  // })
}

import { RENDERLOGINFORM } from './types'

export const toggleFormRendering = () => dispatch => {
  dispatch({
    type: RENDERLOGINFORM
  })
}


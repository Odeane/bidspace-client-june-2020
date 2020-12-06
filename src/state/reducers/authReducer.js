
import initialState from "../store/initialState";
import { RENDER_LOGIN_FORM, AUTHENTICATE, FAIL_AUTHENTICATE, SIGN_OUT } from '../action/types'

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case RENDER_LOGIN_FORM:
      return {
        ...state,
        renderLoginForm: !state.renderLoginForm
      }

    case AUTHENTICATE:
      return {
        ...state,
        authenticated: true,
        currentUser: { ...action.payload.data },
        errorMessage: '',
        renderLoginForm: false,
        // renderSignUpForm: false,
      };
    case FAIL_AUTHENTICATE:
      return {
        ...state,
        errorMessage: action.payload,
        authenticated: false,
        // renderLoginForm: true,
      };
    case SIGN_OUT:
      return {
        ...state,
        authenticated: false,
      }
    case "SIGNUP_FORM_VISIBILITY":
      return {
        ...state,
        ...action.payload,
      }
    default:
      return state;
  }
};

export default authReducer; 
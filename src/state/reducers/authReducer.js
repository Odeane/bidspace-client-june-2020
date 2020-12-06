
import initialState from "../store/initialState";
import { RENDERLOGINFORM, AUTHENTICATE, FAIL_AUTHENTICATE} from '../action/types'

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case RENDERLOGINFORM:
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
    
    
    

    case "LOGIN_FORM_VISIBILITY":
      return {
        ...state,
        ...action.payload,
      };

    case "SIGNUP_FORM_VISIBILITY":
      return {
        ...state,
        ...action.payload,
      }

    case "SIGNOUT":
      return {
        ...state,
        authenticated: false,
      }

    default:
      return state;
  }
};

export default authReducer; 
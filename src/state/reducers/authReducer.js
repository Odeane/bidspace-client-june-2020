import initialState from "../store/initialState";

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "AUTHENTICATE":
      return {
        ...state,
        authenticated: true,
        currentUser: action.payload.currentUser,
        renderLoginForm: false,
        renderSignUpForm: false,
      };

    case "FAIL_AUTHENTICATE":
      return {
        ...state,
        errorMessage: action.payload.errorMessage,
        renderLoginForm: true,
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
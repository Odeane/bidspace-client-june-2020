const initialState = {
  currentUser: { email: undefined, role: undefined },
  authenticated: false,
  renderLoginForm: false,
  renderSignUpForm: false,
  errorMessage: "",
  renderInfoWindow: false,
};

export default initialState;
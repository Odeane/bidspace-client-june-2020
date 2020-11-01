const initialState = {
  fetchingListing: true,
  fetchListingError: null,
  currentUser: { email: undefined, role: undefined },
  authenticated: false,
  renderLoginForm: false,
  renderSignUpForm: false,
  errorMessage: "",
};

export default initialState;
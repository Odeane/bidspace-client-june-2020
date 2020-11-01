const initialState = {
  fetchingListing: true,
  fetchListingError: null,
  listings: [],
  currentUser: { email: undefined, role: undefined },
  authenticated: false,
  renderLoginForm: false,
  renderSignUpForm: false,
  errorMessage: "",
};

export default initialState;
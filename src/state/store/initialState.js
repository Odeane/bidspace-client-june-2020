const initialState = {
  fetchingListings: true,
  fetchListingsError: null,
  listings: [],
  fetchingListing: true,
  fetchListingError: null,
  listing: {},


  currentUser: { email: undefined, role: undefined },
  authenticated: false,
  renderLoginForm: false,
  renderSignUpForm: false,
  errorMessage: "",
};

export default initialState;
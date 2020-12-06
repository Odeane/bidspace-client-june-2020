const initialState = {
  fetchingListings: true,
  fetchListingsError: null,
  listings: [],
  fetchingListing: true,
  fetchListingError: null,
  listing: {},


  currentUser: {},
  authenticated: false,
  RENDER_LOGIN_FORM: false,
  renderSignUpForm: false,
  errorMessage: "",
};

export default initialState;
import  initialState  from '../store/initialState'
import {
  FETCH_LISTINGS,
  FETCHING_LISTINGS,
  FAIL_FETCH_LISTINGS,
  FETCH_LISTING,
  FETCHING_LISTING,
  FAIL_FETCH_LISTING,
} from '../action/types'

export const listingsReducer = (state = initialState, action) => {

  switch (action.type) {
    case FETCHING_LISTINGS:
      return {
        ...state,
        fetchingListings: true,
        fetchListingsError: null,
        listings: []
      }
    case FAIL_FETCH_LISTINGS:
      return {
        ...state,
        fetchingListings: false,
        fetchListingsError: action.payload,
        listings: []
      }
    case FETCH_LISTINGS:
      return {
        ...state,
        fetchingListings: false,
        fetchListingsError: null,
        listings: action.payload
      }
    // case FETCHING_LISTING:
    //   return {
    //     ...state,
    //     fetchingListing: true,
    //     fetchListingError: null,
    //     listing: {}
    //   }
    // case FAIL_FETCH_LISTING:
    //   return {
    //     ...state,
    //     fetchingListing: false,
    //     fetchListingError: action.payload,
    //     listing: {}
    //   }
    case FETCH_LISTING:
      return {
        ...state,
        fetchingListing: false,
        fetchListingError: null,
        listing: {...action.payload}
      }
    default:
      return state
  }
}
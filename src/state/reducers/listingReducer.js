import  initialState  from '../store/initialState'
import {
  FETCH_LISTINGS,
  FETCHING_LISTINGS,
  FAIL_FETCH_LISTINGS,
} from '../action/types'

export const listingsReducer = (state = initialState, action) => {

  switch (action.type) {
    case FETCHING_LISTINGS:
      return {
        ...state,
        fetchingListing: true,
        fetchListingError: null,
        listings: []
      }
    case FAIL_FETCH_LISTINGS:
      return {
        ...state,
        fetchingListing: false,
        fetchListingError: action.payload,
        listings: []
      }
    case FETCH_LISTINGS:
      return {
        ...state,
        fetchingListing: false,
        fetchListingError: null,
        listings: action.payload
      }
    default:
      return state
  }
}
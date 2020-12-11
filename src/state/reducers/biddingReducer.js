import initialState from '../store/initialState'
import { PROPOSE_BID } from '../action/types'

export const biddingsReducer = (state = initialState, action) => {
  switch (action.payload) {
    case PROPOSE_BID:
      return {
        ...state,
        biddingResponseMessage: 'bidding sucessfullly submited'
      }
    default:
      return state
  }
}



import initialState from '../store/initialState'
import { PROPOSE_BID } from '../action/types'

export const biddingsReducer = (state = initialState, action) => {
  switch (action.type) {
    case PROPOSE_BID:
      return {
        ...state,
        biddingResponseMessage: action.payload.message
      }
    default:
      return state
  }
}



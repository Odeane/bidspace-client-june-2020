import { combineReducers } from 'redux'
import authReducer from './authReducer'
import { listingsReducer } from './listingReducer'
import { reducer as formReducer } from 'redux-form'
import { biddingsReducer } from "./biddingReducer";

export default combineReducers({
    auth: authReducer,
    lists: listingsReducer,
    form: formReducer,
    bids: biddingsReducer
})
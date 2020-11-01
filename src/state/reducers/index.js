import { combineReducers } from 'redux'
import authReducer from './authReducer'
import { listingsReducer } from './listingReducer'

export default combineReducers({
    auth: authReducer,
    lists: listingsReducer
})
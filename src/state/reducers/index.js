import { combineReducers } from 'redux'
import authReducer from './authReducer'
import { listingsReducer } from './listingReducer'
import { reducer as formReducer } from 'redux-form'

export default combineReducers({
    auth: authReducer,
    lists: listingsReducer,
    form: formReducer
})
import axios from 'axios'
import apiUrl from '../../api/baseURL'
import {
  FETCH_LISTINGS,
  FETCHING_LISTINGS,
  FAIL_FETCH_LISTINGS
} from './types'

export const fetchListings = () => async dispatch => {
  dispatch({ type: FETCHING_LISTINGS })
  
  try {
    let response = await axios.get(`${apiUrl}/listings`)
    const { status, data } = response
    
    if (status === 404) {
      dispatch({type: FAIL_FETCH_LISTINGS, payload: 'No data was found'})
      return
    }

    if (status > 399) {
      dispatch({ type: FAIL_FETCH_LISTINGS, payload: 'Something is wrong with the request can you refresh your browser refresh and try again'})
    }

    dispatch({
      type: FETCH_LISTINGS,
      payload: data
    })
  } catch (error) {
    dispatch({type: FAIL_FETCH_LISTINGS, payload: error.message})
  }
}

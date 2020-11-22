import axios from 'axios'
import apiUrl from '../../api/baseURL'
import {
  FETCH_LISTINGS,
  FETCHING_LISTINGS,
  FAIL_FETCH_LISTINGS,
  FETCH_LISTING,
  FETCHING_LISTING,
  FAIL_FETCH_LISTING,
} from './types'

export const fetchListings = () => async dispatch => {
  dispatch({ type: FETCHING_LISTINGS })

  try {
    let response = await axios.get(`${apiUrl}/listings`)
    let { status, data } = response

    if (status === 404) {
      dispatch({ type: FAIL_FETCH_LISTINGS, payload: 'No data was found' })
      return
    }

    if (status > 399) {
      dispatch({ type: FAIL_FETCH_LISTINGS, payload: 'Something is wrong with the request can you refresh your browser refresh and try again' })
      return
    }

    dispatch({
      type: FETCH_LISTINGS,
      payload: data
    })
  } catch (error) {
    dispatch({ type: FAIL_FETCH_LISTINGS, payload: error.message })
  }
}


export const fetchListing = (id) => async dispatch => {
  dispatch({
    type: FETCHING_LISTING
  })

  try {

    let response = await axios.get(`${apiUrl}/listings/${id}`)
    const { status, data } = response

    if (status === 404) {
      dispatch({ FAIL_FETCH_LISTING, payload: 'No data was found' })
      return
    }

    if (status > 399) {
      dispatch({ FAIL_FETCH_LISTING, payload: 'Something is wrong with the request can you refresh your browser refresh and try again' })
      return
    }

    dispatch({
      type: FETCH_LISTING,
      payload: data
    })

  } catch (error) {
    dispatch({ type: FAIL_FETCH_LISTING, payload: error.message })
  }
}
import axios from 'axios'
import { PROPOSE_BID } from './types';

export const submitBid = (listing_id) => async (dispatch, getState) => {

  const bid = getState().form.biddingForm.values.bid
  const headers = JSON.parse(localStorage.getItem("J-tockAuth-Storage"));

  try {
    let bidParams = {
      bid: parseFloat(bid),
      listing_id: listing_id,
    }

    let response = await axios.post(
      "/biddings",
      { bidding: bidParams },
      { headers: headers }
    );

    dispatch({
      type: PROPOSE_BID,
      payload: response.data
    })
  } catch (error) {
    //I need to handle possible errors
  }
}

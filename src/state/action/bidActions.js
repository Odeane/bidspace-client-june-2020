import axios from 'axios'

export const submitBid = (listing_id) => async (dispatch, getState) => {
  debugger
  const bid = getState().form.biddingForm.values.bid

  const headers = JSON.parse(localStorage.getItem("J-tockAuth-Storage"));

//I need to ddistpatch resonse message
  
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

  } catch (error) {

  }
}

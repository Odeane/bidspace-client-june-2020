import React from 'react'
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form'
import { submitBid } from '../../state/action/bidActions'

const Bidding = (props) => {

  const handleSubmit = (e) => {
    e.preventDefault()
    props.submitBid(props.listing_id)
  }
  
  let biddingField;
  if (props.authenticated) {
    biddingField = (
      <form onSubmit={handleSubmit}>
        <div>
          <Field
            data-cy="input"
            name='bid'
            type="number"
            component='input'
            placeholder="0"
          />
          <button type='submit' data-cy="button">Register Your Bid</button>
        </div>
      </form>
    );
  } else {
    biddingField = (
      <div text data-cy="message"><strong>You need to log in to bid</strong></div>
    );
  }

  return (
    <div>
      {biddingField}
      {props.bidmessage}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    authenticated: state.auth.authenticated,
    bidmessage: state.bids.biddingResponseMessage
  }
};

export default reduxForm({ form: 'biddingForm' })(connect(mapStateToProps, {submitBid})(Bidding))
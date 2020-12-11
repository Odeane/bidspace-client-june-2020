import React from 'react'
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form'

const Bidding = (props) => {

  let biddingField;
  if (props.authenticated) {
    biddingField = (
      <form>
        <div>
          <Field
            data-cy="input"
            type="number"
            component='input'
            placeholder="0"
          />
          <button data-cy="button">Register Your Bid</button>
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
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    authenticated: state.auth.authenticated
  }
};

export default reduxForm({ form: 'biddingForm' })(connect(mapStateToProps)(Bidding))
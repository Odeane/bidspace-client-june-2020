import React, { useEffect, useState } from "react";
import axios from "axios";
import { Label, Container, Form, Button } from "semantic-ui-react";
import { connect } from "react-redux";
import { fetchListing } from "../state/action/listingsActions";
import Bidding from "./bidding/Bidding";

const SingleListing = (props) => {

  useEffect(() => {
    props.fetchListing(listingId)
    // eslint-disable-next-line
  }, []);

  const list = props.listing
  const listingId = props.match.params.id;

  const [message, setMessage] = useState("");
  const [biddingValue, setBiddingValue] = useState("");
  const isUserAuthenticated = props.authenticated;
  
  const onChangeHandler = (e) => {
    setBiddingValue(e.target.value);
  };
  
  const submitBid = async (event) => {
    event.preventDefault();
    let responseMessage, bidParams, response;
    let bid = biddingValue;
    const headers = JSON.parse(localStorage.getItem("J-tockAuth-Storage"));
    try {
      bidParams = {
        bid: parseFloat(bid),
        listing_id: list.id,
      };
      
      response = await axios.post(
        "/biddings",
        { bidding: bidParams },
        { headers: headers }
        );
        
        responseMessage = response.data.message;
      } catch (error) {
        responseMessage = error.response.data.message;
      } finally {
        setMessage(responseMessage);
      }
    };
    
    let biddingField;
    if (isUserAuthenticated) {
      biddingField = (
        <Form onSubmit={submitBid}>
        <Form.Input
        id={list.id}
        value={biddingValue}
        onChange={onChangeHandler}
        data-cy="input"
        type="number"
        />
        <Button positive data-cy="button">Register Your Bid</Button>
        </Form>
        );
      } else {
        biddingField = (
          <>
          <Container text data-cy="message"><strong>You need to log in to bid</strong></Container>
          </>
          );
        }
        
  let listingContent = (
    <>
      <div
        data-cy={`listing-${list.id}`}
        data-id={list.id}
      >
        <h1 data-cy="lead">{list.lead}</h1>
        <Container text data-cy="address"><strong>{list.address}</strong></Container>

        <div text data-cy="description">
          {list.description}
        </div>
        <div>
          <Label size="massive" data-cy="scene">{list.scene}</Label>
          <Label size="massive" data-cy="category">{list.category}</Label>
          <Label size="massive" data-cy="price">Target Price: {list.price}kr</Label>
        </div>
        <div>{biddingField}</div>
      </div>
    </>
  );

  return (
    <div>
      <Bidding />
          <div >
            {
              list.images ?
                list.images.map(image => (
                  <img className='listing__image' src={image.url} alt="carlots"/>
                ))
                :
                ('No images found')
           }
          </div>
          <div>
            <div>{listingContent}</div>
            <div> {message && <p data-cy="message">{message}</p>}</div>
          </div>
      
    </div>
  );
};

const mapStateToProps = ({ lists: { listing } }) => {
  return {
    listing: { ...listing.listing },
    /*authenticated: state.authenticated*/
  };
};

export default connect(mapStateToProps, { fetchListing })(SingleListing);

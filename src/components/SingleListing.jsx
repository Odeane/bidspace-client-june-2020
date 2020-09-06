import React, { useEffect, useState } from "react";
import axios from "axios";
import { Item, Label } from "semantic-ui-react";
import LoginButton from "./LoginButton";
import { connect } from "react-redux";

const SingleListing = (props) => {
  const listingId = props.match.params.id;
  const [singleListing, setSingleListing] = useState({});
  const [images, setImages] = useState([]);
  const [message, setMessage] = useState("");
  const [biddingValue, setBiddingValue] = useState("");
  const isUserAuthenticated = props.authenticated;

  const onChangeHandler = (e) => {
    setBiddingValue(e.target.value);
  };

  const submitBid = async (event) => {
    event.preventDefault();
    let responseMessage, bidParams, response;
    let bid = biddingValue
    const headers = JSON.parse(localStorage.getItem("J-tockAuth-Storage"));

    try {
      bidParams = {
        bid: bid.value,
      };

      response = await axios.post(
        "http://localhost:3000/api/v1/biddings",
        { bid: biddingValue },
        { headers: headers }
      );

      responseMessage = response.data.message;
    } catch (error) {
      responseMessage = response.data.error;
    } finally {
      setMessage(responseMessage);
    }
  };

  let biddingField;
  if (isUserAuthenticated) {
    biddingField = (
     
      <form onSubmit={submitBid}>
        <input
          value={biddingValue}
          onChange={onChangeHandler}
          data-cy="input"
          type="number"
        />
        <button data-cy="button" >
          Register Your Bid
        </button>
      </form>
      
    );
  } else {
    biddingField = (
      <>
        <LoginButton id="login" />
        <p data-cy="message">You need to log in to bid</p>
      </>
    );
  }

  useEffect(() => {
    getSingleListing();
  }, []);

  const getSingleListing = async () => {
    let id = listingId;
    let response = await axios.get(`/listings/${id}`);
    setSingleListing(response.data.listing);
    setImages(response.data.listing.images);
  };

  let listingContent = (
    <>
      <Item.Group divided>
        <Item
          data-cy={`listing-${singleListing.id}`}
          data-id={singleListing.id}
        >
          {images.map((url) => (
            <Item.Image data-cy="image" src={url.url} alt="listing image" />
          ))}

          <Item.Content>
            <Item.Header data-cy="lead">{singleListing.lead}</Item.Header>
            <Item.Meta data-cy="address">{singleListing.address}</Item.Meta>
            <Item.Description data-cy="description">
              {singleListing.description}
            </Item.Description>
            <Item.Extra>
              <Label data-cy="scene">{singleListing.scene}</Label>
              <Label data-cy="category">{singleListing.category}</Label>
              <Label data-cy="price">{singleListing.price}</Label>
            </Item.Extra>
            <Item.Extra>{biddingField}</Item.Extra>
          </Item.Content>
        </Item>
      </Item.Group>
    </>
  );

  return (
    <>
      <div>{listingContent}</div>
      <div> {message && <p data-cy="message">{message}</p>}</div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    authenticated: state.authenticated,
  };
};

export default connect(mapStateToProps)(SingleListing);

import React, { useEffect, useState } from "react";
import axios from "axios";
import { Item, Label } from "semantic-ui-react";

const SingleListing = (props) => {
  const listingId = props.match.params.id;
  const [singleListing, setSingleListing] = useState({});
  const [message, setMessage] = useState("");

  useEffect(() => {
    getSingleListing();
  }, []);

  const getSingleListing = async () => {
    let id = listingId;
    let response = await axios.get(`/listings/${id}`);
    setSingleListing(response.data);
  };

  const submitBid = async (event) => {
    event.preventDefault();
    let responseMessage, bidParams, response;
    let bid = event.target;
    const headers = JSON.parse(localStorage.getItem("J-tockAuth-storage"));
debugger
    try {
      bidParams = {
        bid: bid.value,
      };

      response = await axios.post(
        "http://localhost:3000/api/v1/biddings",
        { bid: bidParams },
        { headers: headers }
      );

      responseMessage = response.data.message;
    } catch (error) {
      responseMessage = response.data.error;
    } finally {
      setMessage(responseMessage);
    }
  }

  let listingContent = (
    <>
    <Item.Group divided>
      <Item data-cy={`listing-${singleListing.id}`} data-id={singleListing.id}>
        <Item.Image
          data-cy="image"
          src={singleListing.image}
          alt="listing image"
        />
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
          <Item.Extra>
            <input data-cy="input" type="number"/>
            <button data-cy="button" onClick={submitBid}>Register Your Bid</button>
          </Item.Extra>
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

export default SingleListing;

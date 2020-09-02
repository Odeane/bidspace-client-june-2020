import React, { useEffect, useState } from "react";
import axios from "axios";
import { Item, Label } from "semantic-ui-react";

const SingleListing = (props) => {
  const listingId = props.match.params.id;
  const [singleListing, setSingleListing] = useState([]);

  useEffect(() => {
    getSingleListing();
  }, []);

  const getSingleListing = async () => {
    let id = listingId;
    let response = await axios.get(`/listings/${id}`);
    setSingleListing(response.data.listings);
  };

  let listingContent = singleListing.map((listing) => (
    <Item.Group divided>
      <Item data-cy={`listing-${listing.id}`} data-id={listing.id}>
        <Item.Content>
          <Item.Header data-cy="lead">{listing.lead}</Item.Header>
          <Item.Meta data-cy="address">{listing.address}</Item.Meta>
          <Item.Description data-cy="description">{listing.description}</Item.Description>
          <Item.Extra>
            <Label data-cy="scene">{listing.scene}</Label>
            <Label data-cy="category">{listing.category}</Label>
            <Label data-cy="price">{listing.price}</Label>
          </Item.Extra>
        </Item.Content>
      </Item>
    </Item.Group>
  ));


  return (
    <>
      <div>
        {listingContent}
      </div>
    </>
  );
};

export default SingleListing;

import React, { useEffect, useState } from "react";
import axios from "axios";
import { Item, Label } from "semantic-ui-react";

const SingleListing = (props) => {
  const listingId = props.match.params.id;
  const [singleListing, setSingleListing] = useState({});

  useEffect(() => {
    getSingleListing();
  }, []);

  const getSingleListing = async () => {
    debugger;
    let id = listingId;
    let response = await axios.get(`/listings/${id}`);
    setSingleListing(response.data);
  };

  let listingContent = (
    <Item.Group divided>
      <Item data-cy={`listing-${singleListing.id}`} data-id={singleListing.id}>
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
        </Item.Content>
      </Item>
    </Item.Group>
  );

  return (
    <>
      <div>{listingContent}</div>
    </>
  );
};

export default SingleListing;

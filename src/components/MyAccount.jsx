import React, { useEffect, useState } from "react";
import axios from "axios";
import { Item, Label, Button, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";

const MyAccount = () => {
  const [myListing, setMyListing] = useState([]);

  useEffect(() => {
    getListing();
  }, []);

  const getListing = async () => {
    let response = await axios.get("account/listings");
    setMyListing(response.data.listings);
  };

  let content = myListing.map((listing) => (
    <Item.Group divided>
      <Item data-cy={`listing-${listing.id}`} data-id={listing.id}>
        <Item.Image data-cy="image" src={listing.image} alt="listing image" />
        <Item.Content>
          <Item.Header data-cy="lead">{listing.lead}</Item.Header>
          <Item.Meta data-cy="category">{listing.category}</Item.Meta>
          <Item.Extra>
            <Label data-cy="scene">{listing.scene}</Label>
            <Link to={`listing/${listing.id}`}>
              <Button data-cy="button" primary floated="right">
                Listing Details
                <Icon name="right chevron" />
              </Button>
            </Link>
          </Item.Extra>
        </Item.Content>
      </Item>
    </Item.Group>
  ));

  return (
    <div>
      <div>{content}</div>
    </div>
  );
};

export default MyAccount;

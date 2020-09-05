import React, { useEffect, useState } from "react";
import axios from "axios";
import { Grid, Item, Label, Button, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";

const ListingPage = () => {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    getListings();
  }, []);

  const getListings = async () => {
    let response = await axios.get(`/listings`);
    setListings(response.data.listings);
  };

  let content = listings.map((listing) => (
    <Item.Group divided>
      <Item data-cy={`listing-${listing.id}`} data-id={listing.id}>
        <Item.Image data-cy="image" src={listing.image} alt="listing image"/>
        <Item.Content>
          <Item.Header data-cy="lead">{listing.lead}</Item.Header>
          <Item.Meta id="category">{listing.category}</Item.Meta>
          <Item.Extra>
            <Label data-cy="scene">{listing.scene}</Label>
            <Link to={`listing/${listing.id}`}>
              <Button data-cy="button" primary floated="right">
                Check me out
                <Icon name="right chevron" />
              </Button>
            </Link>
          </Item.Extra>
        </Item.Content>
      </Item>
    </Item.Group>
  ));

  return (
    <>
      <h1 id="rent-space-title">Rent your space</h1>
      <Grid columns={2} relaxed="very">
        <Grid.Column>
          <div>{content}</div>
        </Grid.Column>
        <Grid.Column>
          <img
            src="https://www.google.com/maps/d/thumbnail?mid=1Q0KaFi_mtsXrkPd9jfIEwRu4wyk&hl=en"
            alt=""
          />
        </Grid.Column>
      </Grid>
    </>
  );
};

export default ListingPage;

import React, { useEffect } from "react";
import { Grid, Item, Label, Button, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";
import GoogleMaps from "./GoogleMaps";
import { connect } from "react-redux";
import {fetchListings} from '../state/action/listingActions'

const ListingPage = ({ lists = [], ...props}) => {
  useEffect(() => {
    props.fetchListings()
    // eslint-disable-next-line
  }, []);

  let content = lists.map((listing) => (
    <Item.Group divided>
      <Item data-cy={`listing-${listing.id}`} data-id={listing.id}>
        <Item.Image data-cy="image" src={listing.image} alt="listing image" />
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
    <div id="listing-page">
      <h1 id="rent-space-title">Rent your space</h1>
      <Grid columns={2} relaxed="very">
        <Grid.Column>
          <div>{content}</div>
        </Grid.Column>
        <Grid.Column>
          <GoogleMaps listings={lists} />
        </Grid.Column>
      </Grid>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { lists: state.lists.listings.listings }
}

export default connect(mapStateToProps, { fetchListings })(ListingPage);

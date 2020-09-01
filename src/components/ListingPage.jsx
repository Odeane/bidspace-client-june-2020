import React, { useEffect, useState } from "react";
import axios from "axios";
import { Grid } from "semantic-ui-react"

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
    <div data-cy={`listing-${listing.id}`} data-id={listing.id}>
    <p data-cy="lead">{listing.lead}</p>
    <p data-cy="category">{listing.category}</p>
    <p data-cy="scene">{listing.scene}</p>
    </div>
  ));

  return (
    <>
      <h1 id="rent-space-title">Rent your space</h1>
      <Grid columns={2} relaxed="very">
        <Grid.Column>
         <div>{content}</div>
        </Grid.Column>
        <Grid.Column>
         <img src="https://www.google.com/maps/d/thumbnail?mid=1Q0KaFi_mtsXrkPd9jfIEwRu4wyk&hl=en" alt=""/>
        </Grid.Column>
      </Grid>
    </>
  );
};

export default ListingPage;

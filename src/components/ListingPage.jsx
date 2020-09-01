import React, { useEffect, useState } from "react";
import axios from "axios";

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
      <div>{content}</div>
    </>
  );
};

export default ListingPage;

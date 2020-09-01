import React, { useEffect, useState } from "react";
import axios from "axios";

const ListingPage = (props) => {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    getListings();
  }, []);

  const getListings = async () => {
    let response = await axios.get(`/listings`);
    setListings(response.data.listings);
  };

  let content = listings.map((listing) => (
    <p>{listing.lead}</p>
  ));

  return (
    <>
      <h1 id="rent-space-title">Rent your space</h1>
      <div>{content}</div>
    </>
  );
};

export default ListingPage;

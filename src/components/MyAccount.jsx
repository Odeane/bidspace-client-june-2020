import React, { useEffect, useState } from "react";
import axios from "axios";

const MyAccount = () => {
  const [myListing, setMyListing] = useState([]);

  useEffect(() => {
    getListing();
  }, []);

  const getListing = async () => {
    let response = await axios.get("/account");
    setMyListing(response.data.listings);
  };

  let content = myListing.map((listing) => (
    <div data-cy={`listing-${listing.id}`}>
      <img data-cy="image" src={listing.image} />
      <h1 data-cy="lead">{listing.lead}</h1>
      <h2 data-cy="category">{listing.category}</h2>
      <h2 data-cy="scene">{listing.scene}</h2>
    </div>
  ));

  return (
    <div>
      <h1>{content}</h1>
    </div>
  );
};

export default MyAccount;
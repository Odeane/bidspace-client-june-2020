import React, { useEffect, useState } from "react";
import axios from "axios"

const SingleListing = (props) => {
  const listingId = props.match.params.id;
  const setSingleListing = useState(null)

  useEffect(() => {
    debugger
    getSingleListing();
  }, []);

  const getSingleListing = async () => {
    debugger
    let id = listingId
    let response = await axios.get(`/listing/${id}`);
    setSingleListing(response.data.listing);

  };

  let content={getSingleListing} 

  return (
    <div>
      <h1>this is the single listing</h1>
      {content}
    </div>
  );
};

export default SingleListing;

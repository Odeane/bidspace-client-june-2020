import React, { useEffect, useState } from "react";
import axios from "axios";

const SingleListing = (props) => {
  const listingId = props.match.params.id;
  const [singleListing, setSingleListing] = useState(null);

  useEffect(() => {
    debugger;
    getSingleListing();
  }, []);

  const getSingleListing = async () => {
    debugger;
    let id = listingId;
    let response = await axios.get(`/listings/${id}`);
    setSingleListing(response.data.listings);
  };

  let listingContent = (
    <div
    listing={singleListing}
    >
    </div>
  );

  return (
    <>
      <div>
        <h1>this is the single listing</h1>
        {listingContent}
      </div>
    </>
  );
};

export default SingleListing;

import React, { useEffect } from "react";
import { Label, Container } from "semantic-ui-react";
import { connect } from "react-redux";
import { fetchListing } from "../../state/action/listingsActions";
import Bidding from "../bidding/Bidding";
import Navbar from "../nav/Navbar";

const SingleListing = (props) => {

  const listingId = props.match.params.id;
  const list = props.listing

  useEffect(() => {
    props.fetchListing(listingId)
    // eslint-disable-next-line
  }, []);

  let listingContent = (
    <div
      data-cy={`listing-${list.id}`}
      data-id={list.id}
    >
      <h1 data-cy="lead">{list.lead}</h1>
      <div className='list__images'>
        {
          list.images ?
            list.images.map(image => (
              <img className='list__image' src={image.url} alt="carlots" />
            ))
            :
            ('No images found')
        }
      </div>
      
      <h3 data-cy="address"><strong>{list.address}</strong></h3>

      <div text data-cy="description">
        {list.description}
      </div>
      <div>
        <h2 className='listing__detail--category'  data-cy="scene">{list.scene}</h2>
        <h2 data-cy="category">{list.category}</h2>
        <span data-cy="price">Target Price: {list.price}kr</span>
      </div>
    </div>
  );

  return (
    <div >
      <Navbar />
      <div>
        <div>{listingContent}</div>
      </div>
      <div>
        <Bidding
          listing_id={list.id}
        />
      </div>
    </div>
  );
};

const mapStateToProps = ({ lists: { listing } }) => {
  return {
    listing: { ...listing.listing },
  };
};

export default connect(mapStateToProps, { fetchListing })(SingleListing);

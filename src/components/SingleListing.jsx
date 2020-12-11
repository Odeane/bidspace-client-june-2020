import React, { useEffect } from "react";
import { Label, Container } from "semantic-ui-react";
import { connect } from "react-redux";
import { fetchListing } from "../state/action/listingsActions";
import Bidding from "./bidding/Bidding";

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
      <div >
        {
          list.images ?
            list.images.map(image => (
              <img className='listing__image' src={image.url} alt="carlots" />
            ))
            :
            ('No images found')
        }
      </div>
      <h1 data-cy="lead">{list.lead}</h1>
      <Container text data-cy="address"><strong>{list.address}</strong></Container>

      <div text data-cy="description">
        {list.description}
      </div>
      <div>
        <Label size="massive" data-cy="scene">{list.scene}</Label>
        <Label size="massive" data-cy="category">{list.category}</Label>
        <Label size="massive" data-cy="price">Target Price: {list.price}kr</Label>
      </div>
    </div>
  );

  return (
    <div>
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

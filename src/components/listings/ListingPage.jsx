import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import GoogleMaps from "../GoogleMaps";
import { connect } from "react-redux";
import { fetchListings } from '../../state/action/listingsActions'
import NavBar from '../nav/Navbar'

const Listings = ({ lists = [], ...props }) => {
  useEffect(() => {
    props.fetchListings()
    // eslint-disable-next-line
  }, []);

  let content = lists.map((listing) => (
    <div className='listing' key={listing.id}>

      <div className="listing__image">
        <img src={listing.image} alt="" className="listing__image--size" />
      </div>

      <div className="listing__detail">
        <h4 data-cy="lead">{listing.lead}</h4>
        <h1 data-cy="category">{listing.category}</h1>
        <h1 data-cy="scene">{listing.scene}</h1>
        <Link to={`listing/${listing.id}`} >Check me out</Link>
      </div>
    </div>
  ));

  return (
    <>
      <NavBar/>
      <div className="listings">
        <div className='listings__content'>{content}</div>
        <div className="listings__map">
          <GoogleMaps className='listing__map' listings={lists} />
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return { lists: state.lists.listings.listings }
}

export default connect(mapStateToProps, { fetchListings })(Listings);

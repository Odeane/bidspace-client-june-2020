import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import GoogleMaps from "../GoogleMaps";
import { connect } from "react-redux";
import { fetchListings } from '../../state/action/listingsActions'
import NavBar from '../nav/Navbar'
import { Rating } from "semantic-ui-react";

const Listings = ({ lists = [], ...props }) => {
  useEffect(() => {
    props.fetchListings()
    // eslint-disable-next-line
  }, []);

  let content = lists.map((listing) => (
    <div className='listing' key={listing.id}>


      <img src={listing.image} alt="" className="listing__image" />


      <div className="listing__detail">
        <Rating icon='star' defaultRating={3} maxRating={5} />
        <h1 data-cy="lead" className='listing__detail--lead'>{listing.lead}</h1>
        <h2 data-cy="category" className='listing__detail--category'>{listing.category}</h2>
        <h3 data-cy="scene" className='listing__detail--scene'>{listing.scene}</h3>
        <Link className='btn-secondary' to={`listing/${listing.id}`} >Veiw space</Link>
      </div>
    </div>
  ));

  return (
    <div>
      <div className='listing__header'>
        <NavBar />
      </div>

      <section className='advert'>
        <h1>Park where it is safe.</h1>
        <span>Over 30+ lots available !!</span>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
        <br />
        </p>
      </section>

      <div className="listings">
        <div className='listings__content'>{content}</div>
        <div className="listings__map">
          <GoogleMaps listings={lists} />
        </div>
      </div>

    </div>
  );
};

const mapStateToProps = (state) => {
  return { lists: state.lists.listings.listings }
}

export default connect(mapStateToProps, { fetchListings })(Listings);

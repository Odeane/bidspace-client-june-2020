import React, { useState, useEffect } from "react";
import { GoogleApiWrapper, Map, Marker, InfoWindow } from "google-maps-react";
import { connect } from "react-redux";
import { Image } from "semantic-ui-react";

const GoogleMaps = ({ listings, ...props }) => {
  const [listing, setListing] = useState([]);
  const [activeMarker, setActiveMarker] = useState({});
  const [selectedPlace, setSelectedPlace] = useState({});
  const [infoWindow, setInfoWindow] = useState(false);
  const handleMarkerClick = (e, marker) => {
    setActiveMarker(marker);
    setSelectedPlace(props);
    setInfoWindow(true);
  };
  return (
    <div>
      <Map
        initialCenter={{
          lat: 59.26752,
          lng: 18.05388,
        }}
        zoom={8}
        onReady={() => setListing(listings)}
        google={props.google}
      >
        {listings.map((listing) => (
          <Marker
            onClick={handleMarkerClick}
            title={listing.lead}
            image={listing.image}
            position={{ lat: listing.latitude, lng: listing.longitude }}
          />
        ))}
        <InfoWindow
          onClose={() => setInfoWindow(false)}
          marker={activeMarker}
          visible={infoWindow}
        >
          <div>
            <h3>{activeMarker.title}</h3>
            <Image centered size="small" src={activeMarker.image} />
          </div>
        </InfoWindow>

        {/* <Marker
              title={"Odeane's address"}
              position={{ lat: 59.26752, lng: 18.05388 }}
            /> */}
      </Map>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    renderInfoWindow: state.renderInfoWindow,
  };
};

export default connect(mapStateToProps)(
  GoogleApiWrapper({
    apiKey: process.env.REACT_APP_API_KEY,
  })(GoogleMaps)
);

import React, { useState, useEffect } from "react";
import { GoogleApiWrapper, Map, Marker } from "google-maps-react";

const GoogleMaps = ({ listings, ...props }) => {
  const [listing, setListing] = useState([]);

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
        {listing.map((list) => (
          <Marker
            title={list.title}
            position={{ lat: list.latitude, lng: list.longitude }}
          />
        ))}
        {/* <Marker
              title={"Odeane's address"}
              position={{ lat: 59.26752, lng: 18.05388 }}
            /> */}
      </Map>
    </div>
  );
};

export default GoogleApiWrapper({
  apiKey: "",
})(GoogleMaps);
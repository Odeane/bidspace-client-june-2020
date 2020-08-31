import React from "react";
import Navbar from "./Navbar";

const LandingPage = () => {
  return (
    <>
      <div id="left-pane">
        <img id="logo" src="./images/logo.png" alt="BidSpace" />
        <button id="rent-button">Rent a space!</button>
      </div>
      <div id="right-pane">
        <Navbar />
        <button id="rentout-button">Rent out a space!</button>
      </div>
    </>
  );
};

export default LandingPage;

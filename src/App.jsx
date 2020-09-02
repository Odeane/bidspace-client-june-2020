import React from "react";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import LandingPage from "./components/LandingPage";
import ListingPage from "./components/ListingPage"
import LandlordPage from "./components/LandlordPage"
import SingleListing from "./components/SingleListing"

const App = (props) => {
  return (
    <div>
      <Switch>
        <Route exact path="/"> <LandingPage /> </Route>
        <Route exact path="/rent-space"> <ListingPage /> </Route>
        <Route exact path="/rentout-space"> <LandlordPage /> </Route>
        <Route exact path="/listing/:id"> <SingleListing /> </Route>
      </Switch>
    </div>
  );
}

const mapStateToProps = (state) => {
  return{
    state: state
  }
}

export default connect(mapStateToProps)(App);

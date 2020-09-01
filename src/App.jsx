import React from "react";
import { Route, Switch } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import ListingPage from "./components/ListingPage"
import LandlordPage from "./components/LandlordPage"

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/"> <LandingPage /> </Route>
        <Route exact path="/rent-space"> <ListingPage /> </Route>
        <Route exact path="/rentout-space"> <LandlordPage /> </Route>
      </Switch>
    </div>
  );
}

export default App;

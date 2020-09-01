import React from "react";
import { Route, Switch } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import ListingPage from "./components/ListingPage"
import LandlordPage from "./components/LandlordPage"

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={LandingPage}></Route>
        <Route exact path="/rent-space" component={ListingPage}></Route>
        <Route exact path="/rentout-space" component={LandlordPage}></Route>
      </Switch>
    </div>
  );
}

export default App;

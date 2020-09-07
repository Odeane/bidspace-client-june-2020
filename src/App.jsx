import React from "react";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import LandingPage from "./components/LandingPage";
import ListingPage from "./components/ListingPage";
import LandlordPage from "./components/LandlordPage";
import SingleListing from "./components/SingleListing";
import { Elements } from "react-stripe-elements";
import Subscription from "./components/Subscription";
import Navbar from "./components/Navbar";
import SignUpForm from "./components/SignUpForm";
import MyAccount from "./components/MyAccount";

const App = (props) => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={LandingPage}></Route>
        <Route exact path="/rent-space" component={ListingPage}></Route>
        <Route exact path="/rentout-space" component={LandlordPage}></Route>
        <Route exact path="/listing/:id" component={SingleListing}></Route>
        <Route exact path="/registration" component={SignUpForm}></Route>
        <Route exact path="/account" component={MyAccount}></Route>
        <Elements>
          <Route exact path="/subscription" component={Subscription}></Route>
        </Elements>
      </Switch>
      {props.renderSignUpForm && <SignUpForm />}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    renderLoginForm: state.renderLoginForm,
    renderSignUpForm: state.renderSignUpForm,
    authenticated: state.authenticated,
  };
};

export default connect(mapStateToProps)(App);

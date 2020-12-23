import React from "react";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import LandingPage from "./components/landing-page/LandingPage";
import Listings from "./components/listings/ListingPage";
import LandlordPage from "./components/LandlordPage";
import SingleListing from "./components/single-listing/SingleListing";
import { Elements } from "react-stripe-elements";
import Subscription from "./components/Subscription";
import SignUpForm from "./components/SignUpForm";
import MyAccount from "./components/MyAccount";
import MyOwnListing from "./components/MyOwnListing";
import Faq from "./components/Faq"
import ContactUs from "./components/ContactUs"


const App = (props) => {
  return (
    <div className='app'>
      <Switch>
        <Route exact path="/" component={LandingPage}></Route>
        <Route path="/rent-space" component={Listings}></Route>
        <Route path="/rentout-space" component={LandlordPage}></Route>
        <Route path="/listing/:id" component={SingleListing}></Route>
        <Route path="/registration" component={SignUpForm}></Route>
        <Route path="/account/listings" component={MyAccount}></Route>
        <Route path="/account/listings/:id" component={MyOwnListing}></Route>
        <Route path="/faq" component={Faq}></Route>
        <Route path="/contact-us" component={ContactUs}></Route>
        <Elements>
          <Route exact path="/subscription" component={Subscription}></Route>
        </Elements>
      </Switch>
      {props.renderSignUpForm && <SignUpForm />}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    RENDER_LOGIN_FORM: state.RENDER_LOGIN_FORM,
    renderSignUpForm: state.renderSignUpForm,
    authenticated: state.authenticated,
  };
};

export default connect(mapStateToProps)(App);

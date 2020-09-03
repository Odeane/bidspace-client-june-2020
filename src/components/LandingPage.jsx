import React from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import { connect } from "react-redux"
import LoginForm from "./LoginForm"

const LandingPage = (props) => {
  return (
    <>
      <div id="left-pane">
        <img id="logo" src="./images/logo.png" alt="BidSpace" />
        <Link data-cy="button" id="rent-button" to="/rent-space">Rent a space!</Link>
      </div>
      <div id="right-pane">
        <Navbar />
        <Link data-cy="button" id="rentout-button" to="/rentout-space">Rent out a space!</Link>
      </div>
      {props.renderLoginForm && <LoginForm />}
    </>
  );
};

const mapStateToProps = (state) => {
  return{
    renderLoginForm: state.renderLoginForm,
    authenticated: state.authenticated,
  }
}

export default connect(mapStateToProps)(LandingPage);
import React from "react";
import { connect } from "react-redux";
import '../../sass/main.scss'
import Navbar from "../nav/Navbar";


const LandingPage = (props) => {
  return (
    <div className="header">
      <Navbar />
    </div>
  );
};

const mapStateToProps = (state) => {

  return {
    renderLoginForm: state.auth.renderLoginForm,
    authenticated: state.auth.authenticated,
  };
};

export default connect(mapStateToProps)(LandingPage);

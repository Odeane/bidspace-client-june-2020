import React from "react";
import { connect } from "react-redux";
import '../../sass/main.scss'
import Navbar from "../nav/Navbar";


const LandingPage = (props) => {
  return (
    <div className="header">
      <Navbar />
      <div className="header__text-box">
        <h1 className="heading-primary">
          <span className="heading-primary--main">BidSpace</span>
          <span className="heading-primary--sub">Everything You Need. All Right Here.</span>
        </h1>
      </div>
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

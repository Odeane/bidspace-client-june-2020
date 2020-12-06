import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Login from "../login-modal/Login";
import { toggleFormRendering } from "../../state/action/authActions"
import '../../sass/main.scss'




const NavBar = (props) => {
  return (
    <div className="navbar">
      <Link className='logo' to='/'>BidSpace</Link>
      <div className='navbar__links'>
        {props.authenticated ? <Link className='navbar__links-text' to='/account/listings'>Account</Link> : null}
        <Link className='navbar__links-text' to='/rentout-space'>Post-a-space</Link>
        <Link className='navbar__links-text' to='/contact-us'>Contact</Link>
        <Link className='navbar__links-text' to='/faq'>FAQ</Link>
        {!props.authenticated ? <Link onClick={props.toggleFormRendering} className='navbar__links-text' >Login</Link> : <Link className='navbar__links-text' >Log Out</Link>}
        {props.authenticated ? null : <Link className='navbar__links-text' to='/registration'>Sign Up</Link>}
        {/* <Link className='navbar-text' to='/subscription'>Subscribe</Link> */}
      </div>
      <Login
      />
    </div>
  )
}
const mapStateToProps = (state) => {
  return {
    renderLoginForm: state.auth.renderLoginForm,
    authenticated: state.auth.authenticated,
    userRole: state.auth.currentUser.role,
  };
};


export default connect(mapStateToProps, { toggleFormRendering })(NavBar)
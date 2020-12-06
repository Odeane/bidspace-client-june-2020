import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
// import auth from "../../modules/auth";
// import LoginForm from "../LoginForm";
import Login  from "../login-modal/Login";
import {renderLoginForm} from "../../state/action/authActions"
import '../../sass/main.scss'




const NavBar = (props) => {
  return (
    <div className="navbar">
      <Link className='logo' to='/'>BidSpace</Link>
      <div className='navbar__links'>
        <Link className='navbar__links-text' to='/'>Home</Link>
        <Link className='navbar__links-text' to='/contact-us'>Contact Us</Link>
        <Link className='navbar__links-text' to='/faq'>FAQ</Link>
        <Link onClick={props.renderLoginForm} className='navbar__links-text' >Login</Link>
        <Link className='navbar__links-text' to='/registration'>Sign Up</Link>
        {/* <Link className='navbar-text' to='/subscription'>Subscribe</Link> */}
      </div>
      <Login
      />
    </div>
  )
}
const mapStateToProps = (state) => {
  console.log(state)
  return {
    renderLoginForm: state.auth.renderLoginForm,
    authenticated: state.auth.authenticated,
    userRole: state.auth.currentUser.role,
  };
};


export default connect(mapStateToProps, { renderLoginForm })(NavBar)
import React from "react";
import { Menu } from "semantic-ui-react";
import LongMenu from "./LongMenu";
import LoginButton from "./LoginButton";
import { connect } from "react-redux";
import { Link } from "react-router-dom"

const Navbar = (props) => {
  return (
    <div>
      <Menu secondary id="navbar">
        <Menu.Menu position="right">
          <Menu.Item>
            <LoginButton data-cy="button" id="login-button" />
          </Menu.Item>

          <Menu.Item>
            <button data-cy="button" id="signup-button">Signup</button>
          </Menu.Item>

          <Menu.Item as={Link} to={{ pathname: "/subscription" }} data-cy="button" id="signup-button" name="subscription">
            <button >Become Subscriber</button>
          </Menu.Item>

          <Menu.Item>
          <LongMenu />
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    renderLoginForm: state.renderLoginForm,
    authenticated: state.authenticated
  }
}

export default connect(mapStateToProps)(Navbar);
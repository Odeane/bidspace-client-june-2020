import React, { useState } from "react";
import { Menu, Segment } from "semantic-ui-react";
import LoginButton from "./LoginButton";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import LoginForm from "./LoginForm";

const Navbar = (props) => {
let isLoginVisible = props.renderLoginForm

  const [activeItem, setActiveItem] = useState("home");
  const handleItemClick = (e, { name }) => {
    setActiveItem(name);
  };

  const handleFormClick = (e, { name }) => {
    setActiveItem(name);

    if (isLoginVisible) {
      props.dispatch({
        type: "LOGIN_FORM_VISIBILITY",
        payload: { renderLoginForm: false },
      });
    } else {
      props.dispatch({
        type: "LOGIN_FORM_VISIBILITY",
        payload: { renderLoginForm: true },
      });
    }
  };



  return (
    <>
      <Segment inverted>
        <Menu id="navbar" inverted pointing secondary>
          <Menu.Item
            name="home"
            active={activeItem === "home"}
            onClick={handleItemClick}
            as={Link}
            to={{ pathname: "/" }}
          />
          <Menu.Item
            name="messages"
            active={activeItem === "messages"}
            onClick={handleItemClick}
          />
          <Menu.Item
            name="contact us"
            active={activeItem === "contact us"}
            onClick={handleItemClick}
          />
          <Menu.Item
            name="F A Q"
            active={activeItem === "F A Q"}
            onClick={handleItemClick}
          />
          <Menu.Item
            position="right"
            name="login"
            active={activeItem === "login"}
            onClick={handleFormClick}
          />
          

          <Menu.Item
            name="signup"
            active={activeItem === "signup"}
            onClick={handleItemClick}
          />

          <Menu.Item
            as={Link}
            to={{ pathname: "/subscription" }}
            data-cy="button"
            id="signup-button"
            name="become subscriber"
            active={activeItem === "become subscriber"}
            onClick={handleItemClick}
          />
        </Menu>
        <Menu position="right" inverted>
          <Menu.Item position="right">
            {props.renderLoginForm && <LoginForm />}
          </Menu.Item>
        </Menu>
      </Segment>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    renderLoginForm: state.renderLoginForm,
    authenticated: state.authenticated,
  };
};

export default connect(mapStateToProps)(Navbar);

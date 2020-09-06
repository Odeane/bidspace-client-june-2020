import React, { useState } from "react";
import { Menu, Segment, Container, Button } from "semantic-ui-react";
import LoginButton from "./LoginButton";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  const [activeItem, setActiveItem] = useState("home");
  const handleItemClick = (e, { name }) => {
    setActiveItem(name);
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
          onClick={handleItemClick}>
          <LoginButton data-cy="button" id="login-button" />
          </Menu.Item>

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

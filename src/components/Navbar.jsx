import React from "react";
import { Menu, Segment, Container, Button } from "semantic-ui-react";
import LongMenu from "./LongMenu";
import LoginButton from "./LoginButton";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  return (
    <>
        <Menu id="navbar" inverted>
          <Container>
            <Menu.Item position="right">
              <LoginButton data-cy="button" id="login-button" />
              <Button data-cy="button" id="signup-button">
                Signup
              </Button>

              <Menu.Item
                as={Link}
                to={{ pathname: "/subscription" }}
                data-cy="button"
                id="signup-button"
                name="subscription"
              >
                <Button>Become Subscriber</Button>
              </Menu.Item>

              <Menu.Item>
                <LongMenu />
              </Menu.Item>
            </Menu.Item>
          </Container>
        </Menu>
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

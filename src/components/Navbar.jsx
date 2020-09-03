import React from "react";
import { Menu } from "semantic-ui-react";
import LongMenu from "./LongMenu";

const Navbar = () => {
  return (
    <div>
      <Menu secondary id="navbar">
        <Menu.Menu position="right">
          <Menu.Item>
            <button data-cy="button" id="login-button">Login</button>
          </Menu.Item>

          <Menu.Item>
            <button data-cy="button" id="signup-button">Signup</button>
          </Menu.Item>

          <Menu.Item>
          <LongMenu />
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    </div>
  );
};

export default Navbar;
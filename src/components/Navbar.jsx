import React from "react";
import { Menu } from "semantic-ui-react";

const Navbar = () => {
  return (
    <div>
      <Menu secondary id="navbar">
        <Menu.Menu position="right">
          <Menu.Item>
            <button id="login-button">Login</button>
          </Menu.Item>

          <Menu.Item>
            <button id="signup-button">Signup</button>
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    </div>
  );
};

export default Navbar;
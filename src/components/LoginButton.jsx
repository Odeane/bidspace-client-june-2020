import React from "react";
import { connect } from "react-redux";
import { Menu } from "semantic-ui-react"

const LoginButton = (props) => {
  return <div data-cy="button" id={props.id}>Login</div>;
};

export default connect()(LoginButton);
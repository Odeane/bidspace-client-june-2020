import React from "react";
import { connect } from "react-redux";
import { Menu } from "semantic-ui-react"

const LoginButton = (props) => {
  const clickHandler = () => {
    props.dispatch({
      type: "LOGIN_FORM_VISIBILITY",
      payload: { renderLoginForm: true },
    });
  };

  return <Menu.Item data-cy="button" id={props.id} onClick={clickHandler}>Login</Menu.Item>;
};

export default connect()(LoginButton);
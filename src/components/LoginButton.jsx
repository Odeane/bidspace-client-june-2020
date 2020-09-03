import React from "react";
import { connect } from "react-redux";
import { Button } from "semantic-ui-react"

const LoginButton = (props) => {
  const clickHandler = () => {
    props.dispatch({
      type: "LOGIN_FORM_VISIBILITY",
      payload: { renderLoginForm: true },
    });
  };

  return <Button data-cy="button" id={props.id} onClick={clickHandler}>Login</Button>;
};

export default connect()(LoginButton);
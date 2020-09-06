import React from "react";
import { Button, Form, Grid, Segment } from "semantic-ui-react";
import { connect } from "react-redux";
import auth from "../modules/auth";

const SingUpForm = (props) => {
  const registration = async (event) => {
    event.preventDefault();

    try {
      let response = await auth.signUp({
        email: event.target.email.value,
        password: event.target.password.value,
        passwordconfirmation: event.target.passwordconfirmation.value,
      });
      props.dispatch({
        type: "AUTHENTICATE",
        payload: {
          currentUser: { email: response.data.data.email, role: response.data.data.role },
        },
      });
    } catch (error) {
      props.dispatch({
        type: "FAIL_AUTHENTICATE",
        payload: {
          errorMessage: error.response.data.errors[0],
        },
      });
    }
  };

  return (
    <>
      <Segment placeholder>
        <Grid columns={1} relaxed="very" stackable>
          <Grid.Column>
            <Form onSubmit={registration} id="signup-form">
              <Form.Input
                id="email"
                icon="user"
                iconPosition="left"
                label={"Email"}
                placeholder={"email"}
              />
              <Form.Input
                id="password"
                icon="lock"
                iconPosition="left"
                label={"Password"}
                placeholder={"password"}
                type="password"
              />
              <Form.Input
                name='passwordconfirmation'
                id="password-confirmation"
                icon="lock"
                iconPosition="left"
                label={"Password confirmation"}
                placeholder={"password confirmation"}
                type="password"
              />
              <Button content={"Signup"} id="Signup" primary />
              <p>{props.errorMessage}</p>
            </Form>
          </Grid.Column>
        </Grid>
      </Segment>
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    errorMessage: state.errorMessage,
    
  };
};
export default connect(mapStateToProps)(SingUpForm);
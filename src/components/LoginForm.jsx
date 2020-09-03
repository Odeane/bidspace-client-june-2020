import React from "react";
import { connect } from "react-redux";
import auth from "../modules/auth";


const LoginForm = (props)=> {
  const authenticate = async (event) => {
    event.preventDefault();
    try {
      let response = await auth.signIn(
        event.target.email.value,
        event.target.password.value
      );
      props.dispatch({
        type: "AUTHENTICATE",
        payload: {
          currentUser: { email: response.data.email, role: response.data.role },
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
    <div>
   <input data-cy="email"></input>
    <input data-cy="password"></input>
    <button data-cy="button">submit</button>
    </div>
  )
}
const mapStateToProps = (state) => {
  return {
    errorMessage: state.errorMessage,
  };
};
export default connect(mapStateToProps)(LoginForm);
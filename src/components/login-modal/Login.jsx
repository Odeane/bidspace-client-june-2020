import React from 'react'
import { connect } from 'react-redux';
import { Modal, Button } from 'semantic-ui-react'
import { toggleFormRendering } from "../../state/action/authActions";
import LoginForm from './LoginForm';


function Login(props) {
  return (
    <div>
      <Modal
        open={props.renderLoginForm}
      >
        <LoginForm/>
        <Button onClick={props.toggleFormRendering}>Close</Button>
      </Modal>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    renderLoginForm: state.auth.renderLoginForm
  };
}

export default connect(mapStateToProps, { toggleFormRendering })(Login)

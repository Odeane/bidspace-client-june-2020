import React from 'react'
import { connect } from 'react-redux';
import { Modal, Button } from 'semantic-ui-react'
import { toggleFormRendering } from "../../state/action/authActions";


function Login(props) {
  console.log(props)
  return (
    <div>
      <Modal
        open={props.renderLoginForm}
      >
        Login page
        <Button onClick={props.toggleFormRendering}>Close</Button>
        <h1>end</h1>
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

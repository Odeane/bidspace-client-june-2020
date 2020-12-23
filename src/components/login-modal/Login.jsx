import React from 'react'
import { connect } from 'react-redux';
import { Modal, Icon } from 'semantic-ui-react'
import { toggleFormRendering } from "../../state/action/authActions";
import LoginForm from './LoginForm';


function Login(props) {
  return (
    <div className='modal'>
      <Modal
        size='mini'
        open={props.renderLoginForm}
      >
        <Icon color='red' name='close' onClick={props.toggleFormRendering} />
        <LoginForm />
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

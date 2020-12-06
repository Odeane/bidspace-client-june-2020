import React, { useState } from 'react'
import { connect } from 'react-redux';
import { Modal } from 'semantic-ui-react'

function Login(state) {
debugger

  return (
    <div>
      <Modal
        open={state.renderLoginForm}
      >
      Login page
      </Modal>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    renderLoginForm: state.auth.renderLoginForm
  };
}

export default connect(mapStateToProps)(Login)

import React, { Component } from 'react'
import { Button, Modal } from 'semantic-ui-react'
import NewTaskComponent from "../../../components/NewTask";

export default class NewTaskModal extends Component {
  render() {
    return (
      <Modal trigger={<button type="button" className="ui button">+ New Task</button>} basic size="large">
        <Modal.Content>
          <NewTaskComponent />
        </Modal.Content>
      </Modal>
    )
  }
}


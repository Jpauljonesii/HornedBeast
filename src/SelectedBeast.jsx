import { Component } from 'react'
import {Modal, Button} from 'react-bootstrap' 


export default class SelectedBeast extends Component {

  render() {
    return (


      <Modal show={this.props.show} onHide={this.props.handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>{this.props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{this.props.description}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.props.handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={this.props.handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      
    )
  }
}

import { Component } from 'react'
import {Modal, Button, Card} from 'react-bootstrap' 


export default class SelectedBeast extends Component {

  render() {
    return (


      <Modal show={this.props.show} onHide={this.props.handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>{this.props.beast.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Card bg="dark" text="light">
            <Card.Img variant="top" alt={this.props.title} src={this.props.beast.src}/>
            <Card.Body>
              <Card.Title>
                {this.props.beast.title}
              </Card.Title>
              <Card.Text>{this.props.beast.description}</Card.Text>
            </Card.Body>
          </Card>
          </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.props.handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    

      
    )
  }
}

import React, { Component } from 'react';
import {Modal, Button, Row, Col} from 'react-bootstrap';
//model component that tells user item is added
class MyModal extends Component {

  render() {
    const {handleClose, show}=this.props;

    return (
      <Modal size='sm' show={show} onHide={handleClose} animation={true} centered>
        <Modal.Body>
         <Row>
            <Col xs='8' className="text-center"><h5>Item added!</h5></Col>
            <Col xs="4"><Button variant="secondary" onClick={handleClose}>
              Close
            </Button></Col>
         </Row>


        </Modal.Body>
      </Modal>
    );
  }

}

export default MyModal;

import React, { FC } from 'react';
import { Button, Form, InputGroup, Modal } from 'react-bootstrap';

interface IAutorization {
    show : boolean,
    onHide : () => void
}

const Authorization:FC<IAutorization> = (props) => {
    return (
        <Modal
          {...props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
                Authorization
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
                <InputGroup className="mb-3">
                    <InputGroup.Text>First Name</InputGroup.Text>
                    <Form.Control aria-label="First name" />
                </InputGroup>
                <InputGroup className="mb-3">
                    <InputGroup.Text>Last  Name</InputGroup.Text>
                    <Form.Control aria-label="First name" />
                </InputGroup>
                <InputGroup className="mb-3">
                    <InputGroup.Text>Email</InputGroup.Text>
                    <Form.Control aria-label="First name" />
                </InputGroup>
                <InputGroup className="mb-3">
                    <InputGroup.Text>Phone Number</InputGroup.Text>
                    <Form.Control aria-label="First name" />
                </InputGroup>
                <InputGroup className="mb-3">
                    <InputGroup.Text>Your Age</InputGroup.Text>
                    <Form.Control aria-label="First name" />
                </InputGroup>
          </Modal.Body>
          <Modal.Footer>
          <Button onClick={props.onHide}>Send!</Button>
          </Modal.Footer>
        </Modal>
      );
};

export  {Authorization};
import React from 'react'
// import css from './DeleteQuizModal.module.css'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const DeleteQuizModal = ({show, setShow, title }) => {


  return (
    <Modal show={show}  size="lg" centered={true} onHide={() => setShow(false)}>
    <Modal.Header closeButton>
      <Modal.Title className='text-center'>Do you want to delete "{title}" quiz?</Modal.Title>
    </Modal.Header>
    <Modal.Body className='d-flex justify-content-around'>
      <Button variant="danger" onClick={() => setShow(false)}>Delete</Button>
      <Button variant="secondary" onClick={() => setShow(false)}>Cancel</Button>
    </Modal.Body>
  </Modal>
  )
}

export default DeleteQuizModal
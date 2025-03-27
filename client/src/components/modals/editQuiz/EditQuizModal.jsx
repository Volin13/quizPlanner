import React from 'react'
// import css from './editQuizModal.module.css'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const EditQuizModal = ({show, setShow }) => {


  return (
    <Modal show={show} fullscreen onHide={() => setShow(false)}>
    <Modal.Header closeButton>
      <Modal.Title>Modal</Modal.Title>
    </Modal.Header>
    <Modal.Body>Modal body content</Modal.Body>
  </Modal>
  )
}

export default EditQuizModal
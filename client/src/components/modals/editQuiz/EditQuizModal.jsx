import React from 'react'
// import css from './editQuizModal.module.css'

import Modal from 'react-bootstrap/Modal';
import EditQuizForm from './EditQuizForm';



const EditQuizModal = ({show, setShow }) => {


  return (
    <Modal show={show} fullscreen onHide={() => setShow(false)}>
    <Modal.Header closeButton>
      <Modal.Title>Modal</Modal.Title>
    </Modal.Header>
    <Modal.Body> 
      <EditQuizForm/>
    </Modal.Body>
  </Modal>
  )
}

export default EditQuizModal
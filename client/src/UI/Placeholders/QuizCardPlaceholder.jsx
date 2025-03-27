import React from 'react'
import Placeholder from 'react-bootstrap/Placeholder';
import css from '../../components/QuizList/QuizCatalog.module.css'

const QuizCardPlaceholder = () => {
  return (<Card className={css.quizListItem} style={{ cursor: 'progress' }}>
    <div style={{ overflow: 'hidden' }}>
    </div>
    <Card.Body className='d-flex flex-column justify-content-between align-items-center text-center'>
      <Card.Title className="d-flex justify-content-around w-100">
        {' '}
        <Placeholder xs={5} bg="light" animation="wave"/>
        <Placeholder xs={6} bg="light" />
      </Card.Title>
      <Card.Subtitle className="d-flex justify-content-around w-100">
      <Placeholder xs={8} bg="light" animation="wave"/>
        <Placeholder xs={3} bg="light" />
      </Card.Subtitle>
      <Card.Text className="d-flex justify-content-around  w-100">
      <Placeholder xs={7} bg="light" animation="wave"/>
        <Placeholder xs={4} bg="light" />
        </Card.Text>
        <Card.Text href="#" className="d-flex justify-content-around  w-100">
        <Placeholder xs={3} bg="light" animation="wave"/>
        <Placeholder xs={8} bg="light" />
        </Card.Text>
    </Card.Body>
  </Card>
  )
}

export default QuizCardPlaceholder
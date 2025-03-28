import React, { useState } from 'react'
import css from './QuizCatalog.module.css'
import CustomQuizDropdown from '../../UI/CustomDropdowns/QuizItemDropDwn'
import { useNavigate } from 'react-router-dom';
import { QUIZ_ROUTE } from '../../utils/constants';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';

import DeleteQuizModal from '../modals/DeleteQuiz/DeleteQuizModal';
import EditQuizModal from '../modals/editQuiz/editQuizModal';
import QuizCardPlaceholder from '../../UI/Placeholders/QuizCardPlaceholder';

const QuizListItem = ({id, questionsList, title, subTitle, description}) => {
  const [showEditQuizModal, setShowEditQuizModal] = useState(false);
  const [showDeleteQuizModal, setShowDeleteQuizModal] = useState(false);
  const [isHoveredCard, setIsHoveredCard] = useState(false);
  
  const loading = false
  const navigate = useNavigate();
  return (
    <li className='d-flex justify-content-center ' 
    onMouseEnter={() => setIsHoveredCard(true)} 
    onMouseLeave={() => setIsHoveredCard(false)}>
{loading ? (<QuizCardPlaceholder/>
) : (
  <Card className={css.quizListItem}>
  <Image className={`${css.quizImage} ${isHoveredCard && css.quizImageHovered}`}
  src='https://res.cloudinary.com/dwgpcl0nu/image/upload/v1743002518/quiz/pak5atxoqjazupmzmhmz.webp'
  />
  <h2 className={`${css.quizTitleStart} ${isHoveredCard && css.quizTitleHovered}`}>{title}</h2>
    <Card.Body className={`d-flex flex-column justify-content-between align-items-center text-center ${css.quizListItemBody}`}>
  <Card.Title
      className={css.quizTitle}
      onClick={() => navigate(QUIZ_ROUTE + '/' + id)}
      style={{ cursor: 'pointer', textDecoration: 'underline' }}
      >{title}</Card.Title>
      <Card.Subtitle className="mb-2 text-muted">{subTitle}</Card.Subtitle>
      <Card.Text>
{description}
      </Card.Text>
      <Card.Link href="#"><span>Questions: {questionsList.length || 0}</span></Card.Link>
      <CustomQuizDropdown modalId={id} setShowEdit={setShowEditQuizModal} setShowDelete={setShowDeleteQuizModal}/>
    
    </Card.Body>
  </Card>
)}
    {showEditQuizModal && <EditQuizModal show={showEditQuizModal} setShow={setShowEditQuizModal}/>}
    {showDeleteQuizModal && <DeleteQuizModal 
    show={showDeleteQuizModal}  
    setShow={setShowDeleteQuizModal}
    title={title}
    />}
</li>
  )
}

export default QuizListItem
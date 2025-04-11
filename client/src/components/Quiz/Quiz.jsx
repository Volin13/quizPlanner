// import React, { useState } from 'react'
import { useState } from 'react'
import quizList from '../QuizList/quizMock.json'
import css from './Quiz.module.css'
import playIcon from '../../assets/icons/play-svgrepo-com.svg'
import { useNavigate } from 'react-router-dom'
import { GAME_ROUTE } from '../../utils/constants'
import EditQuizModal from '../modals/editQuiz/editQuizModal'

const Quiz = () => {
// const [gameMode, setGameMode] = useState(false)
const quiz = quizList[0]
const {id, title, subTitle, description, questions, time} = quiz
const [showAnswers, setShowAnswers] = useState(false)
  const [showEditQuizModal, setShowEditQuizModal] = useState(false);

  const navigate = useNavigate(); 
  return (
    <>
    <div className='d-flex gap-3 justify-content-center align-items-center'>
        <div className='h-100 gap-2 d-flex flex-column justify-content-around align-items-center'>
       <h1 className={css.quizMainTitle}>{title}</h1> 
       <h2 className={css.quizMainSubTitle}>{subTitle}</h2>
       <p>{description}</p>
       <p style={{fontSize: '30px'}}>{time} min.</p>
       <div className={css.btnContainer}>
         <button className={css.showAnswersBtn}
         type='button' 
         style={{backgroundColor: !showAnswers ? '' : '#3cbc81'}}
         onClick={() => setShowAnswers(!showAnswers)}>
            {showAnswers ? 'Hide Answers' : 'Show Answers'}
            </button>
         <button className={css.showAnswersBtn}
         type='button' 
         
         onClick={() =>  setShowEditQuizModal(true)}>
            {'Edit Quiz'}
            </button>

            <button className={css.showAnswersBtn}
         type='button' 
         
         onClick={() =>     navigate(GAME_ROUTE + '/' + id)}>
            <span>Play Quiz</span>
            <img className={css.playIcon} src={playIcon} alt="play Icon" />
            </button>
       </div>
        </div>

        <img 
        className={css.quizMainImg}
     src='https://res.cloudinary.com/dwgpcl0nu/image/upload/v1743002518/quiz/pak5atxoqjazupmzmhmz.webp'
    alt="quiz image" />
    </div>
    <hr />
    <h3 className='mb-2'>Questions:</h3>
<ul className={css.questionList}>
    {questions.map((question, index) => (
        <li key={index} className={css.questionListItem}>
            <h3 className='mb-2'>{question.question}</h3>
            <ul className={css.answerList}>
                {question.answers.map((answer, index) => (
                    <li 
                    className={css.answerListItem}
                    style={{backgroundColor: question.correctAnswer === answer && showAnswers ? '#3cbc81' : '#e53935'}}
                    key={index}>{answer}
                    
                    </li>
                ))}
            </ul>
        </li>
    ))}
</ul>

    {showEditQuizModal && <EditQuizModal show={showEditQuizModal} setShow={setShowEditQuizModal}/>}

    </>
  )
}

export default Quiz
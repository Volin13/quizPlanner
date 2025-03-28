// import React, { useState } from 'react'
import quizList from '../QuizList/quizMock.json'
import css from './Quiz.module.css'

const Quiz = () => {
// const [gameMode, setGameMode] = useState(false)
const quiz = quizList[0]
const {title, subTitle, description, questions, id} = quiz
console.log(id)
  return (
    <>
    <div className='d-flex justify-content-center align-items-center'>
        <div>
       <h1 className='text-center'>{title}</h1> 
       <h2>{subTitle}</h2>
       <p>{description}</p>
        </div>

        <img 
        className={css.quizMainImg}
     src='https://res.cloudinary.com/dwgpcl0nu/image/upload/v1743002518/quiz/pak5atxoqjazupmzmhmz.webp'
    alt="quiz image" />
    </div>
<ul>
    {questions.map((question, index) => (
        <li key={index}>
            <h3>{question.question}</h3>
            <ul>
                {question.answers.map((answer, index) => (
                    <li key={index}>{answer}</li>
                ))}
            </ul>
        </li>
    ))}
</ul>
    </>
  )
}

export default Quiz
import React, { useState, useEffect } from 'react';
import GlobalTimer from '../../UI/Timers/GlobalTimer';
import QuestionTimer from '../../UI/Timers/QuestionTimer';
import quizMock from '../../components/QuizList/quizMock.json';
import css from './Game.module.css';
const Game = () => {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30);
  const [globalTime, setGlobalTime] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [showCorrect, setShowCorrect] = useState(false);
  const [answered, setAnswered] = useState(false);


  const [stopped, setStopped] = useState(false);

const quiz = quizMock[0]
const questions = quiz.questions



  useEffect(() => {
    const interval = setInterval(() => {
      setGlobalTime((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (timeLeft === 0 && !answered) {
      handleAnswer(null);
    }
    const timer = setTimeout(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);
    return () => clearTimeout(timer);
  }, [timeLeft, answered]);

  const handleAnswer = (index) => {
    setAnswered(true);
    setShowCorrect(true);
    setSelectedAnswers([...selectedAnswers, index]);
    setTimeout(() => {
      setShowCorrect(false);
      setAnswered(false);
      setTimeLeft(30);
      setQuestionIndex((prev) => prev + 1);
    }, 3000);
  };

  const current = questions[questionIndex] || null;
console.log(current)
 ;

  return (
<>
<h2 className='text-center'>{quiz.title}</h2>
<h5 className='text-center mb-3'>{quiz.subTitle}</h5>
<GlobalTimer quizTime={globalTime}
    stopTime={stopped} setStopTime={setStopped}
  maxTime={30}

    />
<div className='d-flex gap-3 justify-content-center align-items-center my-2 '>
<img 
        className={`${css.quizMainImg} colorfulBorder`}
     src='https://res.cloudinary.com/dwgpcl0nu/image/upload/v1743002518/quiz/pak5atxoqjazupmzmhmz.webp'
    alt="quiz image" />
</div>
     
{current ? (
  <div className="p-1 text-center">
   <p className={css.question}>{current.question}</p>



  <QuestionTimer questionTimeLeft={timeLeft}   stopTime={stopped} setStopTime={setStopped}
  maxTime={questions.length * 30}
  
  />

   
      <div className={css.answerOptionsList}>
        {current.answers.map((opt, idx) => (
          <button
            key={idx}
            onClick={() => !answered && handleAnswer(idx)}
            className={`${css.answerOption} ${
              showCorrect
                ? idx === current.correctIndex
                  ? 'border-green-500'
                  : idx === selectedAnswers[questionIndex]
                  ? 'border-red-500'
                  : 'border-gray-300'
                : 'border-gray-300'
            }`}
          >
            {opt}
          </button>
        ))}
      </div>
    </div>
) : (
<div>Квіз завершено! Ваші відповіді: {JSON.stringify(selectedAnswers)}</div>
)}

</>

  );
};

export default Game;
import React, { useEffect } from 'react'
import css from './timers.module.css'


const QuestionTimer = ({questionTimeLeft, stopTime, setStopTime, maxTime}) => {
      const progress = React.useRef(0)
    useEffect(() => {
        progress.current = ( questionTimeLeft / maxTime ) 
  
    }, [questionTimeLeft, maxTime])
  
    return (
        <>
        <p>{questionTimeLeft}</p>
        <div className='position-relative '>
        <div
    className={css.timerThumb}
    >

    <div className={css.timerBar} 
    style={{width: `${progress.current}%`}}>
faster faster faster faster faster faster faster faster faster 
faster faster faster faster faster faster faster faster faster 
faster faster faster faster faster faster faster faster faster
faster faster faster faster faster faster faster faster faster 
faster faster faster faster faster faster faster faster faster 
faster faster faster faster faster faster faster faster faster
faster faster faster faster faster faster faster faster faster 
faster faster faster faster faster faster faster faster faster 
faster faster faster faster faster faster faster faster faster
    
    </div>
    
    </div>
    <button type='button'
        className={`${css.timerBtn} ${!stopTime ? css.stopBtnAnimation : ''}`}
        onClick={() => {
            setStopTime(!stopTime)

        }}
        >
Stop
        </button>
    </div>


        </>
  )
}

export default QuestionTimer
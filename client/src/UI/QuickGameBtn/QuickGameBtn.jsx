import React, { useEffect, useState } from 'react'
import css from './QuickGameBtn.module.css'
import { useNavigate } from 'react-router-dom';
import { GAME_ROUTE } from '../../utils/constants';
import { getQuantity } from '../../http/quizAPI';


const QuickGameBtn = () => {

  const navigate = useNavigate();
  const [numb, setNumber] = useState(5)
  const cachedQuantity = localStorage.getItem('quizCount');
  useEffect(() => {

    if (cachedQuantity) {
      setNumber(Number(cachedQuantity));
    } else {
      const fetchQuizzesNumber = async () => {
        const res = await getQuantity(); 
        setNumber(res);
        localStorage.setItem('quizCount', res);
      };
      fetchQuizzesNumber();
    }
  }, [cachedQuantity]);
  function getRandomQuiz() {
    const randomIndex = Math.floor(Math.random() * numb);
    return randomIndex;
  }

  return (
    <button type='button' 
    className={css.quickGameBtn} 
    onClick={() => 
        navigate(GAME_ROUTE + '/' + getRandomQuiz())
      }
    >
        <span className={css.quickGameText}>Quick Game!</span>
    </button>
  )
}

export default QuickGameBtn
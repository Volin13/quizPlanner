import React, { useState } from 'react'
import css from './bars.module.css'
import { useNavigate } from 'react-router-dom';
import { AUTH_ROUTE, CATALOG_ROUTE, CREATE_QUIZ_ROUTE } from '../../utils/constants';
import MainFilter from '../../UI/mainFilter/MainFilter';
import AuthMenu from '../../UI/AuthMenu/AuthMenu';
import { Container } from 'react-bootstrap';
import QuickGameBtn from '../../UI/QuickGameBtn/QuickGameBtn';

const HeaderBar = () => {
      const navigate = useNavigate();
      const [clickedLogo, setClickedLogo] = useState(false)
      const [clickedCreate, setClickedCreate] = useState(false)
  
  
      const hendleBtnClick =(type) => {
        if (type === 'logo'){
          setClickedLogo(true)
          setTimeout(() => {
            setClickedLogo(false)
            navigate(CATALOG_ROUTE)
          }, 500)
        };
        if (type === 'create'){
          setClickedCreate(true)
          setTimeout(() => {
            setClickedCreate(false)
            navigate(CREATE_QUIZ_ROUTE)
          }, 500)
        }}


  const hendleAuthMenuClick = () => {
    navigate(AUTH_ROUTE)
  }
      return (  
    
<header >
<Container>

  <div className={css.headerBar}>
    <div className='position-relative'>
    <h2 className={`${css.headerLogo} ${clickedLogo && css.headerLogoAcrive}`}       
        onClick={() => hendleBtnClick('logo')}
      ><span>Quizzz...</span> 
      </h2> 


          <QuickGameBtn/>
    </div>

    <button type="button" 
    className={`${css.createQuizBtn} ${clickedCreate && css.headerLogoAcrive}`}
    onClick={() => hendleBtnClick('create')}
>
Create Quiz
      </button>
    <MainFilter/>
    <AuthMenu clickFn = {hendleAuthMenuClick} />
  </div>
</Container>
</header>
  )
}

export default HeaderBar
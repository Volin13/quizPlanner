import React, { useState } from 'react'
import css from './bars.module.css'
import { useNavigate } from 'react-router-dom';
import { AUTH_ROUTE, CATALOG_ROUTE } from '../../utils/constants';
import MainFilter from '../../UI/mainFilter/MainFilter';
import AuthMenu from '../../UI/AuthMenu/AuthMenu';
import { Container } from 'react-bootstrap';

const HeaderBar = () => {
      const navigate = useNavigate();
      const [clickedLogo, setClickedLogo] = useState(false)
  const hendleLogoClick =() => {
    setClickedLogo(true)
    setTimeout(() => {
      setClickedLogo(false)
      navigate(CATALOG_ROUTE)
    }, 1000)
  }
  const hendleAuthMenuClick = () => {
    navigate(AUTH_ROUTE)
  }
      return (  
    
<header >
<Container>

  <div className={css.headerBar}>
      <h2 className={`${css.headerLogo} ${clickedLogo && css.headerLogoAcrive}`}       
        onClick={() => hendleLogoClick()}
      ><span>Quizzz...</span> 
      </h2>
    <MainFilter/>
    <AuthMenu clickFn = {hendleAuthMenuClick} />
  </div>
</Container>
</header>
  )
}

export default HeaderBar
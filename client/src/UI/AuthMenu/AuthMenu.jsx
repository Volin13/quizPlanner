import React from 'react'
import css from './AuthMenu.module.css'
import LogInIcon from '../../assets/icons/log-in-outline-svgrepo-com.svg'
import UserIcon from '../../assets/icons/user-rounded-svgrepo-com.svg';
import TooltipWrapper from '../TooltipWrapper/TooltipWrapper';
const AuthMenu = ({clickFn}) => {
    let isAuth = true;
  return (
    <>
    <TooltipWrapper tooltipText={isAuth ?  'Profile' : 'Log In'}>
    <button type='button' onClick={clickFn} className={css.authMenu}>
        <img src={!isAuth ? LogInIcon : UserIcon} alt={isAuth ?  "User" : "LogIn"} />
    </button>
    </TooltipWrapper>

    </> 
)
}

export default AuthMenu
import React from 'react'
import css from './AuthMenu.module.css'
import LogInIcon from '../../assets/icons/log-in-outline-svgrepo-com.svg'
import UserIcon from '../../assets/icons/user-rounded-svgrepo-com.svg';
const AuthMenu = ({clickFn}) => {
    let isAuth = false;
  return (
    <>
    <button type='button' onClick={clickFn} className={css.authMenu}>
        <img src={!isAuth ? LogInIcon : UserIcon} alt={isAuth ? "LogIn" : "User"} />
    </button>
    </> 
)
}

export default AuthMenu
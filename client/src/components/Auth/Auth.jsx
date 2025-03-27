import React, { useState } from 'react';

import css from './Auth.module.css';
import AuthForm from './AuthForm';

const Auth = () => {
  const [switched, setSwitched] = useState(false);
console.log(switched)
  return (
    <>
    <div className={`${css.mainAuthContainer} w-100 d-flex` }>
    <div className={` ${css.formContainer}`}>
    <div className={`${css.colloredWrapper}
     ${css.switchToRight}
    ${switched && css.switchToCenter}`}>
    <div className={`${css.signUpText}
    ${css.switchToleft}
    ${switched && css.switchToCenter}
    `}>
        <h3>Welcome Back!</h3>
        <p className='w-75'>To keep connected with us please login with your personal info</p>
        <button type='button' 
    onClick={() => setSwitched(!switched)} 
    className={css.switchBtn}>
Sign in
    </button>
        </div>
    </div>
        <AuthForm
        heading='Sign In'
        fields={['email', 'password']}
        submitLabel='Sign In'
        switched={switched}
        regularClass={css.signInForm}
        switchedClass = {css.switchToRight}

        />
    </div>
    <div className={`${css.formContainer}`}>
    <div className={`${css.colloredWrapper}
   
    ${switched && css.switchToleft}`}>
    <div 
    className={`${css.signUpText}
    ${switched && css.switchToRight}
    `}>
        <h3>Hello, Friend!</h3>
        <p className='w-75'>Enter your personal details and start journey with us</p>
        <button type='button' 
    onClick={() => setSwitched(!switched)} 
    className={css.switchBtn}>
Sign up
    </button>
        </div>
    </div>
        <AuthForm
        heading='Registration'
        fields={['email', 'password']}
        submitLabel='Register'
        switched={switched}
        regularClass={css.sighUpForm}
        switchedClass = {css.switchToCenter}
        />
        </div>
        </div>


    </>
  );
}

export default Auth;

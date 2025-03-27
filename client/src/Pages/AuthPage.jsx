import React from 'react';
import { Container } from 'react-bootstrap';
import Auth from '../components/Auth/Auth';

const AuthPage = () => {
  return (
    <Container className='display-flex justify-content-center align-items-center'>
      <Auth />
    </Container>
  );
};

export default AuthPage;
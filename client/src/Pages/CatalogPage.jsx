import React from 'react';
import QuizCatalog from '../components/QuizList/QuizCatalog';
import { Container } from 'react-bootstrap';

const QuizCatalogPage = () => {
  return (
    <Container>
      <QuizCatalog />
    </Container>
  );
};

export default QuizCatalogPage;
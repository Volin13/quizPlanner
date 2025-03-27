import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NotFoundPage from '../Pages/NotFoundPage';
import { publicRoutes } from '../../routes';

const AppRouter = () => {
  return (
    <Routes>
        
      {publicRoutes.map(({ path, 
      // eslint-disable-next-line no-unused-vars
      Component }) => (
        <Route key={path} path={path} element={<Component />} />
      ))}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default AppRouter;

import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import NotFoundPage from '../Pages/NotFoundPage';
import { authRoutes, publicRoutes } from '../../routes';

const AppRouter = () => {

  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    setIsAuth(true);
 
  }, []);

  return (
    <Routes>
        {isAuth &&
      authRoutes.map(({ path, 
        // eslint-disable-next-line no-unused-vars
        Component }) => (
          <Route key={path} path={path} element={<Component />} />
        ))}
        {!isAuth &&
      publicRoutes.map(({ path, 
        // eslint-disable-next-line no-unused-vars
        Component }) => (
          <Route key={path} path={path} element={<Component />} />
        ))}


      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default AppRouter;

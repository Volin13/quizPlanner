import { lazy } from 'react';
import { CATALOG_ROUTE,AUTH_ROUTE, NOT_FOUND_ROUTE, QUIZ_ROUTE } from './src/utils/constants.js';

const AuthPage = lazy(() => import('./src/Pages/AuthPage.jsx'));
const QuizItemPage = lazy(() => import('./src/Pages/QuizPage.jsx'));
const QuizCatalogPage = lazy(() => import('./src/Pages/CatalogPage'));
const NotFoundPage = lazy(() => import('./src/Pages/NotFoundPage.jsx'));

export const publicRoutes = [
  {
    path: AUTH_ROUTE,
    Component: AuthPage,
  },
  {
    path: CATALOG_ROUTE,
    Component: QuizCatalogPage,
  },
  {
    path: QUIZ_ROUTE + '/:id',
    Component: QuizItemPage,
  },

  {
    path: NOT_FOUND_ROUTE,
    Component: NotFoundPage,
  },
];
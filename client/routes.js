import { lazy } from 'react';
import { CATALOG_ROUTE,AUTH_ROUTE, NOT_FOUND_ROUTE, QUIZ_ROUTE, GAME_ROUTE, CREATE_QUIZ_ROUTE } from './src/utils/constants.js';

const AuthPage = lazy(() => import('./src/Pages/AuthPage.jsx'));
const QuizItemPage = lazy(() => import('./src/Pages/QuizPage.jsx'));
const GameItemPage = lazy(() => import('./src/Pages/GamePage.jsx'));
const QuizCatalogPage = lazy(() => import('./src/Pages/CatalogPage.jsx'));
const CreateQuizPage = lazy(() => import('./src/Pages/CreateQuizPage.jsx'));
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
    path: CREATE_QUIZ_ROUTE,
    Component: CreateQuizPage,
  },
  {
    path: QUIZ_ROUTE + '/:id',
    Component: QuizItemPage,
  },
  {
    path: GAME_ROUTE + '/:id',
    Component: GameItemPage,
  },

  {
    path: NOT_FOUND_ROUTE,
    Component: NotFoundPage,
  },
];
export const authRoutes = [
  {
    path: AUTH_ROUTE,
    Component: AuthPage,
  },
  {
    path: CATALOG_ROUTE,
    Component: QuizCatalogPage,
  },
  {
    path: CREATE_QUIZ_ROUTE,
    Component: CreateQuizPage,
  },
  {
    path: QUIZ_ROUTE + '/:id',
    Component: QuizItemPage,
  },
  {
    path: GAME_ROUTE + '/:id',
    Component: GameItemPage,
  },

  {
    path: NOT_FOUND_ROUTE,
    Component: NotFoundPage,
  },
];
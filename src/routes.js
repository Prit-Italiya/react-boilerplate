import { lazy } from 'react';

const Home = lazy(() => import('./pages/Home'));
const Login = lazy(() => import('./pages/Login'));

export const routes = [
  //Public routes
  { path: '/login', component: Login, isPrivate: false },

  //Private routes
  { path: '/', component: Home, isPrivate: true },
  { path: '/home', component: Home, isPrivate: true },
];

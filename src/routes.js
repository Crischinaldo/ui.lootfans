import React from 'react';

const LandingPage = React.lazy(() => import('./views/layout/LandingPage'));
const ProfilePage = React.lazy(() => import('./views/layout/ProfilePage'));
const RegisterPage = React.lazy(() => import('./views/layout/RegisterPage'));
const Secured = React.lazy(() => import('./views/layout/Secured'));


const routes = [
  { path: '/', exact: true, name: 'Home', component: LandingPage},
  { path: '/account', name: 'Profile', component: ProfilePage },
  { path: '/register', name: 'Register', component: RegisterPage },
  { path: '/secured', name: 'Secured', component: Secured },
];

export default routes;

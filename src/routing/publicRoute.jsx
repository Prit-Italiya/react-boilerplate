import { useContext } from 'react';

import { Navigate } from 'react-router-dom';

import { UserContext } from '../context/userContext';

const PublicRoute = ({ children }) => {
  const { user } = useContext(UserContext);
  return !user ? children : <Navigate to="/" replace />;
};

export default PublicRoute;

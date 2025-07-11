import React from 'react';
import { Navigate } from 'react-router-dom';

const PublicRoute = ({ children }) => {
  const token = localStorage.getItem('token');

  // If token exists, redirect to homepage
  if (token) return <Navigate to="/" replace />;

  return children;
};

export default PublicRoute;

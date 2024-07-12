import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom';

const PrivateRoute = ({ isLoggedIn, children }) => {
  const navigate = useNavigate
  return isLoggedIn ? children : (navigate("/login"));
};

export default PrivateRoute;



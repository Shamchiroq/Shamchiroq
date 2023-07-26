import React from 'react'
import { Navigate } from 'react-router-dom';

export default function ProtectedRoutes({element, test}) {
  return test ? element : <Navigate to="/test"/>;
}

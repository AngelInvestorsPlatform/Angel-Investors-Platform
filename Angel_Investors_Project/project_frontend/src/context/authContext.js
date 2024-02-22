// Context.js
//This file is used to manage globel user auth data between files

import React, { createContext, useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';

// Create the context
const AuthContext = createContext();

// Create a provider component
export const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRole]= useState(null);
  const [sessionId, setSessionId] = useState(null);
  const [csrfToken, setCsrfToken] = useState(null);


   // Load authentication state from localStorage on component mount
   useEffect(() => {
    const storedUserData = localStorage.getItem('userData');
    const storedIsLoggedIn = localStorage.getItem('isLoggedIn');
    const storedUserRole = localStorage.getItem('userRole');
    const sessionId = localStorage.getItem('sessionId');
    const csrfToken = localStorage.getItem('csrfToken');


    if (storedUserData && storedIsLoggedIn  && storedUserRole) {
      setUserData(JSON.parse(storedUserData));
      setIsLoggedIn(JSON.parse(storedIsLoggedIn));
      setUserRole(JSON.parse(storedUserRole));
    }


  }, []);

  // Update localStorage when userData or isLoggedIn changes
  useEffect(() => {
    localStorage.setItem('userData', JSON.stringify(userData));
    localStorage.setItem('isLoggedIn', JSON.stringify(isLoggedIn));
    localStorage.setItem('userRole', JSON.stringify(userRole));
    localStorage.setItem('sessionId', sessionId);
    localStorage.setItem('csrfToken', csrfToken)
    
    
  }, [userData, isLoggedIn, userRole, sessionId, csrfToken]);


  return (
    <AuthContext.Provider value={{ userData, setUserData, isLoggedIn, setIsLoggedIn , userRole, setUserRole, sessionId, setSessionId, csrfToken }}>
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

// Custom hook to consume the context
export const useAuthUser = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuthUser must be used within a AuthProvider');
  }
  return context;
};

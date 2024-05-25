// auth_context.js

import React, { createContext, useContext, useEffect, useState } from 'react';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [dataLogin, setDataLogin] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Load authentication status and data from local storage on component mount
    const token = localStorage.getItem('token');
    const userData = JSON.parse(localStorage.getItem('userData'));

    if (token && userData) {
      setDataLogin(userData);
      setIsAuthenticated(true);
    }
  }, []);

  const login = (userData) => {
    // Save user data and authentication status to local storage
    localStorage.setItem('userData', JSON.stringify(userData));

    setDataLogin(userData);
    setIsAuthenticated(true);
  };

  const loginGoogle = (userData) => {
    // Save user data and authentication status to local storage
    localStorage.setItem('userData', JSON.stringify(userData));

    setDataLogin(userData);
    setIsAuthenticated(true);
  };

  const logout = () => {
    // Clear user data and authentication status from local storage
    localStorage.removeItem('token');
    localStorage.removeItem('userData');
    localStorage.removeItem('id');

    setDataLogin(null);
    setIsAuthenticated(false);
  };

  return <AuthContext.Provider value={{ dataLogin, isAuthenticated, login, loginGoogle, logout }}>{children}</AuthContext.Provider>;
};

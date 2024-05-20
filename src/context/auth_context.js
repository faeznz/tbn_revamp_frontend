import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [dataLogin, setDataLogin] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = (userData) => {
    setDataLogin(userData);
    setIsAuthenticated(true);
  };
  
  const loginGoogle = (userData) => {
    setDataLogin(userData);
    setIsAuthenticated(true);
  };

  const logout = () => {
    setDataLogin(null);
    localStorage.removeItem('token');
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ dataLogin, isAuthenticated, login, loginGoogle, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

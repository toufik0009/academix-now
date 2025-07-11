import React, { createContext, useContext, useState, useEffect } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [theme, setTheme] = useState('light');
  const [isAuthorized, setIsAuthorized] = useState(false);

  // Check if token exists on initial load
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsAuthorized(true);
      // Optionally fetch user info here (e.g., /me route)
    }
  }, []);

  const login = (userData) => {
    setUser(userData.user);
    console.log(userData.user)
    localStorage.setItem('token', userData.token);
    localStorage.setItem('user', userData.user);
    setIsAuthorized(true);
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setIsAuthorized(false);
  };

  const toggleTheme = () =>
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));

  return (
    <AppContext.Provider
      value={{
        user,
        theme,
        isAuthorized,
        login,
        logout,
        toggleTheme,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);

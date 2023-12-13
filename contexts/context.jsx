"use client";
import React, { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [showUsersList, setShowUsersList] = useState(true);

  const toggleUsersList = () => {
    setShowUsersList((prev) => !prev);
  };

  return (
    <AppContext.Provider value={{ showUsersList, toggleUsersList }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};

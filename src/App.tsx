import React, { useState, createContext, useMemo, useCallback } from 'react';
import { Header } from 'components/Header/Header';

import styles from './App.module.css';
import { ScreenHandler } from 'components/ScreenHandler/ScreenHandler';

export interface ICustomContext {
  activeScreen?: string;
  isLoggedIn?: boolean;
  logout?: () => void;
  login?: (email: string, password: string) => void;
  setActiveScreen?: (screen: string) => void;
}

export const CustomContext = createContext({});

export const App: React.FC = () => {
  const [activeScreen, setActiveScreen] = useState('login');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = useCallback((email: string, password: string) => {
    const hasEmail = email.length;
    const hasPassword = password.length;

    if (!hasEmail || !hasPassword) {
      return alert('Введите логин и пароль!');
    }

    setIsLoggedIn(true);
  }, []);

  const customContext: ICustomContext = useMemo(() => {
    return {
      activeScreen,
      isLoggedIn,
      logout: () => setIsLoggedIn(false),
      login: handleLogin,
      setActiveScreen,
    };
  }, [activeScreen, isLoggedIn, handleLogin]);

  return (
    <CustomContext.Provider value={customContext}>
      <Header navigateTo={setActiveScreen} />
      <div className={styles.App}>
        <ScreenHandler />
      </div>
    </CustomContext.Provider>
  );
};

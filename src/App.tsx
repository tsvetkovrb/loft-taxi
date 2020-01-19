import React, { useState } from 'react';
import { Header } from 'components/Header/Header';
import { SCREENS } from 'utils/screens';

import './App.scss';

export const App: React.FC = () => {
  const [activeScreen, setActiveScreen] = useState('login');

  const getScreen = SCREENS[activeScreen];

  return (
    <>
      <Header navigateTo={setActiveScreen} />
      <div className="App">{getScreen}</div>
    </>
  );
};

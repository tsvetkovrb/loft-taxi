import React, { useState } from 'react';
import { Header } from 'components/Header/Header';
import { SCREENS } from 'utils/screens';

import './App.scss';

export const App: React.FC = () => {
  const [activeScreen, setActiveScreen] = useState('login');

  const CurrentScreen = SCREENS[activeScreen];

  return (
    <>
      <Header navigateTo={setActiveScreen} />
      <div className="App">
        <CurrentScreen setActiveScreen={setActiveScreen} />
      </div>
    </>
  );
};

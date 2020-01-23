import React, { useState } from 'react';
import './SignupPage.scss';
import { ROUTES } from 'utils/routes';

interface IProps {
  setActiveScreen: (activeScreen: string) => void;
}

export const SignupPage: React.FC<IProps> = ({ setActiveScreen }) => {
  const [userData, setUserData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    password: '',
  });

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;

    setUserData({ ...userData, [name]: value });
  };

  const handleSignup = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setActiveScreen(ROUTES.map);
  };

  return (
    <section className="signup-page">
      <h1>Signup page</h1>

      <form onSubmit={handleSignup}>
        <input
          type="text"
          name="email"
          value={userData.email}
          onChange={handleChange}
        />
        <input
          type="text"
          name="firstName"
          value={userData.firstName}
          onChange={handleChange}
        />
        <input
          type="text"
          name="lastName"
          value={userData.lastName}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          value={userData.password}
          onChange={handleChange}
        />
        <button type="submit">Зарегистрироваться</button>
      </form>
    </section>
  );
};

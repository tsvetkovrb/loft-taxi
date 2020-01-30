import React, { useState, useContext } from 'react';
import './SignupPage.scss';
import { ROUTES } from 'utils/routes';
import { CustomContext, ICustomContext } from 'App';

export const SignupPage: React.FC = () => {
  const [userData, setUserData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    password: '',
  });

  const { setActiveScreen }: ICustomContext = useContext(CustomContext);

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;

    setUserData({ ...userData, [name]: value });
  };

  const handleSignup = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (setActiveScreen) {
      setActiveScreen(ROUTES.map);
    }
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

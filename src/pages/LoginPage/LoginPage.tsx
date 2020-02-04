import React, { useState, useContext } from 'react';
import { CustomContext, ICustomContext } from 'App';
import './LoginPage.scss';

export const LoginPage: React.FC = () => {
  const [userData, setUserData] = useState({ username: '', password: '' });
  const { login }: ICustomContext = useContext(CustomContext);

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;

    setUserData({ ...userData, [name]: value });
  };

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (login) {
      login(userData.username, userData.password);
    }
  };

  return (
    <section className="login-page" data-testid="login-page">
      <h1>Login page</h1>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          name="username"
          value={userData.username}
          onChange={handleChange}
          placeholder="Имя"
        />
        <input
          type="password"
          name="password"
          placeholder="Пароль"
          value={userData.password}
          onChange={handleChange}
        />

        <button data-testid="login-page-submit" type="submit">
          Войти
        </button>
      </form>
    </section>
  );
};

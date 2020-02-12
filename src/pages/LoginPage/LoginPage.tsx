import React, { useState, ChangeEvent } from 'react';
import { Link } from 'react-router-dom';
import { TextField, Button, Typography, makeStyles } from '@material-ui/core';

import { Form } from 'components/Form';
import { WithLogo } from 'components/layout/WithLogo';
import { WithBackground } from 'components/layout/WithBackground';

const useStyles = makeStyles({
  form: {
    width: '400px',
    display: 'flex',
    flexDirection: 'column',
  },
  link: {
    textDecoration: 'none',
    color: '#3390ee',
  },
  paragraph: {
    color: '#505050',
    marginBottom: '40px',
  },
  input: {
    marginBottom: '40px',
  },
  loginButton: {
    width: '161px',
    height: '40px',
    marginLeft: 'auto',
  },
  progress: {
    height: '20px',
    width: '20px',
  },
});

interface ILoginPageProps {
  isFetching: boolean;
  handleLogin: (email: string, password: string) => void;
}

export const LoginPage: React.FC<ILoginPageProps> = props => {
  const [userData, setUserData] = useState({ username: '', password: '' });
  const styles = useStyles();

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;

    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = () => {
    props.handleLogin(userData.username, userData.password);
  };

  return (
    <section data-testid="login-page">
      <WithBackground centered={true}>
        <WithLogo>
          <Form className={styles.form} title="Войти" onSubmit={handleSubmit}>
            <Typography className={styles.paragraph}>
              Новый пользователь?{' '}
              <Link to="/signup" className={styles.link}>
                Зарегистрируйтесь
              </Link>
            </Typography>
            <TextField
              className={styles.input}
              type="text"
              name="username"
              value={userData.username}
              label="Имя"
              placeholder="Имя"
              onChange={handleInputChange}
            />
            <TextField
              className={styles.input}
              type="password"
              name="password"
              label="Пароль"
              placeholder="Пароль"
              value={userData.password}
              onChange={handleInputChange}
            />
            <Button
              className={styles.loginButton}
              variant="contained"
              color="primary"
              data-testid="login-page-submit"
              type="submit"
            >
              {props.isFetching ? 'В процессе...' : 'Войти'}
            </Button>
          </Form>
        </WithLogo>
      </WithBackground>
    </section>
  );
};

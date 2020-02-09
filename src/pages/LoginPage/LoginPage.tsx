import React, { useState, ChangeEvent } from 'react';
import { Link } from 'react-router-dom';
import { TextField, Button, Typography, makeStyles } from '@material-ui/core';

import { Form } from 'components/Form/Form';
import { WithLogo } from 'components/layout/WithLogo/WithLogo';
import { WithBackground } from 'components/layout/WithBackground/WithBackground';
import { loginAction } from 'store/actions/authActinos';
import { useDispatch } from 'react-redux';
import { useSelector } from 'store';

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

export const LoginPage: React.FC = () => {
  const [userData, setUserData] = useState({ username: '', password: '' });
  const dispatch = useDispatch();
  const isFetching = useSelector(state => state.authReducer.isFetching);

  const styles = useStyles();

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const name = e.currentTarget.name;
    const value = e.currentTarget.value;

    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = () => {
    dispatch(loginAction(userData.username, userData.password));
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
              onChange={handleInputChange}
            />
            <TextField
              className={styles.input}
              type="password"
              name="password"
              label="Пароль"
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
              {isFetching ? 'В процессе...' : 'Войти'}
            </Button>
          </Form>
        </WithLogo>
      </WithBackground>
    </section>
  );
};

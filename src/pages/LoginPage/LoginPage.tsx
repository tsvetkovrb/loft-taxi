import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { TextField, Button, Typography, makeStyles } from '@material-ui/core';

import { Form } from 'components/Form/Form';
import { WithLogo } from 'components/layout/WithLogo/WithLogo';
import { WithBackground } from 'components/layout/WithBackground/WithBackground';

/**
 * Styles
 */

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
});

/**
 * View
 */

export const LoginPage: React.FC = () => {
  const [userData] = useState({ username: '', password: '' });
  const styles = useStyles();

  return (
    <section data-testid="login-page">
      <WithBackground centered={true}>
        <WithLogo>
          <Form className={styles.form} title="Войти" onSubmit={() => {}}>
            <Typography className={styles.paragraph}>
              Новый пользователь?{' '}
              <Link to="/signup" className={styles.link}>
                Зарегистрируйтесь
              </Link>
            </Typography>
            <TextField className={styles.input} type="text" name="username" value={userData.username} label="Имя" />
            <TextField
              className={styles.input}
              type="password"
              name="password"
              label="Пароль"
              value={userData.password}
            />
            <Button
              className={styles.loginButton}
              variant="contained"
              color="primary"
              data-testid="login-page-submit"
              type="submit"
            >
              Войти
            </Button>
          </Form>
        </WithLogo>
      </WithBackground>
    </section>
  );
};

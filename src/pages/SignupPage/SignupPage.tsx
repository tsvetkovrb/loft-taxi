import React, { useState, ChangeEvent } from 'react';
import { Link } from 'react-router-dom';
import { TextField, Button, makeStyles, Typography } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import cn from 'classnames';

import { WithBackground } from 'components/layout/WithBackground';
import { Form } from 'components/Form';
import { WithLogo } from 'components/layout/WithLogo';

import { signupAction } from 'store/actions/signupActions';
import { useSelector } from 'store';

const useStyles = makeStyles({
  inputsWrapper: {
    display: 'flex',
  },
  nameInput: {
    marginRight: '15px',
  },
  margin: {
    marginBottom: '40px',
  },
  paragraph: {
    color: '#505050',
    marginBottom: '40px',
  },
  link: {
    textDecoration: 'none',
    color: '#3390ee',
  },
});

export const SignupPage = () => {
  const [userData, setUserData] = useState({
    email: '',
    name: '',
    surname: '',
    password: '',
  });
  const dispatch = useDispatch();
  const isSending = useSelector(state => state.signupReducer.isSending);

  const styles = useStyles();

  const fieldsWrapperStyles = cn({
    [styles.inputsWrapper]: true,
    [styles.margin]: true,
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;

    setUserData({ ...userData, [name]: value });
  };

  const handleSignup = () => {
    dispatch(signupAction(userData));
  };

  return (
    <section data-testid="signup-page">
      <WithBackground centered={true}>
        <WithLogo>
          <Form data-testid="signup-page-form" title="Регистрация" onSubmit={handleSignup}>
            <Typography className={styles.paragraph}>
              Уже зарегистрирован?&nbsp;
              <Link to="/login" className={styles.link}>
                Войти
              </Link>
            </Typography>
            <TextField
              onChange={handleInputChange}
              label="Адрес электронной почты"
              type="text"
              name="email"
              value={userData.email}
              className={styles.margin}
            />
            <div className={fieldsWrapperStyles}>
              <TextField
                onChange={handleInputChange}
                label="Имя"
                type="text"
                name="name"
                value={userData.name}
                className={styles.nameInput}
              />
              <TextField
                onChange={handleInputChange}
                label="Фамилия"
                type="text"
                name="surname"
                value={userData.surname}
              />
            </div>
            <TextField
              onChange={handleInputChange}
              label="Пароль"
              type="password"
              name="password"
              value={userData.password}
              className={styles.margin}
            />
            <Button type="submit" variant="contained" color="primary">
              {isSending ? 'В процессе...' : 'Зарегистрироваться'}
            </Button>
          </Form>
        </WithLogo>
      </WithBackground>
    </section>
  );
};

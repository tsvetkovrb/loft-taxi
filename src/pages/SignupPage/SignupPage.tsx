import React, { useState, ChangeEvent } from 'react';
import { Link } from 'react-router-dom';
import { TextField, Button, makeStyles, Typography } from '@material-ui/core';
import cn from 'classnames';

import { WithBackground } from 'components/layout/WithBackground';
import { Form } from 'components/Form';
import { WithLogo } from 'components/layout/WithLogo';

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

export type TUserData = {
  email: string;
  name: string;
  surname: string;
  password: string;
};

interface ISignupPageProps {
  handleSignup: (data: TUserData) => void;
  isSending: boolean;
}

export const SignupPage: React.FC<ISignupPageProps> = props => {
  const [userData, setUserData] = useState({
    email: '',
    name: '',
    surname: '',
    password: '',
  });

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
    props.handleSignup(userData);
  };

  return (
    <section data-testid="signup-page">
      <WithBackground centered={true}>
        <WithLogo>
          <Form title="Регистрация" onSubmit={handleSignup}>
            <Typography className={styles.paragraph}>
              Уже зарегистрирован?&nbsp;
              <Link to="/login" className={styles.link}>
                Войти
              </Link>
            </Typography>
            <TextField
              onChange={handleInputChange}
              label="Адрес электронной почты"
              placeholder="Адрес электронной почты"
              type="text"
              name="email"
              value={userData.email}
              className={styles.margin}
            />
            <div className={fieldsWrapperStyles}>
              <TextField
                onChange={handleInputChange}
                label="Имя"
                placeholder="Имя"
                type="text"
                name="name"
                value={userData.name}
                className={styles.nameInput}
              />
              <TextField
                onChange={handleInputChange}
                label="Фамилия"
                placeholder="Фамилия"
                type="text"
                name="surname"
                value={userData.surname}
              />
            </div>
            <TextField
              onChange={handleInputChange}
              label="Пароль"
              placeholder="Пароль"
              type="password"
              name="password"
              value={userData.password}
              className={styles.margin}
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              data-testid="signup-page-submit"
            >
              {props.isSending ? 'В процессе...' : 'Зарегистрироваться'}
            </Button>
          </Form>
        </WithLogo>
      </WithBackground>
    </section>
  );
};

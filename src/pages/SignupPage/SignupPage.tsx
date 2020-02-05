import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { TextField, Button, makeStyles, Typography } from '@material-ui/core';
import cn from 'classnames';

import { WithBackground } from 'components/layout/WithBackground/WithBackground';
import { Form } from 'components/Form/Form';
import { WithLogo } from 'components/layout/WithLogo/WithLogo';

const useStyles = makeStyles({
  inputsWrapper: {
    display: 'flex',
  },
  firstNameInput: {
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

export const SignupPage: React.FC = () => {
  const [userData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    password: '',
  });

  const styles = useStyles();

  const fieldsWrapperStyles = cn({
    [styles.inputsWrapper]: true,
    [styles.margin]: true,
  });

  return (
    <section data-testid="signup-page">
      <WithBackground centered={true}>
        <WithLogo>
          <Form data-testid="signup-page-form" title="Регистрация" onSubmit={() => {}}>
            <Typography className={styles.paragraph}>
              Уже зарегистрирован?&nbsp;
              <Link to="/login" className={styles.link}>
                Войти
              </Link>
            </Typography>
            <TextField
              label="Адрес электронной почты"
              type="text"
              name="email"
              value={userData.email}
              className={styles.margin}
            />
            <div className={fieldsWrapperStyles}>
              <TextField
                label="Имя"
                type="text"
                name="firstName"
                value={userData.firstName}
                className={styles.firstNameInput}
              />
              <TextField label="Фамилия" type="text" name="lastName" value={userData.lastName} />
            </div>
            <TextField
              label="Пароль"
              type="password"
              name="password"
              value={userData.password}
              className={styles.margin}
            />
            <Button type="submit" variant="contained" color="primary">
              Зарегистрироваться
            </Button>
          </Form>
        </WithLogo>
      </WithBackground>
    </section>
  );
};

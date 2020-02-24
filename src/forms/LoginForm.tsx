import React from 'react';
import { Form } from 'components/Form';
import { Typography, makeStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useForm, Controller } from 'react-hook-form';
import { TLoginFormPayload } from 'utils/types';
import { CustomInput, CustomButton } from 'components/shared';
import { loginValidationSchema } from 'utils/validation';

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

interface ILoginFormProps {
  isFetching: boolean;
  handleLogin: (payload: TLoginFormPayload) => void;
}

export const LoginForm: React.FC<ILoginFormProps> = props => {
  const { handleSubmit, errors, control } = useForm({
    validationSchema: loginValidationSchema,
  });
  const styles = useStyles();

  const onSubmit = (payload: any) => {
    props.handleLogin(payload);
  };

  return (
    <Form
      className={styles.form}
      title="Войти"
      onSubmit={handleSubmit(onSubmit)}
      data-testid="login-form"
    >
      <Typography className={styles.paragraph}>
        Новый пользователь?{' '}
        <Link to="/signup" className={styles.link}>
          Зарегистрируйтесь
        </Link>
      </Typography>
      <Controller
        as={<CustomInput errors={errors} />}
        type="text"
        name="email"
        label="Адрес электронной почты"
        placeholder="Адрес электронной почты"
        control={control}
        className={styles.input}
        defaultValue=""
      />
      <Controller
        as={<CustomInput errors={errors} />}
        className={styles.input}
        defaultValue=""
        type="password"
        name="password"
        label="Пароль"
        placeholder="Пароль"
        control={control}
      />
      <CustomButton
        className={styles.loginButton}
        variant="contained"
        color="primary"
        data-testid="login-page-submit"
        type="submit"
        title="Войти"
        isLoading={props.isFetching}
      />
    </Form>
  );
};

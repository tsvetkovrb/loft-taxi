import React from 'react';
import cn from 'classnames';
import { Link } from 'react-router-dom';
import { useForm, Controller } from 'react-hook-form';
import { Typography, makeStyles } from '@material-ui/core';

import { Form } from 'components/Form';
import { CustomInput, CustomButton } from 'components/shared';
import { signupValidationSchema } from 'utils/validation';
import { TSignupFormPayload } from 'utils/types';

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

interface ISignupFormProps {
  handleSignup: (data: TSignupFormPayload) => void;
  isSending: boolean;
}

export const SignupForm: React.FC<ISignupFormProps> = props => {
  const { handleSubmit, errors, control } = useForm({
    validationSchema: signupValidationSchema,
  });

  const styles = useStyles();

  const onSubmit = (payload: any) => {
    props.handleSignup(payload);
  };

  const fieldsWrapperStyles = cn({
    [styles.inputsWrapper]: true,
    [styles.margin]: true,
  });

  return (
    <Form title="Регистрация" onSubmit={handleSubmit(onSubmit)}>
      <Typography className={styles.paragraph}>
        Уже зарегистрирован?&nbsp;
        <Link to="/login" className={styles.link}>
          Войти
        </Link>
      </Typography>
      <Controller
        defaultValue=""
        as={<CustomInput />}
        control={control}
        label="Адрес электронной почты"
        placeholder="Адрес электронной почты"
        type="text"
        name="email"
        errors={errors}
        className={styles.margin}
      />
      <div className={fieldsWrapperStyles}>
        <Controller
          defaultValue=""
          as={<CustomInput />}
          control={control}
          label="Имя"
          placeholder="Имя"
          type="text"
          name="name"
          errors={errors}
          className={styles.nameInput}
        />
        <Controller
          defaultValue=""
          as={<CustomInput />}
          control={control}
          label="Фамилия"
          placeholder="Фамилия"
          type="text"
          name="surname"
          errors={errors}
        />
      </div>
      <Controller
        defaultValue=""
        as={<CustomInput />}
        control={control}
        label="Пароль"
        placeholder="Пароль"
        type="password"
        name="password"
        errors={errors}
        className={styles.margin}
      />
      <CustomButton
        title="Зарегистрироваться"
        isLoading={props.isSending}
        type="submit"
        variant="contained"
        color="primary"
        data-testid="signup-page-submit"
      />
    </Form>
  );
};

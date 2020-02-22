import React from 'react';
import { WithLogo } from 'components/layout/WithLogo';
import { WithBackground } from 'components/layout/WithBackground';
import { LoginFormContainer as LoginForm } from 'containers/LoginFormContainer';

export const LoginPage = () => {
  return (
    <section data-testid="login-page">
      <WithBackground centered={true}>
        <WithLogo>
          <LoginForm />
        </WithLogo>
      </WithBackground>
    </section>
  );
};

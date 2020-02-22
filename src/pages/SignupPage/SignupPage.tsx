import React from 'react';
import { WithBackground } from 'components/layout/WithBackground';
import { SignupFormContainer as SignupForm } from 'containers/SignupFormContainer';
import { WithLogo } from 'components/layout/WithLogo';
import { TSignupFormPayload } from 'utils/types';

interface ISignupPageProps {
  handleSignup: (data: TSignupFormPayload) => void;
  isSending: boolean;
}

export const SignupPage: React.FC<ISignupPageProps> = props => {
  return (
    <section data-testid="signup-page">
      <WithBackground centered={true}>
        <WithLogo>
          <SignupForm />
        </WithLogo>
      </WithBackground>
    </section>
  );
};

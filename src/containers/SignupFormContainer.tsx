import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'store';
import { signupAction } from 'store/actions/signupActions';
import { SignupForm } from 'forms/SignupForm';
import { TSignupFormPayload } from 'utils/types';

export const SignupFormContainer = () => {
  const dispatch = useDispatch();
  const isSending = useSelector(state => state.signupReducer.isSending);
  const handleSignup = (userData: TSignupFormPayload) => dispatch(signupAction(userData));

  return <SignupForm isSending={isSending} handleSignup={handleSignup} />;
};

import React from 'react';
import { SignupPage } from 'pages/SignupPage';
import { useDispatch } from 'react-redux';
import { useSelector } from 'store';
import { TUserData } from 'pages/SignupPage/SignupPage';
import { signupAction } from 'store/actions/signupActions';

export const SignupPageContainer = () => {
  const dispatch = useDispatch();
  const isSending = useSelector(state => state.signupReducer.isSending);
  const handleSignup = (userData: TUserData) => dispatch(signupAction(userData));

  return <SignupPage isSending={isSending} handleSignup={handleSignup} />;
};

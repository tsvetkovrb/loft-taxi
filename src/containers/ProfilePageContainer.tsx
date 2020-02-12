import React from 'react';
import { ProfilePage } from 'pages/ProfilePage';
import { useDispatch } from 'react-redux';
import { useSelector } from 'store';
import { IPayloadProfileData, sendingProfileData } from 'store/actions/profileActions';

export const ProfilePageContainer = () => {
  const dispatch = useDispatch();
  const token = useSelector(state => state.authReducer.token);
  const isSending = useSelector(state => state.profileReducer.isSending);

  const sendCardData = (data: IPayloadProfileData) => dispatch(sendingProfileData(data));

  return <ProfilePage isSending={isSending} token={token} sendCardData={sendCardData} />;
};

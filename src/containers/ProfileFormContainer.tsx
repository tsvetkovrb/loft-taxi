import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'store';
import { IPayloadProfileData, sendingProfileData } from 'store/actions/profileActions';
import { ProfileFrom } from 'forms/ProfileFrom';

export const ProfileFormContainer = () => {
  const dispatch = useDispatch();
  const token = useSelector(state => state.authReducer.token);
  const { isSending, cardData } = useSelector(state => state.profileReducer);

  const sendCardData = (data: IPayloadProfileData) => dispatch(sendingProfileData(data));

  return (
    <ProfileFrom
      isSending={isSending}
      token={token}
      sendCardData={sendCardData}
      cardData={cardData}
    />
  );
};

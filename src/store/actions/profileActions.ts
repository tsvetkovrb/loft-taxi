import * as T from 'store/actionTypes';
import { ICardData } from 'utils/types';

export const sendingProfileDataStart = () => ({
  type: T.SENDING_PROFILE_DATA_START,
});

export const sendingProfileDataSuccess = (payload: ICardData) => ({
  type: T.SENDING_PROFILE_DATA_SUCCESS,
  payload,
});

export const sendingProfileDataFail = (payload: any) => ({
  type: T.SENDING_PROFILE_DATA_FAIL,
  payload,
});

export interface IPayloadProfileData extends ICardData {
  token: string;
}

export const sendingProfileData = (payload: IPayloadProfileData) => ({
  type: T.SENDING_PROFILE_DATA,
  payload,
});

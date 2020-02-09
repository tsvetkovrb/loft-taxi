import * as T from 'store/actionTypes';
import { Dispatch } from 'redux';
import { AxiosInstance } from 'axios';
import { ICardData } from 'utils/types';
import { RootState } from 'store/store';

export const sendingProfileDataStart = () => ({
  type: T.SENDING_PROFILE_DATA_START,
});

export const sendingProfileDataSuccess = (payload: ICardData) => ({
  type: T.SENDING_PROFILE_DATA_SUCCESS,
  payload,
});

export const sendingProfileDataFail = () => ({
  type: T.SENDING_PROFILE_DATA_FAIL,
});

interface IPayload extends ICardData {
  token: string;
}

export const sendingProfileData = (payload: IPayload) => async (
  dispatch: Dispatch,
  api: AxiosInstance,
  getState: () => RootState,
) => {
  dispatch(sendingProfileDataStart());

  try {
    const response = await api.post('/card', payload);

    if (response.data.success) {
      const { token, ...data } = payload;
      dispatch(sendingProfileDataSuccess(data));
      const store = getState();
      const stringifedStore = JSON.stringify(store);

      localStorage.setItem('store', stringifedStore);
    }
  } catch (error) {
    console.log(error);
  }
};

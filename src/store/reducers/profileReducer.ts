import * as T from 'store/actionTypes';
import { ICardData } from 'utils/types';

const initialState = {
  isSending: false,
  cardData: {
    cardNumber: '',
    expiryDate: '',
    cardName: '',
    cvc: '',
  },
};

type TAction = {
  type: string;
  payload: ICardData;
};

export const profileReducer = (state = initialState, action: TAction) => {
  switch (action.type) {
    case T.SENDING_PROFILE_DATA_START:
      return {
        ...state,
        isSending: true,
      };

    case T.SENDING_PROFILE_DATA_SUCCESS:
      return {
        ...state,
        isSending: false,
        cardData: {
          ...state.cardData,
          ...action.payload,
        },
      };

    default:
      return state;
  }
};

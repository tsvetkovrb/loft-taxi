import * as T from 'store/actionTypes';
import { ICardData } from 'utils/types';

export const initialState = {
  isSending: false,
  cardData: {
    cardNumber: '',
    expiryDate: '',
    cardName: '',
    cvc: '',
  },
  hasError: false,
  error: null,
};

type TAction = {
  type: string;
  payload?: ICardData | any;
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

    case T.SENDING_PROFILE_DATA_FAIL:
      return {
        ...state,
        isSending: false,
        cardData: {
          ...initialState.cardData,
        },
        hasError: true,
        error: action.payload,
      };

    default:
      return state;
  }
};

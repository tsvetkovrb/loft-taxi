import { rootReducer } from 'store/reducers';

export interface ICardData {
  cardNumber: string;
  expiryDate: string;
  cardName: string;
  cvc: string;
}

export type TRootState = ReturnType<typeof rootReducer>;

export type TLoginFormPayload = {
  email: string;
  password: string;
};

export type TSignupFormPayload = {
  email: string;
  name: string;
  surname: string;
  password: string;
};

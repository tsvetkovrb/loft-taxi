import { rootReducer } from 'store/reducers';

export interface ICardData {
  cardNumber: string;
  expiryDate: string;
  cardName: string;
  cvc: string;
}

export type TRootState = ReturnType<typeof rootReducer>;

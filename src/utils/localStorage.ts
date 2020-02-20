import { TRootState } from './types';

export const getSavedStore = () => {
  try {
    const savedStore = localStorage.getItem('store');
    return savedStore ? JSON.parse(savedStore) : {};
  } catch (error) {
    console.log(error);
  }
};

export const saveStore = (store: TRootState) => {
  localStorage.setItem('store', JSON.stringify(store));
};

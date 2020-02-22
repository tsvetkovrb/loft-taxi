import { TRootState } from './types';

export const getSavedStore = () => {
  let savedStore = {};

  try {
    const store = localStorage.getItem('store');
    if (store) {
      savedStore = JSON.parse(store);
    }
  } catch (error) {
    console.log(error);
  }

  return savedStore;
};

export const saveStore = (store: TRootState) => {
  try {
    localStorage.setItem('store', JSON.stringify(store));
  } catch (error) {
    console.log(error);
  }
};

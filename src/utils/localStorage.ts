import { TRootState } from './types';

export const getSavedStore = () => {
  let savedStore = null;

  try {
    const store = localStorage.getItem('store');
    savedStore = store ? JSON.parse(store) : {};
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

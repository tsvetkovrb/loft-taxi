import { useSelector as useReduxSelector, TypedUseSelectorHook } from 'react-redux';
import { TRootState } from 'utils/types';

export const useSelector: TypedUseSelectorHook<TRootState> = useReduxSelector;

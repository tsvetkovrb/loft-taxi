import React from 'react';
import { RouteControl } from 'components/RouteControl';
import { useSelector } from 'store';
import { isObjectEmpty } from 'utils/helpers';

export const RouteControlContainer = () => {
  const cardData = useSelector(store => store.profileReducer.cardData);
  const hasCardData = !isObjectEmpty(cardData);

  return <RouteControl hasCardData={hasCardData} />;
};

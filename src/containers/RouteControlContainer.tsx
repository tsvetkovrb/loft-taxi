import React from 'react';
import { RouteControl } from 'components/RouteControl';
import { useSelector } from 'store';
import { isObjectEmpty } from 'utils/helpers';

interface IRouteControlContainer {
  clearMap: () => void;
}

export const RouteControlContainer: React.FC<IRouteControlContainer> = props => {
  const cardData = useSelector(store => store.profileReducer.cardData);
  const hasCardData = !isObjectEmpty(cardData);

  return <RouteControl hasCardData={hasCardData} clearMap={props.clearMap} />;
};

import React, { useEffect } from 'react';
import { Controls, InformationBanner } from 'components/RouteControl/components';
import { useDispatch } from 'react-redux';
import { addressesAction } from 'store/actions/addressesActions';
import { useSelector } from 'store';
import { routesAction, cancelRequest } from 'store/actions/routesActions';

interface IControlsContainer {
  clearMap: () => void;
}

export const ControlsContainer: React.FC<IControlsContainer> = props => {
  const dispatch = useDispatch();
  const addresses = useSelector(store => store.addressesReducer.addresses);
  const hasRequest = useSelector(store => store.routesReducer.hasRequest);
  const hasAddresses = addresses.length > 0;
  const formattedAddresses = addresses.map((address: string) => ({
    value: address,
    label: address,
  }));

  useEffect(() => {
    if (!hasAddresses) {
      dispatch(addressesAction());
    }
  });

  const fetchCoordinates = (from: string, to: string) => {
    dispatch(routesAction({ from, to }));
  };

  const makeNewRequest = () => {
    dispatch(cancelRequest());
    props.clearMap();
  };

  if (hasRequest) {
    return (
      <InformationBanner
        title="Заказ размещён"
        info="Ваше такси уже едет к вам. Прибудет приблизительно через 10 минут"
        buttonTitle="Сделать новый заказ"
        onClick={makeNewRequest}
      />
    );
  }

  if (hasAddresses) {
    return <Controls addresses={formattedAddresses} fetchCoordinates={fetchCoordinates} />;
  }

  return <p>Загружается...</p>;
};

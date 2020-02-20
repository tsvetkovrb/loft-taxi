import React, { useEffect } from 'react';
import { Controls } from 'components/RouteControl/components';
import { useDispatch } from 'react-redux';
import { addressesAction } from 'store/actions/addressesActions';
import { useSelector } from 'store';
import { routesAction } from 'store/actions/routesActions';

export const ControlsContainer = () => {
  const dispatch = useDispatch();
  const addresses = useSelector(store => store.addressesReducer.addresses);
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

  return hasAddresses ? (
    <Controls addresses={formattedAddresses} fetchCoordinates={fetchCoordinates} />
  ) : (
    <p>Загружается...</p>
  );
};

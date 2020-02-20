import React from 'react';
import { useSelector } from 'store';
import { MapPage } from 'pages/MapPage';

export const MapPageContainer = () => {
  const coordinates = useSelector(store => store.routesReducer.coordinates);

  return <MapPage coordinates={coordinates} />;
};

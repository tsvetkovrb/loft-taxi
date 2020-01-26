import React, { useState, useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
import './MapPage.scss';
import 'mapbox-gl/dist/mapbox-gl.css';

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_API_KEY || '';

export const MapPage: React.FC = () => {
  let mapContainer: any;
  const [mapData] = useState({
    lng: 30.3,
    lat: 59.93,
    zoom: 14,
  });

  useEffect(() => {
    const { lat, lng, zoom } = mapData;

    new mapboxgl.Map({
      container: mapContainer,
      style: 'mapbox://styles/mapbox/light-v10?optimize=true',
      center: [lng, lat],
      zoom: zoom,
    });
  });

  return (
    <section className="map-page" ref={ref => (mapContainer = ref)}></section>
  );
};

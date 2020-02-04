import React, { useState, useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import './MapPage.scss';
import 'mapbox-gl/dist/mapbox-gl.css';

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_API_KEY || '';

export const MapPage: React.FC = () => {
  const mapContainer: any = useRef(null);

  const [mapData] = useState({
    lng: 30.3,
    lat: 59.93,
    zoom: 14,
  });

  useEffect(() => {
    const { lat, lng, zoom } = mapData;

    new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/light-v10?optimize=true',
      center: [lng, lat],
      zoom: zoom,
    });
  });

  return (
    <section
      data-testid="map-page"
      className="map-page"
      ref={mapContainer}
    ></section>
  );
};

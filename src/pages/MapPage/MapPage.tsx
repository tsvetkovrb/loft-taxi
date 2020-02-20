import React, { useState, useEffect, useRef, useCallback } from 'react';
import { makeStyles } from '@material-ui/core';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { RouteControlContainer as RouteControl } from 'containers/RouteControlContainer';

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_API_KEY || '';

const useStyles = makeStyles({
  mapPage: {
    width: '100%',
    height: '100%',
  },
  mapPageWrapper: {
    width: '100%',
    height: '100vh',
    minHeight: '900px',
    position: 'relative',
  },
});

interface IMapPageProps {
  coordinates: any;
}

export const MapPage: React.FC<IMapPageProps> = props => {
  const mapContainer: any = useRef(null);
  let map: any = useRef();
  const styles = useStyles();

  const [mapData] = useState({
    lng: 30.3,
    lat: 59.93,
    zoom: 14,
  });

  useEffect(() => {
    const { lat, lng, zoom } = mapData;

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/light-v10?optimize=true',
      center: [lng, lat],
      zoom: zoom,
    });
    return () => map.current.remove();
  });

  const clearMap = () => {
    const mapLayer = map.current.getLayer('route');

    if (mapLayer) {
      map.current.removeLayer('route');
      map.current.removeSource('route');
    }
  };

  const updateMap = useCallback((coordinates: any) => {
    clearMap();

    map.current.on('load', () => {
      map.current.addLayer({
        id: 'route',
        type: 'line',
        source: {
          type: 'geojson',
          data: {
            type: 'Feature',
            properties: {},
            geometry: {
              type: 'LineString',
              coordinates,
            },
          },
        },
        layout: {
          'line-join': 'round',
          'line-cap': 'round',
        },
        paint: {
          'line-color': '#ffc617',
          'line-width': 8,
        },
      });
    });

    map.current.flyTo({ center: coordinates[0], zoom: 14 });
  }, []);

  useEffect(() => {
    const { coordinates } = props;

    if (coordinates.length) {
      updateMap(coordinates);
    } else {
      clearMap();
    }
  }, [props, props.coordinates, updateMap]);

  return (
    <section data-testid="map-page" className={styles.mapPageWrapper}>
      <div ref={mapContainer} className={styles.mapPage}></div>
      <RouteControl />
    </section>
  );
};

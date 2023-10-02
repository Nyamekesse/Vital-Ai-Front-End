import { useState } from 'react';
import Map, {
  FullscreenControl,
  Marker,
  GeolocateControl,
  Source,
  Layer,
  NavigationControl,
} from 'react-map-gl';

export function MapView() {
  const [viewState, setViewState] = useState({
    longitude: -100,
    latitude: 40,
    zoom: 3.5,
  });
  return (
    <div className="m-[3%]">
      <Map
        {...viewState}
        onMove={(evt) => setViewState(evt.viewState)}
        mapStyle="mapbox://styles/mapbox/streets-v9"
        mapboxAccessToken={import.meta.env.VITE_REACT_APP_MAP_BOX_TOKEN}
        style={{ height: '100vh' }}
      >
        <GeolocateControl />
        <FullscreenControl />
        <NavigationControl />
      </Map>
    </div>
  );
}

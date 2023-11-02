/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable prefer-destructuring */
import { useEffect, useState } from 'react';
import ReactMapGl, {
  FullscreenControl,
  Marker,
  GeolocateControl,
  Source,
  Layer,
  NavigationControl,
} from 'react-map-gl';
import { useSearchParams, useLocation } from 'react-router-dom';

export function MapView() {
  const location = useLocation();
  const userLoc = location.state.start;
  const [searchParams] = useSearchParams();
  const careRecipientLong = Number(searchParams.get('lng'));
  const careRecipientLat = Number(searchParams.get('lat'));
  const [end, setEnd] = useState<number[]>([
    careRecipientLong,
    careRecipientLat,
  ]);

  const [coords, setCoords] = useState([]);
  const [steps, setSteps] = useState([]);
  const [viewState, setViewState] = useState({
    longitude: -0.205874,
    latitude: 5.614818,
    zoom: 7.5,
  });

  useEffect(() => {
    const getRoute = async () => {
      if (userLoc.length > 0) {
        const response = await fetch(
          `https://api.mapbox.com/directions/v5/mapbox/driving/${userLoc[0]},${
            userLoc[1]
          };${end[0]},${end[1]}?steps=true&geometries=geojson&access_token=${
            import.meta.env.VITE_REACT_APP_MAP_BOX_TOKEN
          }`,
        );
        const data = await response.json();

        const coords = await data.routes[0].geometry.coordinates;
        setCoords(coords);
        const steps = await data.routes[0].legs[0].steps;
        setSteps(steps);
      }
    };
    getRoute();
  }, [userLoc, end]);

  const geojson = {
    type: 'FeatureCollection',
    features: [
      {
        type: 'feature',
        geometry: {
          type: 'LineString',
          coordinates: [...coords],
        },
      },
    ],
  };
  // Route styles
  const lineStyle = {
    id: 'roadLayer',
    type: 'line',
    layout: {
      'line-join': 'round',
      'line-cap': 'round',
    },
    paint: {
      'line-color': 'blue',
      'line-width': 4,
      'line-opacity': 0.75,
    },
  };

  // 3. endPoint
  const endPoint = {
    type: 'FeatureCollection',
    features: [
      {
        type: 'feature',
        geometry: {
          type: 'Point',
          coordinates: [...end],
        },
      },
    ],
  };

  const layerEndpoint = {
    id: 'end',
    type: 'circle',
    source: {
      type: 'geojson',
      data: end,
    },
    paint: {
      'circle-radius': 10,
      'circle-color': '#f30',
    },
  };
  const handleClick = (e) => {
    const newEnd = e.lngLat;
    const endPoint = Object.keys(newEnd).map((item, i) => newEnd[item]);
    setEnd(endPoint);
  };
  return (
    <div className="mt-[3%] py-3 px-3 flex flex-col justify-center items-center">
      <ReactMapGl
        {...viewState}
        onClick={handleClick}
        onMove={(evt) => setViewState(evt.viewState)}
        mapStyle="mapbox://styles/mapbox/streets-v9"
        mapboxAccessToken={import.meta.env.VITE_REACT_APP_MAP_BOX_TOKEN}
        style={{ height: '100vh' }}
      >
        <Source id="routeSource" type="geojson" data={geojson}>
          <Layer {...lineStyle} />
        </Source>
        <Source id="end" type="geojson" data={endPoint}>
          <Layer {...layerEndpoint} />
        </Source>

        <GeolocateControl />
        <FullscreenControl />
        <NavigationControl />

        <Marker longitude={userLoc[0]} latitude={userLoc[1]} />
      </ReactMapGl>
    </div>
  );
}

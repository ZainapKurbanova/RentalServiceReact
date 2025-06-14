import { useEffect, useState, useRef, RefObject } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

interface CityLocation {
  latitude: number;
  longitude: number;
  zoom: number;
}

export function useMap(
  mapRef: RefObject<HTMLDivElement | null>,
  city: CityLocation
): L.Map | null {
  const [mapInstance, setMapInstance] = useState<L.Map | null>(null);
  const isRenderedRef = useRef<boolean>(false);

  useEffect(() => {
    if (mapRef.current !== null && !isRenderedRef.current) {
      const { latitude, longitude, zoom } = city;

      const map = L.map(mapRef.current, {
        center: {
          lat: latitude,
          lng: longitude,
        },
        zoom: zoom,
      });

      L.tileLayer(
        'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
        {
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
        }
      ).addTo(map);

      setMapInstance(map);
      isRenderedRef.current = true;
    }
  }, [mapRef, city]);

  return mapInstance;
}
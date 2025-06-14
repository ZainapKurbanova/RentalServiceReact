import React, { useRef, useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { OfferList } from '../../types/offer';
import { useMap } from '../../hooks/use-map';
import activeMarker from '../../../public/img/pin-active.svg';

import markerIconUrl from 'leaflet/dist/images/marker-icon.png';
import markerShadowUrl from 'leaflet/dist/images/marker-shadow.png';

interface CityLocation {
  latitude: number;
  longitude: number;
  zoom: number;
}

interface MapProps {
  points: OfferList[];                     
  cityLocation: CityLocation;             
  selectedOfferId: string | null;          
  onSelectOffer: (offerId: string) => void; 
}

// 1) Стандартная иконк
const defaultIcon = L.icon({
  iconUrl: markerIconUrl,
  shadowUrl: markerShadowUrl,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  shadowSize: [41, 41],
  shadowAnchor: [12, 41],
});

// 2) Контрастная иконка
const highlightIcon = L.icon({
  iconUrl: activeMarker,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  shadowSize: [41, 41],
  shadowAnchor: [12, 41],
});

export const CityMap: React.FC<MapProps> = ({
  points,
  cityLocation,
  selectedOfferId,
  onSelectOffer,
}) => {
  const mapRef = useRef<HTMLDivElement | null>(null);
  const map = useMap(mapRef, cityLocation);

  useEffect(() => {
    if (!map) {
      return;
    }

    // Удаляем все старые маркеры (не трогаем тайловый слой)
    map.eachLayer((layer) => {
      if (layer instanceof L.Marker) {
        map.removeLayer(layer);
      }
    });

    // Добавляем маркеры заново
    points.forEach((offer) => {
      const { latitude, longitude } = offer.location;

      // Если это выбранный оффер, используем highlightIcon
      const iconToUse = offer.id === selectedOfferId ? highlightIcon : defaultIcon;

      const marker = L.marker(
        {
          lat: latitude,
          lng: longitude,
        },
        {
          icon: iconToUse,
        }
      ).addTo(map);

      // Навешиваем обработчик клика
      marker.on('click', () => {
        if (offer.id === selectedOfferId) {
          // Если кликнули по уже выделенному маркеру — сбрасываем выбор
          onSelectOffer('');
        } else {
          // Иначе выделяем этот оффер
          onSelectOffer(offer.id);
        }
      });
    });
  }, [map, points, selectedOfferId, onSelectOffer]);

  return (
    <div
      className="cities__map map"
      ref={mapRef}
      style={{ width: '100%', height: '100%' }}
    />
  );
};
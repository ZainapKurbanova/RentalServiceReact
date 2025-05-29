import { OffersList } from '../types/offer';

export const offerList: OffersList[] = [
  {
    id: 'bb68b0a8-3f92-446d-99c6-cb645d38e2cb',
    title: 'Wood and stone place',
    type: 'apartment',
    price: 370,
    city: {
      name: 'Paris',
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 13,
      },
    },
    location: {
      latitude: 48.868610000000004,
      longitude: 2.342499,
      zoom: 16,
    },
    isFavorite: true,
    isPremium: false,
    rating: 4.9,
    previewImage: 'img/paris1.jpg',
  },
  {
    id: 'c1d5e7f8-9a2b-4c3d-8e9f-a1b2c3d4e5f6',
    title: 'Cozy Canal House',
    type: 'house',
    price: 450,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.3676,
        longitude: 4.9041,
        zoom: 13,
      },
    },
    location: {
      latitude: 52.370216,
      longitude: 4.895168,
      zoom: 16,
    },
    isFavorite: false,
    isPremium: true,
    rating: 4.7,
    previewImage: 'img/amsterdam2.jpg',
  },
  {
    id: 'f2e3d4c5-b6a7-8c9d-0e1f-2g3h4i5j6k7l',
    title: 'Modern Apartment near Cathedral',
    type: 'apartment',
    price: 200,
    city: {
      name: 'Cologne',
      location: {
        latitude: 50.9375,
        longitude: 6.9603,
        zoom: 13,
      },
    },
    location: {
      latitude: 50.941357,
      longitude: 6.958307,
      zoom: 16,
    },
    isFavorite: true,
    isPremium: false,
    rating: 4.5,
    previewImage: 'img/cologne3.jpg',
  },
];
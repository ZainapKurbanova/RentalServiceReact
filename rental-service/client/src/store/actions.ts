import { createAction } from '@reduxjs/toolkit';
import { CityOffer, OfferList } from '../types/offer';

const changeCity = createAction('offers/changeCity', (city: CityOffer) => ({ payload: city }));

const offersCityList = createAction('offers/offersCityList', (offers: OfferList[]) => ({ payload: offers }));

export { changeCity, offersCityList };
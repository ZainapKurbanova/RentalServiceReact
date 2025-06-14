import { createReducer } from '@reduxjs/toolkit';
import { changeCity, offersCityList } from './actions';
import { CITIES_LOCATION } from '../const';
import { getCity } from '../utils';
import { offerList } from '../mocks/offers-list';

const defaultCity = getCity('Paris', CITIES_LOCATION);
const initialState = {
  city: defaultCity,
  offers: offerList,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(offersCityList, (state, action) => {
      state.offers = action.payload;
    });
});
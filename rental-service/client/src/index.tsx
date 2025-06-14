import { createRoot } from 'react-dom/client'
import { App } from './components/app/app'
import { offers } from './mocks/offers'; 
import React from 'react';
import { Setting } from './const';
import { offerList } from './mocks/offers-list';
import { favoritesMock } from './mocks/favorites';
import { Provider } from 'react-redux';
import { store } from './store';

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store} >
      <App 
            rentalOffersCount = {Setting.RentalOffersCount}
            offers = {offers}
            offersList={offerList}
            favorites={favoritesMock}
          />
    </Provider>
   
  </React.StrictMode>
);

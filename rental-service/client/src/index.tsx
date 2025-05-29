import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './components/app/app';
import { Setting } from './const';
import { offers } from './mocks/offers';
import { offerList } from './mocks/offers-list';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App
      rentalOffersCount={Setting.rentOffersCount}
      offersList={offerList}
      offers = {offers}
    />
  </React.StrictMode>
);

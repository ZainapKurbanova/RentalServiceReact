import { MainPage } from "../../pages/main-page/main-page";
import { OfferPage } from "../../pages/offer/offer";
import { LoginPage } from "../../pages/login/login";
import { NotFoundPage } from "../../pages/not-found/not-found";
import { FavoritesPage } from "../../pages/favorites/favorites";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from "../../const";
import { PrivateRoute } from "../private-route/private-route";
import { FavoriteOffer, FullOffer, OfferList } from "../../types/offer";
import React, { JSX } from 'react';
import { offerList } from "../../mocks/offers-list";



type AppMainPageProps={
  rentalOffersCount: number;
  offers: FullOffer[];
  offerList: OfferList[];
  favorites: FavoriteOffer[];
};

function App({rentalOffersCount,offers,favorites}: AppMainPageProps):JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Main} element={<MainPage rentalOffersCount ={rentalOffersCount} offerList={offerList}/>} />
        <Route path={AppRoute.Login} element={<LoginPage />} />
       
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}> 
              <FavoritesPage favorites={favorites}  />
            </PrivateRoute>
          }
        />
        
        <Route path={AppRoute.Offer} element={<OfferPage offers={offers} />}/>
        <Route path={AppRoute.NotFound} element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export { App };

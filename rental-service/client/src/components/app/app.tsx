import { MainPage } from "../../pages/main-page/main-page";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FavoritesPage } from '../../pages/favorites/favorites';
import { LoginPage } from '../../pages/login/login';
import { NotFoundPage } from '../../pages/not-found/not-found';
import { AppRoute, AuthorizationStatus } from "../../const";
import { PrivateRoute } from "../../components/private-route/private-route";
import { JSX } from "react";
import { FullOffer, OffersList } from "../../types/offer";
import { offerList } from "../../mocks/offers-list";
import { OfferPage } from "../../pages/offer/offer";

type AppMainPageProps = {
  rentalOffersCount: number;
  offersList: OffersList[];
  offers: FullOffer[];
};

function App({ rentalOffersCount, offers }: AppMainPageProps) : JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Main} element={<MainPage rentalOffersCount={ rentalOffersCount } offersList={ offerList }/>} />
        <Route path={AppRoute.Login} element={<LoginPage />} />
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}>
              <FavoritesPage />
            </PrivateRoute>
          }
        />
        <Route path={`${AppRoute.Offer}/:id`} element={<OfferPage offers ={offers} />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export { App };

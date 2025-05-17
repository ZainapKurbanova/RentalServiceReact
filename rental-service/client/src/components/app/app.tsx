import { MainPage } from "../../pages/main-page/main-page";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FavoritesPage } from '../../pages/favorites/favorites';
import { LoginPage } from '../../pages/login/login';
import { OfferPage } from '../../pages/offer/offer';
import { NotFoundPage } from '../../pages/not-found/not-found';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/offer" element={<OfferPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export { App };
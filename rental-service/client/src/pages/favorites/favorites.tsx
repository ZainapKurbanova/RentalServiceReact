import { useState } from 'react';
import { Logo } from '../../components/logo/logo';
import { FavoriteCardList } from '../../components/favorite-card-list/favorite-card-list';
import { FullOffer } from '../../types/offer';
import { offers } from '../../mocks/offers';

function FavoritesPage() {
  // Фильтруем только избранные предложения
  const [favoriteOffers, setFavoriteOffers] = useState<FullOffer[]>(
    offers.filter((offer) => offer.isFavorite)
  );

  const handleRemoveFromFavorites = (id: string) => {
    // Обновляем состояние, исключая предложение с указанным id
    setFavoriteOffers(favoriteOffers.filter((offer) => offer.id !== id));
  };

  return (
    <div className="page">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Logo />
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a
                    className="header__nav-link header__nav-link--profile"
                    href="#"
                  >
                    <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                    <span className="header__user-name user__name">
                      Myemail@gmail.com
                    </span>
                    <span className="header__favorite-count">{favoriteOffers.length}</span>
                  </a>
                </li>
                <li className="header__nav-item">
                  <a className="header__nav-link" href="#">
                    <span className="header__signout">Sign out</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="page__main page__main--favorites">
        {favoriteOffers.length > 0 ? (
          <>
            <h1 className="favorites__title">Saved listing</h1>
            <FavoriteCardList
              favorites={favoriteOffers}
              onRemoveFromFavorites={handleRemoveFromFavorites}
            />
          </>
        ) : (
          <div className="favorites__status-wrapper">
            <h1 className="favorites__title">Favorites is empty</h1>
            <p className="favorites__status">You have not added any places to your favorites yet.</p>
          </div>
        )}
      </main>

      <footer className="footer container">
        <a className="footer__logo-link" href="main.html">
          <img
            className="footer__logo"
            src="/img/logo.svg"
            alt="6 cities logo"
            width="64"
            height="33"
          />
        </a>
      </footer>
    </div>
  );
}

export { FavoritesPage };

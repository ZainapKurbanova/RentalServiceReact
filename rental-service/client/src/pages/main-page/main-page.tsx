import React, { useState, useCallback } from 'react';
import { Logo } from '../../components/logo/logo';
import { CitiesCardList } from '../../components/cities-card-list/cities-card-list';
import { CityMap } from '../../components/map/map';
import { useAppSelector } from '../../hooks';
import { CitiesList } from '../../components/cities-list/cities-list';
import { getOffersByCity, sortOffersByType } from '../../utils';
import { SortOffer } from '../../types/sort';
import SortOptions from '../../components/sort-options/sort-options';

export function MainPage() {
  const selectedCity = useAppSelector((state) => state.city);
  const offersList = useAppSelector((state) => state.offers);
  const [activeSort, setActiveSort] = useState<SortOffer>('Popular');
  const filteredOffers = getOffersByCity(selectedCity.name, offersList);
  const sortedOffers = sortOffersByType(filteredOffers, activeSort);
  const [selectedOfferId, setSelectedOfferId] = useState<string | null>(null);

  const displayedOffers =
    selectedOfferId && sortedOffers.some((o) => o.id === selectedOfferId)
      ? sortedOffers.filter((o) => o.id === selectedOfferId)
      : sortedOffers;

  const cityLoc = filteredOffers.length > 0
    ? {
        latitude: filteredOffers[0].city.location.latitude,
        longitude: filteredOffers[0].city.location.longitude,
        zoom: filteredOffers[0].city.location.zoom,
      }
    : { latitude: 0, longitude: 0, zoom: 1 };

  const handleSelectOffer = useCallback((offerId: string) => {
    setSelectedOfferId((prev) => (prev === offerId ? null : offerId));
  }, []);

  return (
    <div className="page page--gray page--main">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Logo />
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a className="header__nav-link header__nav-link--profile" href="#">
                    <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                    <span className="header__user-name user__name">Myemail@gmail.com</span>
                    <span className="header__favorite-count">3</span>
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

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>

        <div className="tabs">
          <section className="locations container">
            <CitiesList selectedCity={selectedCity} />
          </section>
        </div>

        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">
                {displayedOffers.length} places to stay in {selectedCity.name}
              </b>
              
              <SortOptions 
                activeSorting={activeSort} 
                onChange={(newSorting) => setActiveSort(newSorting)} 
              />
              
              <div className="cities__places-list places__list tabs__content">
                <CitiesCardList offerList={displayedOffers} />
              </div>
            </section>

            <div className="cities__right-section">
              <CityMap
                points={filteredOffers}
                cityLocation={cityLoc}
                selectedOfferId={selectedOfferId}
                onSelectOffer={handleSelectOffer}
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

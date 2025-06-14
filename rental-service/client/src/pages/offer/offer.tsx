import React, { useEffect, useState } from 'react';
import { Logo } from '../../components/logo/logo';
import { FullOffer } from '../../types/offer';
import { useParams } from 'react-router-dom';
import { ReviewForm } from '../../components/review-form/review-form';
import { CityMap } from '../../components/map/map';
import { CitiesCardList } from '../../components/cities-card-list/cities-card-list';

// Тип пропсов
type OfferProps = {
  offers: FullOffer[];
};

function OfferPage({ offers }: OfferProps) {
  const { id } = useParams();
  const [offer, setOffer] = useState<FullOffer | null>(null);

  useEffect(() => {
    const foundOffer = offers.find((offer) => offer.id === id);
    setOffer(foundOffer || null);
  }, [id, offers]);

  if (!offer) {
    return <div>Предложение не найдено</div>;
  }

  const nearbyOffers = offers
    .filter((o) => o.city.name === offer.city.name && o.id !== offer.id)
    .slice(0, 3);

  const ratingWidth = `${Math.round(offer.rating) * 20}%`;

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

      <main className="page__main page__main--offer">
        <section className="offer">
          <div className="offer__gallery-container container">
            <div className="offer__gallery">
              {offer.images.map((image, index) => (
                <div className="offer__image-wrapper" key={index}>
                  <img className="offer__image" src={image} alt={offer.title} />
                </div>
              ))}
            </div>
          </div>

          <div className="offer__container container">
            <div className="offer__wrapper">
              {offer.isPremium && (
                <div className="offer__mark">
                  <span>Premium</span>
                </div>
              )}

              <div className="offer__name-wrapper">
                <h1 className="offer__name">{offer.title}</h1>
                <button className="offer__bookmark-button button" type="button">
                  <svg className="offer__bookmark-icon" width="31" height="33">
                    <use href="#icon-bookmark" />
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>

              <div className="offer__rating rating">
                <div className="offer__stars rating__stars">
                  <span style={{ width: ratingWidth }}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="offer__rating-value rating__value">
                  {offer.rating}
                </span>
              </div>

              <ul className="offer__features">
                <li className="offer__feature offer__feature--entire">
                  {offer.type}
                </li>
                <li className="offer__feature offer__feature--bedrooms">
                  {offer.bedrooms} Bedrooms
                </li>
                <li className="offer__feature offer__feature--adults">
                  Max {offer.maxAdults} adults
                </li>
              </ul>

              <div className="offer__price">
                <b className="offer__price-value">€{offer.price}</b>
                <span className="offer__price-text">&nbsp;night</span>
              </div>

              <div className="offer__inside">
                <h2 className="offer__inside-title">What&apos;s inside</h2>
                <ul className="offer__inside-list">
                  {offer.goods.map((item, index) => (
                    <li className="offer__inside-item" key={index}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="offer__host">
                <h2 className="offer__host-title">Meet the host</h2>
                <div className={`offer__host-user user ${offer.host.isPro ? 'offer__avatar-wrapper--pro' : ''}`}>
                  <img
                    className="offer__avatar user__avatar"
                    src={offer.host.avatarUrl}
                    width="74"
                    height="74"
                    alt="Host avatar"
                  />
                  <span className="offer__user-name">{offer.host.name}</span>
                  {offer.host.isPro && (
                    <span className="offer__user-status">Pro</span>
                  )}
                </div>
                <div className="offer__description">
                  {offer.description.split('\n').map((text, index) => (
                    <p className="offer__text" key={index}>{text}</p>
                  ))}
                </div>
              </div>

              <section className="offer__reviews reviews">
                <h2 className="reviews__title">
                  Reviews &middot; <span className="reviews__amount">1</span>
                </h2>
                <ul className="reviews__list">
                  <li className="reviews__item">
                    <div className="reviews__user user">
                      <div className="reviews__avatar-wrapper user__avatar-wrapper">
                        <img
                          className="reviews__avatar user__avatar"
                          src="img/avatar-max.jpg"
                          width="54"
                          height="54"
                          alt="Reviews avatar"
                        />
                      </div>
                      <span className="reviews__user-name">Max</span>
                    </div>
                    <div className="reviews__info">
                      <div className="reviews__rating rating">
                        <div className="reviews__stars rating__stars">
                          <span style={{ width: '80%' }}></span>
                          <span className="visually-hidden">Rating</span>
                        </div>
                      </div>
                      <p className="reviews__text">
                        A quiet cozy and picturesque that hides behind a river by the unique
                        lightness of Amsterdam.
                      </p>
                      <time className="reviews__time" dateTime="2019-04-24">
                        April 2019
                      </time>
                    </div>
                  </li>
                </ul>
                <ReviewForm />
              </section>
            </div>
          </div>

          <section className="offer__map map" style={{ height: '500px' }}>
            <CityMap
              points={[offer, ...nearbyOffers].map((o) => ({
                ...o,
                previewImage: o.images[0], // или другой источник
              }))}
              cityLocation={offer.city.location}
              selectedOfferId={offer.id}
              onSelectOffer={() => {}}
            />

          </section>
        </section>

        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">
              <CitiesCardList offerList={nearbyOffers.map((o) => ({
                ...o,
                previewImage: o.images[0] // для совместимости с OfferList типом
              }))} />
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export { OfferPage };

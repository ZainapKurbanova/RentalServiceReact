import { FullOffer } from '../../types/offer';
import { FavoriteCard } from '../favorite-card/favorite-card';

type FavoriteCardListProps = {
  favorites: FullOffer[];
  onRemoveFromFavorites: (id: string) => void;
};

function FavoriteCardList({ favorites, onRemoveFromFavorites }: FavoriteCardListProps) {
  const favoritesByCity = favorites.reduce((acc, offer) => {
    const city = offer.city.name;
    if (!acc[city]) {
      acc[city] = [];
    }
    acc[city].push(offer);
    return acc;
  }, {} as Record<string, FullOffer[]>);

  return (
    <div className="favorites__list">
      {Object.entries(favoritesByCity).map(([city, cityOffers]) => (
        <section key={city} className="favorites__places">
          <h2 className="favorites__title">{city}</h2>
          <div className="favorites__cards places__list">
            {cityOffers.map((offer) => (
              <FavoriteCard
                key={offer.id}
                id={offer.id}
                title={offer.title}
                type={offer.type}
                price={offer.price}
                previewImage={offer.images[0]} 
                rating={offer.rating}
                city={city}
                onRemoveFromFavorites={onRemoveFromFavorites}
              />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}

export { FavoriteCardList };
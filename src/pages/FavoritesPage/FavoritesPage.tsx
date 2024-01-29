import { useContext } from 'react';

import './FavoritesPage.scss';
import { Card } from '../../components/Card/Card';
import { DataContext } from '../../App';
import { Loader } from '../../components/Loader';
import { EmptyFavorites } from '../../components/EmptyFavorites/EmptyFavorites';

export const FavoritesPage = () => {
  const {
    isLoading,
    favoriteStorage,
  } = useContext(DataContext);

  return (
    <div className="FavoritesPage">
      <h1 className="FavoritesPage--title">
        Favorites
      </h1>
      {favoriteStorage.length !== 0 && (
        <p className="FavoritesPage--favoritesCount">
          {(favoriteStorage.length === 1)
            ? (`${favoriteStorage.length} item`)
            : (`${favoriteStorage.length} items`)}
        </p>
      )}

      {!favoriteStorage.length && (
        <EmptyFavorites />
      )}
      {isLoading ? (
        <Loader />
      ) : (
        <div className="FavoritesPage--container">
          {favoriteStorage.map(product => (
            <Card
              key={product.name}
              product={product}
            />
          ))}
        </div>
      )}
    </div>
  );
};

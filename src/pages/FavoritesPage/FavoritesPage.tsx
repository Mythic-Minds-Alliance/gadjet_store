import { useContext } from 'react';

import style from '../../assets/catalogue.module.scss';
import { Card } from '../../components/Card/Card';
import { DataContext } from '../../App';
import { Loader } from '../../components/Loader';
import { EmptyFavorites } from '../../components/EmptyFavorites/EmptyFavorites';
import { Breadcrumbs } from '../../components/Breadcrumbs';

export const FavoritesPage = () => {
  const {
    isLoading,
    favoriteStorage,
    setFavoriteStorage,
  } = useContext(DataContext);

  const handleClearCart = () => {
    setFavoriteStorage([]);
    localStorage.removeItem('favorites');
  };

  return (
    <div className={style.CataloguePage}>
      <Breadcrumbs />

      <div className={style.favoritePage__top}>
        <h1 className={style.CataloguePage__title}>
          Favorites
        </h1>

        {favoriteStorage.length > 0 && (
          <button
            type="button"
            className={style.favoritePage__clear}
            onClick={handleClearCart}
          >
            Remove all
          </button>
        )}
      </div>

      {favoriteStorage.length !== 0 && (
        <p className={style.CataloguePage__CatalogueCount}>
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
        <div className={style.CataloguePage__container}>
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

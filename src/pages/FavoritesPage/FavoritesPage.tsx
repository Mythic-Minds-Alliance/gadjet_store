import { useContext } from 'react';

import style from '../../assets/catalogue.module.scss';
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
    <div className={style.CataloguePage}>
      <h1 className={style.CataloguePage__title}>
        Favorites
      </h1>
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

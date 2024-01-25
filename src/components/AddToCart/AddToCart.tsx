import { useContext, useEffect, useState } from 'react';
import classNames from 'classnames';

import './AddToCart.scss';
import like from '../../icons/like.svg';
import likeActive from '../../icons/like-active.svg';
import { CartProduct, Product } from '../../types/product';
import { DataContext } from '../../App';
import { handleAddToCart, handleAddToFavorites } from '../../utils/helpers';

type Props = {
  product: Product,
};

export const AddToCart: React.FC<Props> = ({ product }) => {
  const [isActiveAdd, setIsActiveAdd] = useState(false);
  const [isActiveFavorite, setIsActiveFavorite] = useState(false);

  const {
    setFavoriteStorage,
    setCartStorage,
    cartStorage,
    favoriteStorage,
  } = useContext(DataContext);

  const checkIsActive = (
    item: Product,
    productStorage: CartProduct[] | Product[],
  ) => {
    return productStorage.some(phoneCard => phoneCard.id === item.id);
  };

  useEffect(() => {
    if (checkIsActive(product, cartStorage)) {
      setIsActiveAdd(true);
    }

    if (checkIsActive(product, favoriteStorage)) {
      setIsActiveFavorite(true);
    }
  }, [cartStorage, favoriteStorage, product]);

  const handleClickAdd = () => {
    setIsActiveAdd(!isActiveAdd);
  };

  const handleClickFavorite = () => {
    setIsActiveFavorite(!isActiveFavorite);
  };

  return (
    <div className="addToCart">
      <button
        className={classNames('addToCart--button', {
          'addToCart--button-active': isActiveAdd,
          'addToCart--button-inactive': !isActiveAdd,
        })}
        type="submit"
        onClick={() => {
          handleClickAdd();
          handleAddToCart(product, setCartStorage);
        }}
      >
        {!isActiveAdd ? 'Add to cart' : 'Added to cart'}
      </button>
      <button
        type="submit"
        className={
          isActiveFavorite
            ? 'addToCart--favorite-active'
            : 'addToCart--favorite'
        }
        onClick={() => {
          handleClickFavorite();
          handleAddToFavorites(product, setFavoriteStorage);
        }}
      >
        <img
          src={isActiveFavorite ? likeActive : like}
          alt="like"
          className="addToCart--icons"
        />
      </button>
    </div>
  );
};

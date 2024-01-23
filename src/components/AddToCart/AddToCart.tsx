import { useState } from 'react';

import './AddToCart.scss';
import like from '../../icons/like.svg';
import likeActive from '../../icons/like-active.svg';
import { Product } from '../../types/product';
import { handleAddToCart, handleAddToFavorites } from '../../App';

type Props = {
  product: Product,
};

export const AddToCart: React.FC<Props> = ({ product }) => {
  const [icon, setIcon] = useState(like);
  const [isActiveAdd, setIsActiveAdd] = useState(false);
  const [isActiveFavorite, setIsActiveFavorite] = useState(false);

  const handleClickAdd = () => {
    setIsActiveAdd(!isActiveAdd);
  };

  const handleClickFavorite = () => {
    setIsActiveFavorite(!isActiveFavorite);
  };

  const handlerIcons = () => {
    setIcon(
      (currentIcon: string) => (
        currentIcon === like ? likeActive : like),
    );
  };

  return (
    <div className="addToCart">
      <button
        className={
          isActiveAdd ? 'addToCart--active-add' : 'addToCart--add'
        }
        type="submit"
        onClick={() => {
          handleClickAdd();
          handleAddToCart(product);
        }}
      >
        Add to cart
      </button>
      <button
        type="submit"
        className={
          isActiveFavorite
            ? 'addToCart--active-favorite'
            : 'addToCart--favorite'
        }
        onClick={() => {
          handlerIcons();
          handleClickFavorite();
          handleAddToFavorites(product);
        }}
      >
        <img
          src={icon}
          alt="like"
          className="addToCart--icons"
        />
      </button>
    </div>
  );
};

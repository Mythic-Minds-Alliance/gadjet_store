import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import style from './CardColors.module.scss';
import { Product } from '../../types/product';

type Props = {
  product: Product,
};

export const CardColors: React.FC<Props> = ({ product }) => {
  let location = useLocation().pathname;

  switch (product.categoryId) {
    case 1:
      location = '/phones';
      break;
    case 2:
      location = '/tablets';
      break;
    case 3:
      location = '/accessories';
      break;
    default:
      break;
  }

  const productPageLink = `${location}/${product.name}`;

  return (
    <div className={style.CardColors}>
      <div className={style.CardColors__top}>
        <p className={style.CardColors__top__title}>Available colors</p>
        <p className={style.CardColors__top__id}>
          ID:
          {Math.abs(product.id * 143865)}
        </p>
      </div>

      <div className={style.colors__list}>
        {product.colorsavailable.map(colorItem => (
          <div className={style.color__item__wrapper}>
            <Link
              to={{
                pathname: productPageLink,
                search: `?capacity=${product.capacity}&productId=${product.id}&color=${colorItem}`,
              }}
              key={colorItem}
              className={style.color__item}
              style={{ backgroundColor: colorItem }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

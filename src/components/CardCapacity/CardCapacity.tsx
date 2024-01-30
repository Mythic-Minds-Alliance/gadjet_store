import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import style from './CardCapacity.module.scss';
import { Product } from '../../types/product';

type Props = {
  product: Product,
};
export const CardCapacity: React.FC<Props> = ({ product }) => {
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
    <div className={style.CardCapacity}>
      <p className={style.CardCapacity__title}>
        Select capacity
      </p>

      <div className={style.CardCapacity__list}>
        {product.capacitiesavailable
          .map(capacity => parseFloat(capacity))
          .sort((a, b) => a - b)
          .map(capacity => (
            <Link
              to={{
                pathname: productPageLink,
                search: `?capacity=${capacity}GB&productId=${product.id}&color=${product.color}`,
              }}
              key={capacity}
              className={style.CardCapacity__item}
            >
              {`${capacity}GB`}
            </Link>
          ))}
      </div>
    </div>
  );
};

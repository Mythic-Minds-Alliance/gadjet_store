import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import style from './CardCapacity.module.scss';
import { Product } from '../../types/product';

type Props = {
  product: Product,
};

export const CardCapacity: React.FC<Props> = ({ product }) => {
  let location = useLocation().pathname;
  const [selectedCapacity, setSelectedCapacity]
      = useState<number | null>(+product.capacity.toString().slice(0, -2));

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

  const handleCapacityClick = (capacity: number) => {
    setSelectedCapacity(capacity);
  };

  return (
    <div className={style.CardCapacity}>
      <p className={style.CardCapacity__title}>
        Select capacity
      </p>

      <div className={style.CardCapacity__list}>
        {product.capacitiesavailable
          .map(capacity => {
            const value = parseFloat(capacity);

            if (capacity.includes('TB')) {
              return value * 1024;
            }

            return value;
          })
          .sort((a, b) => a - b)
          .map(capacity => {
            const value = capacity < 1024 ? capacity : capacity / 1024;
            const unit = capacity < 1024 ? 'GB' : 'TB';

            return (
              <Link
                to={{
                  pathname: productPageLink,
                  search: `?capacity=${value}${unit}&productId=${product.id}&color=${product.color}`,
                }}
                onClick={() => handleCapacityClick(capacity)}
                key={capacity}
                className={`${style.CardCapacity__item} ${
                  selectedCapacity === capacity ? style.active : ''
                }`}
              >
                {`${capacity}GB`}
              </Link>
            );
          })}
      </div>
    </div>
  );
};

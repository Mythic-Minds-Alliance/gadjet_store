import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import style from './CardCapacity.module.scss';
import { Product } from '../../types/product';
import { getLocation } from '../../utils/helpers';

type Props = {
  product: Product,
};

export const CardCapacity: React.FC<Props> = ({ product }) => {
  const [selectedCapacity, setSelectedCapacity]
      = useState<number | null>(+product.capacity.toString().slice(0, -2));

  const handleCapacityClick = (capacity: number) => {
    setSelectedCapacity(capacity);
  };

  useEffect(() => {
    setSelectedCapacity(+product.capacity.toString().slice(0, -2));
  }, [product]);

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
                  pathname: getLocation(product),
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

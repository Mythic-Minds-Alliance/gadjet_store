import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import style from './CardColors.module.scss';
import { Product } from '../../types/product';
import { getLocation } from '../../utils/helpers';

type Props = {
  product: Product,
};

export const CardColors: React.FC<Props> = ({ product }) => {
  const [selectedColor, setSelectedColor]
      = useState<string | null>(product.color);

  const handleColorClick = (colorItem: string) => {
    setSelectedColor(colorItem);
  };

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
          <div
            key={colorItem}
            className={`${style.color__item__wrapper} ${
              selectedColor === colorItem ? style.active : ''
            }`}
          >
            <Link
              to={{
                pathname: getLocation(product),
                search: `?capacity=${product.capacity}&productId=${product.id}&color=${colorItem}`,
              }}
              onClick={() => handleColorClick(colorItem)}
              className={style.color__item}
              style={{ backgroundColor: colorItem }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import style from './CardColors.module.scss';
import { Product } from '../../types/product';

type Props = {
  product: Product,
};

export const CardColors: React.FC<Props> = ({ product }) => {
  let location = useLocation().pathname;
  const [selectedColor, setSelectedColor]
      = useState<string | null>(product.color);

  useEffect(() => {
    setSelectedColor(product.color);
  }, [product]);

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
              selectedColor === colorItem ? style.active : '' // Use style.active
            }`}
          >
            <Link
              to={{
                pathname: productPageLink,
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

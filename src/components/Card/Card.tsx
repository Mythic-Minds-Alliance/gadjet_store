import './Card.scss';

import { Link } from 'react-router-dom';

import React from 'react';
import { Product } from '../../types/product';
import { DetailsList } from '../DetailsList/DetailsList';
import { AddToCart } from '../AddToCart/AddToCart';
import { CardSeparator } from '../СardSeparator/CardSeparator';
import { CardPrices } from '../CardPrices/CardPrices';
import { SERVER_HOST, getLocation, scrollToTop } from '../../utils/helpers';

type Props = {
  product: Product,
};

export const Card: React.FC<Props> = ({ product }) => {
  const {
    name,
    price,
    priceDiscount,
    images,
  } = product;

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
      location = '/phones';
      break;
  }
  
  return (
    <div className="card">
      <div className="card--top">
        <Link
          to={{
            pathname: getLocation(product),
            search: `?capacity=${product.capacity}&productId=${product.id}&color=${product.color}`,
          }}
          className="card--photo"
          onClick={scrollToTop}
        >
          <img
            src={`${SERVER_HOST}/${images[0]}`}
            alt={`${name}`}
            className="card--image"
          />
        </Link>
      </div>

      <p className="card--title">
        {name}
      </p>

      <CardPrices price={price} priceDiscount={priceDiscount} />

      <div className="card--line">
        <CardSeparator />
      </div>

      <div className="card--bottom">
        <DetailsList
          product={product}
        />
      </div>

      <AddToCart product={product} />
    </div>
  );
};

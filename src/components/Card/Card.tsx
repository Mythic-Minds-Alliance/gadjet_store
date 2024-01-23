import './Card.scss';

import test from '../../images/00.webp';
import { Product } from '../../types/product';
import { DetailsList } from '../DetailsList/DetailsList';
import { AddToCart } from '../AddToCart/AddToCart';
import { CardSeparator } from '../СardSeparator/CardSeparator';

type Props = {
  product: Product,
};

export const Card: React.FC<Props> = ({ product }) => {
  const {
    name,
    price,
    fullPrice,
    // image,
  } = product;

  return (
    <div className="card">
      <div className="card--top">
        <a href="/" className="card--photo">
          <img
            src={test}
            alt={`${name}`}
            className="card--image"
          />
        </a>
      </div>

      <p className="card--title">
        {name}
      </p>

      <div className="card--prices">
        <p className="card--price">
          {`$${price}`}
        </p>
        <strong className="card--price card--price-maxPrice">
          {`$${fullPrice}`}
        </strong>
      </div>
      <CardSeparator />

      <div className="card--bottom">
        <DetailsList
          product={product}
        />
      </div>

      <AddToCart product={product} />
    </div>
  );
};

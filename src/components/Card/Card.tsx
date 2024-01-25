import './Card.scss';

import test from '../../images/00.webp';
import { Product } from '../../types/product';
import { DetailsList } from '../DetailsList/DetailsList';
import { AddToCart } from '../AddToCart/AddToCart';
import { CardSeparator } from '../СardSeparator/CardSeparator';
import { CardPrices } from '../CardPrices/CardPrices';

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

      <CardPrices price={price} fullPrice={fullPrice} />

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

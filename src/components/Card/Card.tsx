import './Card.scss';

import test from '../../images/00.webp';
import { Product } from '../../types/product';
import { DetailsList } from '../DetailsList/DetailsList';
import { AddToCart } from '../AddToCart/AddToCart';

type Props = {
  product: Product,
};

export const Card: React.FC<Props> = ({ product }) => {
  const {
    name,
    price,
    // screen,
    // capacity,
    // ram,
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
      <p className="card--price">
        {`$${price}`}
      </p>
      <p className="card--line" />

      <div className="card--bottom">
        <DetailsList />
      </div>

      <AddToCart />
    </div>
  );
};

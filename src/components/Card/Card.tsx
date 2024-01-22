import './Card.scss';

import like from '../../icons/like.svg';
import { Product } from '../../types/product';

type Props = {
  product: Product,
};

export const Card: React.FC<Props> = ({ product }) => {
  const {
    name,
    price,
    screen,
    capacity,
    ram,
    image,
  } = product;

  return (
    <div className="card">
      <div className="card--top">
        <a href="/" className="card--photo">
          <img
            src={image}
            alt={`${name}`}
            className="card--image"
          />
        </a>
      </div>
      <p className="card--title">
        {name}
      </p>
      <p className="card--price">
        {price}
      </p>
      <p className="card--line" />

      <div className="card--bottom">
        <ul className="card--details">
          <li className="card--details-item">Screen</li>
          <li className="card--details-item">Capacity</li>
          <li className="card--details-item">RAM</li>
        </ul>

        <ul className="card--characteristics">
          <li className="card--characteristics-item">{screen}</li>
          <li className="card--characteristics-item">{capacity}</li>
          <li className="card--characteristics-item">{ram}</li>
        </ul>
      </div>

      <div className="card--buttons">
        <button type="submit">Add to cart</button>
        <button type="submit">
          <img src={like} alt="like" />
        </button>
      </div>
    </div>
  );
};

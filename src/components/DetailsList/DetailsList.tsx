import { Product } from '../../types/product';
import './DetailsList.scss';

type Props = {
  product?: Product,
};

export const DetailsList: React.FC<Props> = ({ product }) => {
  // const {
  //   screen,
  //   capacity,
  //   ram,
  // } = product;

  return (
    <div className="details">
      <ul className="details--list">
        <li className="details--list-item">Screen</li>
        <li className="details--list-item">Capacity</li>
        <li className="details--list-item">RAM</li>
      </ul>
      {(product ? (
        <ul className="details--characteristics">
          <li className="details--characteristics-item">{product.screen}</li>
          <li className="details--characteristics-item">{product.capacity}</li>
          <li className="details--characteristics-item">{product.ram}</li>
        </ul>
      ) : (
        <ul className="details--characteristics">
          <li className="details--characteristics-item">screen</li>
          <li className="details--characteristics-item">capacity</li>
          <li className="details--characteristics-item">ram</li>
        </ul>
      ))}

    </div>
  );
};

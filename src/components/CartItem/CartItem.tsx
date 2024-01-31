import { Link } from 'react-router-dom';
import { useContext } from 'react';
import styles from './CartItem.module.scss';
import { Cross } from '../Cross/Cross';

import { Minus } from '../Minus/Minus';
import plus from '../../images/Plus.svg';
import { CartProduct } from '../../types/product';
import { SERVER_HOST, changeAmount, getLocation } from '../../utils/helpers';

import { DataContext } from '../../App';

type Props = {
  item: CartProduct;
};

export const CartItem: React.FC<Props> = ({ item }) => {
  const { setCartStorage } = useContext(DataContext);

  return (
    <div className={styles.item__container}>
      <div className={styles.item_phone_info}>
        <div className={styles.item__container_close}>
          <Cross item={item} />
        </div>

        <Link
          to={{
            pathname: getLocation(item),
            search: `?capacity=${item.capacity}&productId=${item.id}&color=${item.color}`,
          }}
        >
          <img
            src={`${SERVER_HOST}/${item.images[0]}`}
            className={styles.item__container_phone}
            alt="phone"
          />
        </Link>
        <Link
          to={{
            pathname: getLocation(item),
            search: `?capacity=${item.capacity}&productId=${item.id}&color=${item.color}`,
          }}
        >
          <p className={styles.item__container_model}>
            {item.name}
          </p>
        </Link>
      </div>

      <div className={styles.item_price_info}>
        <div className={styles.item__container_buttons}>
          <button
            type="button"
            aria-label="btn"
            className={styles.item__container_minus}
            onClick={() => {
              changeAmount(item, setCartStorage, 'minus');
            }}
          >
            <Minus />
          </button>

          <span className={styles.item__container_number}>
            {item.quantity}
          </span>

          <button
            type="button"
            className={styles.item__container_plus}
            onClick={() => {
              changeAmount(item, setCartStorage, 'plus');
            }}
          >
            <img src={plus} alt="Plus" />
          </button>
        </div>

        <span className={styles.item__container_price}>
          {`$${(+item.price) * item.quantity}`}
        </span>
      </div>
    </div>
  );
};

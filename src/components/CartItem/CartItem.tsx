import { Link } from 'react-router-dom';
import { useContext } from 'react';
import styles from './CartItem.module.scss';
import { Cross } from '../Cross/Cross';
import TestImg from '../../images/image 8.png';
import { Minus } from '../Minus/Minus';
import plus from '../../images/Plus.svg';
import { CartProduct } from '../../types/product';
import { changeAmount } from '../../utils/helpers';

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
          to="./phones"
        >
          <img
            src={TestImg}
            className={styles.item__container_phone}
            alt="phone"
          />
        </Link>
        <Link
          to="./phones"
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
          {`$${item.price * item.quantity}`}
        </span>
      </div>
    </div>
  );
};

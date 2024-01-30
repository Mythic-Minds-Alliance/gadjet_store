import { Link, useLocation } from 'react-router-dom';
import { useContext } from 'react';
import styles from './CartItem.module.scss';
import { Cross } from '../Cross/Cross';

import { Minus } from '../Minus/Minus';
import plus from '../../images/Plus.svg';
import { CartProduct } from '../../types/product';
import { SERVER_HOST, changeAmount } from '../../utils/helpers';

import { DataContext } from '../../App';

type Props = {
  item: CartProduct;
};

export const CartItem: React.FC<Props> = ({ item }) => {
  const { setCartStorage } = useContext(DataContext);

  let location = useLocation().pathname;

  if (location === '/' || location === '/favorites' || location === '/cart') {
    switch (item.categoryId) {
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
  }

  const productPageLink = `${location}/${item.name}`;

  return (
    <div className={styles.item__container}>
      <div className={styles.item_phone_info}>
        <div className={styles.item__container_close}>
          <Cross item={item} />
        </div>

        <Link
          to={{
            pathname: productPageLink,
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
            pathname: productPageLink,
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

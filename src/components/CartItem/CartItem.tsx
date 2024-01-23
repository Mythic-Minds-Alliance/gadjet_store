import { Link } from 'react-router-dom';
import React from 'react';
import styles from './CartItem.module.scss';
import { Cross } from '../Cross/Cross';
import TestImg from '../../images/image 8.png';
import { Minus } from '../Minus/Minus';
import plus from '../../images/Plus.svg';
import { Product } from '../../types/product';

type Props = {
  item: Product;
};

export const CartItem: React.FC<Props> = ({ item }) => {
  return (
    <div className={styles.item__container}>
      <div className={styles.item_phone_info}>
        <div className={styles.item__container_close}>
          <Cross />
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
            onClick={() => {}}
          >
            <Minus />
          </button>

          <span className={styles.item__container_number}>
            1
          </span>

          <button
            type="button"
            className={styles.item__container_plus}
            onClick={() => {}}
          >
            <img src={plus} alt="Plus" />
          </button>
        </div>

        <span className={styles.item__container_price}>
          {`$${item.price}`}
        </span>
      </div>
    </div>
  );
};

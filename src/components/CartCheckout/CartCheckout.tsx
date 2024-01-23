import React from 'react';
import styles from './CartCheckout.module.scss';
import { CardSeparator } from '../СardSeparator/CardSeparator';

interface CartItem {
  price: number;
}

interface CartCheckoutProps {
  cartStorage: CartItem[];
}

export const CartCheckout: React.FC<CartCheckoutProps> = ({ cartStorage }) => {
  const totalPrice = cartStorage
    .reduce((sum: number, item: CartItem) => sum + item.price, 0);

  return (
    <div className={styles.checkout}>
      <h3 className={styles.checkout__summary}>
        $
        {totalPrice.toFixed(2)}
      </h3>
      <p className={styles.checkout__totalItems}>
        {(cartStorage.length === 1)
          ? (`Total for ${cartStorage.length} item`)
          : (`Total for ${cartStorage.length} items`)}
      </p>

      <CardSeparator />

      <button
        type="button"
        className={styles.checkout__btn}
      >
        Checkout
      </button>
    </div>
  );
};

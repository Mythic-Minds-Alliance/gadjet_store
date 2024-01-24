import React, { useState } from 'react';
import styles from './CartCheckout.module.scss';
import { CardSeparator } from '../СardSeparator/CardSeparator';
import { CheckoutAfterBuy } from '../CheckoutAfterBuy/CheckoutAfterBuy';

interface CartItem {
  price: number;
}

interface CartCheckoutProps {
  cartStorage: CartItem[];
}

export const CartCheckout: React.FC<CartCheckoutProps> = ({ cartStorage }) => {
  const [showThankYou, setShowThankYou] = useState(true);

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
        onClick={() => {
          setShowThankYou(true);
        }}
      >
        Checkout
      </button>

      {showThankYou && (
        <CheckoutAfterBuy />
      )}
    </div>
  );
};

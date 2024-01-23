import styles from './CartCheckout.module.scss';
import { CardSeparator } from '../СardSeparator/CardSeparator';

export const CartCheckout = () => {
  return (
    <div className={styles.checkout}>
      <h3 className={styles.checkout__summary}>$555</h3>
      <p className={styles.checkout__totalItems}>Total for 3 items</p>

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

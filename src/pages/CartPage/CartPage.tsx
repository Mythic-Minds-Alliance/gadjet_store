import { CartItem } from '../../components/CartItem';
import './CartPage.scss';
import { CartCheckout } from '../../components/CartCheckout/CartCheckout';

export const CartPage = () => {
  return (
    <div className="CartPage">
      <h1 className="CartPage--title">Cart</h1>

      <div className="CartPage--section">
        <div className="CartPage--block">
          <CartItem />
          <CartItem />
          <CartItem />
        </div>

        <div className="CartPage--Checkout">
          <CartCheckout />
        </div>
      </div>

    </div>
  );
};

import { useContext } from 'react';
import { CartItem } from '../../components/CartItem';
import './CartPage.scss';
import { CartCheckout } from '../../components/CartCheckout/CartCheckout';

import { DataContext } from '../../App';

export const CartPage = () => {
  const { cartStorage } = useContext(DataContext);

  return (
    <div className="CartPage">
      <h1 className="CartPage--title">Cart</h1>

      <div className="CartPage--section">
        <div className="CartPage--block">
          {cartStorage.map(item => (
            <CartItem item={item} />
          ))}
        </div>

        <div className="CartPage--Checkout">
          <CartCheckout
            cartStorage={cartStorage}
          />
        </div>
      </div>

    </div>
  );
};

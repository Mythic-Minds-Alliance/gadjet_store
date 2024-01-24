import { Link } from 'react-router-dom';
import './CheckoutAfterBuy.scss';

export const CheckoutAfterBuy = () => {
  return (
    <div className="checkoutPage">
      <Link to="/phones" className="checkoutPage__closer">
        X
      </Link>
      <h3>
        Thank you for your purchase
      </h3>

      <p>
        Ваше замовлення № успішно отримано`
      </p>
    </div>

  );
};

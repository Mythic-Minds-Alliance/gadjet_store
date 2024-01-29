import React from 'react';
import { Link } from 'react-router-dom';
import './CheckoutAfterBuy.scss';
import close from '../../images/Close.png';
import { CartProduct } from '../../types/product';
import { SERVER_HOST } from '../../utils/helpers';

interface Props {
  totalPrice: number;
  cartStorage: CartProduct[];
}

export const CheckoutAfterBuy: React.FC<Props> = ({
  totalPrice,
  cartStorage,
}) => {
  const orderNumber = Math.floor(Math.random() * 10000) + 1;

  return (
    <div className="page">
      <div className="checkoutPage">
        <Link to="/phones" className="checkoutPage__closer">
          <img
            src={close}
            className="checkoutPage__closer--img"
            alt="phone"
          />
        </Link>
        <h4 className="checkoutPage__h3">
          thank you for your order
        </h4>

        <p className="checkoutPage__txt">
          Your order has been successfully received.
        </p>

        <div className="orderContainer">
          {cartStorage.map((product) => (
            <div key={product.id} className="orderItem">
              <div className="productInfo">
                <img
                  src={`${SERVER_HOST}/${product.images[0]}`}
                  alt={product.name}
                  className="productImage"
                />
                <div className="productDescription">
                  <p>{product.quantity > 1 ? `${product.name} x ${product.quantity} items` : product.name}</p>
                  <p>
                    $
                    {`${(+product.price).toFixed(2)} `}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="orderTotal">
          Total: $
          {totalPrice.toFixed(2)}
        </p>

        <p className="orderNumber">
          {`Order Number: №${orderNumber}`}
        </p>

        <Link to="/phones" className="checkoutPage__closerButton">
          Close
        </Link>

      </div>
    </div>
  );
};

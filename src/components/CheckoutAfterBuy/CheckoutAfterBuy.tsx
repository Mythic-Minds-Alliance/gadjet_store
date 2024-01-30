import React from 'react';
import { Link, useLocation } from 'react-router-dom';
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

  let location = useLocation().pathname;

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
          {cartStorage.map((product) => {
            if (location === '/' || location === '/favorites') {
              switch (product.categoryId) {
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

            const productPageLink = `${location}/${product.name}`;

            return (
              <div key={product.id} className="orderItem">
                <div className="productInfo">
                  <Link to={{
                    pathname: productPageLink,
                    search: `?capacity=${product.capacity}&productId=${product.id}&color=${product.color}`,
                  }}
                  >
                    <img
                      src={`${SERVER_HOST}/${product.images[0]}`}
                      alt={product.name}
                      className="productImage"
                    />
                  </Link>
                  <div className="productDescription">
                    <Link to={{
                      pathname: productPageLink,
                      search: `?capacity=${product.capacity}&productId=${product.id}&color=${product.color}`,
                    }}
                    >
                      <p>{product.quantity > 1 ? `${product.name} x ${product.quantity} items` : product.name}</p>
                    </Link>
                    <p>
                      $
                      {`${(+product.price).toFixed(2)} `}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
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

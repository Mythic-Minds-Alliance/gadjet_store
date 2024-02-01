import { useContext } from 'react';
import { Link } from 'react-router-dom';
import './CheckoutAfterBuy.scss';
import close from '../../icons/Close.png';
import { CartProduct } from '../../types/product';
import { SERVER_HOST, getLocation } from '../../utils/helpers';
import check from '../../icons/approval-40.png';
import { DataContext } from '../../App';

interface Props {
  totalPrice: number;
  cartStorage: CartProduct[];
}

export const CheckoutAfterBuy: React.FC<Props> = ({
  totalPrice,
  cartStorage,
}) => {
  const { setCartStorage } = useContext(DataContext);
  const orderNumber = Math.floor(Math.random() * 10000) + 1;

  const handleClearCart = () => {
    setCartStorage([]);
    localStorage.removeItem('cart');
  };

  document.body.style.overflow = 'hidden';

  return (
    <div className="fone">
      <div className="checkout">
        <Link
          to="/phones"
          className="checkout__closer"
          onClick={handleClearCart}
        >
          <img
            src={close}
            className="checkout__closer--img"
            alt="phone"
          />
        </Link>
        <div>
          <img src={check} alt="check" />
        </div>

        <p className="checkout__txt">
          thank you for your order
        </p>

        <div className="check">
          {cartStorage.map((product) => {
            return (
              <div key={product.name} className="product">
                <div className="product_info">
                  <Link
                    to={{
                      pathname: getLocation(product),
                      search: `?capacity=${product.capacity}&productId=${product.id}&color=${product.color}`,
                    }}
                    onClick={handleClearCart}
                  >
                    <img
                      src={`${SERVER_HOST}/${product.images[0]}`}
                      alt={product.name}
                      className="product_image"
                    />
                  </Link>

                  <p className="product_count">
                    {product.quantity > 1 && ` x ${product.quantity}`}
                  </p>

                  <div className="product_description">
                    <Link
                      className="product_name"
                      onClick={handleClearCart}
                      to={{
                        pathname: getLocation(product),
                        search: `?capacity=${product.capacity}&productId=${product.id}&color=${product.color}`,
                      }}
                    >
                      <p>{product.name}</p>
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

        <div className="order">
          <p>
            {`Total: $  
          ${totalPrice.toFixed(2)}`}
          </p>

          <div className="order_num">
            <p className="order_txt">
              Order Number:
            </p>

            <p className="order_txt">
              {`№${orderNumber}`}
            </p>
          </div>
        </div>

        <Link
          to="/phones"
          className="checkout__closerButton"
          onClick={handleClearCart}
        >
          Close
        </Link>

      </div>
    </div>
  );
};

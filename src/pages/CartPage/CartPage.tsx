import { CartItem } from '../../components/CartItem';

export const CartPage = () => {
  return (
    <>
      <h1 className="CardPage--title">Cart</h1>

      <div className="CardPage">
        <CartItem />
      </div>
    </>
  );
};

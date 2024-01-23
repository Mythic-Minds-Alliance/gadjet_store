import './AddToCart.scss';
import like from '../../icons/like.svg';
import { Product } from '../../types/product';
import { handleAddToCart, handleAddToFavorites } from '../../App';

type Props = {
  product: Product,
};

export const AddToCart: React.FC<Props> = ({ product }) => {
  return (
    <div className="addToCart">
      <button
        className="addToCart--add"
        type="submit"
        onClick={() => handleAddToCart(product)}
      >
        Add to cart
      </button>
      <button
        type="submit"
        className="addToCard--favorite"
        onClick={() => handleAddToFavorites(product)}
      >
        <img src={like} alt="like" />
      </button>
    </div>
  );
};

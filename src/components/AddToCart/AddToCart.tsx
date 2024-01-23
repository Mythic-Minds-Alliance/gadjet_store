import './AddToCart.scss';
import like from '../../icons/like.svg';

export const AddToCart = () => {
  return (
    <div className="addToCart">
      <button className="addToCart--add" type="submit">Add to cart</button>
      <button type="submit" className="addToCard--favorite">
        <img src={like} alt="like" />
      </button>
    </div>
  );
};

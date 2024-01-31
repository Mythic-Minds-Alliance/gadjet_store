import './CardPrices.scss';

type Props = {
  price: string,
  priceDiscount: string,
};

export const CardPrices: React.FC<Props> = ({ price, priceDiscount }) => {
  return (
    <div className="card--price">
      {+priceDiscount !== 0 ? (
        <>
          <p className="card--price-current">
            {`$${priceDiscount}`}
          </p>
          <strong className="card--price-maxPrice">
            {`$${price}`}
          </strong>
        </>

      ) : (
        <p className="card--price-current">
          {`$${price}`}
        </p>
      )}

    </div>
  );
};

import './CardPrices.scss';

type Props = {
  price: string,
  fullPrice: string,
};

export const CardPrices: React.FC<Props> = ({ price, fullPrice }) => {
  return (
    <div className="card--price">
      {+price !== 0 ? (
        <>
          <p className="card--price-current">
            {`$${price}`}
          </p>
          <strong className="card--price-maxPrice">
            {`$${fullPrice}`}
          </strong>
        </>

      ) : (
        <p className="card--price-current">
          {`$${fullPrice}`}
        </p>
      )}

    </div>
  );
};

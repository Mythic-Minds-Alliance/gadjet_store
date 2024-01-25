import './CardPrices.scss';

type Props = {
  price: number,
  fullPrice: number,
};

export const CardPrices: React.FC<Props> = ({ price, fullPrice }) => {
  return (
    <div className="card--price">
      <p className="card--price-current">
        {`$${price}`}
      </p>
      <strong className="card--price-maxPrice">
        {`$${fullPrice}`}
      </strong>
    </div>
  );
};

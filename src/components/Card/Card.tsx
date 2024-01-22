import './Card.scss';

export const Card = () => {
  //

  return (
    <div className="card">
      <div className="card--top" />

      <p className="card--title">
        Apple iPhone 14 Pro 128GB Deep Purple (MQ0G3)
      </p>
      <p className="card--price">$999</p>
      <p className="card--line" />
      <div className="card--bottom">
        <ul className="card--details">
          <li className="card--details-item">Screen</li>
          <li className="card--details-item">Capacity</li>
          <li className="card--details-item">RAM</li>
        </ul>
        <ul className="card--characteristics">
          <li className="card--characteristics-item">6.1” OLED</li>
          <li className="card--characteristics-item">128 GB</li>
          <li className="card--characteristics-item">6 GB</li>
        </ul>
      </div>
      <div className="card--buttons" />
    </div>
  );
};

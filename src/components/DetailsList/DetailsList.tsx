import './DetailsList.scss';

export const DetailsList = () => {
  return (
    <div className="details">
      <ul className="details--list">
        <li className="details--list-item">Screen</li>
        <li className="details--list-item">Capacity</li>
        <li className="details--list-item">RAM</li>
      </ul>

      <ul className="details--characteristics">
        {/* <li className="details--characteristics-item">{screen}</li>
        <li className="details--characteristics-item">{capacity}</li>
        <li className="details--characteristics-item">{ram}</li> */}
      </ul>
    </div>
  );
};

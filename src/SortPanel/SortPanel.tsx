import { ChangeEvent } from 'react';
import './SortPanel.scss';

type Props = {
  onSortField: (event: ChangeEvent<HTMLSelectElement>) => void;
  selectedSortField: string;
  selectedSortOrder: string;
  onSelectOrder: (event: ChangeEvent<HTMLSelectElement>) => void;
  onSelectPerPage: (event: ChangeEvent<HTMLSelectElement>) => void;
  postPerPage: number;
};

const sortFields: string[] = ['Years', 'Price', 'Screen'];
const sortCountOfPage: number[] = [12, 24, 36];
const sortType: string[] = ['Ascending', 'Descending'];

export const SortPanel: React.FC<Props> = ({
  onSortField,
  selectedSortField,
  selectedSortOrder,
  onSelectOrder,
  onSelectPerPage,
  postPerPage,
}) => {
  return (
    <div className="SortPanel">
      <div>
        <p className="SortPanel--title">Sort by</p>
        <select
          className="SortPanel--fields"
          value={selectedSortField}
          onChange={onSortField}
        >
          {sortFields.map((sortBy) => (
            <option key={sortBy} value={sortBy}>
              {sortBy}
            </option>
          ))}
        </select>
      </div>

      <div>
        <p className="SortPanel--title">Items on page</p>
        <select
          className="SortPanel--fields"
          value={postPerPage}
          onChange={onSelectPerPage}
        >
          {sortCountOfPage.map((count) => (
            <option key={count} value={count}>
              {count}
            </option>
          ))}
        </select>
      </div>

      <div>
        <p className="SortPanel--title">Order</p>
        <select
          className="SortPanel--fields"
          value={selectedSortOrder}
          onChange={onSelectOrder}
        >
          {sortType.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

import { useState } from 'react';
import './SortPanel.scss';
import { Product } from '../types/product';

const sortFields: string[] = ['Years', 'Price', 'Screen'];
const sortCountOfPage: string[] = ['12', '24', '36'];

type Props = {
  productList: Product[];
};

export const SortPanel: React.FC<Props> = () => {
  const [
    selectedSortField, setSelectedSortField,
  ] = useState(sortFields[0]);
  const [
    selectedCountPerPage, setSelectedCountPerPage,
  ] = useState(sortCountOfPage[0]);

  const handleSortFieldChange = (
    event: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    setSelectedSortField(event.target.value);
  };

  const handleCountPerPageChange = (
    event: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    setSelectedCountPerPage(event.target.value);
  };

  return (
    <div className="SortPanel">
      <div>
        <p className="SortPanel--title">Sort by</p>
        <select
          className="SortPanel--fields"
          value={selectedSortField}
          onChange={handleSortFieldChange}
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
          value={selectedCountPerPage}
          onChange={handleCountPerPageChange}
        >
          {sortCountOfPage.map((count) => (
            <option key={count} value={count}>
              {count}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

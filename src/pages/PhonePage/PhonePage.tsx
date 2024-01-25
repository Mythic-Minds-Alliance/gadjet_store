import { useContext, useState } from 'react';

import './PhonePage.scss';
import { Card } from '../../components/Card/Card';
import { DataContext } from '../../App';
import { Loader } from '../../components/Loader';
import { SortPanel } from '../../SortPanel/SortPanel';
import { sortProductList } from '../../utils/helpers';

export const PhonePage = () => {
  const [
    selectedSortField, setSelectedSortField,
  ] = useState('Years');
  const [sortOrder, setSortOrder] = useState('Ascending');

  const handleSortFieldChange = (
    event: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    setSelectedSortField(event.target.value);
  };

  const handleSortOrder = (
    event: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    setSortOrder(event.target.value);
  };

  const {
    productList,
    isLoading,
  } = useContext(DataContext);

  const visibleList = sortProductList(
    productList,
    selectedSortField,
    sortOrder,
  );

  return (
    <div className="PhonePage">
      <h1 className="PhonePage--title">
        Mobile phones
      </h1>
      <p className="PhonePage--phoneCount">
        {`${visibleList.length} models`}
      </p>

      <SortPanel
        onSortField={handleSortFieldChange}
        selectedSortField={selectedSortField}
        selectedSortOrder={sortOrder}
        onSelectOrder={handleSortOrder}
      />

      {isLoading ? (
        <Loader />
      ) : (
        <div className="PhonePage--container">
          {visibleList.map(product => (
            <Card
              key={product.id}
              product={product}
            />
          ))}
        </div>
      )}
    </div>
  );
};

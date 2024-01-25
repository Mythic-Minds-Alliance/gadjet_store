import { useContext, useState } from 'react';

import './TabletsPage.scss';
import { Card } from '../../components/Card/Card';
import { DataContext } from '../../App';
import { Loader } from '../../components/Loader';
import { SortPanel } from '../../SortPanel/SortPanel';
import { sortProductList } from '../../utils/helpers';
import { Pagination } from '../../components/Pagination/Pagination';

export const TabletsPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(12);

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

  const handleSortPostCount = (
    event: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    setPostPerPage(+event.target.value);
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

  const indexOfLastItem = currentPage * postPerPage;
  const indexOfFirstItem = indexOfLastItem - postPerPage;
  const currentItems = visibleList.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="TabletsPage">
      <h1 className="TabletsPage--title">
        Tablets
      </h1>
      <p className="TabletsPage--tabletsCount">
        {`${visibleList.length} models`}
      </p>

      <SortPanel
        onSortField={handleSortFieldChange}
        selectedSortField={selectedSortField}
        selectedSortOrder={sortOrder}
        onSelectOrder={handleSortOrder}
        onSelectPerPage={handleSortPostCount}
        postPerPage={postPerPage}
      />

      {isLoading ? (
        <Loader />
      ) : (
        <div className="TabletsPage--container">
          {currentItems.map(product => (
            <Card
              key={product.id}
              product={product}
            />
          ))}
        </div>
      )}

      <Pagination
        postPorPage={postPerPage}
        totalPost={visibleList.length}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

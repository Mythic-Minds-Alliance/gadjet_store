import React, { useEffect, useState } from 'react';
import axios from 'axios';
import style from '../../assets/catalogue.module.scss';
import { Card } from '../../components/Card/Card';
import { Loader } from '../../components/Loader';
import { SortPanel } from '../../components/SortPanel/SortPanel';
import { sortProductList } from '../../utils/helpers';
import { Pagination } from '../../components/Pagination/Pagination';

export const TabletsPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(12);
  const [tabletsList, setTabletsList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios
          .get('http://localhost:3005/products?categoryId=2');

        setTabletsList(response.data);
      } catch (error) {
        throw new Error('error when fetching data from API');
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

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

  const visibleList = sortProductList(
    tabletsList,
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
    <div className={style.CataloguePage}>
      <h1 className={style.CataloguePage__title}>
        Tablets
      </h1>
      <p className={style.CataloguePage__CatalogueCount}>
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
        <div className={style.CataloguePage__container}>
          {currentItems.map(product => (
            <Card
              key={product.name}
              product={product}
            />
          ))}
        </div>
      )}

      <Pagination
        postPorPage={postPerPage}
        totalPost={visibleList.length}
        onPageChange={handlePageChange}
        currentPage={currentPage}
      />
    </div>
  );
};

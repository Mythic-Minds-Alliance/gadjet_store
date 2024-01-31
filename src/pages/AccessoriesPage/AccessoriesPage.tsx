import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import axios from 'axios';
import style from '../../assets/catalogue.module.scss';
import { Card } from '../../components/Card/Card';
import { Loader } from '../../components/Loader';
import { SortPanel } from '../../components/SortPanel/SortPanel';
import { sortProductList } from '../../utils/helpers';
import { Pagination } from '../../components/Pagination/Pagination';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import { Search } from '../../components/SearchComponent/Search';

export const AccessoriesPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(12);
  const [accessoriesList, setAccessoriesList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState<string>('');

  const [serchParams, setSearchParams] = useSearchParams();
  const currentUrl = new URLSearchParams(serchParams);
  const sortBy = currentUrl.get('sortBy') || 'year';
  const order = currentUrl.get('sort') || 'DESC';

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios
          .get(`https://gadjets-store.onrender.com/products?categoryId=3&sort=${order}&sortBy=${sortBy}`);

        setAccessoriesList(response.data);
      } catch (error) {
        throw new Error('error when fetching data from API');
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [sortBy, order]);

  const [
    selectedSortField, setSelectedSortField,
  ] = useState('Years');
  const [sortOrder, setSortOrder] = useState('Ascending');

  const handleSortFieldChange = (
    event: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    setSelectedSortField(event.target.value);
    currentUrl.set('sortBy', event.target.value);
    setSearchParams(currentUrl);
  };

  const handleSortOrder = (
    event: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    setSortOrder(event.target.value);
    currentUrl.set('sort', event.target.value);
    setSearchParams(currentUrl);
  };

  const handleSortPostCount = (
    event: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    setPostPerPage(+event.target.value);
  };

  const visibleList = sortProductList(
    accessoriesList,
    selectedSortField,
    order,
    searchQuery,
  );

  const indexOfLastItem = currentPage * postPerPage;
  const indexOfFirstItem = indexOfLastItem - postPerPage;
  const currentItems = visibleList.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className={style.CataloguePage}>
      <Breadcrumbs />

      <h1 className={style.CataloguePage__title}>
        Accessories Page
      </h1>

      {isLoading ? (
        <Loader />
      ) : (
        <>
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

          <Search
            setSearchQuery={setSearchQuery}
            searchQuery={searchQuery}
          />
          <div className={style.CataloguePage__container}>
            {currentItems.map(product => (
              <Card
                key={product.name}
                product={product}
              />
            ))}
          </div>
          <Pagination
            postPorPage={postPerPage}
            totalPost={visibleList.length}
            onPageChange={handlePageChange}
            currentPage={currentPage}
          />
        </>
      )}
    </div>
  );
};

import axios from 'axios';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import {
  createContext, useEffect, useState,
}
  from 'react';
import { Product } from './types/product';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header';
import style from './MainContainer.module.scss';
import { SERVER_HOST } from './utils/helpers';

import { RootState } from './store';

interface DataContextType {
  productList: Product[];
  isLoading: boolean;
}

export const DataContext = createContext<DataContextType>({
  productList: [],
  isLoading: true,
});

export const App = () => {
  const cartStorage = useSelector((state: RootState) => state.cart.list);
  const favoritesStorage = useSelector(
    (state: RootState) => state.favorites.list,
  );

  const [productList, setProductList] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  if (!localStorage.getItem('cart')) {
    localStorage.setItem('cart', '[]');
  }

  if (!localStorage.getItem('favorites')) {
    localStorage.setItem('favorites', '[]');
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios
          .get(`${SERVER_HOST}/products`);

        setProductList(response.data);
      } catch (error) {
        throw new Error('error when fetching data from API');
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <DataContext.Provider value={{
      productList,
      isLoading,
    }}
    >
      <div className={style.app}>
        <Header
          cartCount={cartStorage.length}
          favoriteCount={favoritesStorage.length}
        />
        <div data-cy="app" className={style.MainContainer}>

          <Outlet />
        </div>

        <Footer />
      </div>
    </DataContext.Provider>
  );
};

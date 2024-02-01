import axios from 'axios';
import { Outlet } from 'react-router-dom';
import {
  Dispatch, SetStateAction,
  createContext, useEffect, useState,
}
  from 'react';
import { CartProduct, Product } from './types/product';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header';
import style from './MainContainer.module.scss';
import { SERVER_HOST } from './utils/helpers';

interface DataContextType {
  productList: Product[];
  isLoading: boolean;
  cartStorage: CartProduct[];
  favoriteStorage: Product[];
  setFavoriteStorage: Dispatch<SetStateAction<Product[]>>;
  setCartStorage: Dispatch<SetStateAction<CartProduct[]>>;
}

export const DataContext = createContext<DataContextType>({
  productList: [],
  isLoading: true,
  cartStorage: [],
  favoriteStorage: [],
  setFavoriteStorage: () => { },
  setCartStorage: () => { },
});

export const App = () => {
  const [productList, setProductList] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [cartStorage, setCartStorage] = useState<CartProduct[]>([]);
  const [favoriteStorage, setFavoriteStorage] = useState<Product[]>([]);

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

        setCartStorage(JSON.parse(localStorage.getItem('cart') || '[]'));
        setFavoriteStorage(JSON.parse(
          localStorage.getItem('favorites') || '[]',
        ));
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
      cartStorage,
      favoriteStorage,
      setCartStorage,
      setFavoriteStorage,
    }}
    >
      <div className={style.app}>
        <Header
          cartCount={cartStorage.length}
          favoriteCount={favoriteStorage.length}
        />
        <div data-cy="app" className={style.MainContainer}>

          <Outlet />
        </div>

        <Footer />
      </div>
    </DataContext.Provider>
  );
};

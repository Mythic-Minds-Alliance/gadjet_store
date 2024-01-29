import { Outlet } from 'react-router-dom';
import {
  Dispatch, SetStateAction,
  createContext, useEffect, useState,
}
  from 'react';
import { CartProduct, Product } from './types/product';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header';
import { Breadcrumbs } from './components/Breadcrumbs';
import style from './MainContainer.module.scss';

interface DataContextType {
  isLoading: boolean;
  cartStorage: CartProduct[];
  favoriteStorage: Product[];
  setFavoriteStorage: Dispatch<SetStateAction<Product[]>>;
  setCartStorage: Dispatch<SetStateAction<CartProduct[]>>;
}

export const DataContext = createContext<DataContextType>({
  isLoading: true,
  cartStorage: [],
  favoriteStorage: [],
  setFavoriteStorage: () => { },
  setCartStorage: () => { },
});

export const App = () => {
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

          <Breadcrumbs />
          <Outlet />
        </div>

        <Footer />
      </div>
    </DataContext.Provider>
  );
};

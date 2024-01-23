import axios from 'axios';
import { Outlet } from 'react-router-dom';
import {
  Dispatch, SetStateAction,
  createContext, useEffect, useState,
}
  from 'react';
import { Product } from './types/product';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header';

interface DataContextType {
  productList: Product[];
  isLoading: boolean;
  cartStorage: Product[];
  favoriteStorage: Product[];
  setFavoriteStorage: Dispatch<SetStateAction<Product[]>>;
  setCartStorage: Dispatch<SetStateAction<Product[]>>;
}

export const DataContext = createContext<DataContextType>({
  productList: [],
  isLoading: true,
  cartStorage: [],
  favoriteStorage: [],
  setFavoriteStorage: () => { },
  setCartStorage: () => { },
});

export function handleAddToCart(item: Product,
  setCartStorage: React.Dispatch<React.SetStateAction<Product[]>>): void {
  try {
    const currentCart: Product[]
      = JSON.parse(localStorage.getItem('cart') || '[]');

    const isItemInCart = currentCart.some(product => product.id === item.id);

    if (isItemInCart) {
      const updatedCart = currentCart.filter(product => product.id !== item.id);

      localStorage.setItem('cart', JSON.stringify(updatedCart));
      setCartStorage(updatedCart);

      return;
    }

    const updatedCart = [...currentCart, item];

    localStorage.setItem('cart', JSON.stringify(updatedCart));
    setCartStorage(updatedCart);
  } catch (error) {
    throw new Error('Error updating cart data');
  }
}

export function handleAddToFavorites(item: Product,
  setFavoriteStorage: React.Dispatch<React.SetStateAction<Product[]>>): void {
  try {
    const currentFavorites: Product[]
      = JSON.parse(localStorage.getItem('favorites') || '[]');

    const isItemInFavorites
      = currentFavorites.some(product => product.id === item.id);

    if (isItemInFavorites) {
      const updatedFavorites
        = currentFavorites.filter(product => product.id !== item.id);

      localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
      setFavoriteStorage(updatedFavorites);

      return;
    }

    const updatedFavorites = [...currentFavorites, item];

    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    setFavoriteStorage(updatedFavorites);
  } catch (error) {
    throw new Error('Error updating favorites data');
  }
}

export const App = () => {
  const [productList, setProductList] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [cartStorage, setCartStorage] = useState<Product[]>([]);
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
        const response = await axios.get('http://localhost:3005/products');

        setProductList(response.data);

        setCartStorage(JSON.parse(localStorage.getItem('cart') || '[]'));
        setFavoriteStorage(JSON.parse(
          localStorage.getItem('favorites') || '[]',
        ));
      } catch (error) {
        throw new Error('error');
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
      <div data-cy="app">
        <Header
          cartCount={cartStorage.length}
          favoriteCount={favoriteStorage.length}
        />
        <Outlet />
        <Footer />
      </div>
    </DataContext.Provider>
  );
};

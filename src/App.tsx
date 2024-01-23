import axios from 'axios';
import { Outlet } from 'react-router-dom';
import { createContext, useEffect, useState } from 'react';
import { Header } from './components/Header/Header';
import { Product } from './types/product';
import { Footer } from './components/Footer/Footer';

interface DataContextType {
  productList: Product[];
  isLoading: boolean;
  cart: Product[];
  favorites: Product[];
}

export const DataContext = createContext<DataContextType>({
  productList: [],
  isLoading: true,
  cart: [],
  favorites: [],
});

export function handleAddToCart(item: Product): void {
  if (!localStorage.getItem('cart')) {
    localStorage.setItem('cart', '[]');
  }

  try {
    const currentCart: Product[]
      = JSON.parse(localStorage.getItem('cart') || '[]');

    const isItemInCart = currentCart.some(product => product.id === item.id);

    if (isItemInCart) {
      localStorage
        .setItem('cart', JSON.stringify(currentCart
          .filter(product => product.id !== item.id)));

      return;
    }

    const updatedCart = [...currentCart, item];

    localStorage.setItem('cart', JSON.stringify(updatedCart));
  } catch (error) {
    throw new Error('error');
  }
}

export function handleAddToFavorites(item: Product): void {
  if (!localStorage.getItem('favorites')) {
    localStorage.setItem('favorites', '[]');
  }

  try {
    const currentFavorites: Product[]
      = JSON.parse(localStorage.getItem('favorites') || '[]');

    const isItemInFavorites
      = currentFavorites.some(product => product.id === item.id);

    if (isItemInFavorites) {
      localStorage
        .setItem('favorites', JSON.stringify(currentFavorites
          .filter(product => product.id !== item.id)));

      return;
    }

    const updatedFavorites = [...currentFavorites, item];

    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  } catch (error) {
    throw new Error('error');
  }
}

export const App = () => {
  const [productList, setProductList] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  if (!localStorage.getItem('cart')) {
    localStorage.setItem('cart', '[]');
  }

  if (!localStorage.getItem('favorites')) {
    localStorage.setItem('favorites', '[]');
  }

  const cart = JSON.parse(localStorage.getItem('cart') || '[]');
  const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3005/products');

        setProductList(response.data);
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
      productList, isLoading, cart, favorites,
    }}
    >
      <div data-cy="app">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </DataContext.Provider>
  );
};

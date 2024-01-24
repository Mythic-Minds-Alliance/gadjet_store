import { FC, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Product } from '../types/product';

export const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};

export const generateId = () => Math.floor(Math.random() * 10001);

export const PageToTop: FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

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

    const itemToAdd = { ...item, quantity: 1 };

    const updatedCart = [...currentCart, itemToAdd];

    localStorage.setItem('cart', JSON.stringify(updatedCart));
    setCartStorage(updatedCart);
  } catch (error) {
    throw new Error('Error updating cart data');
  }
}

export function handleRemoveFromCart(item: Product,
  setCartStorage: React.Dispatch<React.SetStateAction<Product[]>>): void {
  try {
    const currentCart: Product[]
      = JSON.parse(localStorage.getItem('cart') || '[]');

    const updatedCart = currentCart.filter(product => product.id !== item.id);

    localStorage.setItem('cart', JSON.stringify(updatedCart));
    setCartStorage(updatedCart);

    localStorage.setItem('cart', JSON.stringify(updatedCart));
    setCartStorage(updatedCart);
  } catch (error) {
    throw new Error('Error removing cart data');
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

export function handleRemoveFromFavorites(item: Product,
  setFavoriteStorage: React.Dispatch<React.SetStateAction<Product[]>>): void {
  try {
    const currentFavorites: Product[]
      = JSON.parse(localStorage.getItem('favorites') || '[]');

    const updatedFavorites
      = currentFavorites.filter(product => product.id !== item.id);

    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    setFavoriteStorage(updatedFavorites);

    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    setFavoriteStorage(updatedFavorites);
  } catch (error) {
    throw new Error('Error updating favorites data');
  }
}

export function sortProductList(
  product: Product[],
  sortBy: string,
  // pageCount: string,
  order: string,
) {
  let preparedList = [...product];

  switch (sortBy) {
    case 'Years':
      if (order === 'Ascending') {
        preparedList = preparedList.sort((a, b) => a.year - b.year);
      } else {
        preparedList = preparedList.sort((a, b) => b.year - a.year);
      }

      break;

    case 'Price':
      if (order === 'Ascending') {
        preparedList = preparedList.sort((a, b) => a.price - b.price);
      } else {
        preparedList = preparedList.sort((a, b) => b.price - a.price);
      }

      break;

    case 'Screen':
      if (order === 'Ascending') {
        preparedList = preparedList.sort((a, b) => {
          const aScreenSize = parseFloat(a.screen);
          const bScreenSize = parseFloat(b.screen);

          return aScreenSize - bScreenSize;
        });
      } else {
        preparedList = preparedList.sort((a, b) => {
          const aScreenSize = parseFloat(a.screen);
          const bScreenSize = parseFloat(b.screen);

          return bScreenSize - aScreenSize;
        });
      }

      break;

    default:
      break;
  }

  return preparedList;
}

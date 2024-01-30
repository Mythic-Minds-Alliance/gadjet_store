/* eslint-disable max-len */
import { FC, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { CartProduct, Product } from '../types/product';

export const SERVER_HOST = 'http://localhost:3005/';

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
  setCartStorage: React.Dispatch<React.SetStateAction<CartProduct[]>>): void {
  try {
    const currentCart: CartProduct[]
      = JSON.parse(localStorage.getItem('cart') || '[]');

    const isItemInCart = currentCart.some(product => product.name === item.name);

    if (isItemInCart) {
      const updatedCart = currentCart.filter(product => product.name !== item.name);

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
  setCartStorage: React.Dispatch<React.SetStateAction<CartProduct[]>>): void {
  try {
    const currentCart: CartProduct[]
      = JSON.parse(localStorage.getItem('cart') || '[]');

    const updatedCart = currentCart.filter(product => product.name !== item.name);

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
      = currentFavorites.some(product => product.name === item.name);

    if (isItemInFavorites) {
      const updatedFavorites
        = currentFavorites.filter(product => product.name !== item.name);

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
      = currentFavorites.filter(product => product.name !== item.name);

    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    setFavoriteStorage(updatedFavorites);
  } catch (error) {
    throw new Error('Error updating favorites data');
  }
}

export function changeAmount(item: CartProduct,
  setCartStorage: React.Dispatch<React.SetStateAction<CartProduct[]>>,
  action: string): void {
  try {
    const currentCart: CartProduct[]
      = JSON.parse(localStorage.getItem('cart') || '[]');

    const isItemInCart = currentCart.find(product => product.name === item.name);

    if (!isItemInCart) {
      throw new Error('item doesn`t exist');
    }

    const newQuantity = isItemInCart?.quantity
      ? isItemInCart?.quantity + 1
      : 1;

    switch (action) {
      case 'plus':
        if (isItemInCart) {
          const updatedCart = currentCart.map(product => {
            return product.name === isItemInCart.name
              ? { ...product, quantity: newQuantity }
              : { ...product };
          });

          localStorage.setItem('cart', JSON.stringify(updatedCart));
          setCartStorage(updatedCart);
        }

        break;
      case 'minus':
        if (isItemInCart?.quantity === 1) {
          const updatedCart = currentCart
            .filter(product => product.name !== isItemInCart.name);

          localStorage.setItem('cart', JSON.stringify(updatedCart));
          setCartStorage(updatedCart);
        } else {
          const updatedCart = currentCart.map(product => {
            return product.name === isItemInCart.name
              ? { ...product, quantity: product.quantity - 1 }
              : { ...product };
          });

          localStorage.setItem('cart', JSON.stringify(updatedCart));
          setCartStorage(updatedCart);
        }

        break;

      default:
        throw new Error('error');
    }
  } catch (error) {
    throw new Error('Error updating cart data');
  }
}

export function sortProductList(
  product: Product[],
  sortBy: string,
  order: string,
  query?: string,
) {
  let preparedList = [...product];

  switch (sortBy) {
    case 'Years':
      if (order === 'Ascending') {
        preparedList = preparedList.sort((a, b) => +a.year - +b.year);
      } else {
        preparedList = preparedList.sort((a, b) => +b.year - +a.year);
      }

      break;

    case 'Price':
      if (order === 'Ascending') {
        preparedList = preparedList.sort((a, b) => +a.price - +b.price);
      } else {
        preparedList = preparedList.sort((a, b) => +b.price - +a.price);
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

  if (query) {
    preparedList = preparedList.filter(item => item.name.toLowerCase().includes(query.toLowerCase()));
  }

  return preparedList;
}

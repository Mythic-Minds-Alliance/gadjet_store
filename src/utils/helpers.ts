/* eslint-disable max-len */
import { FC, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { CartProduct, Product } from '../types/product';

export const SERVER_HOST = 'https://gadjets-store.onrender.com/';

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
        if (isItemInCart) {
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

export function searchProductList(
  product: Product[],
  query?: string,
) {
  let preparedList = [...product];

  if (query) {
    preparedList = preparedList.filter(
      item => item.name.toLowerCase().includes(query.toLowerCase().trim()),
    );
  }

  return preparedList;
}

export function getLocation(product: Product) {
  let location = '';

  switch (product.categoryId) {
    case 1:
      location = '/phones';
      break;
    case 2:
      location = '/tablets';
      break;
    case 3:
      location = '/accessories';
      break;
    default:
      location = '/';
      break;
  }

  const productPageLink = `${location}/${product.name}`;

  return productPageLink;
}

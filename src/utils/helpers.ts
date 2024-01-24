import { FC, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { CartProduct, Product } from '../types/product';

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
  setCartStorage: React.Dispatch<React.SetStateAction<CartProduct[]>>): void {
  try {
    const currentCart: CartProduct[]
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

export function changeAmount(item: CartProduct,
  setCartStorage: React.Dispatch<React.SetStateAction<CartProduct[]>>): void {
  try {
    const currentCart: CartProduct[]
      = JSON.parse(localStorage.getItem('cart') || '[]');

    const isItemInCart = currentCart.find(product => product.id === item.id);
    const newQuantity = isItemInCart?.quantity
      ? isItemInCart?.quantity + 1
      : 1;

    if (isItemInCart) {
      const updatedCart = currentCart.map(product => {
        return product.id === isItemInCart.id
          ? { ...product, quantity: newQuantity }
          : { ...product };
      });

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

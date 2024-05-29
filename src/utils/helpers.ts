/* eslint-disable no-useless-catch */
import axios from 'axios';
import { FC, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Product } from '../types/product';

export const SERVER_HOST = 'http://localhost:3005';

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

export const fetchData = async () => {
  try {
    const response = await axios.get(`${SERVER_HOST}/products`);

    return response.data; // Extract the data from the Axios response
  } catch (error) {
    throw error;
  }
};

import { FC, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

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

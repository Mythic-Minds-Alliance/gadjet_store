import { useEffect, useState } from 'react';
import './HomePage.scss';

export const HomePage = () => {
  const [productList, setProductList] = useState('');

  useEffect(() => {
    fetch('https://gadjets-store.onrender.com/products')
      .then((res) => res.json())
      .then(setProductList);
  }, []);

  return (
    <div className="container">
      {productList}
      <h1 className="hello">hello world</h1>
    </div>
  );
};

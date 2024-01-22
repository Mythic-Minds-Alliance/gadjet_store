import { useEffect, useState } from 'react';

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
    </div>
  );
};

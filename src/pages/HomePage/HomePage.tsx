import { useEffect, useState } from 'react';
import { Footer } from '../../components/Footer/Footer';

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
      <Footer />
    </div>
  );
};

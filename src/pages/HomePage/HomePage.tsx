import { useEffect, useState } from 'react';
import axios from 'axios';
import { Product } from '../../types/product';
import { Loader } from '../../components/Loader';
import './HomePage.scss';

export const HomePage = () => {
  const [productList, setProductList] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);

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
    <div className="hello">
      {isLoading ? (
        <Loader />
      ) : (
        <ul>
          {productList.map((product) => {
            const { id, name } = product;

            return (
              <li key={id}>
                {`${name}`}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

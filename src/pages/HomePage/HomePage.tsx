import { useEffect, useState } from 'react';
import axios from 'axios';
import { Product } from '../../types/product';
import { Loader } from '../../components/Loader';

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
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <ul>
          {productList.map((product) => {
            const { id, image } = product;

            return (
              <li key={id}>
                <img src={`${image}`} alt="" />
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

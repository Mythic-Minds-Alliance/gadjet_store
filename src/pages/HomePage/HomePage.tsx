import { useEffect, useState } from 'react';
import axios from 'axios';
import { Footer } from '../../components/Footer/Footer';
import { Product } from '../../types/product';
import { Loader } from '../../components/Loader';
import './HomePage.scss';
import { Card } from '../../components/Card/Card';

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
    <div className="container">
      <div className="hello">
        {isLoading ? (
          <Loader />
        ) : (
          <ul>
            {productList.map((product) => (
              <Card
                key={product.id}
                product={product}
              />
            ))}
          </ul>
        )}
        <Footer />
      </div>
    </div>
  );
};

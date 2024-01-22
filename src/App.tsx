import axios from 'axios';
import { Outlet } from 'react-router-dom';
import { createContext, useEffect, useState } from 'react';
import { Header } from './components/Header/Header';
import { Product } from './types/product';

interface DataContextType {
  productList: Product[];
  isLoading: boolean;
}

export const DataContext = createContext<DataContextType>({
  productList: [],
  isLoading: true,
});

export const App = () => {
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
    <DataContext.Provider value={{ productList, isLoading }}>
      <div data-cy="app">
        <Header />

        <main className="section">
          <div className="container">
            <Outlet />
          </div>
        </main>
      </div>
    </DataContext.Provider>
  );
};

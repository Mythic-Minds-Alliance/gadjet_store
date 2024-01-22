import { useContext } from 'react';
import { DataContext } from '../../App';
import { Footer } from '../../components/Footer/Footer';
import { Loader } from '../../components/Loader';
import './HomePage.scss';
import { Card } from '../../components/Card/Card';

export const HomePage = () => {
  const { productList, isLoading } = useContext(DataContext);

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

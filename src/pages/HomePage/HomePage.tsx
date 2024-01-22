import { useContext } from 'react';
import { DataContext } from '../../App';
import { Footer } from '../../components/Footer/Footer';
import { Loader } from '../../components/Loader';
import './HomePage.scss';

export const HomePage = () => {
  const { productList, isLoading } = useContext(DataContext);

  return (
    <div className="container">
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
        <Footer />
      </div>
    </div>
  );
};

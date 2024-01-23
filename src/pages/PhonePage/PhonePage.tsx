import { useContext } from 'react';

import './PhonePage.scss';
import { Card } from '../../components/Card/Card';
import { DataContext } from '../../App';
import { Loader } from '../../components/Loader';

export const PhonePage = () => {
  const {
    productList,
    isLoading,
  } = useContext(DataContext);

  return (
    <div className="PhonePage">
      <h1 className="PhonePage--title">
        Mobile phones
      </h1>
      <p>95 models</p>

      <div>
        <div>
          <p>Sort by</p>
          <select name="" id="">
            <option>sad</option>
          </select>
        </div>

        <div>
          <p>Items on page</p>
          <select name="" id="">
            <option>asd</option>
          </select>
        </div>
      </div>

      {isLoading ? (
        <Loader />
      ) : (
        <div className="PhonePage--container">
          {productList.map(product => (
            <Card
              key={product.id}
              product={product}
            />
          ))}
        </div>
      )}
    </div>
  );
};

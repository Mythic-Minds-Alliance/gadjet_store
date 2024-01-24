import { useContext } from 'react';

import './PhonePage.scss';
import { Card } from '../../components/Card/Card';
import { DataContext } from '../../App';
import { Loader } from '../../components/Loader';
import { SortPanel } from '../../SortPanel/SortPanel';

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

      <SortPanel
        productList={productList}
      />

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

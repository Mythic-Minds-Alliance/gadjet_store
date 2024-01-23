import { useContext } from 'react';
import { Card } from '../../components/Card/Card';
import { DataContext } from '../../App';
import { Loader } from '../../components/Loader';

export const PhonePage = () => {
  const {
    productList,
    isLoading,
  } = useContext(DataContext);

  return (
    (isLoading ? (
      <Loader />
    ) : (
      <div className="container">

        <Card product={productList[0]} />
        <Card product={productList[1]} />
        <Card product={productList[2]} />
      </div>
    ))
  );
};

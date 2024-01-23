import { useContext } from 'react';
import { Card } from '../../components/Card/Card';
import { DataContext } from '../../App';

export const PhonePage = () => {
  const { productList, isLoading } = useContext(DataContext);

  return (
    (isLoading ? (
      <h1>loading</h1>
    ) : (
      <Card product={productList[0]} />
    ))
  );
};

import React from 'react';
import { Product } from '../../types/product';
import { AddToCart } from '../AddToCart/AddToCart';
import { CardPrices } from '../CardPrices/CardPrices';

type Props = {
  product: Product;
};

export const ProductControls: React.FC<Props> = ({ product }) => {
  return (
    <div className="ProductControls">
      <CardPrices price={100} fullPrice={150} />

      <AddToCart product={product} />
    </div>
  );
};

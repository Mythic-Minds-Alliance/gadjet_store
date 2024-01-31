/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { Product } from '../../types/product';
import { AddToCart } from '../AddToCart/AddToCart';
import { CardPrices } from '../CardPrices/CardPrices';
import { CardColors } from '../CardColors';
import { CardSeparator } from '../СardSeparator/CardSeparator';
import { CardCapacity } from '../CardCapacity';
import './ProductControls.scss';

type Props = {
  product: Product;
};

export const ProductControls: React.FC<Props> = ({ product }) => {
  return (
    <div className="ProductControls">
      <CardColors product={product} />
      <CardSeparator />

      <CardCapacity product={product} />

      <CardSeparator />

      <CardPrices price={product.priceDiscount} fullPrice={product.price} />

      <AddToCart product={product} />
    </div>
  );
};

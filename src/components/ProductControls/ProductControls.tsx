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
      <CardColors colors={product.colorsavailable} id={product.id} />
      <CardSeparator />

      <CardCapacity capacities={product.capacitiesavailable} />

      <CardSeparator />

      {/* <CardPrices price={product.priceDiscount} fullPrice={product.price} /> */}

      <AddToCart product={product} />
    </div>
  );
};

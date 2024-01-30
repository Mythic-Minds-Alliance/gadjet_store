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
  const colors = ['#364935', '#215E7C', '#FAE0D8', 'black'];
  const id = 552435;

  return (
    <div className="ProductControls">
      <CardColors colors={colors} id={id} />
      <CardSeparator />

      <CardCapacity capacities={product.capacitiesavailable} />

      <CardSeparator />

      <CardPrices price="100" fullPrice="100" />

      <AddToCart product={product} />
    </div>
  );
};

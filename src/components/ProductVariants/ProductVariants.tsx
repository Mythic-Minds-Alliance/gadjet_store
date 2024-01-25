import { Product } from '../../types/product';
import { ProductControls } from '../ProductControls/ProductControls';

type Props = {
  product: Product;
};

export const ProductVariants: React.FC<Props> = ({ product }) => (
  <ProductControls product={product} />
);

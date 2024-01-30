import productTitleStyles from './ProductTitle.module.scss';

type Props = {
  title: string;
};

export const ProductTitle: React.FC<Props> = ({ title }) => {
  return (
    <h1 className={productTitleStyles.title}>
      {title}
    </h1>
  );
};

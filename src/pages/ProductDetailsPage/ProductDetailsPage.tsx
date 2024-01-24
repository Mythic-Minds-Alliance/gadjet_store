import detailsStyles from './ProductDetailsPage.module.scss';
import { ProductTitle } from '../../components/ProductDetailsPage/ProductTitle';

export const ProductDetailsPage = () => {
  return (
    <>
      <div className={detailsStyles.container}>
        <ProductTitle />
        <div>waqwaqwq</div>
        <div className={detailsStyles.extendedDetails}>
          <div className={detailsStyles.extendedDetails__pictures}>
            pictures
          </div>
          <div className={detailsStyles.extendedDetails__mainInfo}>
            mainInfo
          </div>
          <div className={detailsStyles.extendedDetails__about}>
            about
          </div>
          <div className={detailsStyles.extendedDetails__techSpecs}>
            techSpecs
          </div>
        </div>

        <h1>You may also like</h1>

      </div>

    </>
  );
};

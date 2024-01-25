/* eslint-disable max-len */
import detailsStyles from './ProductDetailsPage.module.scss';
import { ProductTitle } from '../../components/ProductTitle';
import {
  AboutProduct,
  phonesFromServer,
} from '../../components/AboutProduct/AboutProduct';
import { TechSpecs } from '../../components/TechSpecs/TechSpecs';
import { ProductImagesSlider } from '../../components/ProductImagesSlider';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { ProductVariants } from '../../components/ProductVariants/ProductVariants';

export const ProductDetailsPage = () => {
  return (
    <>
      <div className={detailsStyles.container}>
        <ProductTitle />
        <div className={detailsStyles.extendedDetails}>
          <div className={detailsStyles.topContent}>
            <div className={detailsStyles.extendedDetails__pictures}>
              <ProductImagesSlider />
            </div>
            <div className={detailsStyles.extendedDetails__mainInfo}>
              mainInfo
            </div>
          </div>
          <div className={detailsStyles.extendedDetails__mainInfo}>
            <ProductVariants product={phonesFromServer[0]} />
          </div>
          <div className={detailsStyles.bottomContent}>
            <div className={detailsStyles.extendedDetails__about}>
              <AboutProduct />
            </div>
            <div className={detailsStyles.extendedDetails__techSpecs}>
              {phonesFromServer.map(phone => (
                <TechSpecs
                  phone={phone}
                  key={phone.id}
                />
              ))}
            </div>
          </div>

        </div>

        <h1>You may also like</h1>

      </div>

    </>
  );
};

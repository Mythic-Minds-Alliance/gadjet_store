import detailsStyles from './ProductDetailsPage.module.scss';
import { ProductTitle } from '../../components/ProductDetailsPage/ProductTitle';
import {
  AboutProduct,
  phonesFromServer,
} from '../../components/AboutProduct/AboutProduct';
import { TechSpecs } from '../../components/TechSpecs/TechSpecs';
// eslint-disable-next-line max-len
import { ProductImagesSlider } from '../../components/ProductDetailsPage/ProductImagesSlider';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

export const ProductDetailsPage = () => {
  return (
    <>
      <div className={detailsStyles.container}>
        <ProductTitle />
        <div className={detailsStyles.extendedDetails}>
          <div className={detailsStyles.extendedDetails__pictures}>
            <ProductImagesSlider />
          </div>
          <div className={detailsStyles.extendedDetails__mainInfo}>
            mainInfo
          </div>
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

        <h1>You may also like</h1>

      </div>

    </>
  );
};

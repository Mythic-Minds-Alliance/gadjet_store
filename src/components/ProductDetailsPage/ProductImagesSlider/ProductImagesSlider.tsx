import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Thumbs } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/thumbs';
import styles from './ProductImagesSlider.module.scss';

import img1 from '../../../images/apple-iphone-11/black/00.jpg';
import img2 from '../../../images/apple-iphone-11/black/01.jpg';
import img3 from '../../../images/apple-iphone-11/black/02.jpg';
import img4 from '../../../images/apple-iphone-11/black/03.jpg';
import img5 from '../../../images/apple-iphone-11/black/04.jpg';

export const productImages = [img1, img2, img3, img4, img5];

export const ProductImagesSlider = () => {
  const [activeThumb, setActiveThumb] = useState(null);

  return (
    <div className={styles.productImagesSlider}>
      <Swiper
        loop
        spaceBetween={10}
        modules={[Thumbs]}
        grabCursor
        thumbs={{ swiper: activeThumb }}
        className={styles.swiperContainer}
      >
        {productImages.map((item, index) => (
          <SwiperSlide key={1}>
            <img
              src={item}
              alt={`Product phone ${index}`}
              className={styles.imgSlider}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        onSwiper={setActiveThumb}
        loop
        spaceBetween={10}
        slidesPerView={4}
        modules={[Thumbs]}
        className={styles.thumbsContainer}
      >
        {productImages.map((item, index) => (
          <SwiperSlide key={1}>
            <div className={styles.thumbWrapper}>
              <img
                src={item}
                alt={`Thumb ${index}`}
                className={styles.imgSlider}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

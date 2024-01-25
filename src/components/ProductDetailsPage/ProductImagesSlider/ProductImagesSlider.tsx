import './ProductImagesSlider.scss';
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Thumbs } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/thumbs';

import img1 from '../../../images/apple-iphone-11/black/00.jpg';
import img2 from '../../../images/apple-iphone-11/black/01.jpg';
import img3 from '../../../images/apple-iphone-11/black/02.jpg';
import img4 from '../../../images/apple-iphone-11/black/03.jpg';
import img5 from '../../../images/apple-iphone-11/black/04.jpg';

export const productImages = [img1, img2, img3, img4, img5];

export const ProductImagesSlider = () => {
  const [activeThumb, setActiveThumb] = useState(null);

  return (
    <div className="product-images-slider">
      <Swiper
        loop
        spaceBetween={10}
        modules={[Thumbs]}
        grabCursor
        thumbs={{ swiper: activeThumb }}
        className="product-images-slider"
      >
        {
          productImages.map((item) => (
            <SwiperSlide>
              <img src={item} alt="product images" />
            </SwiperSlide>
          ))
        }
      </Swiper>
      <Swiper
        onSwiper={setActiveThumb}
        loop
        spaceBetween={10}
        slidesPerView={4}
        modules={[Thumbs]}
        className="product-images-slider-thumbs"
      >
        {
          productImages.map((item) => (
            <SwiperSlide>
              <div className="product-images-slider-thumbs-wrapper">
                <img src={item} alt="product images" />
              </div>
            </SwiperSlide>
          ))
        }
      </Swiper>
    </div>
  );
};

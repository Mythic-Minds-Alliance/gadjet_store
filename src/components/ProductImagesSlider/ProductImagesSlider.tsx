import './ProductImagesSlider.scss';
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Thumbs } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/thumbs';

import img1 from '../../images/apple-iphone-11/black/00.jpg';
import img2 from '../../images/apple-iphone-11/black/01.jpg';
import img3 from '../../images/apple-iphone-11/black/02.jpg';
import img4 from '../../images/apple-iphone-11/black/03.jpg';
import img5 from '../../images/apple-iphone-11/black/04.jpg';

export const productImages = [img1, img2, img3, img4, img5];

export const ProductImagesSlider = () => {
  const [activeThumb, setActiveThumb] = useState(0);

  return (
    <div className="product-images-slider">
      <Swiper
        loop
        spaceBetween={10}
        modules={[Thumbs]}
        thumbs={{ swiper: activeThumb }}
        className="product-images-slider"
      >
        {productImages.map((item, index) => (
          <SwiperSlide>
            <img src={item} alt={`product ${index}`} />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        onSwiper={setActiveThumb}
        loop
        spaceBetween={10}
        slidesPerView={5}
        modules={[Thumbs]}
        allowSlidePrev={false}
        allowSlideNext={false}
        allowTouchMove={false}
        className="product-images-slider-thumbs"
      >
        {productImages.map((item, index) => (
          <SwiperSlide>
            <div
              className="product-images-slider-thumbs-wrapper"
              role="button"
              tabIndex={0}
              onClick={() => setActiveThumb(index)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  setActiveThumb(index);
                }
              }}
            >
              <img src={item} alt={`product ${index}`} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Pagination } from 'swiper/modules';
import 'swiper/css/pagination';
import SliderImage1 from '../../images/sliderPhoneImg1.png';
import SliderImg2 from '../../images/sliderImg2.jpg';
import SliderImg3 from '../../images/sliderImg3.jpg';
import SliderStyle from './Slider.module.scss';

export const Slider = () => {
  return (
    <div className={SliderStyle.slider}>
      <Swiper
        modules={[Pagination]}
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 2000 }}
      >
        <SwiperSlide>
          <img
            src={SliderImage1}
            alt="Iphone 14 description"
            className={SliderStyle.sliderImg}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={SliderImg3}
            alt="ipad description"
            className={SliderStyle.sliderImg}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={SliderImg2}
            alt="Iphone 15 description"
            className={SliderStyle.sliderImg}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

import { FC } from 'react';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './ImageSlider.module.scss';

const cn = classNames.bind(styles);

type ImageSliderProps = {
  slides: string[];
  currentIndex: number;
};

export const ImageSlider: FC<ImageSliderProps> = ({ slides, currentIndex }) => {
  return (
    <>
      <div className={cn('container__slider')}>
        <div
          style={{ transform: `translateX(-${100 * currentIndex}%)` }}
          className={cn('slider')}
        >
          {slides.map((slide) => (
            <Link
              to="/phones/apple-iphone-14-pro-128gb-spaceblack"
              // key={i}
              className={cn('slider__slide')}
            >
              <img
                className={cn('slider__image')}
                src={slide}
                alt="slider Item"
              />
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

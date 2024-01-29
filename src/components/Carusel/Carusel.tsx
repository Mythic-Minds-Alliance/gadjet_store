import React, { useContext } from 'react';
import classNames from 'classnames';
import Carousel, { ButtonGroupProps } from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import { DataContext } from '../../App';
import { sortProductCarusel } from '../../utils/helpers';
import { Card } from '../Card/Card';
import arrow from '../../icons/SliderButtonRight.png';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1200 },
    items: 4,
    slidesToSlide: 2,
  },
  tablet: {
    breakpoint: { max: 1199, min: 860 },
    items: 3,
    slidesToSlide: 1,
    partialVisibilityGutter: 30,
  },
  tabletSmall: {
    breakpoint: { max: 859, min: 641 },
    items: 2,
    slidesToSlide: 1,
    partialVisibilityGutter: 60,
  },
  largeMobile: {
    breakpoint: { max: 640, min: 400 },
    items: 1.5,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 400, min: 320 },
    items: 1.1,
    slidesToSlide: 1,
  },
};

const ButtonGroup: React.FC = ({
  next,
  previous,
  carouselState,
}: ButtonGroupProps) => {
  const currentSlide = carouselState?.currentSlide ?? 0;
  const isInitialSlide = currentSlide === 0;

  const handlePrevClick = () => {
    if (previous) {
      previous();
    }
  };

  const handleNextClick = () => {
    if (next) {
      next();
    }
  };

  return (
    <div className={classNames('carousel-button-group')}>
      <button
        type="button"
        className={classNames(
          'button',
          { 'button--disabled': isInitialSlide },
        )}
        aria-label="Go left"
        onClick={handlePrevClick}
      >
        <img
          src={arrow}
          alt="arrow_left"
          className="button__img"
        />
      </button>

      <button
        type="button"
        className={classNames('Button', 'Button--right')}
        aria-label="Go right"
        onClick={handleNextClick}
      >
        <img
          src={arrow}
          alt="arrou_right"
          className="button__img button--right"
        />
      </button>
    </div>
  );
};

interface Props {
  title: string;
  selectedSortCarusel: string;
}

export const Carusel: React.FC<Props> = ({
  title,
  selectedSortCarusel,
}) => {
  const { cartStorage } = useContext(DataContext);
  // console.log(cartStorage.length);

  const visibleCart = sortProductCarusel(cartStorage, selectedSortCarusel);

  return (
    <section className={classNames('CarouselContainer')}>
      <div className="carusel__title">{title}</div>

      <Carousel
        itemClass="Cards"
        arrows={false}
        renderButtonGroupOutside
        customButtonGroup={<ButtonGroup />}
        partialVisible
        responsive={responsive}
        infinite
      >
        {visibleCart.map((product) => (
          <Card product={product} key={product.id} />
        ))}
      </Carousel>
    </section>
  );
};

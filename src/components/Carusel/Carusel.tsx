import React, { useContext } from 'react';
import classNames from 'classnames';
import Carousel, { ButtonGroupProps } from 'react-multi-carousel';
import { DataContext } from '../../App';
import 'react-multi-carousel/lib/styles.css';
import styles from './Carusel.module.scss';
import arrou from '../../icons/Slider button - Default (right).svg';
import { Card } from '../Card/Card';
import { sortProductCarusel } from '../../utils/helpers';

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
    <div className="carousel-button-group">
      <button
        className={classNames(
          'button',
          'button--left',
          { 'button--disabled': isInitialSlide },
        )}
        type="button"
        onClick={handlePrevClick}
        aria-label="Go left"
      >
        <img src={arrou} alt="arrou_right" />
      </button>

      <button
        type="button"
        className="Button Button--right"
        aria-label="Go right"
        onClick={handleNextClick}
      >
        <img src={arrou} alt="arrou_left" />
      </button>
    </div>
  );
};

interface Props {
  title: string;
  selectedSortCarusel:string,
}

export const Carusel: React.FC<Props> = ({
  title,
  selectedSortCarusel,
}) => {
  const { productList } = useContext(DataContext);

  const visibleList = sortProductCarusel(productList, selectedSortCarusel);

  return (
    <section className={`${styles.section} ${styles.hotPrices}`}>
      <div className="">
        <h3 className={styles.sectionTitle}>{title}</h3>
      </div>

      <Carousel
        itemClass={classNames('Cards')}
        responsive={responsive}
        customButtonGroup={<ButtonGroup />}
        arrows={false}
      >
        {visibleList.map((product) => (
          <Card
            product={product}
            key={product.id}
          />
        ))}
      </Carousel>
    </section>
  );
};

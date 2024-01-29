import React, { useContext, useState } from 'react';
import classNames from 'classnames';
import 'react-multi-carousel/lib/styles.css';
import './Carusel.scss';
import { DataContext } from '../../App';
import { sortProductCarusel } from '../../utils/helpers';
import { Card } from '../Card/Card';
import arrou from '../../icons/Slider button - Default (right).svg';

const CART_W = 229;
const GAP = 16;
const CARUSEL_STEP = CART_W + GAP;

interface Props {
  title: string;
  selectedSortCarusel: string;
}

export const Carusel: React.FC<Props> = ({
  title,
  selectedSortCarusel,
}) => {
  const { productList } = useContext(DataContext);
  const visibleCart = sortProductCarusel(productList, selectedSortCarusel);
  const [carouselPosition, setCarouselPosition] = useState(0);
  const [counter, setCounter] = useState(0);
  const [windowWidth] = useState(window.innerWidth);

  const calculateVisiblePages = () => {
    return (visibleCart.length + 1 - Math.floor(windowWidth / CARUSEL_STEP));
  };

  const handleSlide = (direction: 'left' | 'right') => {
    const newPosition = direction === 'left'
      ? carouselPosition + CARUSEL_STEP : carouselPosition - CARUSEL_STEP;

    setCarouselPosition(newPosition);
  };

  return (
    <section className="carusel">
      <div className="carusel__header">
        <div className="carusel__title">{title}</div>
        <div className="carousel-buttons">
          <button
            className={classNames(
              'button',
              'button--left',
              { 'button--disabled': counter === 0 },
            )}
            type="button"
            onClick={() => {
              if (counter > 0) {
                handleSlide('left');
                setCounter((prevCounter) => prevCounter - 1);
              }
            }}
          >
            <img src={arrou} alt="arrow_left" />
          </button>

          <button
            type="button"
            className={classNames(
              'Button',
              'Button--right',
              { 'button--disabled': counter === +calculateVisiblePages - 1 },
            )}
            aria-label="Go right"
            onClick={() => {
              if (counter < visibleCart.length - 3) {
                handleSlide('right');
                setCounter((prevCounter) => prevCounter + 1);
              }
            }}
          >
            <img src={arrou} alt="arrou_right" />
          </button>
        </div>
      </div>

      <div className="carusel__slider">
        <div
          className="carusel__sliderFull"
          style={{
            transform: `translateX(${carouselPosition}px)`,
            transition: 'transform 0.5s ease-in-out',
          }}
        >
          {visibleCart.map((product) => (
            <div className="caruselSlide" key={product.name}>
              <Card product={product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

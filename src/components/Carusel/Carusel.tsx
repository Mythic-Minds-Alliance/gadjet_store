import React, { useContext, useState } from 'react';
import classNames from 'classnames';

import './Carusel.scss';
import { DataContext } from '../../App';
import { sortProductCarusel } from '../../utils/helpers';
import { Card } from '../Card/Card';
import arrou from '../../icons/Slider button - Default (right).svg';

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

  const handleSlide = (direction: 'left' | 'right') => {
    const newPosition = direction === 'left'
      ? carouselPosition + 245 : carouselPosition - 245;

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
              { 'button--disabled': counter === visibleCart.length - 1 },
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
            <div className="caruselSlide" key={product.id}>
              <Card product={product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

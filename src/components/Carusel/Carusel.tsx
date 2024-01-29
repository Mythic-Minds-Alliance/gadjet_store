import React, { useContext, useState } from 'react';
import classNames from 'classnames';
import './Carusel.scss';
import { DataContext } from '../../App';
import { sortProductCarusel } from '../../utils/helpers';
import { Card } from '../Card/Card';
import arrow from '../../icons/SliderButtonRight.png';

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
  const [wCounter, setWCounter] = useState(0);

  const SLIDER_W = visibleCart.length * CARUSEL_STEP;

  const handleSlide = (step: number) => {
    setWCounter(wCounter + step);
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
              { 'button--disabled': wCounter === 0 },
            )}
            type="button"
            onClick={() => {
              handleSlide(-CART_W);
            }}
          >
            <img
              src={arrow}
              alt="arrow_left"
              className="button__img"
            />
          </button>

          <button
            type="button"
            className={classNames(
              'Button',
              'Button--right',
              { 'button--disabled': wCounter >= SLIDER_W - CARUSEL_STEP },
            )}
            aria-label="Go right"
            onClick={() => {
              handleSlide(CART_W);
            }}
          >
            <img
              src={arrow}
              alt="arrou_right"
              className="button__img button--right"
            />
          </button>
        </div>
      </div>

      <div className="carusel__slider">
        <div
          className="carusel__sliderFull"
          style={{
            transform: `translateX(${-wCounter}px)`,
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

import React, { useContext, useState } from 'react';
import classNames from 'classnames';
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

  // const [setWindowWidth] = useState(window.innerWidth);
  const [wCounter, setWCounter] = useState(0);

  // useEffect(() => {
  //   const handleResize = () => {
  //     setWindowWidth(window.innerWidth);
  //   };

  //   window.addEventListener('resize', handleResize);

  //   return () => {
  //     window.removeEventListener('resize', handleResize);
  //   };
  // }, []);

  const SLIDER_W = visibleCart.length * CARUSEL_STEP;

  const handleSlide = (direction: 'left' | 'right') => {
    if (direction === 'left' && wCounter > 0) {
      setWCounter((prevCounter) => prevCounter + CARUSEL_STEP);
    } else if (direction === 'right' && wCounter < SLIDER_W) {
      setWCounter((prevCounter) => prevCounter - CARUSEL_STEP);
    }
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
              handleSlide('left');
            }}
          >
            <img src={arrou} alt="arrow_left" />
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
              handleSlide('right');
              // console.log(SLIDER_W);
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
            transform: `translateX(${wCounter}px)`,
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

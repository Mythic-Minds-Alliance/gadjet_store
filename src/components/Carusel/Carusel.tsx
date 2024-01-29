import React, { useContext } from 'react';
import classNames from 'classnames';
import './Carusel.scss';
import { DataContext } from '../../App';
import { sortProductCarusel } from '../../utils/helpers';
import { Card } from '../Card/Card';
import arrow from '../../icons/SliderButtonRight.png';

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

  return (
    <section className="carusel">
      <div className="carusel__header">
        <div className="carusel__title">{title}</div>
        <div className="carousel-buttons">
          <button
            className={classNames(
              'button',
              'button--left',
            )}
            type="button"
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
            )}
            aria-label="Go right"
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
        {visibleCart.map((product) => (
          <div className="caruselSlide" key={product.id}>
            <Card product={product} />
          </div>
        ))}
      </div>
    </section>
  );
};

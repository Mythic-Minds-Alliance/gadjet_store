import React from 'react';
import style from './CardCapacity.module.scss';

type Props = {
  capacities: string[],
};
export const CardCapacity: React.FC<Props> = ({ capacities }) => {
  return (
    <div className={style.CardCapacity}>
      <p className={style.CardCapacity__title}>
        Select capacity
      </p>

      <div className={style.CardCapacity__list}>
        {capacities.map(capacity => (
          <div className={style.CardCapacity__item}>
            {capacity}
            {' '}
            GB
          </div>
        ))}
      </div>
    </div>
  );
};

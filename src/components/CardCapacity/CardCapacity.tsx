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
        {capacities
          .map(capacity => {
            const value = parseFloat(capacity);

            if (capacity.includes('TB')) {
              return value * 1024;
            }

            return value;
          })
          .sort((a, b) => a - b)
          .map(capacity => {
            const value = capacity < 1024 ? capacity : capacity / 1024;
            const unit = capacity < 1024 ? 'GB' : 'TB';

            return (
              <div key={capacity} className={style.CardCapacity__item}>
                {`${value}${unit}`}
              </div>
            );
          })}
      </div>
    </div>
  );
};

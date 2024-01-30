import React from 'react';
import style from './CardColors.module.scss';

type Props = {
  colors: string[],
  id: number,
};

export const CardColors: React.FC<Props> = ({ colors, id }) => {
  return (
    <div className={style.CardColors}>
      <div className={style.CardColors__top}>
        <p className={style.CardColors__top__title}>Available colors</p>
        <p className={style.CardColors__top__id}>
          ID:
          {Math.abs(id * 143865)}
        </p>
      </div>

      <div className={style.colors__list}>
        {colors.map(colorItem => (
          <div className={style.color__item__wrapper}>
            <div
              className={style.color__item}
              style={{ backgroundColor: colorItem }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

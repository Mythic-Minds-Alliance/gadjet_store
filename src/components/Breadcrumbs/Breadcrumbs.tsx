import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import HomeIcon from '../../icons/Home.svg';
import style from './Breadcrumbs.module.scss';
import arrow from '../../icons/Arrow.svg';

export const Breadcrumbs = () => {
  const location = useLocation();
  const [productColor, setProductColor] = useState('');
  const [productCapacity, setProductCapacity] = useState('');
  let currentLink = '';

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);

    setProductColor(searchParams.get('color') || '');
    setProductCapacity(searchParams.get('capacity') || '');
  }, [location.search]);

  const crumbs = location.pathname.split('/')
    .filter(crumb => crumb !== '')
    .map((crumb, index, array) => {
      currentLink += `/${crumb}`;

      const isLastCrumb = index === array.length - 1;
      const crumbStyle = isLastCrumb ? style.lastCrumb : style.crumb;

      const displayCrumb
            = crumb.split('%20').length >= 2
              ? crumb.split('%20').slice(0, -2).join(' ')
              : crumb.replaceAll('%20', ' ');

      return (
        <React.Fragment key={crumb}>
          <div className={crumbStyle}>
            {isLastCrumb ? (
              <span className={style.crumb}>
                {displayCrumb}
                {productCapacity && productColor && (
                  <>
                    {' '}
                    {productCapacity}
                    {' '}
                    {productColor}
                  </>
                )}
              </span>
            ) : (
              <Link
                to={currentLink}
                className={style.crumb}
              >
                {displayCrumb}
              </Link>
            )}
          </div>
          {!isLastCrumb && (
            <img
              src={arrow}
              alt="arrow right"
              className={style.arrowRight}
            />
          )}
        </React.Fragment>
      );
    });

  return (
    <div className={style.breadcrumbs}>
      <Link to="/">
        <img
          src={HomeIcon}
          alt="icon home"
          className={style.homeImg}
        />
      </Link>
      <img
        src={arrow}
        alt="arrow right"
        className={style.arrowRight}
      />
      <div className={style.crumbsContainer}>
        {crumbs}
      </div>
    </div>
  );
};

import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import HomeIcon from '../../icons/Home.svg';
import style from './Breadcrumbs.module.scss';
import arrow from '../../images/Arrow.svg';

export const Breadcrumbs = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  if (isHomePage) {
    return null;
  }

  let currentLink = '';

  const crumbs = location.pathname.split('/')
    .filter(crumb => crumb !== '')
    .map((crumb, index, array) => {
      currentLink += `/${crumb}`;

      const isLastCrumb = index === array.length - 1;
      const crumbStyle = isLastCrumb ? style.lastCrumb : style.crumb;

      return (
        <React.Fragment key={crumb}>
          <div className={crumbStyle}>
            <Link
              to={currentLink}
              className={style.crumb}
            >
              {crumb.replaceAll('%20', ' ')}
            </Link>
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

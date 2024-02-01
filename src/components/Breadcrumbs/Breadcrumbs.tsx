import React, {
  useEffect, useState, ReactNode, useRef,
} from 'react';
import { Link, useLocation } from 'react-router-dom';
import HomeIcon from '../../icons/Home.svg';
import style from './Breadcrumbs.module.scss';
import arrow from '../../icons/Arrow.svg';

export const Breadcrumbs = () => {
  const location = useLocation();
  const [crumbs, setCrumbs] = useState<ReactNode>([]);
  const isHomePage = location.pathname === '/';
  const currentLinkRef = useRef<string>('');

  useEffect(() => {
    if (!isHomePage) {
      const pathArray = location.pathname
        .replaceAll('%20', ' ')
        .split('/')
        .filter(crumb => crumb !== '');

      const breadcrumbs = pathArray.map((crumb, index, array) => {
        currentLinkRef.current += `/${crumb}`;

        const isLastCrumb = index === array.length - 1;
        const crumbStyle = isLastCrumb ? style.lastCrumb : style.crumb;

        const displayCrumb
                    = crumb.replaceAll('%20', ' ')
                      .split(' ').length >= 3
                      ? crumb.replaceAll('%20', ' ')
                        .split(' ').slice(0, -2).join(' ')
                      : crumb.replaceAll('%20', ' ');

        return (
          <React.Fragment key={crumb}>
            <div className={crumbStyle}>
              <Link to={currentLinkRef.current} className={style.crumb}>
                {displayCrumb}
              </Link>
            </div>
            {!isLastCrumb && (
              <img src={arrow} alt="arrow right" className={style.arrowRight} />
            )}
          </React.Fragment>
        );
      });

      setCrumbs(breadcrumbs);
    }
  }, [location, isHomePage]);

  return (
    <div className={style.breadcrumbs}>
      <Link to="/">
        <img src={HomeIcon} alt="icon home" className={style.homeImg} />
      </Link>
      {!isHomePage && (
        <>
          <img src={arrow} alt="arrow right" className={style.arrowRight} />
          <div className={style.crumbsContainer}>{crumbs}</div>
        </>
      )}
    </div>
  );
};
